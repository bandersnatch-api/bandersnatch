
import React, { useState, useEffect } from 'react';


function Finalcard() {
  const [questions, setQuestions] = useState(1);

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

<div className="block mx-auto px-6 	max-width: 768px bg-red-800">
      <div className="cardContainer p-6 mx-auto">

          <div className="storyContainer  p-10 mx-auto" > 
          </div>

      <div className="bg-white text-red-800 p-10
    rounded-lg shadow-md">
        <h2>
          {questions[4].story, '“Well my thirst isn’t quelled but I’ll let you go. Don’t get swallowed by the staircase it’s awfully hungry you know.” The straw man steps aside. As you steal one last look at the pit of crows the scare crow gives you a sightless look from his hollowed pumpkin eyes as a warning. You run up the stairs, your heart pounding in your chest. As you climb, you notice the walls are getting closer . You turn around to retreat to find a wall where the stairs below once were. You run in blind panic, fighting through the exhaustion and fuelled by terror. Finally you happen upon a room inhabited by a Minotaur. It huffs at you “If you haven’t guessed I’m a Minotaur, guess what question I have in store.”'}
        </h2>
        <br></br>
        <h2  className="text-2-xl font-bold ">
          {questions[4].question}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">

        <button className="bg-white p-4
        text-red-800 font-semibold rounded shadow">
        {questions[4].answer1}
        </button>
        <button className="bg-white p-4
        text-red-800 font-semibold rounded shadow">
        {questions[4].answer2}
        </button>
        <button className="bg-white p-4
        text-red-800 font-semibold rounded shadow">
        {questions[4].answer3}
        </button>
        <button className="bg-white p-4
        text-red-800 font-semibold rounded shadow">
        {questions[4].answer4}
        </button>
      </div>
      </div>
    </div>
  
) : (
  <h2 className="text-2xl text-white -font-bold">Loading... Hold tight!</h2>
)
;
}
 export default Finalcard