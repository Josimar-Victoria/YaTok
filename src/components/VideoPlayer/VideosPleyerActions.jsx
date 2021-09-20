import React from "react";
import { Comment } from "../../util/icons/Comment";
import { Heart } from "../../util/icons/Heart";
import { Share } from "../../util/icons/Share";
import styles from "./styles.module.css";
export default function VideosPleyerActions({
  shares = 2235,
  likes = 12119,
  comments = 908,
  avatar,
  username
}) {
    const handleLike = () => {
        window.alert("like")
    }
    const handleComment = () => {
        alert("comments")
    }
    const handleShare = () => {
        alert("share")
    }
  return (
    <aside className={styles.actions}>

    <div className={styles.user}>
      <img alt={username} src={avatar} />
      <img src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg' width='24' />
    </div>

    <button onClick={handleLike} className={styles.action}>
      <Heart width='45' />
      <span title='like'>{likes}</span>
    </button>

    <button onClick={handleComment} className={styles.action}>
      <Comment width='45' />
      <span title='comments'>{comments}</span>
    </button>

    <button onClick={handleShare} className={styles.action}>
      <Share width='45' />
      <span title='shares'>{shares}</span>
    </button>
  </aside>
  );
}
