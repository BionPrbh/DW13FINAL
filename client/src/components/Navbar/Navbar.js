import React, { Component} from 'react'
import { IconButton, Link, Avatar, Button } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './Navbar.css'
import Logo from '../../LogoImage/dumbtick.png'
import PopOver from '../../components/PopOver/PopOver'

class Navbar extends Component {
  handleButtonLogout = () => {
    localStorage.clear()
  }
  handleGoHome = () => {
    window.location.replace("/")
  }
  render(){
    let existed = localStorage.getItem("_AUTH_TOKEN")
    let loginRegisButton
    const authbutton = (token) => {
      if (token) {
        return loginRegisButton = 
        <div className="popOver">
          <div>
            <PopOver />
          </div>
        </div>
      } else {
        return loginRegisButton = 
          <div className="icon-container" style={{marginTop: 20}}>
            <div>
              <Link href="/register" color="inherit">
                <IconButton>
                  <PersonAddIcon />
                  <h3 style={{marginTop:0, marginBottom:0}}>Register</h3>
                </IconButton>
              </Link>
            </div>
            <div>
            <Link href="/login" color="inherit">
              <IconButton>
                <ExitToAppIcon />
                <h3 style={{marginTop:0, marginBottom:0}}>Login</h3>
              </IconButton>
            </Link> 
            </div>
          </div>
      }
    }
    authbutton(existed)
    return(
      <div className="Navbar">
        <div className="navbar-container">
          <div className="title">
            <Button>
              <img src={Logo} alt="" onClick={this.handleGoHome}/>
            </Button>
          </div>
            { loginRegisButton }
        </div>
      </div>
    )
  }
}

export default Navbar