import React from "react";
import kale from '../../../../assets/artworks/keiruPP.png';

function KaleProduct() {
    return (
        <div id="product">
            <img src={kale} id="product-kale" alt="" className="product-image" />
            <div id="info">
                <h2 className="product-name">Item Name</h2>
                <p className="product-description">this is a description of the product</p>
                <p className="product-price">$21.56</p>
            </div>
        </div>
    )
}

export default KaleProduct;