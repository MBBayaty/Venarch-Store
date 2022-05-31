import React, { useContext, useNavigate } from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/logo.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

//icons
import shopIcon from "../../assets/icons/shop.svg";

//components

//contexts
import { CartContext } from "../../context/CartContextProvider";

const Ul = styled.ul`
  @media (max-width: 768px) {
    background-color: #fff;
    flex-direction: column;
    position: fixed;
    transition: all 0.3s linear;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    margin: 0;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    padding-top: 6rem;
    align-items: center;
    li {
      color: black;
    }
  }
`;

const Navbar = ({ open }) => {
  const { state } = useContext(CartContext);

  const searchHandler = (event) => {};

  // const navigate = useNavigate();

  // const logoutHandler = (user) => {
  //   auth.signOut(user);
  //   navigate("login");
  // };

  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <Ul open={open} className={styles.list}>
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/products">لیست محصولات</Link>{" "}
          </li>
          <li>
            <Link to="/aboutus">تماس با ما</Link>
          </li>
          <li>
            <Link to="/login">ورود به حساب</Link>
          </li>
          {/* <li>
            <Link to="/">خروج از حساب</Link>
          </li> */}
        </Ul>
      </div>
      <div className={styles.containerSearch}>
        <input value="" onChange={searchHandler} placeholder=" متن جستجو " />
      </div>
      <div className={styles.mainCart}>
        {state.itemsCounter >= 1 && (
          <div className={styles.iconCart}>
            <Link to="/shopcart">
              <img src={shopIcon} alt="shop" />
            </Link>
            <span>{state.itemsCounter}</span>
          </div>
        )}{" "}
      </div>
      <div className={styles.logo}>
        <img className={styles.logo} src={logo} alt="logo"></img>
      </div>
    </header>
  );
};

export default Navbar;
