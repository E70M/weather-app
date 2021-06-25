import React from 'react';
import PropTypes from 'prop-types';

class DataDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.renderData = this.renderData.bind(this);
  }
  renderData() {
    var data = [];
    if (this.props.type === 'json') {
      this.props.fields.forEach(field => {
  if (this.props.data.hasOwnProperty(field)) {
    data.push({
      key: field,
      value: JSON.stringify(this.props.data[field])
    });
        }
      });
    }
    return data.map((item, key) => <p className={this.props.className} key={key}>{item.key}: {item.value}</p>);
  }
  render() {
    return (
      <div>
        {this.renderData()}
      </div>
    );
  }
}

DataDisplay.propTypes = {
  className: PropTypes.string,
  data: PropTypes.any.isRequired,
  fields: PropTypes.array,
  type: PropTypes.string.isRequired
}

export default DataDisplay;
