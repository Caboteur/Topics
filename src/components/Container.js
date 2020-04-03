import React, { Component } from 'react';
import ButtonTrend from './ButtonTrend.js'
import styles from './Container.module.css';
import axios from 'axios';
import Datas from './Api/Api-request.js'
import Viewer from './Viewer.js'
import wiki from 'wikijs'

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reponse:[],
      reponseFR:[],
      reponseUS:[],
      reponseDE:[],
      wiki:"",
      value:"FR",
      display:"none",
      googleSearch:"tendances",
      twitterSearch:"tendances,",
      country:  ["FR","US","DE","GB","IT","BE","IN"]
    }
  }

  componentDidMount(){
    this.News()
  }


  async News(){
    const response= await fetch('/news-trend-'+this.state.value);
    const body = await response.json();
    console.log(body)
    this.setState( {reponse:body})
  }

  handleChange (event){
    this.setState({value: event.target.value}, ()=>{
    this.News();
    })

  }

  handleClick(e){
    if (this.state.display=="none"){
      this.setState({display:"inherit"});
    }else{
      this.setState({display:"none"});
    }
    const elem = e.target.innerHTML
    const id = e.target.id;
    this.wikipedia(elem);
    this.googleSearch(elem);
    this.twitterSearch(elem);
    const element = document.getElementById(id)
    element.className=styles.articleContainerFull
    //  elemtn.classList.remove("styles.articleContainerFull")
  }

  wikipedia (data, err){
    wiki({ apiUrl: 'https://fr.wikipedia.org/w/api.php' })
    .find(data)
      .then(page => console.log(page))
    .then(page => this.setState({wiki:page.raw.fullurl}))
  }

  googleSearch(data){
    const search = 'https://www.google.com/search?q='+data;
    this.setState({googleSearch:search})
  }

  twitterSearch(data){
    const search = 'https://twitter.com/search?q='+data+'&src=typed_query'
    this.setState({twitterSearch:search})
  }

  render(props) {

    return (
      <div className={styles.Container}>
      <div className={styles.selectContainer}>
      <select  className={styles.selector} onChange={this.handleChange.bind(this)} value={this.state.value}>

      {this.state.country.map((country)=>
       <option className={styles.options} value={country}>{country}</option>

      )}
</select>

      </div>
      <div className={styles.dataConatainer}>
      {
        this.state.reponse.map((trend, index) =>
        <div id={index} className={styles.articleContainer}>

        <ButtonTrend id={index} click={this.handleClick.bind(this)} key={index} title={trend.topic.title.query}/>

        <Viewer wiki={this.state.wiki}
         googleSearch={this.state.googleSearch}
         twitterSearch={this.state.twitterSearch}
         display={this.state.display}
         source={trend.topic.articles[0].source}
         title={trend.topic.articles[0].title}
         url={trend.topic.articles[0].url}
         />

        </div>

      )}

      </div>



      </div>
    );
  }
}

export default Container;
