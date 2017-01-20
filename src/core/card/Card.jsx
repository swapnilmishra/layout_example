import React from "react";
import moment from "moment";
import styles from "./styles.scss";
import FontAwesome from "react-fontawesome";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const IMAGE_BASE_URL = "https://www.simscale.com";

const {
  wrapper,
  card,
  radius,
  shadowDepth,
  cardimage,
  border_tlr_radius,
  cardpadding,
  cardauthor,
  cardauthorcontent,
  cardauthorsub
} = styles;

const classCard = cx(card, radius, shadowDepth, wrapper);
const classCardImage = cx(cardimage, border_tlr_radius);
const cardLink = cx(styles.truncate, styles.card_link);
const cardDetails = cx(styles.card_details);
const actionContainer = cx(styles.card_action_container, styles.clear);

class Card extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      showPreviewIcon : false
    }
  }
  
  render() {

    const previewClassnames = cx({show:this.state.showPreviewIcon},{hide:!this.state.showPreviewIcon},styles.preview)

    return (
      <div className={classCard}>
        <div className={classCardImage} onMouseOver={this.onThumbOver} onMouseOut={this.onThumbOut}>
          {
            this.props.thumbnailUrl
              ? <img
                src={IMAGE_BASE_URL + this.props.thumbnailUrl}
                alt={this.props.projectName}
                className={border_tlr_radius}
              />
              : <div className={styles.noimage}> No Preview Image </div>
          }
          {
            this.props.thumbnailUrl && 
            <div className={previewClassnames}>
              <FontAwesome name="eye"/>
            </div>
          }
        </div>
        <div className={cardpadding}>
          <div className={cardauthor}>
            <img src="http://lorempixel.com/40/40/sports/" alt="user" />
            <div className={cardauthorcontent}>
              <a href="#" className={cardLink} title={this.props.projectName}>
                {this.props.projectName}
              </a>
              <div className={cardauthorsub}>by {this.props.ownerName}</div>
            </div>
          </div>
        </div>
        <div className={cardDetails}>
          {this.props.numberOfGeometries}
          {" "}CAD models /{" "}
          {this.props.numberOfMeshes}
          {" "}Mesh /{" "}
          {this.props.numberOfSimulations}
          {" "}Simulations
        </div>
        <div className={actionContainer}>
          <div className={styles.card_action_date}>
            Changed{" "}
            {
              moment(
                this.props.lastModificationDate,
                "MMM Do, YYYY h:mm:ss a"
              ).fromNow()
            }
          </div>
          <div className={styles.card_actions}>
            <span>
              <FontAwesome className={styles.card_actions_icon} name="eye" />
              {" "}{this.props.numberOfViews}
            </span>
            <span>
              <FontAwesome className={styles.card_actions_icon} name="heart" />
              {" "}{this.props.numberOfLikes}
            </span>
            <span>
              <FontAwesome
                className={styles.card_actions_icon}
                name="code-fork"
              />
              {" "}{this.props.numberOfCopies}
            </span>
          </div>
        </div>
      </div>
    );
  }

  onThumbOver = () => {
    this.setState({
      showPreviewIcon : true
    })
  }

  onThumbOut = () => {
    this.setState({
      showPreviewIcon : false
    })
  }
}

export default Card;
