import React, { Component } from 'react';
import './Login.css'


class Login extends Component {
    constructor(props, context){
    super(props, context);
    this.state = {isLoggedIn:false,
                    email:'',
                    password:'',
                    enableSubmit:false};
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    }
    handleLoginSubmit(event) {
        this.setState({ ...this.state, isLoggedIn: true });
        event.preventDefault();
        console.log("submit");
    }

    handleChangeEmail(event) {
        const value = event.target.value;
        this.setState((state, props) => {
            return { email: value }
        });
        this.setState((state, props) => {
            if (state.email !== ''  && state.password !== '' )
                return {enableSubmit: true}
            else 
                return {enableSubmit: false}
        });

       console.log(event.target.value)
      }
    
    
      handleChangePassword(event) {
        const value = event.target.value;
        this.setState((state, props) => {
            
            return { password: value }
        });
            this.setState((state, props) => {
                if (state.email !== '' && state.password !== '')
                    return {enableSubmit: true}
                else
                return {enableSubmit: false}
            });
        console.log(event.target.value)
      }
    
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleLoginSubmit}>
                    <p>Login to access the full dashboard</p>
                    <label>Email:</label>
                    <input name="email" type="email" id="email" size="30" required 
                    value={this.state.email}
                    onChange={this.handleChangeEmail}></input>
                    <label>Password:</label>
                    <input type="password" id="pwd" name="pwd" pattern=".{6,}" required 
                    value={this.state.password}
                    onChange={this.handleChangePassword}></input>
                    <input type='submit' disabled={!this.state.enableSubmit} ></input>
                </form>
            </div>
        );
    }
}

  
export default Login;