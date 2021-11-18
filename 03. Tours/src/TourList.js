import React, { useState, useEffect } from 'react';
import './App.scss';

export default function TourList() {
    const url = 'https://course-api.com/react-tours-project';

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState(false);

    const getUsers = async () => {
        const getData = await fetch(url);
        const response = await getData.json();
        setData(response);
    }
    useEffect(() => {
        getUsers();
        setTimeout(() => {
            setLoading(false);
            document.title = 'Tours';
        }, 2000)
    }, [])

    if (loading) {
        return <h1 className="loading">Loading...</h1>
    }

    const handleDelete = (id) => {
        const newArr = data.filter((user) => user.id !== id);
        setData(newArr)
    }
    return (
        <div className="main">
            <h1 className="title">tour component</h1>
            {data.map((item) => {
                return <div className="person" key={item.id}>
                    <img src={item.image} alt="person" />
                    <div className="info">
                        <h4>{item.name}</h4>
                        <h3 className="price">{`$${item.price}`}</h3>
                    </div>
                    <p className="text">{toggle ? item.info : `${item.info.substring(0, 200)}... `}
                        <button className="toggle" onClick={() => setToggle(!toggle)}>{toggle ? 'show less' : 'show more'}</button>
                    </p>
                    <button className="btn" onClick={() => handleDelete(item.id)}>not interested</button>
                </div>
            })}
        </div>
    )
}
