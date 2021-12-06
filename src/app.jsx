import { useEffect, useState } from 'react';
import './App.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]); //비디오를 담는 변수

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
  return <VideoList videos={videos} />
}

export default App;
