import React from 'react';
import { timeAgo } from '../utilities/functions/timeAgo';
import styles from './styles/comment.module.css';

function Comment({commentedBy, commentedAt, comment}) {

    return (
        <>
            <div className={styles['comment-wrapper']}>
                <div className={styles['comment']}>
                    <div></div>
                    <div className={styles['comment-header']}>
                        <div>{`${commentedBy} commented ${timeAgo(commentedAt)}`}</div>
                    </div>
                    <div className={styles['comment-box']}>
                       {comment}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment;