// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

// Given a position (latitude and longitude), returns the position

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

getCurrentTemperatureAtPosition()