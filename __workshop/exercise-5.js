// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
// Again here you should re-use two previously created functions, plus the `getDistance` function provided to you in `workshop.js`.
//
// One of the functions does address ==> position and the other simply does nothing ==> position.
// The `getDistance` function needs the two positions to compute the final value.

// Euclidian distance between two points
function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.geometry.lat - pos2.geometry.lat, 2) + Math.pow(pos1.geometry.lng - pos2.geometry.lng, 2));
}

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
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


function getNewAddressPosition(address) {
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




function getDistanceFromIss() {
    ///NEED AN OBJECT TO PLACE MY RESULTS INTO//
    const posAll = {};
    getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
    .then(one => {
        console.log('------', one)
        posAll.pos1 = one;
        getNewAddressPosition('12115 38e avenue, Montréal, QC H1E 7H8')
        .then(two => {
            console.log('--------', two)
            posAll.pos2 = two;
            console.log(getDistance(posAll.pos1, posAll.pos2), "--------")
        })
    })
}

getDistanceFromIss()

//RESULT IS 0.1445...... :) // 