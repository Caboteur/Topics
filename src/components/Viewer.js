import React, { Component } from 'react';
import styles from './Viewer.module.css';
import news from './icon/news.svg';
import wikipedia from './icon/wikipedia.svg';
import twitter from './icon/twitter.svg';
import youtube from './icon/youtube.svg';
import google from './icon/google.svg';
import exit from './icon/exit.svg';

class Viewer extends Component {

  render() {
    return (
      <div id={this.props.id} className={styles.articles} style={{display:this.props.display}}>
        <div className={styles.headerContainer}>
       <img className={styles.exitButton} src={exit} onClick={this.props.click}/>
        <h1 className={styles.title}>{this.props.topics}</h1>
        </div>
     <div>
       <a href={this.props.wikiurl}>
       <img className={styles.icon} src={wikipedia} />
       <h2 className={styles.article}></h2>
       </a>
     </div>
     <div>
       <a href={this.props.googleSearch}>
       <img className={styles.icon} src={google} />
       <h2 className={styles.article}></h2>
       </a>
     </div>
     <div>
       <a href={this.props.twitterSearch}>
       <img className={styles.icon} src={twitter} />
       <h2 className={styles.article}></h2>
       </a>
     </div>
     <div><a href={this.props.youtubeSearch}>
       <img className={styles.icon} src={youtube} />
       <h2 className={styles.article}></h2>
       </a>
     </div>
     <div>
       <a href={this.props.url}>
       <img className={styles.icon} src={news} />
       {this.props.url?   <div><h2 className={styles.article}> {this.props.title}</h2>
     <p>{this.props.url.source} </p> </div> : <h2></h2> }
       </a>
     </div>






    //  {this.props.url1?   <div><h1><a href={this.props.url1}> {this.props.title1}</a></h1>
      //<p>{this.props.url.source1} </p> </div> : <h1></h1> }

      </div>


    );
  }
}

export default Viewer;
