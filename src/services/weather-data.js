var request = require('request-promise');
var locations = require('../city.list.min.json');
var getCountryISO2 = require("country-iso-3-to-2");

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const BASE = "https://api.openweathermap.org/data/2.5/weather";

// TODO: autocomplete

const states = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL",
  "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME",
  "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
  "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR",
  "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const units = {
  humidity: '%',
  pressure: 'hPa',
  temperature: 'kelvin'
};

function getCityId(query) {
  let params = query.replace(/\s*(,|^|$)\s*/g, "$1").split(",");
  let city, state, country, result;
  switch (params.length) {
    case 1:
      [city] = params;
      result = locations.find(loc => loc.name === city);
      break;
    case 2:
      let param = params[params.length - 1];
      if (states.includes(param)) {
        [city, state] = params;
        result = locations.find(loc => loc.name === city && loc.state === state);
        break;
      } else {
        [city, country] = params;
        if (country.length === 3) {
          country = getCountryISO2(country);
        }
        result = locations.find(loc => loc.name === city && loc.country === country);
        break;
      }
    case 3:
      [city, state, country] = params;
      if (country.length === 3) {
        country = getCountryISO2(country);
      }
      result = locations.find(loc =>
        loc.name === city && loc.state === state && loc.country === country
      );
      break;
  }
  return result ? result.id : null;
}

const weatherDataService = {
  getWeatherByCityName: (query) => {
    let id = getCityId(query);
    if (id) {
      return new Promise((resolve, reject) => {
        request({
          uri: `${BASE}?id=${id}&appid=${API_KEY}`,
          json: true
        }).then(res => {
          res['units'] = units;
          resolve(res);
        }).catch(err => {
          reject(err);
        });
      });
    } else {
      alert("Invalid search");
    }
  },
  getCityData: (id) => {
    return locations.find(loc => loc.id === id);
  }
};

export default weatherDataService;
