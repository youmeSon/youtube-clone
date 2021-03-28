import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet } }) => (
  <div className={styles.container}>
    <li className={styles.video}>
      <img
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className={styles.metadata}>
        <img
          className={styles.profileImg}
          src={snippet.thumbnails.default.url}
          alt="Profile image"
        />
        <div>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
          <p className={styles.viewCount}>{video.statistics.viewCount} views</p>
        </div>
      </div>
    </li>
  </div>
);

export default VideoItem;
