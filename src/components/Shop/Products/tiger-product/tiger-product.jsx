import React from "react";
import tiger from '../../../../assets/artworks/tiger.png';

function TigerProduct() {
    return (
        <div id="product">
            <img src={tiger} id="product-tiger" alt="" className="product-image" />
            <div id="info">
                <h2 className="product-name">Item Name</h2>
                <p className="product-description">this is a description of the product</p>
                <p className="product-price">$21.56</p>
            </div>
        </div>
    )
}

export default TigerProduct;