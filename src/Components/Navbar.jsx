import React from "react";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styledComponents.div`
    .nav{
        width: 100vw;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: aliceblue;
        box-shadow: 5px 5px 5px #cecece;
    }
`

function Navbar() {
    return(
        <NavbarWrapper>
            <div className="nav">
                <Link to={'/'}><h2>Home</h2></Link>
                <Link to={'/todo'}><h2>Todo</h2></Link>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar;