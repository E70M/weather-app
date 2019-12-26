import React from 'react';
import ReactDOM from 'react-dom';

class WeatherContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="weather-container">
				<p>{this.props.location}|{this.props.temperature}|{this.props.condition}</p>
			</div>
		);
	}
}

export default WeatherContainer;