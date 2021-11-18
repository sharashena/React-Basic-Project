import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import "./App.scss";

export default function App() {
  const url = 'https://course-api.com/react-tabs-project';
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [value, setValue] = useState(0);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDatas(data);
    setLoading(false);
  }
  useEffect(() => {
    getUsers();
  }, [])

  if (loading) {
    return <section className="section loading">
      <h1>loading...</h1>
    </section>
  }

  const { company, duties, dates, title } = datas[value];
  return (
    <section className="section">
      <div className="title">
        <h2 className="page-title">experience</h2>
        <div className="underline"></div>
        <div className="jobs-center">
          <div className="btn-container">
            {
              datas.map((item, index) => {
                return <button key={item.id} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>
                  {item.company}
                </button>
              })
            }
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon">
                </FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            })}
          </article>
        </div>
      </div>
    </section>
  )
}
