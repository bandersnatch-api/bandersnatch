// const fetch = require('node-fetch');

// // import fetch as fetch from 'node-fetch';

// fetch('https://bandersnatch-api.herokuapp.com/quizzes')
// .then(response => response.json)
// .then(data => console.log(data))


const fetch = require("node-fetch");
const url = "https://bandersnatch-api.herokuapp.com/quizzes";

const getData = fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

getData(url);
