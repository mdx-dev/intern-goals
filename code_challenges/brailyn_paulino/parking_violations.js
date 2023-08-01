// You can find information about NYC parking violations at "https://data.cityofnewyork.us/resource/dbw3-ymb4.json"
// Below, write code that prints out the definition for all parking violations with a fine more than $110 below 96th street in Manhattan.
// Look at week two's api_request.js file if you don't remember how to do this in JavaScript.
var request = require('request');

request('https://data.cityofnewyork.us/resource/dbw3-ymb4.json',
  (data) => {
    if (parseInt(data.manhattan_96th_st_below) > 110) {
      console.log(data.definition)
    }
  }
)