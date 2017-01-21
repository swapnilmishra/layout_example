import React from "react";
import Card from "card";
import styles from "./styles.scss";
import FontAwesome from "react-fontawesome";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const containerCSS = cx("pure-g", styles.container);
const cardCSS = cx("pure-u-1", "pure-u-md-1-2", "pure-u-lg-1-3", 'pure-u-xl-1-4', styles.card);

const Grid = props => {
  return (
    <div>
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
