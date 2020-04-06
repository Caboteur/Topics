import React, { Component } from 'react';
import ButtonTrend from './ButtonTrend.js'
import styles from './Container.module.css';
import axios from 'axios';
import Datas from './Api/Api-request.js'
import Viewer from './Viewer.js'
import wiki from 'wikijs'
import countries from './Api/countries.js'



class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reponse:[],
      wiki:"",
      value:"FR",
      display:"none",
      googleSearch:"tendances",
      twitterSearch:"tendances",
      youtubeSearch:"tendances",
      country:countries()
    }
  }

  componentDidMount(){
    console.log(countries())
    this.News();
    wiki({ apiUrl: 'https://fr.wikipedia.org/w/api.php' })
  //  .geoSearch(48.853847099999996, 2.4623418999999998, 10000)

  //  .then(titles => console.log(titles));
  }


  async News(){
    this.setState({ reponse: [] })
    const response= await fetch('/news-trend-'+this.state.value);
    const body = await response.json();
      console.log(body)
   body.map((tab)=>{

      if (tab.country  == this.state.value){
        this.setState({ reponse: [...this.state.reponse, tab] }, console.log(this.state.reponse))
      }
    })
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
    this.youtubeSearch(elem);
    const element = document.getElementById(id)
    element.className=styles.articleContainerFull
    //  elemtn.classList.remove("styles.articleContainerFull")
  }

  wikipedia (data, err){
    wiki({ apiUrl: 'https://fr.wikipedia.org/w/api.php' })
    .find(data)
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

  youtubeSearch(data){
    const search = 'https://www.youtube.com/results?search_query='+data;
    this.setState({youtubeSearch:search})
  }

  render(props) {

    return (
      <div className={styles.Container}>
        <div className={styles.selectContainer}>
          <select  className={styles.selector} onChange={this.handleChange.bind(this)} value={this.state.value}>

            {this.state.country.map((country, index)=>
              <option key={index} className={styles.options} value={country}>{country}</option>

            )}
          </select>

        </div>
        <div >
          {
            this.state.reponse.map((trend, index) =>

            <div id={index} className={styles.articleContainer}>

              <ButtonTrend id={index} click={this.handleClick.bind(this)} key={index} title={trend.topic.title.query}/>

              <Viewer wiki={this.state.wiki}
                googleSearch={this.state.googleSearch}
                twitterSearch={this.state.twitterSearch}
                youtubeSearch={this.state.youtubeSearch}
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
