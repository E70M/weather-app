import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class WeatherContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="weather-container">
				<p className="weather-data">{this.props.location} | {this.props.temperature} | {this.props.condition}</p>
				<button className="btn-more-info">+</button>
			</div>
		);
	}
}

export default WeatherContainer;