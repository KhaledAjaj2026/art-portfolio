import React from "react";
import roman from '../../../../assets/artworks/theRoman.png';

function RomanProduct() {
    return (
        <div id="product">
            <img src={roman} id="product-roman" alt="" className="product-image" />
            <div id="info">
                <h2 className="product-name">Item Name</h2>
                <p className="product-description">this is a description of the product</p>
                <p className="product-price">$21.56</p>
            </div>
        </div>
    )
}

export default RomanProduct;