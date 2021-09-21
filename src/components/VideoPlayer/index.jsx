import clsx from "clsx";
import { useRef } from "react";
import useIntersectionVideoPlayer from "../../hooks/useIntersectionVideoPlayer";
import VideosDescription from "../VideoDescription";
import styles from "./styles.module.css";
import VideosPleyerActions from "./VideosPleyerActions";

export default function VideoPlayer(props) {
  const video = useRef();
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video });

  const playerCassName = clsx(styles.player, {
    [styles.hidden]: playing,
  });
  const { src, albumunCover, username, description, songTitle, avatar } = props;
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
      <VideosPleyerActions {...props} />
      <VideosDescription {...props}/>
    </div>
  );
}
