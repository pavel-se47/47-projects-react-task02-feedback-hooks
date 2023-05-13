import React from 'react';
import styles from './FeedbackButtons.module.css';

export default function FeedbackButtons({ categories, newFeedback }) {
  return (
    <div className={styles.feedbackButtons}>
      <p className={styles.title}>Please leave feedback</p>
      <div className={styles.buttons}>
        {categories.map(option => (
          <button
            key={option}
            id={option}
            type="button"
            className={styles.button}
            onClick={newFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
