//Obtaining Data from API
var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "372099cea0msh17ff944402a2d36p14f490jsnafc5c0f190af");
myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com/v3/");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
//League Rankings for 2020/21
/*fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2020", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        let data2020 = JSON.parse(result);
        for (item of data2020.response[0].league.standings[0]) {
            console.log(item.team.name);
          }
    })
    .catch(error => console.log('error', error));*/

//League Rankings for 2019/20
/*fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2019", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        let data2019 = JSON.parse(result);
        for (item of data2019.response[0].league.standings[0]) {
            console.log(item.team.name);
          }
    })
    .catch(error => console.log('error', error));*/

//League Rankings for 2018/19
/*fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2018", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        let data2018 = JSON.parse(result);
        for (item of data2018.response[0].league.standings[0]) {
            console.log(item.team.name);
          }
    })
    .catch(error => console.log('error', error));*/
//League Rankings for 2017/18
/*fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2017", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        let data2017 = JSON.parse(result);
        for (item of data2017.response[0].league.standings[0]) {
            console.log(item.team.name);
          }
    })
    .catch(error => console.log('error', error));*/
//League Rankings for 2016/17
/*fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2016", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        let data2016 = JSON.parse(result);
        for (item of data2016.response[0].league.standings[0]) {
            console.log(item.team.name);
          }
    })
    .catch(error => console.log('error', error));*/
//League Rankings for 2015/16
/*fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2015", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        let data2015 = JSON.parse(result);
        for (item of data2015.response[0].league.standings[0]) {
            console.log(item.team.name);
          }
    })
    .catch(error => console.log('error', error));*/
//League Rankings for 2014/15
/*fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2014", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        let data2014 = JSON.parse(result);
        for (item of data2014.response[0].league.standings[0]) {
            console.log(item.team.name);
          }
    })
    .catch(error => console.log('error', error));*/
//League Rankings for 2013/14
/*fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2013", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        let data2013 = JSON.parse(result);
        for (item of data2013.response[0].league.standings[0]) {
            console.log(item.team.name);
          }
    })
    .catch(error => console.log('error', error));*/
//League Rankings for 2012/13
fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2012", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        let data2012 = JSON.parse(result);
        let rankings = [];
        for (item of data2012.response[0].league.standings[0]) {
                rankings.push(item.team.name)
                document.getElementById('league-table').innerHTML = rankings;
        }
    })
    
    .catch(error => console.log('error', error));

//League Rankings for 2011/12
/*fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2011", requestOptions)
    .then(response => response.text())
    .then(function (result) {
        let data2011 = JSON.parse(result);
        for (item of data2011.response[0].league.standings[0]) {
            console.log(item.team.name);
          }
    })
    .catch(error => console.log('error', error));*/
//League Rankings for 2010/11
/*fetch("https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=2010", requestOptions)
.then(response => response.text())
.then(function (result) {
    let data2010 = JSON.parse(result);
    for (item of data2010.response[0].league.standings[0]) {
        console.log(item.team.name);
      }
})
.catch(error => console.log('error', error));*/
    

 