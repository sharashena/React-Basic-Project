import React, { useState } from 'react';
import { data } from './data';
import "./App.scss";

const App = () => {
    const [value, setValue] = useState(5);
    const [clearList, setClearList] = useState(data);

    const clearData = () => {
        setClearList([]);
        setValue(0);
    }

    return (
        <div className="body">
            <h1 className="birthday-title">{`${value} birthday today`}</h1>
            {clearList.map((users) => {
                const { id, name, age, image } = users;
                return <div className="main" key={id}>
                    <div className="person">
                        <img src={image} alt="person" />
                        <div className="info">
                            <h3>{name}</h3>
                            <p>{`${age} years old`}</p>
                        </div>
                    </div>
                </div>
            })}
            <button className="btn" onClick={clearData}>clear all</button>
        </div>
    )
}

export default App;