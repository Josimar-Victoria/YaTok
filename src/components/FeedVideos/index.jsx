import VideoPlayer from "../VideoPlayer";
import VIDEOS from "../../util/pruebas.json";
import styles from "./styles.module.css";
export default function FeedVideos() {
  return (
    <section>
      {VIDEOS.map((videos) => (
        <div key={videos.id} className={styles.item}>
          <VideoPlayer {...videos} />
        </div>
      ))}
    </section>
  );
}
