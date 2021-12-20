import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../styles/component-styles/search-bar.css';

class SearchBar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="search-bar">
        <input
    type="text"
    className={this.props.textClass}
    id={this.props.textId}
    name={this.props.textName}
    placeholder={this.props.textPlaceholder}
        />
  <button
    type="submit"
    className={this.props.submitClass}
        >
    <FontAwesomeIcon icon={faSearch} />
  </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  submitClass: PropTypes.string.isRequired,
  submitVal: PropTypes.string,
  textClass: PropTypes.string.isRequired,
  textId: PropTypes.string.isRequired,
  textName: PropTypes.string.isRequired,
  textPlaceholder: PropTypes.string.isRequired
}

export default SearchBar;
