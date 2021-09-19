import React from 'react'
import styles from './styles.module.css';

export default function AlbumDisk({albmunCover}) {
    return (
        <div className={styles.album}>
            <img className={styles.albumImage} src={albmunCover} alt="Album"/>
        </div>
    )
}
