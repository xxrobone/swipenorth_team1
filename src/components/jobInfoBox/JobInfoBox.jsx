import React from 'react';
import styles from './JobInfoBox.module.css';

function JobInfoBox(props) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className={styles.box}>
      <button className={styles.close}  onClick={handleClose}>X</button>
      <h1>{props.title}</h1>
      <h2>{props.title2}</h2>
      <br/>
      <div style={{ fontSize: '1em' }}>{props.text}</div>
    </div>
  );
}

export default JobInfoBox;