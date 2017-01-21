import React from "react";
import styles from "./styles.scss";
import Navbar from "navbar";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const listItems = [
  {text: "my projects"},
  {text: "public projects", active: true},
  {text: "forum"},
  {
    text: "help",
    dropdown: true,
    listItems: [
      {text: "tutorials", link: "#"},
      {text: "documentation", link: "#"},
      {text: "learning vidoes", link: "#"}
    ]
  }
];

const logo = {url: "/logo.png", alt: "Simscale logo"};

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const classnames = cx(styles.header, styles.clear);
    return (
      <div className={classnames}>
        <Navbar navItems={listItems} logo={logo} />
      </div>
    );
  }
}
