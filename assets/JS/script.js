//Obtaining Data from API as well as Creation of map and its tiles

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "372099cea0msh17ff944402a2d36p14f490jsnafc5c0f190af");
myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com/v3/");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

const myMap = L.map('map').setView([52.04172, -0.75583], 6.1);
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,  Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution
}).addTo(myMap)

//obtaining the Year and storing it in a variable 
let btn = document.querySelectorAll('.btnData');
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', getStandings);
    //btn[i].addEventListener('click', getScorers);
    //btn[i].addEventListener('click', getAssists);
    
}



function getStandings() {
    const myDate = this.dataset.year;
    fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=${myDate}`, requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data = JSON.parse(result);
            let rankings = [];
            for (var item of data.response[0].league.standings[0]) {
                rankings.push(item.team.name);
            }
            var html = "<table><tr>";
            var row = 1;

            for (i = 0; i < rankings.length; i++) {
                html += "<td>" + rankings[i] + "</td>";

                var next = i + 1;
                if (next % row == 0 && next != rankings.length) {
                    html += "</tr><tr>";
                }
            }
            html += "</tr></table>";
            document.getElementById('league-table').innerHTML = html;
        })
        .catch(error => console.log('error', error));
}


function getScorers() {
    fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topscorers?season=${myDate}&league=39`, requestOptions)
        .then(response => response.text())
        .then(function (result) {
            var data = JSON.parse(result);
            var data1 = data.response;
            var scorers = []
            let i = 0;
            for (score of data1) {
                i++;
                if (i === 11) {
                    break;
                }
                scorers.push(score.player.name)
            }
            var html = "<table><tr>";
            var row = 1;
            for (i = 0; i < scorers.length; i++) {
                html += "<td>" + scorers[i] + "</td>";

                var next = i + 1;
                if (next % row == 0 && next != scorers.length) {
                    html += "</tr><tr>";
                }
            }
            html += "</tr></table>";
            document.getElementById('scorer-table').innerHTML = html;
        })
        .catch(err => {
            console.log(err);
        });
}

function getAssists() {
    fetch(`https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=39&season=${myDate}`, requestOptions)
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

function clearData() {
    let clear = [''];
    document.getElementById('league-table').innerHTML = clear;
}
let btnClear = document.getElementById('btn-clear');
btnClear.addEventListener('click', clearData);

function markersDetermine() {
    if (myDate === 2020) {
        markers2020();
    } else if (myDate === 2019) {
        markers2019();
    } else if (myDate === 2018) {
        markers2018();
    } else if (myDate === 2017) {
        markers2017();
    } else if (myDate === 2016) {
        markers2016();
    } else if (myDate === 2015) {
        markers2015();
    } else if (myDate === 2014) {
        markers2014();
    } else if (myDate === 2013) {
        markers2013();
    } else if (myDate === 2012) {
        markers2012();
    } else if (myDate === 2011) {
        markers2011();
    } else if (myDate === 2010) {
        markers2010();
    }
}
