import React, { Component } from 'react'
import './Footer.css'
import Logo from "../../LogoImage/dumbtick.png"

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div style={{marginLeft:150, marginRight:150, marginTop:20}}>
              <img src={Logo} alt="" height="100" width="160"/>
             <p >dumb-tick is a web-based platform that provides tickets for various events around sports, music, science and programming</p>
            </div>
          </div>
          <div className="footer-middle">
            <p style={{marginTop:50, marginBottom:0, fontWeight:'bold'}}>links</p>
            <p style={{marginTop:0, marginBottom:0}}>About us</p>
            <p style={{marginTop:20, marginBottom:0, fontWeight:'bold'}}>Follow us on</p>
            <p style={{marginTop:0, marginBottom:0}}>Instagram</p>
            <p style={{marginTop:0, marginBottom:0}}>Twitter</p>
          </div>
          <div className="footer-right">
            <p style={{marginTop:50, marginBottom:0, fontWeight:'bold'}}>Have a question?</p>
            <p style={{marginTop:10, marginBottom:0}}>Dumb-tick</p>
            <p style={{marginTop:10, marginBottom:0}}>Email:support@dumbtick.com</p>
          </div>
        </div>
        <div className="footer-copyright">
           <h5 style={{marginTop:0, marginBottom:0, paddingTop:18}}>Copyright 2019 Dumbways Indonesia</h5> 
        </div>
      </div>
    )
  }
}

export default Footer