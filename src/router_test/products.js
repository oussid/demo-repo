import React from "react";
import { Link } from "react-router-dom";


export default function Products () {

    return (
        <>
            <Link to={'/products/1'} state={{name:"mike"}} >product1</Link>
            <Link to={'/products/2'} state={{name:"mike"}} >product2</Link>
            <Link to={'/products/3'} state={{name:"mike"}} >product3</Link>
            <Link to={'/products/4'} state={{name:"mike"}} >product4</Link>
        </>
    )
}