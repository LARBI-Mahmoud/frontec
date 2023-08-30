import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import styles from "../css/Logincomp.module.css"; // Import your custom styles

function Logincomp() {
  return (
    <div className={styles.loginContainer}>
      <Form className={styles.loginForm}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <button className={styles.loginButton}>Login</button>
      </Form>
    </div>
  );
}

export default Logincomp;
