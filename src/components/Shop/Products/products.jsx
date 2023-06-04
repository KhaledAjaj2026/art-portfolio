import React from "react";
import TigerProduct from "./tiger-product/tiger-product";
import RomanProduct from "./roman-product/roman-product";
import KaleProduct from "./kale-product/kale-product";
import './product.scss';

function Products() {
    return (
        <div>
            <TigerProduct />
            <KaleProduct />
            <RomanProduct />
        </div>
    );
}

export default Products;