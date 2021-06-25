import React from 'react';
import ReactDOM from 'react-dom';
import WeatherList from './components/WeatherList';
import SearchBar from './components/SearchBar';
import weatherDataService from './services/weather-data';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      reports: [],
      searchLocation: null
    }
    this.addLocation = this.addLocation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  addLocation(e) {
    e.preventDefault();
    // TODO: ref
    var arr = document.getElementById('searchLocation').value.split(',');
    var location = {
      city: arr[0],
      country: arr[1]
    };
    // TODO: preventing multiple listings of the same city
    if (arr.length > 1 && !this.state.locations.includes(location)) {
      this.setState({
        locations: this.state.locations.concat(location)
      });
      weatherDataService.getWeatherByCityName(location.city, location.country).then(res => {
        this.setState({
          reports: this.state.reports.concat(res)
        });
      });
    }
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <form onSubmit={this.addLocation}>
          <SearchBar
            submitClass="search-bar-btn"
            textClass="search-bar-input"
            textId="searchLocation"
            textName="searchLocation"
            textPlaceholder="Enter location"
          />
        </form>
        <WeatherList reports={this.state.reports} />
      </div>
    );
  }
}

export default App;
