

import React, { useState, useEffect } from 'react';


function Card() {
  const [questions, setQuestions] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {const res = await fetch("http://bandersnatch-api.herokuapp.com/quizzes")
    const data = await res.json()
    console.log("hello")
    setQuestions(data)
    console.log(data)
   }
  fetchQuestions()

  },[])

  return questions.length > 0 ? (


<div className="block mx-auto px-6 	max-width: 768px bg-purple-300">

    <div className="cardContainer p-6 mx-auto">

      <div className="bg-white text-pink-300 p-10
    rounded-lg shadow-md">
        <h2 className="text-2-xl font-bold ">
          {questions[0].question}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">

        <button className="bg-white p-4
        text-pink-300 font-semibold rounded shadow">
        {questions[0].answer1}
        </button>
        <button className="bg-white p-4
        text-pink-300 font-semibold rounded shadow">
        {questions[0].answer2}
        </button>
        <button className="bg-white p-4
        text-pink-300 font-semibold rounded shadow">
        {questions[0].answer3}
        </button>
        <button className="bg-white p-4
        text-pink-300 font-semibold rounded shadow">
        {questions[0].answer4}
        </button>
      </div>
      </div>
    </div>
) : (
  <h1>Hold tight... we're loading!</h1>
)
;
}
export default Card
