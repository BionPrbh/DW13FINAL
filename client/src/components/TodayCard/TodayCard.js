import React, { Component } from 'react'
import './TodayCard.css'
import { IconButton } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


class TodayCard extends Component {
  render(){
    return(
      <div className="TodayCard">
        <div className="today-card-container">
          <div className="today-card-image">

          </div>
          <div className="today-card-content">
            <div className="today-card-content-title">
              <h3 style={{marginTop:10, marginBottom:0}}>Card Title</h3>
              <h4 style={{marginTop:0, marginBottom:0}}>here is date</h4>
            </div>
            <div className="today-card-content-likeButton">
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </div>
          </div>
          <div className="today-card-content-description">
            <p style={{marginTop:8, marginBottom:0}}>lorem ipsum blablablablablabla</p>
            <p style={{marginTop:8, marginBottom:0}}>lorem ipsum blablablablablabla</p>
            <p style={{marginTop:8, marginBottom:0}}>lorem ipsum blablablablablabla</p>
            <p style={{marginTop:8, marginBottom:0}}>lorem ipsum blablablablablabla</p>
          </div>
        </div>
      </div>
    )
  }
}

export default TodayCard