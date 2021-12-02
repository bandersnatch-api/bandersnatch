
import './Cards.css';

// const fetch = require("node-fetch");
// const url = "https://bandersnatch-api.herokuapp.com/quizzes";

// const getData = async url => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// };

const fetchQuestions = async () => {
  const res = await fetch("https://bandersnatch-api.herokuapp.com/quizzes")
  const data = await res.json()
  console.log(data)

}

// const url = "https://bandersnatch-api.herokuapp.com/quizzes";

// const fetch =(url, {
//     method: 'POST',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });

// getData(url);

// var object =
//     {
//     "id": 1,
//     "question": "What colour is the sky?",
//     "answer1": "Blue",
//     "answer2": "Red",
//     "answer3": "Green",
//     "answer4": "Yellow",
//     "correct_answer": "Blue",
//     "created_at": "2021-12-01T17:19:15.391Z",
//     "updated_at": "2021-12-01T17:19:15.391Z"
//     }

// const json = JSON.stringify(object)

// const parsed = JSON.parse(json)

function Cards() {
  return (
    <div className="cardContainer">
      <div className="questionDisplay">
        Question 1 : What should you use to store 1, 2 and 4 ?
        <br/>
        <button className="anwser1"></button>
        <button className="anwser2"></button>

      </div>
    </div>
  )
}

export default Cards
