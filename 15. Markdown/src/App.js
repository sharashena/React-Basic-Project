import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./App.scss";

const getLocalStorage = () => {
  let getStorage = localStorage.getItem("prev");
  if (getStorage) {
    return JSON.parse(localStorage.getItem("prev"));
  } else {
    return [];
  }
}

const App = () => {
  const [text, setText] = useState(getLocalStorage);

  useEffect(() => {
    localStorage.setItem('prev', JSON.stringify(text));
  }, [text])

  return (
    <main>
      <div>
        <textarea
          className="input"
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="result">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </main>
  );
};
export default App;
