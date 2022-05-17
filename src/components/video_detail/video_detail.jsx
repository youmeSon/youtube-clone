import React from "react";
import styles from "./video_detail.module.css";
const VideoDetail = ({ video }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      id="ytplayer"
      type="text/html"
      title="youtube"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2 className={styles.title}>{video.snippet.title}</h2>
    <div className={styles.statistics}>
      <span className={styles.viewCount}>
        {video.statistics.viewCount
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
        views
      </span>
      <div className={styles.icons}>
        <div className={styles.thumbsUp}>
          <i class="far fa-thumbs-up"></i>
          <span className={styles.like_span}>
            {video.statistics.likeCount
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
          </span>
        </div>

        <div className={styles.share}>
          <i class="fas fa-share"></i>
          <span className={styles.share_span}>SHARE</span>
        </div>
        <div className={styles.save}>
          <i class="fas fa-folder-plus"></i>
          <span className={styles.save_span}>SAVE</span>
        </div>
        <i class={`fas fa-ellipsis-h ${styles.more}`}></i>
      </div>
    </div>
    <hr className={styles.line} />
    <h4 className={styles.channelTitle}>{video.snippet.channelTitle}</h4>
    <pre className={styles.description}>{video.snippet.description}</pre>
    <hr className={styles.line} />
    <h3 className={styles.comment}>
      {video.statistics.commentCount
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
      Comments
    </h3>
  </section>
);

export default VideoDetail;
