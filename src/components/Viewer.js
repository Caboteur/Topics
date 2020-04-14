import React, { Component } from 'react';
import styles from './Viewer.module.css';
import news from './icon/news.svg';
import wikipedia from './icon/wikipedia.svg';
import twitter from './icon/twitter.svg';
import youtube from './icon/youtube.svg';
import google from './icon/google.svg';

class Viewer extends Component {

  render() {
    return (
      <div className={styles.articles} style={{display:this.props.display}}>

        <h1>Topics:{this.props.topics}</h1>


     <div>
       <img className={styles.icon} src={wikipedia} />
       <h2 className={styles.article}><a href={this.props.wikiurl}>{this.props.wikititle}</a></h2>
     </div>
     <div>
       <img className={styles.icon} src={google} />
       <h2 className={styles.article}><a href={this.props.googleSearch}>Rechercher sur google</a></h2>
     </div>
     <div>
       <img className={styles.icon} src={twitter} />
       <h2 className={styles.article}><a href={this.props.twitterSearch}>Rechercher sur twitter</a></h2>
     </div>
     <div>
       <img className={styles.icon} src={youtube} />
       <h2 className={styles.article}><a href={this.props.youtubeSearch}>Rechercher sur youtube</a></h2>
     </div>
     <div>
       <img className={styles.icon} src={news} />
       {this.props.url?   <div><h2 className={styles.article}><a href={this.props.url}> {this.props.title}</a></h2>
     <p>{this.props.url.source} </p> </div> : <h2></h2> }
     </div>






    //  {this.props.url1?   <div><h1><a href={this.props.url1}> {this.props.title1}</a></h1>
      //<p>{this.props.url.source1} </p> </div> : <h1></h1> }

      </div>


    );
  }
}

export default Viewer;
