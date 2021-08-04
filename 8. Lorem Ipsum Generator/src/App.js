import React, { useState } from 'react';
import data from './data';
import "./App.scss";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count);
    setText(data.slice(0, amount));
    if (amount <= 0) {
      setText(data.slice(0, 1));
    }

    if (amount > data.length) {
      setText(data.slice(0, data.length))
    }
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paraghraph:
          <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
        </label>
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
          {text.map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          })}
      </article>
    </section>
  )
}
