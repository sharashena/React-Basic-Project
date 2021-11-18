import React from "react";
import { useFetch } from "./useFetch";
import "./App.scss";

const App = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = React.useState(0);
  const [followers, setFollowers] = React.useState([]);

  React.useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = index => {
    setPage(index);
  };

  const nextPage = () => {
    setPage(index => {
      let next = index + 1;
      if (next > data.length - 1) {
        next = 0;
      }
      return next;
      // return checkNumber(next);
    });
  };

  const prevUser = () => {
    setPage(index => {
      let prev = index - 1;
      if (prev < 0) {
        prev = data.length - 1;
      }
      return prev;
      // return checkNumber(prev);
    });
  };

  // const checkNumber = (number) => {
  //   if (number > data.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return data.length - 1;
  //   }
  //   return number;
  // }

  return (
    <section className="section">
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {followers.map(item => {
          const { id, login, avatar_url, html_url } = item;
          return (
            <div className="container" key={id}>
              <article className="card">
                <img src={avatar_url} alt={login} />
                <h5>{login}</h5>
                <a href={html_url}>view profile</a>
              </article>
            </div>
          );
        })}
      </div>
      {!loading ? (
        <div className="btn-container">
          <button className="navigate" onClick={prevUser}>
            prev
          </button>
          {data.map((_, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? "active-btn" : null} `}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="navigate" onClick={nextPage}>
            next
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default App;
