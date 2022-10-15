import React from "react";
import Rate from "../rate/Rate";
import "./Card.css";

const Card = ({ artist, getAlbums }) => {
  return (
    <>
      <div className="artist" onClick={() => getAlbums(artist)}>
        {artist?.images[0]?.url ? (
          <img src={artist?.images[0]?.url} alt="" />
        ) : (
          <div className="movie-placeholder"> Image Not Found</div>
        )}
        <div className="artist-info">
          <div className="title-container">
            <h3>{artist?.name}</h3>
          </div>
          <div className="follower-conatiner">
            <p>{artist?.followers?.total} followers</p>
          </div>
          <div className="rating-container">
            <div className="rating">
              <Rate rating={artist?.popularity / 20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
