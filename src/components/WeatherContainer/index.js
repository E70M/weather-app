import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
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

WeatherContainer.propTypes = {
	location: PropTypes.string.isRequired,
	temperature: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	condition: PropTypes.string.isRequired
}

export default WeatherContainer;