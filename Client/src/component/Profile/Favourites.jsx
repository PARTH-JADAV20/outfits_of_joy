import React, { useEffect, useState } from "react";
import Profilenav from "./Profilenav";
import { Link } from "react-router-dom";
import { fetchProduct } from "../outfitcollection/api.js";
import useFavorites from "../Hooks/useFavorites.jsx";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

function Favourites() {
    const [productDetails, setProductDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { favourites, toggleFavourite } = useFavorites();

    useEffect(() => {
        const favouriteArray = Array.from(favourites).filter((productId) => typeof productId === "string" && productId.trim().length > 0);

        if (favouriteArray.length > 0) {
            setIsLoading(true);
            fetchFavouriteProducts(favouriteArray);
        } else {
            setProductDetails([]);
            setIsLoading(false);
        }
    }, [Array.from(favourites).join(",")]); // Dependency as a string to force re-fetch

    const getCategory = (productId) => {
        if (typeof productId !== "string" || productId.length === 0) {
            return "Unknown";
        }

        const categoryMap = {
            i: "indo-western",
            s: "sherwani",
            t: "tuxedo",
            l: "lehenga",
            g: "gown",
            a: "anarkali",
        };
        const categoryKey = productId.charAt(0).toLowerCase();
        return categoryMap[categoryKey] || "Unknown"; // Ensure a fallback category
    };

    const fetchFavouriteProducts = async (favouriteArray) => {
        try {
            const productRequests = favouriteArray.map(async (productId) => {
                const category = getCategory(productId);
                if (category === "Unknown") return null; // Ignore invalid categories
                return fetchProduct(category, productId);
            });

            const productResults = await Promise.all(productRequests);
            setProductDetails(productResults.filter(Boolean)); // Remove null/undefined values
        } catch (error) {
            console.error("Error fetching favourite products:", error);
            setProductDetails([]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div id="profileview">
                <Profilenav />
                <h2 id="Personalinfo" style={{ marginBottom: "0" }}>Favourites :</h2>
                <div id="outfitsection" style={{ background: "none", border: "none", rowGap: "12vh", columnGap: "5vw", marginTop: "0" }}>
                    {isLoading ? (
                        <div id="spinner" style={{ textAlign: "center", padding: "1rem" }}>
                            <span className="loader" style={{ backgroundColor: "rgb(245, 193, 145)" }}></span>
                        </div>
                    ) : productDetails.length > 0 ? (
                        productDetails.map((item) => (
                            <Link key={item._id} to={`/${item.gender === 'women' ? 'femalecollection' : 'malecollection'}/${item.category}/${item._id}`}>
                                <div id="outfits" className="outfit-card">
                                    <div className="hover-message">View Outfit</div>
                                    <div id="favouriteicon" onClick={(e) => {
                                        e.preventDefault();
                                        toggleFavourite(item._id);
                                    }}>
                                        {favourites.has(item._id) ? <span aria-label="Remove Favorite" className='hint--left hint--bounce'><FaHeart color="rgb(173, 46, 36)" /></span> : <span aria-label="Add to Favorite" className='hint--left hint--bounce'><FaRegHeart /></span>}
                                    </div>
                                    <div id="outfitimage">
                                        <img src={item.images?.[0] || ""} alt={item.title || "Product"} />
                                    </div>
                                    <div id="outfitinfo">
                                        <p id="outfittitle">{item.title || "Unknown Product"}</p>
                                        <div>
                                            <p id="outfitrent">
                                                <sup>Rent</sup>
                                                <span>₹{item.rent || 0}</span>
                                            </p>
                                            <p id="outfitmrp">
                                                <sup>Mrp</sup>
                                                <span>₹{item.mrp || 0}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div style={{ textAlign: "center", padding: "1rem", color: "#81171b", fontSize: "1.1rem" }}>
                            No favourites yet.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Favourites;
