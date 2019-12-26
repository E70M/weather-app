import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WeatherContainer from '../WeatherContainer';

class WeatherList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reports: this.props.reports
		};
	}
	render() {
		return (
			<div className="weather-list-container">
				{this.state.reports.map((report) =>
					<WeatherContainer
						location={report.location}
						temperature={report.temperature.toString()}
						condition={report.condition}
					/>
				)}
			</div>
		);
	}
}

WeatherList.propTypes = {
	reports: PropTypes.array,
}

export default WeatherList;