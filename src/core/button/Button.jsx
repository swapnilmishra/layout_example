import React from "react";
import styles from "./styles.scss";
import FontAwesome from "react-fontawesome";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Button = props => {
  const classnames = cx(styles.btn,props.cls,{btnborder:!props.noBorder});
  return props.icon ? <button className={classnames} {...props}>
      <FontAwesome name={props.icon} />
      {props.text}
    </button> : <button {...props} className={classnames}>{props.text}</button>;
};

export default Button;
