import React from 'react';
import styles from '../details_page/details_page.module.css'

const DetailsPage = ({ video: { snippet }, video }) => {
    return (
        <div className={styles.container}>
            <iframe
                className={styles.video}
                type="text/html"
                title="youtube video player"
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen />
            <h2>{snippet.title}</h2>
            <p className={styles.title}>{snippet.channelTitle}</p>
            <p className={styles.text}>{snippet.description}</p>
        </div>
    );
};

export default DetailsPage;