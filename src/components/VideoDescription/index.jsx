import MusicIcon from "../../util/icons/MusicIcon";
import SongTickers from "../SongTicker";
import AlbumDisk from "./AlbumDisk";
import styles from "./styles.module.css";
export default function VideosDescription({
  albmunCover,
  author,
  description,
  songTitle,
}) {
  return (
    <footer className={styles.description}>
    <div className={styles.textWrapper}>
      <section>
        <strong>
          <a className={styles.author} href={`/user/${author}`}>
            @{author}
          </a>
        </strong>
        <p className={styles.text}>
          {description}
        </p>
      </section>
      <SongTickers songTitle={songTitle} />
    </div>

    <div>
      <AlbumDisk albmunCover={albmunCover} />
    </div>

  </footer>
  );
}
