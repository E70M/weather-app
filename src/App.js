import React from 'react';
import WeatherList from './components/weather-list';
import SearchBar from './components/search-bar';
import weatherDataService from './services/weather-data.js';
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
    // TODO: Add @babel/plugin-proposal-optional-chaining to plugins section of Babel config
    // to enable support for experimental syntax 'optionalChaining', i.e. safe navigation (?.)
    let query = document.querySelector('#searchLocation').value;
    weatherDataService.getWeatherByCityName(query).then(res => {
      let loc = weatherDataService.getCityData(res.id);
      // TODO: update location's report, instead of not allowing an update
      let found = this.state.locations.find(item => item.id === res.id);
      if (!found) {
        this.setState({
          locations: this.state.locations.concat({
            city: loc.city,
            // state
            country: loc.country,
            id: loc.id
          }),
          reports: this.state.reports.concat(res)
        });
      } else {
        alert("Location already saved");
      }
    }).catch(err => {
      // TODO: add logging
      console.log(err);
      alert("Could not load location")}
    );
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
