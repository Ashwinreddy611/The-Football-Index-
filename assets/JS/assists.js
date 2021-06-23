var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "372099cea0msh17ff944402a2d36p14f490jsnafc5c0f190af");
myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com/v3/");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=39&season=2020", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        var data = JSON.parse(result);
        // console.log(data.response[0].player)
        let rankings = []
        var data1 = data.response;
        console.log("data1 length", data1.length);
        console.log("player 2", data1[2].player.name);
        // for (var i = 0; i < data1.length; i++) {
        //     console.log(data[i].player);
        // }
        for (var i of data1) {
            console.log(i.player.name);
        }
        


        //console.log(assists2020.response[0].player.name);
    })
    .catch(err => {
        console.log(err);
    });

//https://api-football-v1.p.rapidapi.com/v3/