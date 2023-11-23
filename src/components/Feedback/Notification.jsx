import React, { Component } from 'react';
import styles from './Feedback.module.css';

class Notification extends Component {
  render() {
    const { message } = this.props;

    return <p className={styles.notification}>{message}</p>;
  }
}

export default Notification;
