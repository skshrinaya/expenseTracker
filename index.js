// const http = require("http");
// const file = require("fs");
//  const express=require("express");
//  console.log(express);
// const ip = "127.0.0.1";
// const port = 3000;
 
// const getIndexHtml = async () => {
//   let indexContent=await file.readFile("index.html", undefined, (err, data) => {
   
//   });
//   return indexContent.toString();
// };
 
// const server = http.createServer(async(req, res) => {
// console.log(req.url);
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   const indexHtml = getIndexHtml();
//   res.end(indexHtml);
// });
 
// server.listen(port, ip, () => {
//     console.log(`Server running at http://${ip}:${port}/`);
// });


// const number = [1,2,3,4,5];
// console.log(number.reduce((sum,num)=>(sum+=num),0));

// const path = require('path')
// console.log(path.dirname('E:/nodejs/index.js'))

// const file = require('fs')

// file.readFile('E:/nodejs/index.js',
// undefined,
// (err,data)=>{
//     console.log(data.toString());
// }
// );
// const file = require('fs')
// file.readFile("E:/nodejs/data.json",
// undefined,
// (err,data)=>{
//     if(err){
//         console.log('error')
//     }else{
//     const numbers = JSON.parse(data.toString());
//     console.log(numbers.reduce((sum,num)=>(sum+=num),0));}
// });

//console.log('Hi')

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

