import React, { Component } from 'react';
import Notification from './Notification';
import styles from './Feedback.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    const hasFeedback = total > 0;

    return (
      <div className={styles.statisticsContainer}>
        {hasFeedback ? (
          <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total Feedback: {total}</p>
            <p>Positive Feedback Percentage: {positivePercentage}%</p>
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default Statistics;
