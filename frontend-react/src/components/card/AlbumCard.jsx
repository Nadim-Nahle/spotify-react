import React from "react";
import "./Card.css";

const AlbumCard = ({ a }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="album">
        {a?.images[0]?.url ? (
          <img src={a?.images[0]?.url} alt="" />
        ) : (
          <div className="movie-placeholder"> Image Not Found</div>
        )}
        <div className="artist-info">
          <div className="title-container">
            <h3>{a?.name}</h3>
          </div>
          <div className="artist-name">
            <p>{a?.artists[0]?.name}</p>
          </div>
          <div className="rating-container">
            <div className="date">
              <p>{a?.release_date}</p>
              <p>{a?.total_tracks} tracks</p>
            </div>
          </div>
        </div>
        <div
          className="preview"
          onClick={() => openInNewTab(a?.external_urls?.spotify)}
        >
          Preview on Spotify
        </div>
      </div>
    </>
  );
};

export default AlbumCard;
