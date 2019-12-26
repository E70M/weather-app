import React from 'react';
import ReactDOM from 'react-dom';
import WeatherList from './components/WeatherList';

const reports = [
	{location: 'San Diego, CA', temperature: 70, condition: 'sunny'},
	{location: 'Seattle, WA', temperature: 40, condition: 'cloudy'},
	{location: 'New York, NY', temperature: 43, condition: 'sunny'}
];

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Weather App</h1>
				<WeatherList reports={reports} />
			</div>
		);
	}
}

export default App;