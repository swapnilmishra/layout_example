import React from "react";
import styles from "./styles.scss";
import Navitem from "./Navitem.jsx";
import Dropdown from "dropdown";
import FontAwesome from "react-fontawesome";

// const containerCSS = cx("pure-g", styles.container);
// const cardCSS = cx("pure-u-1", "pure-u-md-1-3", "pure-u-lg-1-4", styles.card);
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2">
            {this.getLogoElement(this.props.logo)}
          </div>
          <div className="col-lg-8 col-md-8 col-sm-7 hidden-xs">
            <div className={styles.mainmenu}>
              <ul className={styles.navbar}>
                {this.getListElements(this.props.navItems)}
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3">
            <div className={styles.profileavatar}>
              <span className={styles.profilename}>swapnil</span>
              <img src="http://lorempixel.com/40/40/sports/" alt="user" />
              <span className={styles.caret}>
                <FontAwesome name="angle-down" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getListElements(navItems) {
    return navItems.map((item, index) => {
      return this.getDropdownItem(item, index);
    });
  }

  getDropdownItem(item, index) {
    if (item.dropdown) {
      return (
        <Navitem key={index}>
          <Dropdown cls={styles.dropdown} {...item} />
        </Navitem>
      );
    }
    return <Navitem {...item} key={index} index={index} />;
  }

  getLogoElement({url, alt}) {
    if (url) {
      return (
        <div className={styles.logo}>
          <img className={styles.image} src={url} alt={alt} />
        </div>
      );
    }
  }
}

Navbar.propTypes = {navItems: React.PropTypes.array.isRequired};
