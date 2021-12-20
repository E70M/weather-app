import React from 'react';
import PropTypes from 'prop-types';
import WeatherContainer from './weather-container';
import titleize from 'titleize';
import '../styles/component-styles/weather-list.css';

class WeatherList extends React.Component {
  constructor(props) {
    super(props);
    // TODO: make default fahrenheit
    this.state = {
      currUnits: 'kelvin',
      desiredUnits: 'kelvin',
      reports: this.props.reports,
      units: ['fahrenheit', 'celsius', 'kelvin']
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prev) {
    if (prev.reports !== this.props.reports) {
      this.setState({reports: this.props.reports});
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // TODO: add keys to child components (WeatherContainer?)
    return (
      <div className="weather-list-container">
        <p>Temperature is in degrees {this.state.desiredUnits}</p>
        <p>
          {this.state.units.map((unit) =>
            <button
              name='desiredUnits'
              onClick={this.handleChange}
              value={unit}
            >
              {titleize(unit)}
            </button>
          )}
        </p>
        {this.state.reports.map((report, index) =>
          <WeatherContainer
            key={index}
            curr={this.state.currUnits}
            desired={this.state.desiredUnits}
            primary={['name', 'main.temp', 'weather[0].main']}
            secondary={['clouds', 'coord', 'main', 'weather']}
            report={report}
          />
        )}
      </div>
    )
  }
}

WeatherList.propTypes = {
  reports: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default WeatherList;
