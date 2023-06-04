import React from "react";
import Products from "./Products/products";
import './shop.scss';

function Shop() {
    return (
        <div id="shop">
            <h1 id="hero">Shop KaleHead's Artwork</h1>
            <Products />
        </div>
    )
}

export default Shop;