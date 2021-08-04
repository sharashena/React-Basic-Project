import React, { useContext, useState } from "react";
import axios from "axios";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const AppContext = React.createContext();

const API = "https://opentdb.com/api.php?";

const AppProvider = ({ children }) => {
  // useStates
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });

  //   Axios

  const fetchingData = async url => {
    setLoading(true);
    setWaiting(false);
    const res = await axios(url).catch(err => console.log(err));
    if (res) {
      const data = res.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const nextQuestion = () => {
    setIndex(index => {
      const next = index + 1;
      if (next > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return next;
      }
    });
  };

  const checkAnswer = value => {
    if (value) {
      setCorrect(oldValue => oldValue + 1);
    }
    nextQuestion();
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setModalOpen(false);
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;

    // const tempUrl =
    //   "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

    const url = `${API}amount=${amount}&category=${category}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    fetchingData(url);
  };
  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        index,
        error,
        correct,
        modalOpen,
        questions,
        nextQuestion,
        checkAnswer,
        openModal,
        closeModal,
        handleChange,
        handleSubmit,
        quiz,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
