var request = require('request-promise');

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const BASE = "https://api.openweathermap.org/data/2.5/weather";

// TODO: autocomplete
// TODO: get weather by city id

const units = {
  humidity: '%',
  pressure: 'hPa',
  temperature: 'kelvin'
};

const weatherDataService = {
  getWeatherByCityName: (cityName, countryName) => {
    let city = cityName ? cityName : "Los Angeles",
        country = countryName ? countryName : "US";
    return new Promise((resolve, reject) => {
      request({
        uri: `${BASE}?q=${city},${country}&APPID=${API_KEY}`,
        json: true
      }).then(res => {
        res['units'] = units;
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
};

export default weatherDataService;
