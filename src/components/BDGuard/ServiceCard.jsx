import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <article className={styles.serviceCard}>
      <img loading="lazy" src={imgSrc} alt={`${title} service icon`} className={styles.serviceIcon} />
      <h2 className={styles.serviceTitle}>{title}</h2>
      <p className={styles.serviceDescription}>{description}</p>
    </article>
  );
};

export default ServiceCard;