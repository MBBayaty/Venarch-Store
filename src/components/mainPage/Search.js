import React, { Component } from "react";
import styles from "./Search.module.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  searchHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <input
          value={this.state.text}
          onChange={this.searchHandler}
          placeholder=" متن جستجو "
        />
        <br></br>
        <span>{this.state.text}</span>
      </div>
    );
  }
}

export default Search;
