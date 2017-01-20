import React from 'react';
import styles from './styles.scss';
import debounce from 'utils/debounce';

class Actionbar extends React.Component  {

  constructor(props){
    super(props)
    this.onSearch = this.onSearch.bind(this)
    this.debouncedSearchCall = debounce(this.callSearch,1000,this)
  }

  render(){
    return (
      <div className={styles.actionbar}>
        <input type="text" onChange={this.onSearch}/>
      </div>
    );
  }

  onSearch(event) {
    if(this.props.onSearch){
      this.debouncedSearchCall(event.target.value)
    }
  }

  callSearch(value){
    this.props.onSearch(value)
  }
};

export default Actionbar;