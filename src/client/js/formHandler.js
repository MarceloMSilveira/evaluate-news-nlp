function handleSubmit(event) {
  event.preventDefault()

  const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
  let apiKey = '';
 
  fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results2').innerHTML = res;
        apiKey = res;
    })

  let formText =  document.getElementById('name').value;
  const formdata = new FormData();
  formdata.append("key", apiKey);
  formdata.append("txt", formText);
  formdata.append("lang", "en");  // 2-letter code, like en es fr ...

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

    console.log("::: Form Very Submitted :::")
    fetch(baseURL,requestOptions)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.subjectivity;
    })
   
}

export { handleSubmit }
