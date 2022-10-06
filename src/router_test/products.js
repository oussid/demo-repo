import React from "react";
import { Link } from "react-router-dom";


export default function Products () {

    return (
        <>
            <Link to={'/products/1'}>product1</Link>
            <Link to={'/products/2'}>product2</Link>
            <Link to={'/products/3'}>product3</Link>
            <Link to={'/products/4'}>product4</Link>
        </>
    )
}