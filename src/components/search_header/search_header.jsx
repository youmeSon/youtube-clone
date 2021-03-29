import React, { useRef } from "react";
import styles from "./search_header.module.css";
import "@fortawesome/fontawesome-free/js/all.js";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const logoRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <header className={styles.header}>
      <i className={`fas fa-bars ${styles.icon}`}></i>
      <div ref={logoRef} className={styles.logo} onClick={refresh}>
        <img className={styles.logoImg} src="./images/logo.png" alt="logo" />
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search"
        onKeyDown={onKeyPress}
      />
      <button className={styles.searchButton} type="submit" onClick={onClick}>
        <img
          className={styles.button}
          src="./images/search.png"
          alt="search butoon"
        />
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
