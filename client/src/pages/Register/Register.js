import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, IconButton, Link } from '@material-ui/core';
import "./Register.css";
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux'
import { register } from '../../_actions/users'

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      email:"",
      username:"",
      password:""
    }
  }
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleRegister = () => {
    let userData = {
      name:this.state.name,
      email:this.state.email,
      username:this.state.username,
      password:this.state.password
    }
    this.props.register(userData)
  }
  render(){
    return(
      <div>
        <div style={{ textAlign:'center',backgroundColor:'#f5e0df', width: '30vw', height: '34vw', margin :'auto', marginTop: 50,   padding: 50, borderRadius: 10, boxShadow: '10px 10px 10px #808080'}} className="Bg">
          <div style={{display: 'flex', justifyContent:'flex-end'}}>
            <Link href="/" color="inherit">
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Link>
          </div>
          <div >
            <h1>Register</h1> 
          </div>
            <div>
              <TextField style={{width: "60%", marginBottom:20}} id="standard-basic" label="Name" onChange={this.handleChangeName}/>
              <TextField style={{width: "60%", marginBottom:20}} id="standard-basic" label="Email" onChange={this.handleChangeEmail}/>
              <TextField style={{width: "60%", marginBottom:20}} id="standard-basic" label="Username" onChange={this.handleChangeUsername}/>
              <TextField style={{width: "60%", marginBottom:20}} id="standard-basic" label="Password" onChange={this.handleChangePassword} type="password"/>
            </div>
            <div>
              <Button onClick={this.handleRegister} style={{marginTop: 50, width: "20%", backgroundColor: '#FE5655', fontWeight: 'bold', color: 'white'}} variant="contained">Register</Button>
            </div>
          </div>
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    register: state.userRegister
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userData) => dispatch(register(userData))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)