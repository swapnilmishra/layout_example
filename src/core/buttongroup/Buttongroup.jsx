import React from "react";
import styles from "./styles.scss";
import Button from 'button'

const ButtonGroup = props => {
  return (
    <span className={styles.btngroup}>
      <Button icon="eye" cls={styles.btn} noBorder title='Sort by number of views' onClick={()=> {props.onSortBy('numberOfViews')}}/>
      <Button icon="heart" cls={styles.btn} noBorder title='Sort by number of likes' onClick={()=> {props.onSortBy('numberOfLikes')}}/>
      <Button icon="code-fork" cls={styles.btn} noBorder title='Sort by number of copies' onClick={()=> {props.onSortBy('numberOfCopies')}}/>
      <Button icon="clock-o" cls={styles.btn} noBorder title='Sort by date updated'/>
    </span>
  );
};

export default ButtonGroup;
