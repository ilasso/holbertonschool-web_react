import React, { Component } from 'react'
import './Header.css'
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from "../App/AppContext";

class Header extends Component {
    constructor(props) {
        super(props);
        
      }
    render () {
        console.log(this.context);
        return (
            
        <div>
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>School dashboard</h1>

            </div>
            <div>
            {this.context.user.isLoggedIn && (
                    <p className={css(style.logOut)}>
                        Welcome {this.context.user.email}
                        <span id="logoutSection" name="logoutSection" onClick={this.context.logOut}>
                            (logout)
                        </span>
                    </p>
                )

                }
            </div>
        </div>
    )
    }
}
Header.contextType = AppContext;

const style = StyleSheet.create({
    logOut: {
      textAlign: 'end'
    }
  });

export default Header;