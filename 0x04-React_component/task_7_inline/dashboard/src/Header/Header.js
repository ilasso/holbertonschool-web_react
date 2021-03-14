import React from 'react'
//import './Header.css'
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    appheader: {
        display: "flex",
        alignItems: "center",
        color: "#ec0047",
        borderBottom: "2px solid #ec0047"
    },
    app: {
        height: "40vmin"
      }
    
  });

function Header() {
    return(
        <div>
            <div className={css(styles.appheader)}>
                <img src={logo} className={css(styles.app)} alt="logo" />
                <h1>School dashboard</h1>
            </div>

        </div>
    )

}

export default Header;