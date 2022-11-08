function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted! :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    //New code:
    /*
    const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
    const apiKey = '20489377c5952a89f770375f1b73862b';
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
  
    retrieveData(baseURL,requestOptions)
    .then(function(data){
      console.log(data);
      returnedData.content = data.subjectivity;
      console.log(returnedData.content);
      //postUpdatUI();
    })

    // Async GET
    const retrieveData = async (url='', reqOptions) => { 
        const request = await fetch(url, reqOptions);
        try {
            // Transform into JSON
            const allData = await request.json();
            return allData;
        }
        catch(error) {
            console.log("error", error);
            // appropriately handle the error
        }
};
*/
}

export { handleSubmit }
