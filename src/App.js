import React from 'react';
import ReactDOM from 'react-dom';
import WeatherList from './components/WeatherList';
import weatherDataService from './services/weather-data';
import temperatureConverterService from './services/temperature-converter';
import './index.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			reports: [
				{location: 'San Diego, CA', temperature: 70, condition: 'sunny'},
				{location: 'Seattle, WA', temperature: 40, condition: 'cloudy'},
				{location: 'New York, NY', temperature: 43, condition: 'sunny'}
			]
		}
		weatherDataService.exampleWeatherCall().then(res => {
			console.log(temperatureConverterService({
				temperature: res.main.temp,
				feels_like: res.main.feels_like,
				temp_max: res.main.temp_max,
				temp_min: res.main.temp_min
			}, res.temperatureUnits, 'fahrenheit'));
			this.setState({
				reports: this.state.reports.concat({
					location: res.name,
					temperature: res.main.temp,
					condition: res.weather[0].main
				})
			});
		});
	}
	render() {
		return (
			<div>
				<h1>Weather App</h1>
				<WeatherList reports={this.state.reports} />
			</div>
		);
	}
}

export default App;