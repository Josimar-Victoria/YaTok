import React from 'react'
import styles from './styles.module.css';

export default function AlbumDisk({albumunCover}) {
    return (
        <div className={styles.album}>
            <img className={styles.albumImage} src={albumunCover} alt="Album"/>
        </div>
    )
}
