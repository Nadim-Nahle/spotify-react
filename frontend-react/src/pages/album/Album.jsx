import React from "react";
import useAuth from "../../hooks/useAuth";
import AlbumCard from "../../components/card/AlbumCard";

const Album = () => {
  const { auth } = useAuth();
  const album = auth.authAlbum;

  const renderAlbums = () => album?.map((a) => <AlbumCard key={a.id} a={a} />);

  console.log("albu", album);
  return (
    <>
      <div className="info">
        <h1>{album[0]?.artists[0].name}</h1>
        <p>Albums</p>
      </div>
      <div className="card-container">{renderAlbums()}</div>
    </>
  );
};

export default Album;