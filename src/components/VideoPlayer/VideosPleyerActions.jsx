import React from "react";
import { Comment } from "../../util/icons/Comment";
import { Heart } from "../../util/icons/Heart";
import { Share } from "../../util/icons/Share";
import styles from "./styles.module.css";
export default function VideosPleyerActions({
  shares = 2235,
  likes = 12119,
  comments = 908,
}) {
    const handleLikes = () => {
        alert("like")
    }
    const handleComments = () => {
        alert("comments")
    }
    const handleShare = () => {
        alert("share")
    }
  return (
    <aside className={styles.actions}>
      <button onClick={handleLikes} className={styles.action}>
        <Heart />
        <span title="like">{likes}</span>
      </button>

      <button onClick={handleComments} className={styles.action}>
        <Comment />
        <span title="comments">{comments}</span>
      </button>

      <button onClick={handleShare} className={styles.action}>
        <Share />
        <span title="shares">{shares}</span>
      </button>
    </aside>
  );
}
