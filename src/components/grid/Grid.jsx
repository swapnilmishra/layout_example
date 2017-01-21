import React from "react";
import Card from "card";
import styles from "./styles.scss";
import FontAwesome from "react-fontawesome";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const containerCSS = cx("row", styles.container);
const cardCSS = cx('col-lg-3','col-md-4','col-sm-6','col-xs-12',styles.card);

const Grid = props => {
  return (
    <div className='container'>
      <SortTag sortBy={props.sortBy} />
      <div className={containerCSS}>
        {getCards(props.projectsData)}
      </div>
    </div>
  );
};

const SortTag = props => {
  return (
    <div>
      {props.sortBy && (
            <div className={styles.sorttag}>
              <span>Sorted by <strong>{sortByMap[props.sortBy]}</strong></span>
              <a href="javascript:void(0)">Clear</a>
            </div>
          )}
    </div>
  );
};

const sortByMap = {
  numberOfCopies: "Number of copies",
  numberOfViews: "Number of views",
  numberOfLikes: "Number of likes"
};

function getCards(projects) {
  return projects.map((project, index) => {
    return (
      <div className={cardCSS} key={index}>
        <Card {...project} />
      </div>
    );
  });
}

export default Grid;
