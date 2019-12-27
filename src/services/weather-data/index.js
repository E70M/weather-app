var request = require('request-promise');

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

// TODO: make generic when search functionality is implemented
// Currently returns weather data for Los Angeles, USA
const URL = `http://api.openweathermap.org/data/2.5/weather?q=Los Angeles,US&APPID=${API_KEY}`;

var options = {
	uri: URL,
	json: true
};

const weatherDataService = {
	exampleWeatherCall: () => {
		return new Promise((resolve, reject) => {
			request(options)
				.then(res => {
					res['temperatureUnits'] = 'kelvin';
					console.log(res);
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
};

export default weatherDataService;