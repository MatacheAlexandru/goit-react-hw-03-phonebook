import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ filter, onChangeFilter }) => (
  <label className={styles.filterLabel}>
    Find contacts by name:
    <input
      type="text"
      value={filter}
      placeholder="Type a name to search"
      onChange={(e) => onChangeFilter(e.target.value)}
    />
  </label>
);

export default Filter;
