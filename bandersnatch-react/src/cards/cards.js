
import './Cards.scss';
import React, { useState, useEffect } from 'react';

function Cards() {
  const [questions, setQuestions] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {const res = await fetch("http://bandersnatch-api.herokuapp.com/quizzes")
    const data = await res.json()
    setQuestions(data)
   }

  fetchQuestions()

  },[])

  return (
    <div className="cardContainer">
      <div className="questionDisplay">
      {questions && questions[0].question}

        <button className="anwser1">
        {questions && questions[0].answer1}
        </button>
        <button className="anwser2">
        {questions && questions[0].answer2}
        </button>
        <button className="anwser3">
        {questions && questions[0].answer3}
        </button>
        <button className="anwser4">
        {questions && questions[0].answer4}
        </button>

      </div>
    </div>
  )
}

export default Cards
