import React from "react";
import "./Card.css";

const AlbumCard = ({ album }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="album">
        {album?.images[0]?.url ? (
          <img src={album?.images[0]?.url} alt="" />
        ) : (
          <div className="movie-placeholder"> Image Not Found</div>
        )}
        <div className="artist-info">
          <div className="title-container">
            <h3>{album.name}</h3>
          </div>
          <div className="artist-name">
            <p>{album?.artists[0]?.name}</p>
          </div>
          <div className="rating-container">
            <div className="date">
              <p>{album?.release_date}</p>
              <p>{album?.total_tracks} tracks</p>
            </div>
          </div>
        </div>
        <div
          className="preview"
          onClick={() => openInNewTab(album?.external_urls?.spotify)}
        >
          Preview on Spotify
        </div>
      </div>
    </>
  );
};

export default AlbumCard;
