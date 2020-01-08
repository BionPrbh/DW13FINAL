import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import qrCode from '../../LogoImage/qrCode.png'

export class Ticket extends Component {
  constructor(props){
    super(props)

  }
  handlePaymentConfirmation = () => {
    window.location.replace('/payment/'+this.props.pendingTicketId)
  }
  render() {
    let confirmButton
    let ticketType
    if(this.props.pendingTicket === true){
      console.log("i am a pending ticket");
      ticketType = <p style={{marginTop:0, marginBottom:0,  color:'red',fontSize:20, backgroundColor:'white', borderTopLeftRadius:20, borderBottomLeftRadius:20, paddingLeft:15, width:'53%', borderTopRightRadius:20, borderBottomRightRadius:20, height:28, boxShadow:"inset 1px 1px 2px rgba(0,0,0,1)", paddingTop:3, fontWeight:'bold'}}>Pending</p>
      confirmButton = <Button
        style={{
          marginTop:10,
          backgroundColor:"#ff5555",
          color:'white',
          fontWeight:'bold',
          boxShadow: '5px 8px 6px -5px gray'
        }}
        onClick={this.handlePaymentConfirmation}
      >Confirm payment</Button>
    } else {
      ticketType = <p style={{marginTop:0, marginBottom:0,  color:'green',fontSize:20, backgroundColor:'white', borderTopLeftRadius:20, borderBottomLeftRadius:20, paddingLeft:15, width:'62%', borderTopRightRadius:20, borderBottomRightRadius:20, height:28, boxShadow:"inset 1px 1px 2px rgba(0,0,0,1)", paddingTop:3, fontWeight:'bold'}}>Approved</p>
    }
    return (
      <div>
        <div style={{width:'100%', height:"35vh", backgroundColor:'#ff5555', display:'flex',justifyContent:'center'}}>
          <div style={{width:'90%', height:"25vh", backgroundColor:'white', marginTop: 45}}>
            <div style={{backgroundColor:"lightgray", width:'100%', height:'35%'}}>
              <div style={{paddingLeft:50, display:'flex', justifyContent:'space-between'}}>
                <div style={{paddingTop:15}}>
                  <p style={{marginTop:0, marginBottom:0, fontSize:30}}>{this.props.ticketHolderName}</p>
                  <p style={{marginTop:0, marginBottom:0, color:"darkslategrey"}}>ID {this.props.ticketHolderId}</p>
                </div>
                <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                  <p style={{marginTop:15, marginBottom:0, marginRight:10}}>Face Value: Rp. {this.props.ticketPrice}</p>
                  <div style={{paddingTop:7}}>
                    {ticketType}
                  </div>
                </div>
              </div>
            </div>
            <div style={{paddingLeft:50, width:'92%', height:'65%', display:'flex', justifyContent:"space-between", paddingTop:15}}>
              <div style={{width:"80%"}}>
                <p style={{marginTop:0, marginBottom:0, fontSize:30, fontWeight:'bold'}}>{this.props.ticketEventName} Live Concert</p>
                <p style={{marginTop:0, marginBottom:0, fontSize:20, color:"darkslategrey", fontWeight:400, fontWeight:"600"}}>Start time: {this.props.ticketDateTime}</p>
                <p style={{marginTop:0, marginBottom:0, fontSize:20, color:"darkslategrey", flexWrap:"wrap"}}>{this.props.ticketEventPlace}</p>
                { confirmButton }
              </div>
              <div style={{marginTop:10}}>
                <img src={qrCode} width="100" height="100" alt=""/>
              </div>                    
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Ticket)
