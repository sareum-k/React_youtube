import React from 'react';
import style from '../video_item/video_item.module.css'

const VideoItem = (props) => (
    <ul className={style.ul}>
        <img className={style.img} src={props.video.snippet.thumbnails.default.url} />
        <div className={style.textBox}>
            <h4 className={style.h4}>{props.video.snippet.title}</h4>
            <p className={style.p}>{props.video.snippet.channelTitle}</p>
        </div>
    </ul>
);

export default VideoItem;