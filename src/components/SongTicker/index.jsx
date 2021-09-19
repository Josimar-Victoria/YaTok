import React from "react";
import MusicIcon from "../../util/icons/MusicIcon";
import styles from "./styles.module.css";
import Marquee from "react-fast-marquee";
export default function SongTickers({ songTitle }) {
  return (
    <div className={styles.song}>
      <MusicIcon />
      <Marquee gradient={false} speed="50">
        {songTitle}
      </Marquee>
    </div>
  );
}
