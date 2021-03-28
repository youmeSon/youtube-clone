import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => (
  <li className={styles.video}>
    <img
      className={styles.thumbnail}
      src={props.video.snippet.thumbnails.medium.url}
      alt="thumbnail"
    />
    <div className={styles.metadata}>
      <img
        className={styles.profileImg}
        src={props.video.snippet.thumbnails.default.url}
        alt="Profile image"
      />
      <div>
        <p className={styles.title}>{props.video.snippet.title}</p>
        <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
        <p className={styles.viewCount}>
          {props.video.statistics.viewCount} views
        </p>
      </div>
    </div>
  </li>
);

export default VideoItem;
