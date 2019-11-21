import React, {useState} from 'react'
import './home.css';
import {
    Link
} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";


const Home = () => {
    return (
        <div className="home">
            <Link to="/login">
                <Button>
                    ADMINISTRATION
                </Button>
            </Link>
        </div>
    )

}

export default Home;