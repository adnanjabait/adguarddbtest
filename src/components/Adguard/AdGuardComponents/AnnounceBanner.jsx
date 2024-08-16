import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AnnounceBanner = (announcement) => {
  return (
    <>
      <header className="announce-banner">
        <a href={announcement.link} className="announcement-text">
            {announcement.text}
        </a>
      </header>
      <style jsx>{`
        .announce-banner {
          display: flex;
          max-width: 379px;
          flex-direction: column;
          overflow: hidden;
          color: rgba(102, 181, 116, 1);
          white-space: nowrap;
          text-align: center;
          margin: 0 auto;
          font: 400 24px Inter, sans-serif;
        }
        .announcement-text {
          align-self: stretch;
          padding: 10px;
          text-decoration: none;
          color: inherit;
        }
        .announcement-text:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default AnnounceBanner;