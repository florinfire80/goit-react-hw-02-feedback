import React, { Component } from 'react';
import styles from './Feedback.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className={styles.section}>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}

export default Section;
