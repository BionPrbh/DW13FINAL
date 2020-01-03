import React, { Component } from 'react'
import './UpcomingEvent.css'
import { connect } from 'react-redux'
import {  } from '../../_actions/events'
import TodayCard from '../TodayCard/TodayCard'

class UpcomingEvent extends Component {
  componentDidMount() {
    // this.props.getStartTime()
  }
  render(){
    // const { data, isLoading, error } = this.props.event
    // console.log(data,' ===============> ini data dari startTime');
    
    return(
      <div className="upcomingevent">
        <div className="upcomingevent-container">
          <div className="upcomingevent-title">
            <h1 style={{marginTop:0, marginBottom:0}}>Upcoming Event</h1>
          </div>
          <div className="upcomingevent-content">
          {
              // data.map((details, index) => {
              //   return(
              //     <TodayCard key={index}
              //       cardImage={details.img}
              //       cardTitle={details.title}
              //       cardDate={details.startTime.slice(0,10)}
              //     />
              //   )
              // })
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // event: state.eventToday
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getStartTime: () => { dispatch(getStartTime())}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingEvent)
