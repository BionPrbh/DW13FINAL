import React, { Component} from 'react'
import { IconButton } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './Navbar.css'
import Axios from 'axios'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      container:[

      ]
    }
  }
  componentDidMount() {
    Axios
      .get('http://localhost:8000/api/v1/categories')
      .then(res => {
        this.setState({
          container: res.data
        })
      })
  }
  render(){
    return(
      <div className="Navbar">
        <div className="navbar-container">
          <div className="title">
            <h1 style={{marginTop:0, marginBottom:0}}>DUMB-THICK</h1>
          </div>
          <div className="icon-container">
            <div>
              <IconButton>
                <PersonAddIcon />
                <h3 style={{marginTop:0, marginBottom:0}}>Register</h3>
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ExitToAppIcon />
                <h3 style={{marginTop:0, marginBottom:0}}>Login</h3>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar