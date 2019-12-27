import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WeatherContainer from '../WeatherContainer';
import './index.css';

class WeatherList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			desiredTemperature: 'kelvin',
			reports: this.props.reports
		};
	}
	componentDidUpdate(prev) {
		if (prev.reports !== this.props.reports) {
			this.setState({ reports: this.props.reports });
		}
	}
	render() {
		return (
			<div className="weather-list-container">
				{this.state.reports.map((report, index) =>
					<WeatherContainer
						key={index}
						location={report.location}
						temperature={Math.round(report.temperature).toString()}
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