import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    setSelectedVideo(null);
    let id = "";
    let channelId = "";
    youtube
      .search(query) //
      .then((videos) => {
        for (let i = 0; i < videos.length; i++) {
          if (i === videos.length - 1) {
            id += videos[i].id;
          } else {
            id += `${videos[i].id},`;
          }
        }
      })
      .then(() => {
        youtube
          .videos(id) //
          .then((res) => {
            setVideos(res);
            for (let i = 0; i < res.length; i++) {
              channelId += `&id=${res[i].snippet.channelId}`;
            }
          });
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}

        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
