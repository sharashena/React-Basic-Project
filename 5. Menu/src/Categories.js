import React from 'react';
import "./App.scss";

const Categories = ({ filterData, categories }) => {
    return (
        <div className="categoriesBtns">
            {/* Not Dynamic */}

            {/* <button onClick={() => filterData('all')}>all</button>
            <button onClick={() => filterData('breakfast')}>breakfsat</button>
            <button onClick={() => filterData('lunch')}>lunch</button>
            <button onClick={() => filterData('shakes')}>shakes</button> */}

            {/* Dynamic */}

            {categories.map((item, index) => {
                return <button key={index} onClick={() => filterData(item)}>{item}</button>
            })}
        </div>
    )
}

export default Categories;