import React from "react";
import useAuth from "../../hooks/useAuth";
import AlbumCard from "../../components/card/AlbumCard";
import { useSelector } from "react-redux";

const Album = () => {
  const filter = useSelector((state) => state.searchKey.filter);

  // const { auth } = useAuth();
  // const album = auth.authAlbum;

  const renderAlbums = () => filter?.map((a) => <AlbumCard key={a.id} a={a} />);

  return (
    <>
      <div className="info">
        <h1>{filter ? filter[0]?.artists[0]?.name : null}</h1>
        <p>Albums</p>
      </div>
      <div className="card-container">{renderAlbums()}</div>
    </>
  );
};

export default Album;
