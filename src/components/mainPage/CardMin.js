import React, { Component } from "react";
import styles from "./Card.module.css";
import { Card } from "react-bootstrap";
import up from "../../images/up.svg";
import down from "../../images/down.svg";
import { Link } from "react-router-dom"

class CardMini extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  upHandler = () => {
    this.setState((prevState) => ({
      counter: this.state.counter + 1,
    }));
  };

  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: this.state.counter - 1,
      }));
    }
  };
  render() {
    const { image, name, cost, id } = this.props;
    const { counter } = this.state;
    return (
      <Card className={styles.container}>
        <Card.Img src={image} alt="choco" />
        <Card.Title><Link to={`/products/${id}`}>{name}</Link></Card.Title>
        <p>
          {cost}
          {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])} تومان` : ""}
        </p>
        <div className={styles.counter}>
          <img src={up} alt="up" onClick={this.upHandler} />
          <span>{counter}</span>
          {/* <img src={down} className={this.state.counter ? "" : styles.deactive} alt="down" onClick={this.downHandler} /> */}
          <img
            src={down}
            className={!this.state.counter && styles.deactive}
            alt="down"
            onClick={this.downHandler}
          />
        </div>
      </Card>
    );
  }
}

export default CardMini;
