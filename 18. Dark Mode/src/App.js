import React from "react";
import Article from "./Article";
import data from "./data";
import "./App.scss";

const getLocalStorage = () => {
  let list = localStorage.getItem("theme");
  if (list) {
    return JSON.parse(localStorage.getItem("theme"));
  }
};

const App = () => {
  const [theme, setTheme] = React.useState(getLocalStorage);

  React.useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  React.useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const handleChange = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={handleChange}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map(article => {
          return <Article key={article.id} {...article} />;
        })}
      </section>
    </main>
  );
};

export default App;
