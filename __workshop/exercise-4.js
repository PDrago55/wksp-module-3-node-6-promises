// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
// While it's useful to get the current temperature for a specific lat/lng,
// most often we want to provide the name of a place instead.
// 
// You already created a function that can do address ==> position,
// and one that can do position ==> temperature. For this exercise,
// re-use these two functions to create one that goes directly from address ==> temperature.
// 
// You can copy/paste your code from the previous exercises,
// or require them at the top of this file.
// Remember to _export_ them from their file, if you plan on _requiring_ them.

//position API
const opencage = require('opencage-api-client');

function getAddressPosition(address) {
    const requestObj = {
        key: '464a9f6696994036bbe793cb4074b36c',
        q: address
    };
    return opencage.geocode(requestObj)
        .then(data => {
            if (data.status.code === 200){
                if (data.results.length > 0){
                    const place = data.results[0];
                    console.log(place.formatted);
                    console.log(place.geometry);
                    return place;
                } else {
                    console.log('error', data.status.message);
                }
            }
        })
        .catch(error => console.log('error', error.message));
}

//TEMPERATURE
const request = require('request-promise');
let key = '230c58f7258c5092bb06fa277972d162'
let lat = 45.5017;
let lng = -73.5673;
function getCurrentTemperatureAtPosition() {
    return request(`https://api.darksky.net/forecast/${key}/${lat},${lng}`)
        .then(data => {
            let response = JSON.parse(data)
            console.log(response.currently.temperature);
        })
}
// getCurrentTemperatureAtPosition()


// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function


function getCurrentTemperature(address) {
    getAddressPosition(address)
    .then(data => {
        console.log("------------------")
        console.log('data', data)
        getCurrentTemperatureAtPosition(
            {lat: data.geometry.lat, lng: data.geometry.lng})
    })
}
getCurrentTemperature('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')