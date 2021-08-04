import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import "./App.scss";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

const getLocalStorage = () => {
  let title = localStorage.getItem("random");
  if (title) {
    return JSON.parse(localStorage.getItem("random"));
  } else {
    return [];
  }
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(getLocalStorage);
  const [name, setName] = useState("name");
  const [title, setTitle] = useState("random person");

  const handleValue = e => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setName(newValue);
      setTitle(person[newValue]);
    }
  };

  const fetchingData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const {
      login: { password },
    } = person;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
    const newPerson = {
      phone,
      email,
      image,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
    setPerson(newPerson);
    setLoading(false);
    setName("name");
    setTitle(newPerson.name);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    localStorage.setItem("random", JSON.stringify(person));
  }, [person]);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">{`my ${name} is`}</p>
          <p className="user-value">{title}</p>
          <div className="values-list">
            <button
              className="icon"
              onMouseOver={handleValue}
              data-label="name"
            >
              <FaUser />
            </button>
            <button
              className="icon"
              onMouseOver={handleValue}
              data-label="email"
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              onMouseOver={handleValue}
              data-label={"age"}
            >
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              onMouseOver={handleValue}
              data-label={"street"}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              onMouseOver={handleValue}
              data-label={"phone"}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              onMouseOver={handleValue}
              data-label={"password"}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={fetchingData}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
