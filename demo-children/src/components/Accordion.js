import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollaped: true
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isCollaped: !this.state.isCollaped
    });
  }
  
  render() {
    const { heading, children } = this.props;
    const { isCollaped } = this.state;
    
    return (
      <div className="Accordion">
        <div className="Heading" onClick={this.onClick}>
          <h3>{heading}</h3>
        </div>
        { !isCollaped &&<div className="Content">{children}</div>}
      </div>
    );
  }
}

Accordion.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.string
}

export default Accordion;