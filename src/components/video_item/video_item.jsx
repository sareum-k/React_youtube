import React from 'react';
import styles from '../video_item/video_item.module.css'

const VideoItem = ({ video: { snippet } }) => ( // props.video.snippet
    <li className={styles.li}>
        <img className={styles.img} src={snippet.thumbnails.medium.url} alt='video thumnail' />
        <div className={styles.textBox}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.p}>{snippet.channelTitle}</p>
        </div>
    </li>
);

export default VideoItem;