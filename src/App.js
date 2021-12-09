import './App.css';
import Card from './card/Card';
import StartPage from './StartPage/StartPage';
import Finalcard from './finalcard/Finalcard'
import Losecard from './finalcard/Losecard'
import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import current_score from './card/Card'

function App() {

  function chooseEnding() {
    if (current_score >3) {
      console.log(current_score)
      return <Route path="/finalcard" element={<Finalcard/>} />
    }
    else {
      console.log(current_score)
      return <Route path="/losecard" element={<Losecard/>} />
    }
  }

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/play" element={<Card/>} />
        {/* <Route path="/finalcard" element={<Finalcard/>} /> */}
        {chooseEnding()}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
