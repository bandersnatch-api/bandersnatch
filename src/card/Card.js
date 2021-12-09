import './Card.css'
import React, { useState, useEffect } from 'react';


var userID = 1
var current_score = 0
var current_questions_answered = 0


function Card() {
  const [questions, setQuestions] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {const res = await fetch("https://safe-sea-12739.herokuapp.com/https://bandersnatch-api.herokuapp.com/quizzes")
    const data = await res.json()
    const shorterData = data.slice(0, 4)
    setQuestions(shorterData)
    console.log(shorterData)
   }
  fetchQuestions()
  fetchScore()

  },[])

  function updateQuestions() {
    let newArray = questions.slice(1)

    setQuestions(newArray)
  }

  function updateScore(answer) {

    if (answer === questions[0].correct_answer) {

      current_score += 1
      current_questions_answered +=1 
      
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ score: `${current_score}`, questions_answered: `${current_questions_answered}` })


    };
    fetch(`https://safe-sea-12739.herokuapp.com/https://bandersnatch-api.herokuapp.com/users/${userID}`, requestOptions)
    } else if (answer !== questions[0].correct_answer) {

      current_questions_answered +=1 
      
      const requestOptions  = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score: `${current_score}`, questions_answered: `${current_questions_answered}` })

    }
    fetch(`https://safe-sea-12739.herokuapp.com/https://bandersnatch-api.herokuapp.com/users/${userID}`, requestOptions)
    }
  }

  const fetchScore = async () => {const res = await fetch("https://safe-sea-12739.herokuapp.com/http://bandersnatch-api.herokuapp.com/users/1")
  const data = await res.json()
  current_score = data.score
  current_questions_answered = data.questions_answered

  }

  function pressButton(answer) {
    updateQuestions()
    updateScore(answer)
    // fetchScore()
  }


  return questions.length > 0 ? (
    <div className="block mx-auto px-6 	max-width: 768px bg-purple-300">

<div className="cardContainer p-6 mx-auto">

  <div className="bg-white text-pink-300 p-10 rounded-lg shadow-md">
    <h2>{questions[0].story}</h2>
  </div>
  <br>
  </br>

  <div className="bg-white text-pink-300 p-10 rounded-lg shadow-md">
    <h2 className="text-2-xl font-bold ">
      {questions[0].question}
    </h2>
  </div>

  <div className="grid grid-cols-2 gap-6 mt-6">

    <button onClick={() => pressButton(questions[0].answer1)} className="bg-white p-4
    text-pink-300 font-semibold rounded shadow">
    {questions[0].answer1}
    </button>
    <button onClick={() => pressButton(questions[0].answer2)} className="bg-white p-4
    text-pink-300 font-semibold rounded shadow">
    {questions[0].answer2}
    </button>
    <button onClick={() => pressButton(questions[0].answer3)} className="bg-white p-4
    text-pink-300 font-semibold rounded shadow">
    {questions[0].answer3}
    </button>
    <button onClick={() => pressButton(questions[0].answer4)} className="bg-white p-4
    text-pink-300 font-semibold rounded shadow">
    {questions[0].answer4}
    </button>
  </div>
</div>
</div>
  ) : (
    <h2 className="text-2xl text-white -font-bold">Loading... Hold tight!</h2>
  )
  }


export default Card
