import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import qrCode from '../../LogoImage/qrCode.png'
import { Button } from '@material-ui/core'
import Ticket from '../../components/Ticket/Ticket'
import { withRouter } from 'react-router-dom'
import { getApproved } from '../../_actions/orders'

export class MyTicket extends Component {
  componentDidMount() {
    this.props.getApproved()
  }
  render() {
    const { data } = this.props.approved
    console.log(data);
    
    return (
      <div>
        <NavBar />
        <div className="payment-content-container" style={{backgroundColor:"#f5e0df"}}>
          <div className="payment-content" style={{marginTop:70}}>
            <p style={{ fontSize:37, fontWeight:'bold',color:'#ff5555', marginBottom:0}}>My Ticket</p>
            <div style={{display:'flex', height: '10vh', textAlign:'center'}}>
              <div style={{width:'50%'}}></div>
            </div>
            <div style={{width:'100%', height:10, backgroundColor:'#ff5555'}}>
            </div>
            <div style={{width:'100%', height:"100%", backgroundColor:'white', display:'flex', justifyContent:"center", marginBottom:130}}>
              <div style={{width:'80%', height:"100%"}}>
                {
                  data.map((value, key) => {
                    return (
                      <div style={{marginTop:70, marginBottom:70}}>
                        <Ticket 
                          ticketHolderName={value.buyer ? value.buyer.name : ''}
                          ticketHolderId={value.user_id}
                          ticketPrice={value.event ? value.event.price : ''}
                          ticketEventName={value.event ? value.event.title : ''}
                          ticketDateTime={value.event ? value.event.startTime : ''}
                          ticketEventPlace={value.event ? value.event.address : ''}
                        />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    approved: state.orderApproved
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getApproved: () => { dispatch(getApproved()) }
  }
}

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(MyTicket))
