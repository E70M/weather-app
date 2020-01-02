import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import temperatureConverterService from '../../services/temperature-converter';
import './index.css';

class WeatherContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="weather-container">
				<p className="weather-data">{this.props.report.name} | {
					Math.round(temperatureConverterService({
						temperature: this.props.report.main.temp
					}, this.props.curr, this.props.desired).temperature).toString()
				} | {this.props.report.weather[0].main}</p>
				<button className="btn-more-info">
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</div>
		);
	}
}

// TODO: implement "more info" section
WeatherContainer.propTypes = {
	curr: PropTypes.string.isRequired,
	desired: PropTypes.string.isRequired,
	report: PropTypes.shape({
		base: PropTypes.string,
		clouds: PropTypes.shape({
			all: PropTypes.number
		}),
		cod: PropTypes.number,
		coord: PropTypes.shape({
			lat: PropTypes.number,
			lon: PropTypes.number
		}),
		dt: PropTypes.number,
		id: PropTypes.number,
		main: PropTypes.shape({
			feels_like: PropTypes.number,
			humidity: PropTypes.number,
			pressure: PropTypes.number,
			temp: PropTypes.number,
			temp_max: PropTypes.number,
			temp_min: PropTypes.number
		}).isRequired,
		name: PropTypes.string.isRequired,
		sys: PropTypes.shape({
			country: PropTypes.string,
			id: PropTypes.number,
			sunrise: PropTypes.number,
			sunset: PropTypes.number,
			type: PropTypes.number
		}),
		timezone: PropTypes.number,
		units: PropTypes.shape({
			humidity: PropTypes.string,
			pressure: PropTypes.string,
			temperature: PropTypes.string
		}).isRequired,
		visibility: PropTypes.number,
		weather: PropTypes.arrayOf(PropTypes.shape({
			description: PropTypes.string,
			icon: PropTypes.string,
			id: PropTypes.number,
			main: PropTypes.string.isRequired
		})).isRequired,
		wind: PropTypes.shape({
			deg: PropTypes.number,
			speed: PropTypes.number
		})
	})
}

export default WeatherContainer;