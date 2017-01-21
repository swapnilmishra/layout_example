import React from "react";
import styles from "./styles.scss";
import debounce from "utils/debounce";
import ButtonGroup from "buttongroup";
import Button from "button";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const classnames = cx(styles.actionbar, "pure-g");

class Actionbar extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchValue = '';
    // this.debouncedSearchCall = debounce(this.callSearch, 500, this);
  }

  render() {
    return (
      <div className={classnames}>
        <div className="pure-u-lg-3-5 pure-u-md-1-3 pure-u-sm-1">
          <h1>Public projects</h1>
        </div>
        <div className="pure-u-lg-1-5 pure-u-md-1-3 pure-u-sm-1">
          <div className={styles.searchContainer}>
            <input
              type="text"
              onChange={this.onSearchChange}
              placeholder="Search..."
              className={styles.search}
            />
            <Button icon="search" noBorder cls={styles.searchButton} onClick={this.callSearch} />
          </div>
        </div>
        <div className="pure-u-lg-1-5 pure-u-md-1-3 pure-u-sm-1">
          <div>
            <div className={styles.btngroup}>
              <ButtonGroup onSortBy={this.props.onSortBy} />
              <Button icon="list-ul" cls={styles.layoutSwitchButton} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  onSearchChange(event) {
    this.searchValue = event.target.value;
    if(this.searchValue.trim() == ''){
      this.callSearch();
    }
  }

  callSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.searchValue);
    }
  }

}

export default Actionbar;
