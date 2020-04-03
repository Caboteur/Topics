import React, { Component } from 'react';
import styles from './ButtonTrend.module.css';

class Viewer extends Component {

  render() {
    return (
      <div className={styles.articles} style={{display:this.props.display}}>

      <h1><a href={this.props.wiki}>{this.props.wiki}</a></h1>
      <h1><a href={this.props.googleSearch}>{this.props.googleSearch}</a></h1>
      <h1><a href={this.props.twitterSearch}>{this.props.twitterSearch}</a></h1>

      {this.props.url?   <div><h1><a href={this.props.url}> {this.props.title}</a></h1>
      <p>{this.props.url.source} </p> </div> : <h1></h1> }

    //  {this.props.url1?   <div><h1><a href={this.props.url1}> {this.props.title1}</a></h1>
      //<p>{this.props.url.source1} </p> </div> : <h1></h1> }

      </div>


    );
  }
}

export default Viewer;
