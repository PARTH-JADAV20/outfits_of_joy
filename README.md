# outfits_of_joy

## Figma Design Link  
[OutfitsOfJoy Figma Design](https://www.figma.com/design/Ccb55yT6IzEFeFS8JaOTdJ/RENT-CLOTHES?node-id=0-1&t=saeITUgTOqgkmeV7-1)

## Postman Documentation Link  
[API Documentation Link](https://documenter.getpostman.com/view/53356188/2sBXijJrNc)


Outfits of Joy is a **clothing rental website** that allows users to rent fashionable outfits for various occasions. The platform provides a seamless experience for users to browse, favorite, add to cart, and rent clothes. It also includes dedicated sections for collections, orders, and detailed views of each clothing item.


## User Flow Diagram

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontFamily": "Poppins, Segoe UI, sans-serif",
    "primaryColor": "#5B8DEF22",
    "primaryTextColor": "#16324F",
    "primaryBorderColor": "#5B8DEF",
    "lineColor": "#3F5C7A",
    "tertiaryColor": "#7FD1B922",
    "clusterBkg": "#FFFFFF66",
    "clusterBorder": "#9CB3C9"
  }
}}%%
flowchart LR
    A([Landing Page]) --> B{User Auth}
    B -->|New User| C[Sign Up]
    B -->|Returning User| D[Login]
    C --> E[Home]
    D --> E[Home]

    E --> F[Browse Collections]
    F --> G[Outfit Details]
    G --> H[Select Rental Dates]
    H --> I{Action}
    I -->|Add to Favorites| J[Favorites]
    I -->|Add to Cart| K[Cart]
    K --> L[Checkout]
    L --> M[Place Order]
    M --> N[Orders/Tracking]
    E --> O[Profile]
    O --> P[Address + Account Settings]

    classDef surface fill:#FFFFFF99,stroke:#5B8DEF,stroke-width:1px,color:#16324F;
    classDef action fill:#7FD1B947,stroke:#2F8F78,stroke-width:1px,color:#123B32;
    class A,E,F,G,H,J,K,L,M,N,O,P surface;
    class B,I,C,D action;
```


## Backend Architecture & Data Flow

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontFamily": "Poppins, Segoe UI, sans-serif",
    "primaryColor": "#F7A07222",
    "primaryTextColor": "#2D1E2F",
    "primaryBorderColor": "#C96C3A",
    "lineColor": "#6A4A3C",
    "tertiaryColor": "#6CC3D522",
    "clusterBkg": "#FFFFFF66",
    "clusterBorder": "#D6A78A"
  }
}}%%
flowchart TB
    subgraph ClientApps[Client Apps]
        C1[React Client]
        C2[React Admin]
    end

    subgraph API[Node.js + Express API]
        R1[Auth Routes]
        R2[Outfit Routes]
        R3[Cart/Favorites Routes]
        R4[Order Routes]
        R5[Admin Management Routes]
        M1[JWT Middleware]
        M2[Multer Upload Middleware]
    end

    subgraph DataAndServices[Data + External Services]
        DB[(MongoDB)]
        CDN[(Cloudinary)]
        A0[(Auth0)]
    end

    C1 -->|HTTPS| R1
    C1 -->|HTTPS| R2
    C1 -->|HTTPS| R3
    C1 -->|HTTPS| R4
    C2 -->|HTTPS| R5

    R1 --> M1
    R2 --> M1
    R3 --> M1
    R4 --> M1
    R5 --> M1

    R2 --> M2
    M2 --> CDN

    R1 <--> A0
    R1 --> DB
    R2 --> DB
    R3 --> DB
    R4 --> DB
    R5 --> DB

    classDef app fill:#FFFFFF9E,stroke:#C96C3A,color:#2D1E2F;
    classDef service fill:#6CC3D540,stroke:#2E7E8C,color:#17363C;
    class C1,C2,R1,R2,R3,R4,R5,M1,M2 app;
    class DB,CDN,A0 service;
```

## High-Level UI Wireframe

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontFamily": "Poppins, Segoe UI, sans-serif",
    "primaryColor": "#8DB59622",
    "primaryTextColor": "#1E2A24",
    "primaryBorderColor": "#567D5F",
    "lineColor": "#4B5A52",
    "tertiaryColor": "#F5CDA722",
    "clusterBkg": "#FFFFFF66",
    "clusterBorder": "#A9BDAF"
  }
}}%%
flowchart TB
    subgraph Top[Top Navigation]
        N1[Logo]
        N2[Collections]
        N3[Favorites]
        N4[Cart]
        N5[Profile]
    end

    subgraph Hero[Hero Section]
        H1[Campaign Banner]
        H2[Primary CTA: Rent Now]
        H3[Secondary CTA: Explore Looks]
    end

    subgraph Body[Main Content]
        B1[Category Filters]
        B2[Outfit Card Grid]
        B3[Quick View Drawer]
    end

    subgraph Bottom[Checkout + Footer]
        C1[Cart Summary]
        C2[Date Selector]
        C3[Checkout Button]
        F1[Footer Links + Support]
    end

    Top --> Hero --> Body --> Bottom
    B1 --> B2
    B2 --> B3
    B3 --> C1
    C1 --> C2 --> C3

    classDef panel fill:#FFFFFF99,stroke:#567D5F,color:#1E2A24;
    classDef cta fill:#F5CDA754,stroke:#9C6C3A,color:#442C17;
    class N1,N2,N3,N4,N5,H1,B1,B2,B3,C1,C2,F1 panel;
    class H2,H3,C3 cta;
```

---

## Features

- **User Authentication**:
  - Users can register, log in, and manage their profiles.
  
- **Clothing Collections**:
  - Dedicated collections for different types of clothing (e.g., Sherwani, Tuxedo, lehenga etc).

- **Cloth Details**:
  - Each clothing item displays details such as:
    - Rent price
    - MRP (Maximum Retail Price)
    - Deposit amount
    - Select Date to rent

- **User Cart**:
  - Users can add clothes to their cart for renting.
  - Manage cart items (update quantity, remove items).

- **Favorites**:
  - Users can save their favorite clothes for future reference.

- **Order Section**:
  - Users can view their rental history and track current orders.

- **Admin Panel**:
  - Admins can add, update, or remove clothing items.
  - Manage user orders and collections.

---

## Technologies Used

- **Frontend**:
  - **React**: Frontend library for UI development.
  - **Auth0**: For secure user authentication.
  - **React Toastify**: For showing user-friendly notifications.
  - **React Router DOM**: For navigation and routing.
  - **Axios**: For handling API requests.
  - **Tailwind CSS**: For styling.

- **Backend**:
  - **Node.js**: JavaScript runtime for building the server.
  - **Express.js**: Web framework for designing server routes.
  - **MongoDB**: NoSQL database for storing user, clothing, and order data.
  - **JWT (JSON Web Tokens)**: Used for authentication and session management.
  - **Cloudinary**: For storing and managing images of clothing items.
  - **Multer**: Middleware for handling file uploads.


- **Other Tools**:
  - **Postman**: For testing API endpoints.
  - **Git**: For version control.


