import './App.css';
import Card from './card/Card';
import StartPage from './StartPage/StartPage';
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
      </Routes>
    </div>
    </Router>
  );
}

export default App;
