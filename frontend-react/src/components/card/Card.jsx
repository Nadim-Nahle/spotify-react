import React from "react";
import "./Card.css";

const Card = ({ artist }) => {
  return (
    <>
      <div className="artist">
        {artist?.images[0]?.url ? (
          <img src={artist?.images[0]?.url} alt="" />
        ) : (
          <div className="movie-placeholder"> Image Not Found</div>
        )}
        <div className="artist-info">
          <div className="title-container">
            <h3>{artist.name}</h3>
          </div>
          <div className="follower-conatiner">
            <p>{artist.followers.total} followers</p>
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
