import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './EventDetail.css'
import { Button } from '@material-ui/core'
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkIcon from '@material-ui/icons/Link';
import { getAnEvent } from '../../_actions/events'
import { withRouter } from 'react-router-dom'
import { postOrder } from '../../_actions/orders'

class EventDetail extends Component {
  constructor(){
    super()
    this.state={
      counter: 0,
      body:{}
    }
  }
  handlePlus = () =>{
    if(this.state.counter >= 0){
      this.setState({counter: this.state.counter + 1})
    }
  }
  handleMinus = () => {
    if(this.state.counter > 0){
      this.setState({counter: this.state.counter - 1})
    }
  }
  componentDidMount() {
    this.props.getAnEvent(this.props.event_id)
  }
  componentWillMount(){
  }
  render() {
    const { singleEvent } = this.props.event
    console.log(singleEvent);
    console.log('ini diaaa',singleEvent.created_by ? singleEvent.created_by.id : '');
    
    // let price = singleEvent.price
    // console.log('ini priiiiiiiiiiice', price);
    // let eventName = singleEvent.title 
    // let eventId = singleEvent.id
    // let userId = singleEvent.created_by ? singleEvent.created_by.id : ''    
    // let quantity = this.state.counter
    // let total = price * quantity
    // let status = "pending"
    // console.log('ini total', total);
    //   let body = {
    //   event: eventName,
    //   event_id: eventId,
    //   user_id: userId,
    //   quantity: quantity,
    //   totalPrice: total,
    //   status: status
    // }
    // this.setState({body: body})
    // console.log(this.state.body);
    
    // console.log(singleEvent.category ? singleEvent.category.name : '');    
    // console.log('ini oneeee', singleEvent);

    return (
      <div className="event-detail">
        <div className="event-detail-navbar">
          <NavBar />
        </div>
        <div className="event-detail-card-container"style={{marginTop:150, marginBottom:100}}>
          <div className="event-detail-card" >
            <div className="event-detail-card-top">
              <img src={singleEvent.img} alt="" width="100%" height="650vh" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px", objectFit: 'cover'}}/>
            </div>
            <div className="event-detail-card-bottom" style={{marginLeft:'2vw', marginRight:'2vw'}}>
              <div style={{display:'flex', justifyContent:'space-between', marginTop: 20, width:'96%'}}>
                <div>
                  <p style={{fontSize:50, marginTop:0, marginBottom:0}}>{singleEvent.title} Live Concert Jakarta 2020</p>
                </div>
                <div>
                  <Button style={{marginTop:12,backgroundColor:'#ff5555', color: 'white', fontSize:20, }}>Rp {singleEvent.price}</Button>
                  <div style={{display:'flex'}}>
                    <Button onClick={this.handlePlus} style={{marginTop:12,backgroundColor:'#ff5555', color: 'white', fontSize:30, }}>+</Button>
                    <p  style={{marginTop:25,marginBottom:0, fontSize:30, marginLeft:20,marginRight:20}}>{this.state.counter}</p>
                    <Button onClick={this.handleMinus} style={{marginTop:12,backgroundColor:'#ff5555', marginRight:30, color: 'white', fontSize:30, }}>-</Button>
                    <ButtonHandleOrder 
                      event={singleEvent.title}
                      event_id={singleEvent.id} 
                      user_id={singleEvent.created_by ? singleEvent.created_by.id : ''}
                      quantity={this.state.counter}
                      total={this.state.counter}
                      status="pending"
                    />
                    {/* <h1>{singleEvent}</h1> */}
                    {/* <Button onClick={this.handle} style={{backgroundColor:"#ff5555", color:'white', fontSize:20, width:30, height:40, marginTop:25}}>BUY</Button> */}
                  </div>
                </div>
              </div>
                <p style={{fontSize:30, marginTop:15, marginBottom:0, color:'#ff5555'}}>{singleEvent.category ? singleEvent.category.name : ''}</p>
              <hr/>
              <div style={{display:'flex', justifyContent:'space-between', marginTop:50}}>
                <div className="event-detail-card-bottom-hostedby">
                  <p style={{fontSize:25, fontWeight:'bold', marginTop:0, marginBottom:50}}>Hosted By</p>
                  
                </div>
                <div className="event-detail-card-bottom-datetime">
                  <p style={{fontSize:25, fontWeight:'bold', marginTop:0, marginBottom:50}}>Date and Time</p>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{display:'flex'}}>
                     <EventIcon />
                     <p style={{marginTop:0,marginBottom:0, marginLeft:10}}>{singleEvent.startTime ? singleEvent.startTime.slice(0,10) : ''}</p>
                    </div>
                    <div style={{display:'flex', marginTop:20}}>
                      <ScheduleIcon />
                      <p style={{marginTop:0,marginBottom:0, marginLeft:10}}>{singleEvent.startTime ? singleEvent.startTime.slice(10,20) : ''}</p>
                    </div>
                  </div>
                </div>
                <div className="event-detail-card-bottom-contactperson">
                  <p style={{fontSize:25, fontWeight:'bold', marginTop:0, marginBottom:50}}>Contact Person</p>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{display:'flex'}}>
                      <PermContactCalendarIcon />
                      <p style={{marginTop:0,marginBottom:0, marginLeft:10}}>
                        {singleEvent.created_by ? singleEvent.created_by.name : ''}
                      </p>
                    </div>
                    <div style={{display:'flex', marginTop:20}}>
                      <PhoneIcon />
                      <p style={{marginTop:0,marginBottom:0, marginLeft:10}}>
                        {singleEvent.created_by ? singleEvent.created_by.phone : ''}
                      </p>
                    </div>
                    <div style={{display:'flex', marginTop:20}}>
                      <MailIcon />
                      <p style={{marginTop:0,marginBottom:0, marginLeft:10}}>
                        {singleEvent.created_by ? singleEvent.created_by.email : ''}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="event-detail-description">
          <div className="event-detail-description-container">
            <div className="event-detail-description-text" style={{paddingLeft:20, paddingRight:20}}>
              <p style={{fontSize:25, fontWeight:'bold'}}>Event Description</p>
              <p style={{fontSize:18 }}>{singleEvent.description}</p>
            </div>
            <hr style={{color:'black'}}/>
            <div className="event-detail-description-location" style={{paddingLeft:20, paddingRight:20}}>
              <p style={{fontSize:25, fontWeight:'bold'}}>Locations</p>
              <div style={{display:'flex'}}>
                <LocationOnIcon />
                <p style={{marginTop:0,marginBottom:30, marginLeft:10}}>{singleEvent.address}</p>
              </div>
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253821.30079769454!2d106.73642989889522!3d-6.269277184707019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6072cd28ebd%3A0xa6004aef9b651a1e!2s%40Rumahku!5e0!3m2!1sen!2sid!4v1577949690008!5m2!1sen!2sid" width="600" height="450" frameborder="0"  allowfullscreen=""></iframe>
              </div>
              <p style={{fontSize:25, fontWeight:'bold'}}>Share Event</p>
              <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div>
                  <div>
                    <TwitterIcon/>
                  </div>
                  <Button style={{backgroundColor:"lightblue", color: 'white', fontSize:10, fontWeight:'bold'}}>twitter</Button>
                </div>
                <div>
                  <div>
                    <FacebookIcon/>
                  </div>
                  <Button style={{backgroundColor:"blue", color: 'white', fontSize:10, fontWeight:'bold'}}>Facebook</Button>
                </div>
                <div>
                  <div>
                    <LinkIcon/>
                  </div>
                  <Button style={{backgroundColor:"gray", color: 'white', fontSize:10, fontWeight:'bold'}}>Copy Link</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-detail-footer" style={{marginTop:50}}>
          <Footer />
        </div>
      </div>
    )
  }
}


const ButtonHandleOrder = (props) => {
  const data = {
    event: props.event,
    event_id: props.event_id,
    user_id: props.user_id,
    quantity: props.quantity,
    totalPrice: props.totalPrice,
    status: props.status

  }
  return <Button onClick={handleTest(data)} style={{backgroundColor:"#ff5555", color:'white', fontSize:20, width:30, height:40, marginTop:25}}>
    BUY 
  </Button>
}
const handleTest = data => event => {
  this.props.postOrder(data)
}

const mapStateToProps = (state, ownProps) => {
 return {
  order: state.orderCreate,
  event: state.eventOne,
  event_id: ownProps.match.params.id
 } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    postOrder:() => { dispatch( postOrder())},
    getAnEvent: (event_id) => { dispatch(getAnEvent(event_id))}
  } 
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventDetail)
)
