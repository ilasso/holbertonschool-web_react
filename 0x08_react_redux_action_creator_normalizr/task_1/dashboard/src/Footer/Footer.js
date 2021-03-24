import React from 'react'
import './Footer.css'
import { getFooterCopy, getFullYear }  from '../utils/utils';
import AppContext from '../App/AppContext';

function Footer() {
    let footertext = getFooterCopy(true);
    return (
        <AppContext.Consumer>
        {
        (value) => { 
            return(
            <div className="App-footer">
                <p>Copyright {getFullYear()} - {footertext}</p>
                {
                    value.user.isLoggedIn &&
                    <p><a href="#" >Contact Us</a></p>
                }
            </div>
        )}
        }
        </AppContext.Consumer>
    );
}

export default Footer;