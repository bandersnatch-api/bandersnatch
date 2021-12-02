// const fetch = require('node-fetch');

// // import fetch as fetch from 'node-fetch';

// fetch('https://bandersnatch-api.herokuapp.com/quizzes')
// .then(response => response.json)
// .then(data => console.log(data))


const fetch = require("node-fetch");
const url = "https://bandersnatch-api.herokuapp.com/quizzes";

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

getData(url);
