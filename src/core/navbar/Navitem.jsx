import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Navitem = (props) => {
    const classnames = cx({active : props.active},props.cls,styles.navbarli);
    const el = <li className={classnames} key={props.index} onClick={props.onClick}>
            <a key={props.index} href={props.link || '#'} className={styles.navbarlink}>{props.text}</a>
        </li>
    return (
        props.children ? <li className={classnames} key={props.index}>{props.children}</li> : el
    )
}


export default Navitem;