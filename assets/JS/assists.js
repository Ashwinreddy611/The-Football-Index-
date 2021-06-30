var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "372099cea0msh17ff944402a2d36p14f490jsnafc5c0f190af");
myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com/v3/");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

function getAssists2020() {
fetch("https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=39&season=2020", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        var data = JSON.parse(result);
        var data1 = data.response;
        var assisters = [];
        let i = 0

    for (assist of data1) {
      i++;

      if (i === 11) {
        break;
    }
      assisters.push(assist.player.name);
    
    }
    var html = "<table><tr>";
    var row = 1;

    for (i = 0; i < assisters.length; i++) {
        html += "<td>" + assisters[i] + "</td>";

        var next = i + 1;
        if (next % row == 0 && next != assisters.length) {
            html += "</tr><tr>";
        }
        
    }
    html += "</tr></table>";
    document.getElementById('assist-table').innerHTML = html;
    
            
    
})

    .catch(err => {
        console.log(err);
    });
}


    


    
  
   

    