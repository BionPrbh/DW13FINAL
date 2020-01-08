import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, IconButton, Link } from '@material-ui/core';
import "./Login.css";
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux'
import { login } from '../../_actions/users'


class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      username:"",
      password:""
    }
  }
  componentDidMount() {
    const loginData = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(loginData)
  }
  handleLogin = () => {
    const loginData = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(loginData)
  }
  
  handleChangeUsername = (event) => {
    this.setState({
      username:event.target.value
    })
  }
  handleChangePassword = (event) => {
    this.setState({
      password:event.target.value
    })
  }

  render(){
    
    return(
      <div>
        <div style={{ textAlign:'center',backgroundColor:'#f5e0df', width: '20vw', height: '25vw', margin :'auto', marginTop: 50, padding: 50, borderRadius: 10, boxShadow: '10px 10px 10px #808080'}} className="Bg">
          <div style={{display: 'flex', justifyContent:'flex-end'}}>
            <Link href="/" color="inherit">
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Link>
          </div>
          <div >
            <h1>Login</h1> 
          </div>
          <div>
            <TextField style={{width: "60%", marginBottom:  20}} id="standard-basic" label="Username" onChange={this.handleChangeUsername}/>
            <TextField style={{width: "60%"}} id="standard-basic" type="password" label="Password" onChange={this.handleChangePassword}/>
          </div>
          <div>
            <Button 
              onClick={this.handleLogin}
              style={{marginTop: 70, width: "20%", backgroundColor: '#FE5655', fontWeight: 'bold', color: 'white'}} variant="contained">Login
            </Button>
          </div>
        </div>
      </div>
    )
  }
} 

const mapStateToProps = state => {
  return {
    login: state.userLogin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (userData) => dispatch(login(userData))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)