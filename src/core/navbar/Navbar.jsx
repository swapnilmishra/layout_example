import React from 'react';
import styles from './styles.scss';
import Navitem from './Navitem.jsx';
import Dropdown from 'dropdown';

export default class Navbar extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {this.getLogoElement(this.props.logo)}
                <div className={styles.mainmenu}>
                    <ul className={styles.navbar}>
                        {this.getListElements(this.props.navItems)}
                    </ul>
                </div>
            </div>
        );
    }

    getListElements(navItems){
        return navItems.map( (item,index) => {
            return (
             this.getDropdownItem(item,index)
            )
        })
    }

    getDropdownItem(item,index){
        if(item.dropdown){
            return (
                <Navitem key={index}>
                    <Dropdown cls={styles.dropdown} {...item}/>
                </Navitem>
            )
        }
        return (<Navitem {...item} key={index} index={index}/>)
    }

    

    getLogoElement({url,alt}){
        if(url){
            return (
                <div className={styles.logo}>
                    <img className={styles.image} src={url} alt={alt}/>
                </div>
            )
        }
    }

}

Navbar.propTypes = {
    navItems : React.PropTypes.array.isRequired
}