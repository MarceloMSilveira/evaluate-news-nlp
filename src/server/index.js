var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const MeaningCloud = require('meaning-cloud')
const dotenv = require('dotenv')
const apiKey = process.env.API_KEY

const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const returnedData = {content:''};

const formdata = new FormData();
formdata.append("key", apiKey);
formdata.append("txt", "I am not sure if i need your money, what do you think?");
formdata.append("lang", "en");  // 2-letter code, like en es fr ...
  
const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

// Async GET to external API (meaningCloud)
const retrieveData = async (url='', reqOptions) => { 
    const request = await fetch(url, reqOptions);
    console.log('test1');
    try {
        // Transform into JSON
        const allData = await request.json();
        console.log(allData);
        return allData;
    }
    catch(error) {
        console.log("error", error);
        // appropriately handle the error
    }    
};


dotenv.config()

const app = express()

// MeaningCloudApi
/*const textapi = MeaningCloud({
   key: process.env.API_KEY
})*/

//console.log(`Your API key is ${myKey}`)

app.use(express.static('dist'))

//console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
   retrieveData(baseURL,requestOptions)
    .then(function(data){
      console.log(data);
      returnedData.content = data.subjectivity;
      console.log(returnedData.content);
      //postUpdatUI();
    })
   
   res.send(mockAPIResponse)
})
