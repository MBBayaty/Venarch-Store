import React, { Component } from "react";
import styles from "./Cards.module.css";
import CardMini from "./CardMin";
import choco1 from "../../images/choco1.jpg";
import choco2 from "../../images/choco2.jpg";
import choco3 from "../../images/choco3.jpg";
// import choco4 from '../images/choco4.jpg'

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      chocoData: [
        { id: 1, image: choco1, name: "شکلات ۱", cost: "800 تومان" },
        { id: 2, image: choco2, name: "شکلات ۲", cost: "600 تومان" },
        { id: 3, image: choco3, name: "شکلات ۳", cost: "400 تومان" },
        { id: 4, image: choco3, name: "شکلات ۴", cost: "200 تومان" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {this.state.chocoData.map((choco) => (
          <CardMini
            key={choco.id}
            image={choco.image}
            name={choco.name}
            cost={choco.cost}
            id={choco.id}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
