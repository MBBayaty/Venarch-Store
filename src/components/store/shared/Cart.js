import React, { useContext } from "react";
import styles from "./Cart.module.css";

//functions
import { shorten } from "../../../helper/functions";

//conteexts
import { CartContext } from "../../../context/CartContextProvider";

//icons
import trashIcon from "../../../assets/icons/trash.svg";

const Cart = (props) => {
  const { image, title, price, quantity } = props.data;
  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} alt="product" />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <span>{price}</span>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img src={trashIcon} alt="trash" />
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
