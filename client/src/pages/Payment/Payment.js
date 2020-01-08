import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Payment.css'
import qrCode from '../../LogoImage/qrCode.png'
import { Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { getToBePaid } from '../../_actions/orders'
import { putOrder } from '../../_actions/orders'

class Payment extends Component {
  constructor(props) {
    super(props)
    this.state={
      proofImage:""
    }
  }
  componentDidMount(){
    this.props.getToBePaid(this.props.order_id)
  }
  handleConfirm = () => {
    this.props.putOrder(this.props.order_id)
    window.location.replace('/orders/myticket')
  }
  render(){
    const { tobepaid } = this.props.order
    console.log(tobepaid);
    const { data } = this.props.confirmed
    console.log(data);
    const buyerId = tobepaid.buyer ? tobepaid.buyer.id : ''
    const buyerName = tobepaid.buyer ? tobepaid.buyer.name : ''
    const eventTitle = tobepaid.event ? tobepaid.event.title : ''
    const eventAddress = tobepaid.event ? tobepaid.event.address : ''
    const eventPrice = tobepaid.event ? tobepaid.event.price : ''
    const eventStartTime = tobepaid.event ? tobepaid.event.startTime : ''
    const orderAttachment = tobepaid.attachment
    const orderStatus = tobepaid.status
    let statusText
    console.log(orderStatus);
    let uploadPaymentText
    if(orderStatus === 'confirmed'){
      statusText = <p style={{marginTop:0, marginBottom:0, color:'orange',fontSize:20, backgroundColor:'white', borderTopLeftRadius:20, borderBottomLeftRadius:20, paddingLeft:15, width:'65%', borderTopRightRadius:20, borderBottomRightRadius:20, height:28, boxShadow:"inset 0.5px 0.5px 2px rgba(0,0,0,1)", paddingTop:3, fontWeight:'bold'}}>Confirmed</p>
      uploadPaymentText = 're-upload payment proof'
    } else if (orderStatus === 'pending') {
      statusText = <p style={{marginTop:0, marginBottom:0, color:'red',fontSize:20, backgroundColor:'white', borderTopLeftRadius:20, borderBottomLeftRadius:20, paddingLeft:15, width:'50%', borderTopRightRadius:20, borderBottomRightRadius:20, height:26, boxShadow:"inset 0.5px 0.5px 2px rgba(0,0,0,1)", paddingTop:3, fontWeight:'bold'}}>Pending</p>
      uploadPaymentText = 'upload payment proof'
    }
    
    let paymentProof
    if(orderAttachment === ''){
      paymentProof = <Button style={{backgroundColor:'lightgray', color:'darkslategrey', marginTop:80, marginBottom:88}}>{uploadPaymentText}</Button>
    } else {
      paymentProof = <img src={orderAttachment} alt="" width="200" height="200" style={{objectFit:'cover'}}/>
    }

    return (
      <div className="payment">
        <div>
          <NavBar />
        </div>
        <div className="payment-content-container">
          <div className="payment-content" style={{marginTop:70}}>
            <p style={{ fontSize:37, fontWeight:'bold',color:'#ff5555'}}>Payment</p>
            <div style={{display:'flex', height: '10vh', textAlign:'center'}}>
              <div style={{paddingTop:15,backgroundColor:'#ff5555', width:'50%', fontSize:37,color:'white'}}>Ticket</div>
              <div style={{width:'50%'}}></div>
            </div>
            <div style={{width:'100%', height:10, backgroundColor:'#ff5555'}}>
            </div>
            <div style={{width:'100%', height:"110vh", backgroundColor:'white', display:'flex', justifyContent:"center", marginBottom:130}}>
              <div style={{width:'80%', height:"100%", paddingTop:70}}>
                {/* beginning of box with red background */}
                <div style={{width:'100%', height:"35vh", backgroundColor:'#ff5555', display:'flex',justifyContent:'center'}}>
                  <div style={{width:'90%', height:"25vh", backgroundColor:'white', marginTop: 45}}>
                    <div style={{backgroundColor:"lightgray", width:'100%', height:'35%'}}>
                      <div style={{paddingLeft:50, display:'flex', justifyContent:'space-between'}}>
                        <div>
                          <p style={{marginTop:0, marginBottom:0, fontSize:30, paddingTop:15}}>{buyerName}</p>
                          <p style={{marginTop:0, marginBottom:0, color:"darkslategrey"}}>ID {buyerId}</p>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                          <p style={{marginTop:15, marginBottom:0, marginRight:10}}>Face Value: Rp. {eventPrice}</p>
                          <div style={{paddingTop:8}}>
                            {statusText}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{paddingLeft:50, paddingTop:15, width:'92%', height:'65%', display:'flex', justifyContent:"space-between"}}>
                      <div style={{width:"80%"}}>
                        <p style={{marginTop:0, marginBottom:0, fontSize:30, fontWeight:'bold'}}>{eventTitle} Live Concert</p>
                          <p style={{marginTop:0, marginBottom:0, fontSize:20, color:"darkslategrey", fontWeight:600}}>Start time: {eventStartTime}</p>
                          <p style={{marginTop:0, marginBottom:0, fontSize:20, color:"darkslategrey", flexWrap:"wrap"}}>{eventAddress}</p>
                      </div>
                      <div style={{marginTop:10}}>
                        <img src={qrCode} width="100" height="100" alt=""/>
                      </div>                    
                    </div>
                  </div>
                </div>
                {/* the beginning of shopping summary */}
                <div className="payment-shopping-summary" style={{paddingLeft:100}}>
                  <div>
                    <p style={{fontSize:30, fontWeight:'bold', color:'gray', marginTop:15, marginBottom:10}}>Shopping summary</p>
                    <p style={{color:'gray', marginTop:0, marginBottom:15}}>Total Price ({tobepaid.quantity} items)</p>
                  </div>
                  <div>
                    <p style={{color:'gray', marginTop:60}}>Rp. {tobepaid.totalPrice}</p>
                  </div>
                </div>
                <hr/>
                {/* beginning of Prove payment */}
                <div style={{display:'flex', justifyContent:'space-between', paddingLeft:100}} className="payment-prove-payment">
                  <div style={{textAlign:'center'}}>
                    <p style={{fontSize:30, fontWeight:'bold', color:'gray'}}>Prove of Payment</p>
                    { paymentProof }
                    <p style={{fontSize:15, color:'gray'}}>upload payment proof</p>
                  </div>
                  <div>
                    <Button 
                      style={{
                        backgroundColor:"#ff5555",
                        color:'white',
                        fontSize:25,
                        width:'120%',
                        marginTop:70,
                        fontWeight:'bold',
                        boxShadow: '0 8px 6px -7px black'
                      }}
                      onClick={this.handleConfirm}
                    >Confirm
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    confirmed: state.orderConfirmed,
    order: state.orderTobePaid,
    order_id: ownProps.match.params.id,
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    getToBePaid: (order_id) => {dispatch(getToBePaid(order_id))},
    putOrder: (order_id) => {dispatch(putOrder(order_id))}
  } 
}


export default withRouter(
  connect( mapStateToProps, mapDispatchToProps )(Payment)
)