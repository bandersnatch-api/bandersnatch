import './App.css';
import Card from './card/Card';
import StartPage from './StartPage/StartPage';
import Finalcard from './finalcard/Finalcard'
import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/play" element={<Card/>} />
        <Route path="/finalcard" element={<Finalcard/>} />
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
