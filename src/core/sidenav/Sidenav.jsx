import React from "react";
import styles from "./styles.scss";

const {open, outerclose, toggleoverlay, close} = styles;

export default class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {open: this.props.open ? true : false};
  }

  componentWillReceiveProps(nextProps){
    // if(nextProps.open !== this.state.open){
    //   this.setState({open : nextProps.open})
    // }
  }

  render() {
    return (
      <aside className={this.props.open ? open : ""}>
        <div className={outerclose}>
          <a className={close} onClick={() => this.props.children()}>
            <span />
          </a>
        </div>
        <nav>
          <ul>
            <li><a href="#!">Switch to list view</a></li>
            <li><a href="#!">Features</a></li>
            <li><a href="#!">Pricing</a></li>
            <li><a href="#!">Documentation</a></li>
            <li><a href="#!">About</a></li>
          </ul>
        </nav>
      </aside>
    );
  }
}
