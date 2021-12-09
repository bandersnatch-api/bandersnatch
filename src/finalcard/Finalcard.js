import './Finalcard.css'
import React, { useState, useEffect } from 'react';
 
function Finalcard() {

  const [questions, setQuestions] = useState(1);
  
  useEffect(() => {
    const fetchQuestions = async () => {const res = await fetch("https://safe-sea-12739.herokuapp.com/https://bandersnatch-api.herokuapp.com/quizzes")
    const data = await res.json()
    setQuestions(data)
    console.log(data)
    }
fetchQuestions()

},[])

return questions.length > 0 ? (
 <div className="block mx-auto px-6  max-width: 768px bg-red-800">
    <div className="cardContainer p-6 mx-auto">
      <div className="storyContainer p-10 mx-auto" > 
      </div>
    <div className="bg-white text-red-800 p-10
   rounded-lg shadow-md">
     <h1 className="text-2xl text-center font-bold">You've escaped by the skin of your teeth...</h1> <br></br>
     <h2>
      <div class="row">
       <div class="col-md-4 col-xs-6">
        <img src="minotaur_image.jpeg" class="mx-auto d-blockmx-auto d-block img-responsive" />
        <br></br>
       </div>
       </div>
      {questions[4].story}
     </h2>
    </div>
    </div>
   </div>
 ) : (
  <h2 className="text-2xl text-white -font-bold">Loading... Hold tight!</h2>
 )
 ;
 }
 export default Finalcard