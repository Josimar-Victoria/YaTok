import clsx from "clsx";
import { useRef } from "react";
import useIntersectionVideoPlayer from "../../hooks/useIntersectionVideoPlayer";
import VideosDescription from "../VideoDescription";
import styles from "./styles.module.css";
import VideosPleyerActions from "./VideosPleyerActions";

export default function VideoPlayer({
  src,
  albumunCover,
  username,
  description,
  songTitle,
  avatar,
}) {
  const video = useRef();
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video });

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
      <VideosPleyerActions avatar={avatar} username={username} />
      <VideosDescription
        albumunCover={albumunCover}
        username={username}
        description={description}
        songTitle={songTitle}
      />
    </div>
  );
}
