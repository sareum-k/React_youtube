import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchBar from './components/search_bar/search_bar';
import styles from '../src/app.module.css';
import DetailsPage from './components/details_page/details_page';

function App({ youtube }) {
  const [videos, setVideos] = useState([]); //비디오를 담는 변수
  const [selectedVideo, setSelectedVideo] = useState(null) //선택한 비디오 기억하기
  const selcetVideo = (video) => {
    setSelectedVideo(video);
  }
  const search = query => {
    youtube
      .search(query)
      .then(video => setVideos(video))
  }

  useEffect(() => { //mount가 되었을 때만 호출이 되도록 [] 추가
    youtube
      .mostPopular()
      .then(video => setVideos(video))
  }, [])
  return (
    <div className={styles.app}>
      <SearchBar onSearch={search} />,
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.details}>
            <DetailsPage video={selectedVideo} />
          </div>)}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClieck={selcetVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  )
}

export default App;
