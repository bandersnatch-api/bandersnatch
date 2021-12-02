import './Cards.css';

var object = 
    {
    "id": 1,
    "question": "What colour is the sky?",
    "answer1": "Blue",
    "answer2": "Red",
    "answer3": "Green",
    "answer4": "Yellow",
    "correct_answer": "Blue",
    "created_at": "2021-12-01T17:19:15.391Z",
    "updated_at": "2021-12-01T17:19:15.391Z"
    }

const json = JSON.stringify(object)

const parsed = JSON.parse(json)

function Cards() {
  return (
    <div className="cardContainer">
      <div className="questionDisplay">
        Question 1 : What should you use to store 1, 2 and 4 ? 
        <br/>
        <button className="anwser1">{ parsed.answer1 }</button>
        <button className="anwser2">{ parsed.answer2 }</button>

      </div>
    </div>
  )
}

export default Cards



