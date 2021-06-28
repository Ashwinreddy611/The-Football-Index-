//Obtaining Data from API and Creation of map and its tiles

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



//League Rankings for 2020/21

function getData2020() {
    markers2020();
    getScorers2020();
    getAssists2020();
    fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2020", requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data2020 = JSON.parse(result);
            let rankings = []; 
            for (var item of data2020.response[0].league.standings[0]) {
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
let btn2020 = document.getElementById("btn-2020");
btn2020.addEventListener('click', getData2020);

//League Rankings for 2019/20

function getData2019() {
    
    markers2019();
    fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2019", requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data2019 = JSON.parse(result);
            let rankings = [];
            for (var item of data2019.response[0].league.standings[0]) {
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
let btn2019 = document.getElementById("btn-2019");
btn2019.addEventListener('click', getData2019);

//League Rankings for 2018/19

function getData2018() {
    markers2018();
    fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2018", requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data2018 = JSON.parse(result);
            let rankings = [];
            for (var item of data2018.response[0].league.standings[0]) {
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
let btn2018 = document.getElementById("btn-2018");
btn2018.addEventListener('click', getData2018);


//League Rankings for 2017/18

function getData2017() {
    markers2017();
    fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2017", requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data2017 = JSON.parse(result);
            let rankings = [];
            for (var item of data2017.response[0].league.standings[0]) {
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
let btn2017 = document.getElementById("btn-2017");
btn2017.addEventListener('click', getData2017);


//League Rankings for 2016/17

function getData2016() {
    markers2016();
    fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2016", requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data2016 = JSON.parse(result);
            let rankings = [];
            for (var item of data2016.response[0].league.standings[0]) {
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
let btn2016 = document.getElementById("btn-2016");
btn2016.addEventListener('click', getData2016);

//League Rankings for 2015/16

function getData2015() {
    markers2015();
    fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2015", requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data2015 = JSON.parse(result);
            let rankings = [];
            for (var item of data2015.response[0].league.standings[0]) {
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
let btn2015 = document.getElementById("btn-2015");
btn2015.addEventListener('click', getData2015);


//League Rankings for 2014/15

function getData2014() {
    markers2014();
    fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2014", requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data2014 = JSON.parse(result);
            let rankings = [];
            for (var item of data2014.response[0].league.standings[0]) {
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
        .catch(error => console.log('error', error));;
}
let btn2014 = document.getElementById("btn-2014");
btn2014.addEventListener('click', getData2014)


//League Rankings for 2013/14

function getData2013() {
    markers2013();
    fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2013", requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data2013 = JSON.parse(result);
            let rankings = [];
            for (var item of data2013.response[0].league.standings[0]) {
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
let btn2013 = document.getElementById("btn-2013");
btn2013.addEventListener('click', getData2013);


//League Rankings for 2012/13

function getData2012() {
    markers2012();
    fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2012", requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data2012 = JSON.parse(result);
            let rankings = [];
            for (var item of data2012.response[0].league.standings[0]) {
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
let btn2012 = document.getElementById("btn-2012");
btn2012.addEventListener('click', getData2012);


//League Rankings for 2011/12

function getData2011() {
    markers2011();
    fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2011", requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data2011 = JSON.parse(result);
            let rankings = [];
            for (var item of data2011.response[0].league.standings[0]) {
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
let btn2011 = document.getElementById("btn-2011");
btn2011.addEventListener('click', getData2011);


//League Rankings for 2010/11

function getData2010() {
    markers2010();
    fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2010", requestOptions)
        .then(response => response.text())
        .then(function (result) {
            let data2010 = JSON.parse(result);
            let rankings = [];
            for (var item of data2010.response[0].league.standings[0]) {
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
let btn2010 = document.getElementById("btn-2010");
btn2010.addEventListener('click', getData2010);

//Obtaining the clear button functionality
function clearData() {
    let clear = [''];
    document.getElementById('league-table').innerHTML = clear;
    document.getElementById('scorer-table').innerHTML = clear;
    document.getElementById('assist-table').innerHTML = clear;
    clearMarkers();
}
let btnClear = document.getElementById('btn-clear');
btnClear.addEventListener('click', clearData);

