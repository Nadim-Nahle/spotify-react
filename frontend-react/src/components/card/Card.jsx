import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="artist">
        <img src="https://i.ibb.co/wSCM0CY/bot-image.jpg" alt="" />
        <div className="artist-info">
          <div className="title-container">
            <h3>title</h3>
          </div>
          <div className="follower-conatiner">
            <p>followers</p>
          </div>
          <div className="rating-container">
            <div className="rating">
              <p>rating</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
