import React from 'react'
import "./header.scss"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={"/administration"}><div className="logo">ADMINISTRATION</div></Link></li>
                    <li><Link className={"menu"} to={"/administration/members"}>MEMBRES</Link></li>
                    <li><Link className={"menu"} to={"/administration/plan"}>PLAN DE TABLE</Link></li>
                    <li className={"rightNavbar"}><Link to={"/"}><button>SITE TOUT PUBLIC</button></Link></li>
                </ul>
            </nav>

        </header>
    );

}

export default Header;