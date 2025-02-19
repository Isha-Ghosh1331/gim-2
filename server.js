// require("dotenv").config()
// const { error } = require("console")
// const express=require("express")
// const bodyParser = require('body-parser');
// const app=express()
// const PORT=process.env.PORT||3000
// const path=require("path")
// app.set("view engine","ejs")
// app.use(express.static(path.join(__dirname,"public")))
// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: true }));


// app.get("/",(req,res)=>{
//   res.render("index")
// })

// // BMI Calculation route
// app.post('/calculate', (req, res) => {
//   const weight = parseFloat(req.body.weight);  // Weight in kg
//   const height = parseFloat(req.body.height);  // Height in cm

//   // Convert height to meters
//   const heightInMeters = height / 100;

//   // Calculate BMI
//   const bmi = weight / (heightInMeters * heightInMeters);

//   // Send the result back to the user
//   res.send(`
//     <h1>Your BMI is ${bmi.toFixed(4)}</h1>
//     <p><a href="/">Go Back</a></p>
//   `);
// });


// app.listen(PORT,(error)=>{
//   if(error) throw error
//   console.log(`server is running: ${PORT}`)
// })








require("dotenv").config()
const { error } = require("console")
const express=require("express")
const bodyParser = require('body-parser');
const app=express()
const PORT=process.env.PORT||7000
const path=require("path")
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
  res.render("sum")
})

// BMI Calculation route
app.post('/Additioncalculate', (req, res) => {
  const number1 = parseFloat(req.body.no1);  // Weight in kg
  const number2 = parseFloat(req.body.no2);  // Height in cm

  const result=parseFloat(number1+number2);

  // Send the result back to the user
  res.send(`
    <h1>Your Addition result is ${result}</h1>
    <p><a href="/">Go Back</a></p>
  `);
});


app.listen(PORT,(error)=>{
  if(error) throw error
  console.log(`server is running: ${PORT}`)
})






















// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = 3000;

// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve the HTML form
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // BMI Calculation route
// app.post('/calculate', (req, res) => {
//   const weight = parseFloat(req.body.weight);  // Weight in kg
//   const height = parseFloat(req.body.height);  // Height in cm

//   // Convert height to meters
//   const heightInMeters = height / 100;

//   // Calculate BMI
//   const bmi = weight / (heightInMeters * heightInMeters);

//   // Send the result back to the user
//   res.send(`
//     <h1>Your BMI is ${bmi.toFixed(2)}</h1>
//     <p><a href="/">Go Back</a></p>
//   `);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`BMI Calculator is running on http://localhost:${port}`);
// });
