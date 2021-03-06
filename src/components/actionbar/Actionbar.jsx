import React from "react";
import styles from "./styles.scss";
import debounce from "utils/debounce";
import ButtonGroup from "buttongroup";
import Button from "button";
import Dropdown from "dropdown";
import Select from "select";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const sortOptions = {
  text: "Sort by",
  listItems: [
    {text: "Views", link: "#", icon: 'eye', sortBy : 'numberOfViews'},
    {text: "Likes", link: "#", icon: 'heart', sortBy: 'numberOfLikes'},
    {text: "Copies", link: "#", icon : 'code-fork', sortBy: 'numberOfCopies'}
  ]
};

const classnames = cx(styles.actionbar);

class Actionbar extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchValue = "";
    // this.debouncedSearchCall = debounce(this.callSearch, 500, this);
  }

  render() {
    return (
      <div className={classnames}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 hidden-xs">
              <h1>Public projects</h1>
            </div>
            <div className="col-lg-5 col-md-4 col-sm-4 col-xs-12">
              <div className={styles.searchContainer}>
                <input
                  type="text"
                  onChange={this.onSearchChange}
                  placeholder="Search..."
                  className={styles.searchbox}
                />
                <Button
                  icon="search"
                  noBorder
                  cls={styles.searchButton}
                  onClick={this.callSearch}
                />
              </div>
            </div>
            <div className="visible-xs col-xs-12">
              <div className={styles.sortbydropdowncontainer}>
                <Select {...sortOptions} onChange={this.props.onSortBy} selectedValue={this.props.sortBy}/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 hidden-xs">
              <div>
                <div className={styles.btngroup}>
                  <ButtonGroup onSortBy={this.props.onSortBy} />
                  <Button icon="list-ul" cls={styles.layoutSwitchButton} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onSearchChange(event) {
    this.searchValue = event.target.value;
    if (this.searchValue.trim() == "") {
      this.callSearch();
    }
  }

  callSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.searchValue);
    }
  };
}

export default Actionbar;
