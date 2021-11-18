import React, { useState } from 'react';
import Reviews from './data';
import "./App.scss";
const Displayed = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = Reviews[index];

    const prevUser = () => {
        setIndex((index) => {
            const newUser = index - 1;
            return checkNumber(newUser);
        })
    }

    const checkNumber = (number) => {
        if (number > Reviews.length - 1) {
            return 0;
        }

        if (number < 0) {
            return Reviews.length - 1;
        }
        return number;
    }

    const nextUser = () => {
        setIndex((index) => {
            const newUser = index + 1;
            return checkNumber(newUser);
        })
    }

    const randomPerson = () => {
        const randomPerson = Math.floor(Math.random() * Reviews.length);
        setIndex(randomPerson);
    }

    return (
        <>
            <h1 className="title">our reviews</h1>
            <div className="border"></div>
            <div className="main">
                <img src={image} alt="person" />
                <h3 className="name">{name}</h3>
                <h4 className="job">{job}</h4>
                <p className="text">{text}</p>
                <div className="icon">
                    <span><i className="fas fa-angle-left" onClick={prevUser}></i></span>
                    <span><i className="fas fa-angle-right" onClick={nextUser}></i></span>
                </div>
                <button className="btn" onClick={randomPerson}>surprise me</button>
            </div>
        </>
    )
}

export default Displayed;