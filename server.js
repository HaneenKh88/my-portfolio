// 'use strict';

// require('dotenv').config();
// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 3000;



// app.get('/test', (request, response) => {
//   response.status(200).send('Welcome to my server');
// });

// // app.get('/mydata', (request, response) => {
// //   let myinfo = [{
// //     name: 'Haneen Khasawneh',
// //     age: '24 years old',
// //     major: 'computer Science',
// //     funfact: 'I love food and sleep so much'
// //   }];
// //   response.status(200).json(myinfo);
// // });

// app.use(express.static('./public'));
// app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

// app.listen(PORT,() => console.log(`Listening on port ${PORT}`));


require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained',
  };
  response.status(200).json(airplanes);
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

