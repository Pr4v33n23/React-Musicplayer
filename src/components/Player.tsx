import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { MutableRefObject, useEffect, useRef, useState } from "react";

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
  isPlaying: boolean;
  setIsPlaying: Function;
  setCurrentSong: Function;
  songs: Array<{
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: string;
    active: boolean;
  }>;
  audioRef: MutableRefObject<HTMLAudioElement>;
  setSongs: Function;
}

const Player: React.FC<Props> = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  songs,
  audioRef,
  setCurrentSong,
  setSongs,
}) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
  }, [currentSong, setSongs, songs]);

  const playSongHandler = (): void => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time: number) => {
    return `${Math.floor(time / 60)}:${("0" + Math.floor(time % 60)).slice(
      -2
    )}`;
  };

  const timeUpdateHandler = (e: any): void => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  const dragHandler = (e: { target: { value: any } }) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackerHanlder = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }

    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        if (isPlaying) {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise.then((audio) => {
              audioRef.current.play();
            });
          }
        }
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }

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
    <div className="player">
      <div className="time-control">
        <p>{ getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime || 0}
          onChange={dragHandler}
          type="range"
        ></input>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackerHanlder("skip-back")}
          className="skip-back"
          size="1x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="1x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="1x"
          icon={faAngleRight}
          onClick={() => skipTrackerHanlder("skip-forward")}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
