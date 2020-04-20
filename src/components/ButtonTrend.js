import React, { Component } from 'react';
import styles from './ButtonTrend.module.css';
import { googleTranslate } from "./Api/googleTranslate.js";

class ButtonTrend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"ok",
  }
}

        componentDidMount(){
          let top = ""
          googleTranslate.translate(this.props.title, 'fr', function(err, translation) {


            getResult(translation.translatedText)

          });
          const getResult = result =>{
            this.setState({title:result})
          }
        }

  render() {
    return (


      <div id={this.props.id} style={{display:this.props.display}} name={this.props.value} onClick={this.props.click} className={styles.Button}>
        {this.props.trad == true? this.state.title : this.props.value}
      </div>

    );
  }
}

export default ButtonTrend
