import * as React from "react";
import { MutableRefObject } from "react";
import LibrarySong from "./LibrarySong";

export interface Props {
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
  libraryStatus: boolean;
}

const Library: React.FC<Props> = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.name}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
