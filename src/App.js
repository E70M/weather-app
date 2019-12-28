import React from 'react';
import ReactDOM from 'react-dom';
import WeatherList from './components/WeatherList';
import weatherDataService from './services/weather-data';
import './index.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			reports: [
				{location: 'San Diego, CA', temperature: 294.26, condition: 'sunny'},
				{location: 'Seattle, WA', temperature: 277.59, condition: 'cloudy'},
				{location: 'New York, NY', temperature: 279.26, condition: 'sunny'}
			]
		}
		weatherDataService.exampleWeatherCall().then(res => {
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