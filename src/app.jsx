import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchBar from './components/search_bar/search_bar';
import styles from '../src/app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]); //비디오를 담는 변수
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
      <VideoList videos={videos} />
    </div>
  )
}

export default App;
