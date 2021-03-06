/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import './Paragraph.css';

class Paragraph extends Component {
  render() {
    return (
        <p className="spares-paragraph">{this.props.children}</p>
    );
  }
}

export default Paragraph;
