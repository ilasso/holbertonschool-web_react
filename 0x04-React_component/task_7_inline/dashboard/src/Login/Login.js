import React from 'react'
//import './Login.css'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    label : {
        margin: ".1rem 0rem"
    },
    input: {
        marginRight: "1%",
        marginLeft: "1%"
    }    
  });

/*label {
    margin: .1rem 0rem;
}

input {
    margin-right: 1%;
    margin-left: 1%;
}*/


function Login() {
    return(
        <div>
            <p>Login to access the full dashboard</p>
            <label className={css(styles.label)}>Email:</label>
            <input className={css(styles.input)} type="email" id="email" size="30" required></input>
            <label>Password:</label>
            <input className={css(styles.input)} type="password" id="pwd" name="pwd" pattern=".{6,}" required></input>
            <button>OK</button>
        </div>
    )

}

export default Login;