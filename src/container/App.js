import React from 'react';
import styles from './App.scss';
import Header from 'header';
import Actionbar from 'actionbar';
import Grid from 'grid';

class App extends React.Component {

  render(){
    return (
      <div className={styles.app}>
        <Header/>
        <Actionbar onSearch={this.props.onSearch}/>
        <Grid projectsData={this.props.projectsData}/>
      </div>
    )
  }
}
export default App;
