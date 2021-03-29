import React from "react";
import styles from "./search_header.module.css";
import "@fortawesome/fontawesome-free/js/all.js";

const SearchHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <i className={`fas fa-bars ${styles.icon}`}></i>
        <img className={styles.logoImg} src="./images/logo.png" alt="logo" />
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <input className={styles.input} type="search" placeholder="Search" />
      <button className={styles.searchButton} type="submit">
        <img className={styles.button} src="./images/search.png" />
      </button>
      <i className={`fas fa-microphone ${styles.micIcon}`}></i>
      <div className={styles.icons}>
        <i className={`fas fa-video ${styles.record}`}></i>
        <i className={`fas fa-th ${styles.menu}`}></i>
        <i className={`fas fa-bell ${styles.bell}`}></i>
      </div>
    </header>
  );
};

export default SearchHeader;
