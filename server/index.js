const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const googleTrends = require('google-trends-api');
const fetch = require('node-fetch');
var varname = require('varname');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

var countries = ['US','FR','DE','IT','BE','GB','IN'];
var nation ="";
var length = -1;
var tab =[]
var tabFR = [];
var tabDE = [];
var tabIT =[];
var tabGB =[];
var tabBE =[];
var tabIN =[];
var tabUS = [];

function googleCall(coutry) {

  googleTrends.dailyTrends({
    geo: nation,
  }, function(err, results) {

    if (err) {
      console.log(err);
    }else{

      const ok = JSON.parse(results);

      const res = ok.default.trendingSearchesDays[0].trendingSearches;
      const str = ok.default.rssFeedPageUrl;
      const strL = str.length
      const lg = str[64] + str[65];
      var glob = ok.default;

      res.map(function(num) {

        var topic = num;
        const trendy = {country:lg,topic:topic}
        let civ = 'tab' + lg;

        if (lg=="FR"){
          tabFR.push(trendy);
          app.get('/news-trend-FR', (req, res) => res.send(tabFR))
        }else if(lg=="DE"){
          tabDE.push(trendy);
          app.get('/news-trend-DE', (req, res) => res.send(tabDE))
        }else if (lg=="US"){
          tabUS.push(trendy);

          app.get('/news-trend-US', (req, res) => res.send(tabUS))
        }
        else if (lg=="IT"){
          tabIT.push(trendy);

          app.get('/news-trend-IT', (req, res) => res.send(tabIT))
        }

        else if (lg=="BE"){
          tabBE.push(trendy);
          app.get('/news-trend-BE', (req, res) => res.send(tabBE))
        }

        else if (lg=="IN"){
          tabIN.push(trendy);
          app.get('/news-trend-IN', (req, res) => res.send(tabIN))
        }

        else{
          tabGB.push(trendy);
          app.get('/news-trend-GB', (req, res) => res.send(tabGB))
        }



      });

      app.get('/google-trend', (req, res) => res.send(results))

    }
  });

}


function ApiCall(){
  countries.map(function(country){
    nation = country;
    googleCall(country);
  })
}

ApiCall();





//newsCall();
//setInterval(function(){newsCall()}, 3600000);



app.listen(3001, () =>
console.log('Express server is running on localhost:3001')
);
