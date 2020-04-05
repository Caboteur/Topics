import React, { Component } from 'react';
import styles from './ButtonTrend.module.css';

class ButtonTrend extends Component {

  render() {
    return (

      <div id={this.props.id} onClick={this.props.click} className={styles.Button}>
        {this.props.title}
      </div>
    );
  }
}

export default ButtonTrend;
