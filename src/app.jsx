import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchBar from './components/search_bar/search_bar';
import styles from '../src/app.module.css';

function App() {
  const [videos, setVideos] = useState([]); //비디오를 담는 변수
  const search = query => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyB8LVueml1W9KsydOwUG0HjL8S1Yw0Uhww&key=AIzaSyB8LVueml1W9KsydOwUG0HjL8S1Yw0Uhww`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({ ...item, id: item.id.videoId })))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => { //mount가 되었을 때만 호출이 되도록 [] 추가
    // console.log('wow')
    const axios = require('axios');

    const config = {
      method: 'get',
      url: 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyB8LVueml1W9KsydOwUG0HjL8S1Yw0Uhww&key=AIzaSyB8LVueml1W9KsydOwUG0HjL8S1Yw0Uhww',
      headers: {}
    };

    axios(config)
      .then(response => {
        console.log(response);
        setVideos(response.data.items)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <div className={styles.app}>
      <SearchBar onSearch={search} />,
      <VideoList videos={videos} />
    </div>
  )
}

export default App;
