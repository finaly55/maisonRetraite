import React, { Component } from 'react'

class Header extends Component {
    render(){
        return (
            <header>
                <div className="logo">
                    LOGO
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Accueil</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">Administration</a>
                        </li>
                    </ul>
                    
                </nav>
            </header>
        )
    }
}

export default Header;