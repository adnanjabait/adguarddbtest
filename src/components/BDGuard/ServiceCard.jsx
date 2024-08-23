import React from "react";
import styles from './ServiceCard.module.css';

function ServiceCard({ imageSrc, title, description }) {
  return (
    <article className={styles.serviceCard}>
      <img loading="lazy" src={imageSrc} alt={title} className={styles.serviceImage} />
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </article>
  );
}

export default ServiceCard;