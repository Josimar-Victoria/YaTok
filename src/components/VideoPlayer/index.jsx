import clsx from "clsx";
import { useRef, useState } from "react";
import VideosDescription from "../VideoDescription";
import styles from "./styles.module.css";
import VideosPleyerActions from "./VideosPleyerActions";

export default function VideoPlayer({
  src,
  albumunCover,
  username,
  description,
  songTitle,
}) {

  const [playing, setPlaying] = useState(false);
  const video = useRef();

  const handlePlay = () => {
    const { current: videoEl } = video;
    playing 
      ? videoEl.pause() 
      : videoEl.play();
        setPlaying(!playing);
};


  const playerCassName = clsx(styles.player, {
    [styles.hidden]: playing,
  });

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        src={src}
        controls={false}
        loop
        ref={video}
        onClick={handlePlay}
      />
      <i className={playerCassName} onClick={handlePlay} />
      <VideosPleyerActions />
      <VideosDescription
        albumunCover={albumunCover}
        username={username}
        description={description}
        songTitle={songTitle}
      />
    </div>
  );
}
