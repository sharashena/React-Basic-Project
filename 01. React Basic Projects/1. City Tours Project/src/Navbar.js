import React from 'react';
import './App.css';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar__container">
                    <li><a href="#mainPage" className="logo">City<span>Tours</span></a></li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#tours">Tours</a></li>
                </ul>
            </nav>
        )
    }
}