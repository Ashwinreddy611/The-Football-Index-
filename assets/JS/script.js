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
    btn[i].addEventListener('click', getData);
    
}


function getData() {
    myDate = this.dataset.year;
    fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=${myDate}`, requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data = JSON.parse(result);
            let rankings = [];
            
            console.log(data);
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


