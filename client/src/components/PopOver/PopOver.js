import React,{ Component } from 'react';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import EventIcon from '@material-ui/icons/Event';
import LockIcon from '@material-ui/icons/Lock';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { getUser } from '../../_actions/users'

class PopoverPopupState extends Component {
  componentDidMount() {
    this.props.getUser()
  }
  handleLogout = () => {
    localStorage.clear()
    window.location.replace("/");
  }
  handleAddEvent = () => {
    window.location.replace("/event");
  }
  handleProfile = () => {
    window.location.replace("/profile")
  }
  handleMyTicket = () => {
    window.location.replace("/orders/myticket")
  }
  handlePayments = () => {
    window.location.replace("/payments")
  }
  render(){
    const { data } = this.props.userOne
    console.log(data);
    
    return (
      <PopupState variant="popover" popupId="demo-popup-popover">
        {popupState => (
          <div>
            <IconButton style={{marginTop:20}}>
              <Avatar alt="Remy Sharp" src={data.img} {...bindTrigger(popupState)}/>
            </IconButton>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box p={2}>
                <div>
                  <Link to="/profile" underline="none" color="textPrimary" component="button" style={{display:'flex'}}>
                    <AccountBoxIcon style={{color:"#ff5555"}}/>
                    <p style={{marginTop:0, marginBottom:0, paddingLeft: 10, fontWeight:'bold', fontSize:19, color:"#ff5555"}} onClick={this.handleProfile}>Profile</p>
                  </Link>
                </div>
                <div style={{paddingTop:10}}>
                  <Link to="/orders/myticket" underline="none" color="textPrimary" component="button" style={{display:'flex'}}>
                    <ConfirmationNumberIcon style={{color:"#ff5555"}}/>
                    <p style={{marginTop:0, marginBottom:0, paddingLeft: 10, fontWeight:'bold', fontSize:19,color:"#ff5555"}} onClick={this.handleMyTicket}>My Ticket</p>
                  </Link>
                </div>
                <div style={{paddingTop:10}}>
                  <Link to="/payments" underline="none" color="textPrimary" component="button" style={{display:'flex'}} onClick={this.handlePayments}>
                    <LocalAtmIcon style={{color:"#ff5555"}}/>
                    <p style={{marginTop:0, marginBottom:0, paddingLeft: 10, fontWeight:'bold', fontSize:19,color:"#ff5555"}}>Payment</p>
                  </Link>
                </div>
                <div style={{paddingTop:10}}>
                  <Link underline="none" color="textPrimary" component="button" style={{display:'flex'}} onClick={this.handleAddEvent}>
                    <EventIcon style={{color:"#ff5555"}}/>
                    <p style={{marginTop:0, marginBottom:0, paddingLeft: 10, paddingBottom:8, fontWeight:'bold', fontSize:19,color:"#ff5555"}}>Add Event</p>
                  </Link>
                </div>
                <hr/>
                <div style={{paddingTop:5}}>
                  <Link to="/" underline="none" color="textPrimary" component="button" style={{display:'flex'}} onClick={this.handleLogout}>
                    <LockIcon style={{color:"#ff5555"}}/>
                    <p style={{marginTop:0, marginBottom:0, paddingLeft: 10, fontWeight:'bold', fontSize:19,color:"#ff5555"}}>Logout</p>
                  </Link>
                </div>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    );
  }
}

    
const mapStateToProps = (state, ownProps) => {
  return {
    userOne: state.userOne,
    // user_id: ownProps.match.params.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => { dispatch(getUser())}
  }
}


export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(PopoverPopupState))