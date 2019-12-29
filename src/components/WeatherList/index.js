import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WeatherContainer from '../WeatherContainer';
import temperatureConverterService from '../../services/temperature-converter';
import './index.css';

class WeatherList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currUnits: 'kelvin',
			desiredUnits: 'kelvin',
			reports: this.props.reports
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidUpdate(prev) {
		if (prev.reports !== this.props.reports) {
			this.setState({ reports: this.props.reports });
		}
	}
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}
	render() {
		return (
			<div className="weather-list-container">
				<p>Temperature is in degrees {this.state.desiredUnits}</p>
				<p>
					<button name='desiredUnits' onClick={this.handleChange} value='fahrenheit'>Fahrenheit</button>
				   	<button name='desiredUnits' onClick={this.handleChange} value='celsius'>Celsius</button>
				   	<button name='desiredUnits' onClick={this.handleChange} value='kelvin'>Kelvin</button>
				</p>
				{this.state.reports.map((report, index) =>
					<WeatherContainer
						key={index}
						location={report.location}
						temperature={Math.round(temperatureConverterService({
							temperature: report.temperature
						}, this.state.currUnits, this.state.desiredUnits).temperature).toString()}
						condition={report.condition}
					/>
				)}
			</div>
		);
	}
}

WeatherList.propTypes = {
	reports: PropTypes.arrayOf(PropTypes.shape({
		location: PropTypes.string.isRequired,
		temperature: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		]).isRequired,
		condition: PropTypes.string.isRequired
	}))
}

export default WeatherList;