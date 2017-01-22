import React from "react";
import styles from "./styles.scss";

class Select extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          selectedValue : props.selectedValue || props.text
      }
  }
  render() {
    const props = this.props;
    return (
      <div className={styles.select}>
        <select value={this.state.selectedValue} onChange={this.onChange}>
          <option value={props.text} disabled> {props.text} </option>;
          {props.listItems.map((item, index) => {
              return (
                <option value={item.sortBy} key={index}> {item.text} </option>
              );
            })}
        </select>
      </div>
    );
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      selectedValue : nextProps.selectedValue || this.props.text
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props;
  }

  onChange = event => {
    this.props.onChange(event.target.value);
    this.setState(
        {
            selectedValue : event.target.value
        }
    )
  };
}

export default Select;
