import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img onClick={() => props.handleClick(props.id)} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;