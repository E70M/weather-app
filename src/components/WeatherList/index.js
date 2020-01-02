import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WeatherContainer from '../WeatherContainer';
import './index.css';

class WeatherList extends React.Component {
	constructor(props) {
		super(props);
		// TODO: make default fahrenheit
		this.state = {
			currUnits: 'kelvin',
			desiredUnits: 'kelvin',
			reports: this.props.reports
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidUpdate(prev) {
		if (prev.reports !== this.props.reports) {
			this.setState({reports: this.props.reports});
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
						report={report}
						curr={this.state.currUnits}
						desired={this.state.desiredUnits}
					/>
				)}
			</div>
		);
	}
}

WeatherList.propTypes = {
	reports: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default WeatherList;