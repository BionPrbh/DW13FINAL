import React, { Component } from 'react'
import { connect } from 'react-redux'
import qrCode from '../../LogoImage/qrCode.png'

export class Ticket extends Component {
  componentDidMount() {
    
  }
  
  render() {
    let ticketType = ""
    if(this.props.confirmationTicket === true){
      ticketType = 'confirmation Id'
    }
    return (
      <div>
        <div style={{width:'100%', height:"35vh", backgroundColor:'#ff5555', display:'flex',justifyContent:'center'}}>
          <div style={{width:'90%', height:"25vh", backgroundColor:'white', marginTop: 30}}>
            <div style={{backgroundColor:"lightgray", width:'100%', height:'35%'}}>
              <div style={{paddingLeft:50, display:'flex', justifyContent:'space-between'}}>
                <div>
    <p style={{marginTop:0, marginBottom:0, fontSize:30}}>{this.props.ticketHolderName}</p>
    <p style={{marginTop:0, marginBottom:0, color:"darkslategrey"}}>{this.props.ticketHolderId}</p>
                </div>
                <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
    <p style={{marginTop:0, marginBottom:0, marginRight:10}}>Face Value: Rp. {this.props.ticketPrice}</p>
                  <p style={{marginTop:0, marginBottom:0}}></p>
                </div>
              </div>
            </div>
            <div style={{paddingLeft:50, width:'92%', height:'65%', display:'flex', justifyContent:"space-between"}}>
              <div style={{width:"80%"}}>
                <p style={{marginTop:0, marginBottom:0, fontSize:30, fontWeight:'bold'}}>{this.props.ticketEventName} Live Concert</p>
    <p style={{marginTop:0, marginBottom:0, fontSize:20, color:"darkslategrey", fontWeight:400, fontWeight:"600"}}>{this.props.ticketDateTime}</p>
    <p style={{marginTop:0, marginBottom:0, fontSize:20, color:"darkslategrey", flexWrap:"wrap", fontWeight:200}}>{this.props.ticketEventPlace}</p>
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
