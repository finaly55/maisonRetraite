import React, { Component } from 'react'
import './homePage.css';

class HomePage extends Component {
    constructor(){
        super();
        this.state = {
            userInput: "",
            items: []
        }
    }

    render(){
        return (
            <div className="home">Ma page web</div>
        )
    }
}

export default HomePage;