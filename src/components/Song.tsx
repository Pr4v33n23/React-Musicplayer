import * as React from "react";

export interface Props {
  currentSong: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: string;
    active: boolean;
  };
}

const Song: React.FC<Props> = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img alt={currentSong.name} src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
