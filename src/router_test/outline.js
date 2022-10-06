import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Outline () {

    return (
        <>
            <nav>
                <Link to={'/'}>HOME</Link>
                <Link to={'/products'}>PRODUCTS</Link>
                <Link to={'/about'}>ABOUT</Link>
            </nav>

            <div className="container">
            <Outlet />

            </div>


            <footer>
               <p>this is the footer</p> 
            </footer>
        </>

    )
}