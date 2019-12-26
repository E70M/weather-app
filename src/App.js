import React from 'react';
import ReactDOM from 'react-dom';
import WeatherContainer from './components/WeatherContainer';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Weather App</h1>
				<WeatherContainer location="San Diego, CA" temperature="70" condition="sunny"/>
			</div>
		);
	}
}

export default App;