//Obtaining Data from API
var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "372099cea0msh17ff944402a2d36p14f490jsnafc5c0f190af");
myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com/v3/");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2019", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        let data = JSON.parse(result);
        console.log("data:");
        console.log(data.response);
    })
    .catch(error => console.log('error', error));
    
    //.then(result => console.log(result))
    //data = JSON.parse(result)
    //console.log("data:",data)
    //console.log("data.response:", data.response)
    //.catch(error => console.log('error', error));
    

 