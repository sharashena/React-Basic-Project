import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import "./App.scss";


export default function Answer({ info, title }) {
    const [bool, setBool] = useState(true);
    return (
        <div>
            <div className="question">
                <h4 className="question-title">{title}</h4>
                <button className="btn" onClick={() => setBool(!bool)}>{bool ? <AiOutlinePlus /> : <AiOutlineMinus />}</button>
            </div>
            {bool || <p className="text">{info}</p>}
        </div>
    )
}
