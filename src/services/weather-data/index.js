var request = require('request-promise');

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

// TODO: autocomplete
// TODO: get weather by city id

const weatherDataService = {
	// Default search for users who aren't logged in
	exampleWeatherCall: () => {
		return new Promise((resolve, reject) => {
			request({
				uri: `http://api.openweathermap.org/data/2.5/weather?q=Los Angeles,US&APPID=${API_KEY}`,
				json: true
			}).then(res => {
				res['temperatureUnits'] = 'kelvin';
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		});
	},
	getWeatherByCityName: (city, country) => {
		return new Promise((resolve, reject) => {
			request({
				uri: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`,
				json: true
			}).then(res => {
				res['temperatureUnits'] = 'kelvin';
				resolve(res);
			}).catch(err => {
				reject(err);
			});
		});
	}
};

export default weatherDataService;