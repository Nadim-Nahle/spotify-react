import React from "react";
import useAuth from "../../hooks/useAuth";
import AlbumCard from "../../components/card/AlbumCard";

const Album = () => {
  const { auth } = useAuth();
  const album = auth.authAlbum;

  const renderAlbums = () => album?.map((a) => <AlbumCard key={a.id} a={a} />);

  return (
    <>
      <div className="info">
        <h1>{album ? album[0]?.artists[0]?.name : null}</h1>
        <p>Albums</p>
      </div>
      <div className="card-container">{renderAlbums()}</div>
    </>
  );
};

export default Album;
