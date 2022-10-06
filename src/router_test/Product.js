import { useParams } from "react-router-dom";
import React from "react";

export default function Product (){
    var prodId = useParams().id
    return (
        <div className="product">
            <h2>Product {prodId}</h2>
        </div>
    )
}