import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Ticket from '../../components/Ticket/Ticket'
import { withRouter } from 'react-router-dom'
import { getAllPending } from '../../_actions/orders'

export class AllPayment extends Component {
  componentDidMount() {
    this.props.getAllPending()
  }
  render() {
    const { pendingData } = this.props.pending
    console.log(pendingData);
    return (
      <div>
        <NavBar />
        <div className="payment-content-container" style={{backgroundColor:"#f5e0df"}}>
          <div className="payment-content" style={{marginTop:70}}>
            <p style={{ fontSize:37, fontWeight:'bold',color:'#ff5555', marginBottom:0}}>Cart</p>
            <div style={{display:'flex', height: '10vh', textAlign:'center'}}>
              <div style={{width:'50%'}}></div>
            </div>
            <div style={{width:'100%', height:10, backgroundColor:'#ff5555'}}>
            </div>
            <div style={{width:'100%', height:"100%", backgroundColor:'white', display:'flex', justifyContent:"center", marginBottom:130}}>
              <div style={{width:'80%', height:"100%"}}>
                {
                  pendingData.map((value, key) => {
                    return (
                      <div style={{marginTop:70, marginBottom:70}} key={key}>
                        <Ticket 
                          ticketHolderName={value.buyer ? value.buyer.name : ''}
                          ticketHolderId={value.user_id}
                          ticketPrice={value.event ? value.event.price : ''}
                          ticketEventName={value.event ? value.event.title : ''}
                          ticketDateTime={value.event ? value.event.startTime : ''}
                          ticketEventPlace={value.event ? value.event.address : ''}
                          pendingTicket
                          pendingTicketId={value.id}
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

const mapStateToProps = (state) => {
  return {
    pending: state.orderPending
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllPending: () => { dispatch(getAllPending()) }
  }
}

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(AllPayment))
