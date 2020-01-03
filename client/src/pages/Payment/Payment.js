import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Payment.css'
import qrCode from '../../LogoImage/qrCode.png'
import { Button } from '@material-ui/core'

class Payment extends Component {
  componentWillMount(){

  }
  render(){
    return (
      <div className="payment">
        <div>
          <NavBar />
        </div>
        <div className="payment-content-container">
          <div className="payment-content" style={{marginTop:70}}>
            <p style={{ fontSize:37, fontWeight:'bold',color:'#ff5555'}}>Payment</p>
            <div style={{display:'flex', height: '10vh', textAlign:'center'}}>
              <div style={{paddingTop:15,backgroundColor:'#ff5555', width:'50%', fontSize:37,color:'white'}}>Payment</div>
              <div style={{width:'50%'}}></div>
            </div>
            <div style={{width:'100%', height:10, backgroundColor:'#ff5555'}}>
            </div>
            <div style={{width:'100%', height:"110vh", backgroundColor:'white', display:'flex', justifyContent:"center", marginBottom:130}}>
              <div style={{width:'80%', height:"100%", paddingTop:70}}>
                {/* beginning of box with red background */}
                <div style={{width:'100%', height:"35vh", backgroundColor:'#ff5555', display:'flex',justifyContent:'center'}}>
                  <div style={{width:'90%', height:"25vh", backgroundColor:'white', marginTop: 30}}>
                    <div style={{backgroundColor:"lightgray", width:'100%', height:'35%'}}>
                      <div style={{paddingLeft:50, display:'flex', justifyContent:'space-between'}}>
                        <div>
                          <p style={{marginTop:0, marginBottom:0, fontSize:30}}>Is Bos</p>
                          <p style={{marginTop:0, marginBottom:0, color:"darkslategrey"}}>id.users</p>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                          <p style={{marginTop:0, marginBottom:0, marginRight:10}}>Face Value: Rp. 100.000</p>
                          <p style={{marginTop:0, marginBottom:0}}> - </p>
                        </div>
                      </div>
                    </div>
                    <div style={{paddingLeft:50, width:'92%', height:'65%', display:'flex', justifyContent:"space-between"}}>
                      <div style={{width:"80%"}}>
                        <p style={{marginTop:0, marginBottom:0, fontSize:30, fontWeight:'bold'}}>Raisa Live Concert</p>
                        <p style={{marginTop:0, marginBottom:0, fontSize:20, color:"darkslategrey"}}>Fri. 13 April 2020 at 18.00</p>
                        <p style={{marginTop:0, marginBottom:0, fontSize:20, color:"darkslategrey", flexWrap:"wrap"}}>Jl. pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat , Daerah Khusus Ibukota Jakarta 10270 </p>
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
                    <p style={{color:'gray', marginTop:0, marginBottom:15}}>Total Price (2 items)</p>
                  </div>
                  <div>
                    <p style={{color:'gray', marginTop:60}}>Rp. 600.000</p>
                  </div>
                </div>
                <hr/>
                {/* beginning of Prove payment */}
                <div style={{display:'flex', justifyContent:'space-between', paddingLeft:100}} className="payment-prove-payment">
                  <div style={{textAlign:'center'}}>
                    <p style={{fontSize:30, fontWeight:'bold', color:'gray'}}>Prove of Payment</p>
                    <p>image</p>
                    <p style={{fontSize:15, color:'gray'}}>upload payment proof</p>
                  </div>
                  <div>
                    <Button style={{backgroundColor:"#ff5555", color:'white', fontSize:25, width:'120%', marginTop:70}}>Confirm</Button>
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

const mapStateToProps = (state) => {
  return {
    
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  } 
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment)