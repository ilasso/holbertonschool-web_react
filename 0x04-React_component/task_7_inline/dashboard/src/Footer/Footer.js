import React from 'react'
//import './Footer.css'
import { getFooterCopy, getFullYear }  from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    appfooter: {
        borderTop: "2px solid #e01d3f",
        textAlign: "center",
        justifyContent: "center"
    }
  });


function Footer() {
    let footertext = getFooterCopy(true);
    return(
        <div>
            <div className={css(styles.appfooter)}>
                <p>Copyright {getFullYear()} - {footertext}</p>
            </div>
        </div>
    )

}

export default Footer;