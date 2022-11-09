var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const MeaningCloud = require('meaning-cloud')
const dotenv = require('dotenv')
//let testObj = {key:''};
//testObj.key = process.env.API_KEY
const testKey = process.env.API_KEY
dotenv.config()

const app = express()

// MeaningCloudApi
/*const textapi = MeaningCloud({
   key: process.env.API_KEY
})*/

console.log(`Your API key is ${testKey}`)

app.use(express.static('dist'))

console.log(__dirname)
//console.log(`My key is: ${process.env.API_KEY}`)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/key',function(req,res){
    console.log(`inside get/key: ${process.env.API_KEY}`);
    //res.send(process.env.API_KEY);
    res.send(mockAPIResponse);
})
