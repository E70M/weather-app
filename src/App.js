import React from 'react';
import ReactDOM from 'react-dom';
import WeatherList from './components/WeatherList';
import weatherDataService from './services/weather-data';
import './index.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			locations: [
				{city: 'San Diego', country: 'US'},
				{city: 'Los Angeles', country: 'US'},
				{city: 'Seattle', country: 'US'},
				{city: 'New York', country: 'US'}
			],
			reports: []
		}
		this.state.locations.forEach((location) => {
			weatherDataService.getWeatherByCityName(location.city, location.country).then(res => {
				this.setState({
					reports: this.state.reports.concat({
						location: res.name,
						temperature: res.main.temp,
						condition: res.weather[0].main
					})
				});
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