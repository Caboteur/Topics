import React, {Component} from 'react';
import styles from './Preloader.module.css';

 class Preloader extends Component {


   render() {
     return (
       <div style={{display:this.props.display}} className={styles.preloader}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
     );
   }
 }

 export default Preloader;
