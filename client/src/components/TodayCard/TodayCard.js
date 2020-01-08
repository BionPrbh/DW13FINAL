import React, { Component } from 'react'
import './TodayCard.css'
import { IconButton, Button } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { connect } from 'react-redux'


class TodayCard extends Component {
  handleToDetail = () => {
    let eventId = this.props.cardId
    let route = '/event/'+eventId
    window.location.href = route
  }
  render(){
    let image = this.props.cardImage
    return(
      <div className="TodayCard" style={{marginTop:40,marginLeft:10, marginRight:10}} onClick={this.handleToDetail}>
        <div className="today-card-container" style={{backgroundImage:`url(${image})`}}>
          <div className="today-card-image">
            <Button style={{backgroundColor:"white", height:"4vh", width:"8vw", marginRight:10, marginTop:10, fontWeight:'bold', color:"#ff5555"}}>{'Rp. '+this.props.cardPrice}</Button>
          </div>
          <div className="today-card-content">
            <div className="today-card-content-title">
              <h3  style={{marginTop:10, marginBottom:0, marginLeft:20}}>{this.props.cardTitle}</h3>
              <h4  style={{marginTop:0, marginBottom:0, color:'#ff5555', marginLeft:20}}>{this.props.cardDate}</h4>
            </div>
            <div className="today-card-content-likeButton">
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </div>
          </div>
          <div className="today-card-content-description">
          <p style={{marginLeft:20}}>{this.props.cardDesc }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default TodayCard