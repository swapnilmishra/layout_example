import React from 'react';
import Card from 'card';
import styles from './styles.scss'

import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const containerCSS = cx('pure-g',styles.container)
const cardCSS = cx('pure-u-1', 'pure-u-md-1-3','pure-u-lg-1-4',styles.card)

const Grid = (props) => {
  return (
    <div className={containerCSS}>
        {getCards(props.projectsData)}
    </div>
  )
};

function getCards(projects){
  return projects.map( (project,index) => {
    return (
      <div className={cardCSS} key={index}>
        <Card {...project}/>
      </div>
    )
  })
}

export default Grid;