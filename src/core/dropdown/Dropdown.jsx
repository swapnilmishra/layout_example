import React from "react";
import styles from "./styles.scss";
import FontAwesome from "react-fontawesome";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    const classnames = cx(
      {open: this.state.open},
      {close: !this.state.open},
      styles.dropdown,
      this.props.cls
    );
    return (
      <div>
        <a
          className={styles.dropdownroot}
          href="#"
          onClick={this.toggleDropDown}
        >
          {this.props.text}
        </a>
        <FontAwesome
          name={this.state.open ? "angle-up" : "angle-down"}
          className={styles.dropdownicon}
        />
        <ul className={classnames}>
          {this.getListElements(this.props.listItems)}
        </ul>
      </div>
    );
  }

  getListElements(listItems) {
    const len = listItems.length;
    return listItems.map(
      (item, index) => this.getDropdownItem(item, index, len)
    );
  }

  getDropdownItem(item, index, length) {
    const classnames = cx(styles.dropdownli, {
      dropdownborder: index !== length - 1
    });
    return (
      <li className={classnames} key={index}>
        <a key={index} href={item.link || "#"} className={styles.dropdownlink}>
          {item.text}
        </a>
        {item.children ? item.children : null}
      </li>
    );
  }

  toggleDropDown = (e) => {
    this.setState({open: !this.state.open});
  };
}

export default Dropdown;
