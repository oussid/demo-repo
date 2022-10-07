import { useLocation, useParams } from "react-router-dom";
import React from "react";

export default function Product (){
    var prodId = useParams().id
    let location = useLocation()
    
    return (
        <div className="product">
            <h2>Product {prodId}</h2>
            <p>{location.state.name}</p>
        </div>
    )
}