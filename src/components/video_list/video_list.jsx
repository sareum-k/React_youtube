import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from '../video_list/video_list.module.css';

const VideoList = ({ videos, onVideoClieck, display }) => (
    <ul className={styles.videos}>
        {videos.map(video => (
            <VideoItem key={video.id} video={video} onVideoClick={onVideoClieck} display={display} />
        ))}
    </ul>
);

export default VideoList;