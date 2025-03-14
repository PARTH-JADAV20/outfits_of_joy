export const fetchCollection = async (category, page, limit) => {
    const url = `https://outfits-of-joy.onrender.com/outfits-of-joy/collection/${category}?page=${page}&limit=${limit}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error(`Error fetching collection for ${category}:`, error);
      throw error;
    }
  };

  export const fetchTotalCount = async (category) => {
    const url = `https://outfits-of-joy.onrender.com/outfits-of-joy/collection/${category}?page=1&limit=1000000`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch total count");
        const data = await response.json();
        return data.length; 
    } catch (error) {
        console.error(`Error fetching total count for ${category}:`, error);
        throw error;
    }
};


export const fetchProduct = async (category, _id) => {
  try {
    const response = await fetch(`https://outfits-of-joy.onrender.com/outfits-of-joy/collection/${category}/${_id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};


export const fetchmensCollections = async (page, limit) => {
  try {
    const response = await fetch(`https://outfits-of-joy.onrender.com/outfits-of-joy/mens-collections?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching men's collections:", error);
    throw error;
  }
};

export const fetchwomensCollections = async (page, limit) => {
  try {
    const response = await fetch(`https://outfits-of-joy.onrender.com/outfits-of-joy/womens-collections?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching men's collections:", error);
    throw error;
  }
};


export const placeOrder = async (orderData) => {
  try {
      const response = await fetch("https://outfits-of-joy.onrender.com/outfits-of-joy/orders", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
      });

      if (!response.ok) {
          throw new Error("Failed to place order");
      }

      return await response.json();
  } catch (error) {
      console.error("Error placing order:", error);
      return { error: error.message };
  }
};


export const fetchFavourites = async (userId) => {
  try {
    const response = await fetch(`https://outfits-of-joy.onrender.com/outfits-of-joy/favourites/${userId}`);

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching favorite items:", error);
    return null;
  }
};


export const addToFavourites = async (userId, productId) => {
  try {
    const response = await fetch("https://outfits-of-joy.onrender.com/outfits-of-joy/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId }),
    });

    if (!response.ok) {
      throw new Error("Failed to add to favourites");
    }

    return await response.json(); 
  } catch (error) {
    console.error("Error adding to favourites:", error);
    return null;
  }
};


export const removeFromFavourites = async (userId, productId) => {
  try {
    const response = await fetch(`https://outfits-of-joy.onrender.com/outfits-of-joy/favourites/${userId}/${productId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to remove from favourites");
    }

    return await response.json(); // Return updated favourites list
  } catch (error) {
    console.error("Error removing from favourites:", error);
    return null;
  }
};


export const addToCart = async (userId, productId, size, quantity, fromDate, toDate) => {
  try {
      const response = await fetch('https://outfits-of-joy.onrender.com/outfits-of-joy/carts', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, productId, size, quantity, fromDate, toDate }),
      });

      if (!response.ok) {
          throw new Error('Failed to add to cart');
      }

      return await response.json();
  } catch (error) {
      console.error('Error adding to cart:', error);
      return { error: error.message };
  }
};

