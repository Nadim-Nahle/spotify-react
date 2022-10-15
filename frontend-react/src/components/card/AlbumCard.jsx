import React from "react";
import "./Card.css";

const AlbumCard = ({ album }) => {
  return (
    <>
      <div className="artist">
        {album?.images[0]?.url ? (
          <img src={album?.images[0]?.url} alt="" />
        ) : (
          <div className="movie-placeholder"> Image Not Found</div>
        )}
        <div className="artist-info">
          <div className="title-container">
            <h3>{album.name}</h3>
          </div>
          <div className="follower-conatiner">
            <p>{album?.artists[0]?.name}</p>
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

export default AlbumCard;
