import React, { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import Data from './data';
import Btns from './Btns';
import "./App.scss";


const App = () => {
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span>reviews</h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';

          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <Btns index={index} setIndex={setIndex} data={Data} people={people}/>
      </div>
    </section>
  )
}

export default App;