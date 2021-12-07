import React, { useState, useEffect } from 'react';
import { Questionaire } from './components';

function Card() {
  const [questions, setQuestions] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {const res = await fetch("http://bandersnatch-api.herokuapp.com/quizzes")
    const data = await res.json()
    setQuestions(data)
    console.log(data)
   }
  fetchQuestions()

  },[])

  return questions.length > 0 ? (
    <div className="container">
      <Questionaire data={questions[0]}/>
    <div/>
) : (
  <h2 className="text-2xl text-white -font-bold">Loading...watch out for frogs!</h2>
);
}
export default Card;
