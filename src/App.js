import React from 'react';
import WeatherList from './components/WeatherList';
import SearchBar from './components/SearchBar';
import weatherDataService from './services/weather-data';
import titleize from 'titleize';
import './index.css';

const getCountryISO2 = require("country-iso-3-to-2");

export default class App extends React.Component {
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
    let arr = document.getElementById('searchLocation').value.split(',');
    if (arr.length <= 1) {
      arr = ["", ""];
    }
    let country = arr[1].trim().toUpperCase();
    if (country.length == 3) {
      country = getCountryISO2(country);
    }
    let location = {
      city: titleize(arr[0].trim()),
      country: country
    };
    let found = this.state.locations.find(loc => {
      return loc.city == location.city && loc.country == location.country;
    });
    if (found === undefined) {
      this.setState({
        locations: this.state.locations.concat(location)
      });
      weatherDataService.getWeatherByCityName(location.city, location.country).then(res => {
        this.setState({
          reports: this.state.reports.concat(res)
        });
      });
    } else {
      alert("Location already saved");
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
