import React from 'react';
import styles from './NoFeedback.module.css';

export default function NoFeedback({ message }) {
  return (
    <div className={styles.feedbackStatistics}>
      <p className={styles.title}>{message}</p>
    </div>
  );
}
