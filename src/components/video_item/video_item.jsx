import React, { memo } from 'react';
import styles from '../video_item/video_item.module.css'

const VideoItem = memo(
    ({ video, video: { snippet }, onVideoClick, display }) => {
        const displayType = display === 'list' ? styles.list : styles.grid;
        return (
            <li className={`${styles.li} ${displayType}`} onClick={() => onVideoClick(video)}>
                <img className={styles.img} src={snippet.thumbnails.medium.url} alt='video thumnail' />
                <div className={styles.textBox}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.p}>{snippet.channelTitle}</p>
                </div>
            </li>
        )
    });

export default VideoItem;