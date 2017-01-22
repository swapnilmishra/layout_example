import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const placeHolderCSS = cx("col-lg-3", "col-md-4", "col-sm-6", "col-xs-12",styles.placeholderitem);

const Placeholder = () => {
  return (
    <div className="timeline-item">
      <div className="animated-background facebook">
        <div className="background-masker header-top" />
        <div className="background-masker header-left" />
        <div className="background-masker header-right" />
        <div className="background-masker header-bottom" />
        <div className="background-masker subheader-left" />
        <div className="background-masker subheader-right" />
        <div className="background-masker subheader-bottom" />
        <div className="background-masker content-top" />
        <div className="background-masker content-first-end" />
        <div className="background-masker content-second-line" />
        <div className="background-masker content-second-end" />
        <div className="background-masker content-third-line" />
        <div className="background-masker content-third-end" />
      </div>
    </div>
  );
};

const PlaceholderGrid = props => {
  return (
    <div className="container">
      <div className="row">
        {getPlaceholders(props.count)}
      </div>
    </div>
  );
};

function getPlaceholders(count){
    let arr = [];
    for(let i=0; i<count; i++){
        arr.push(<div className={placeHolderCSS} key={i}><Placeholder/></div>)
    }
    return arr;
}

export default PlaceholderGrid;
