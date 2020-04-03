import React, { Component } from 'react';
import styles from './ButtonTrend.module.css';

class ButtonTrend extends Component {

  render() {
    return (

      <button id={this.props.id} onClick={this.props.click} className={styles.Button}>
        {this.props.title}
      </button>
    );
  }
}

export default ButtonTrend;
