import React from "react";
import firebase from "firebase";
import { auth } from "../../firebase";

// Icons
import google from "../../assets/icons/google.svg";

// Styles
import styles from "./LoginGoogle.module.css";

const LoginGoogle = () => {
  
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>به ونارچ حوش آمدید</h2>

        <div
          className={styles.button}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <img src={google} alt="google" /> با ایمیل خود وارد شوید
        </div>
      </div>
    </div>
  );
};

export default LoginGoogle;
