/**
*
* Spares-uikit
*
* @author Dmitri Korchemkin
* @source https://github.com/korchemkin/spares-uikit
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ButtonsTwins.css';

class ButtonsTwins extends Component {
  action(event) {
    for (let btn of event.target.parentNode.childNodes) {
      if (btn === event.target) {
        if (!btn.classList.contains('active')) {
          btn.classList.add('active');
        }
      } else {
        if (btn.classList.contains('active')) {
          btn.classList.remove('active');
        }
      }
    }
  }

  render() {
    const items = this.props.items;

    return (
      <div className="spares-buttons-twins">
        {items.map((item, index) =>
          <button type="button" key={index}
                  className="spares-buttons-twins-item"
                  onFocus={this.action}
                  onClick={item.onclick}>
              {item.text}
          </button>
        )}
      </div>
    );
  }
}

ButtonsTwins.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onclick: PropTypes.func.isRequired
    })
  )
};

export default ButtonsTwins;
