import * as React from "react";
import { MutableRefObject } from "react";

export interface Props {
  song: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: string;
    active: boolean;
  };
  songs: Array<{
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: string;
    active: boolean;
  }>;
  setCurrentSong: Function;
  audioRef: MutableRefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setSongs: Function;
  id: string;
}

const LibrarySong: React.FC<Props> = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  id,
}) => {
  const songSelectHandler = () => {
    const newSongs = songs.map((currentSong) => {
      if (currentSong.id === id) {
        return {
          ...currentSong,
          active: true,
        };
      } else {
        return {
          ...currentSong,
          active: false,
        };
      }
    });

    setSongs(newSongs);

    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
