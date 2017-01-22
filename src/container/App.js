import React from "react";
import styles from "./App.scss";
import Header from "header";
import Actionbar from "actionbar";
import Grid from "grid";
import Sidenav from "sidenav";
import Button from "button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fabOpen: false};
  }
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Actionbar
          onSearch={this.props.onSearch}
          onSortBy={this.props.onSortBy}
          sortBy={this.props.sortBy}
        />
        <Grid
          projectsData={this.props.projectsData}
          sortBy={this.props.sortBy}
          clearSortResult={this.props.clearSortResult}
        />
        <Sidenav open={this.state.fabOpen}>
          {() => {
              this.setState({fabOpen: false});
            }}
        </Sidenav>
        <div className={styles.fabicon}>
          <Button
            icon="ellipsis-v"
            cls={styles.fabbutton}
            noBorder
            onClick={() => {
                this.setState({fabOpen: true});
              }}
          />
        </div>
      </div>
    );
  }
}
export default App;
