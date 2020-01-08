import React, { Component } from 'react'
import './UpcomingEvent.css'
import TodayCard from '../TodayCard/TodayCard'
import { connect } from 'react-redux'
import { getTomorrow } from '../../_actions/events'

class UpcomingEvent extends Component {
  componentDidMount() {
    this.props.getTomorrow()
  }
  render(){
    const { dataTomorrow, isLoading, error } = this.props.event
    console.log(dataTomorrow,' ===============> ini data dari getTomorrow');
    
    return(
      <div className="upcomingevent">
        <div className="upcomingevent-container">
          <div className="upcomingevent-title">
            <h1 style={{marginTop:0, marginBottom:0}}>Upcoming Event</h1>
          </div>
          <div className="upcomingevent-content">
            {
              dataTomorrow.map((details, index) => {
                return(
                  <TodayCard key={index}
                    cardImage={details.img}
                    cardTitle={details.title}
                    cardDate={details.startTime.slice(0,10)}
                    cardDesc={details.description}
                    cardPrice={details.price}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    event: state.eventTomorrow
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTomorrow: () => { dispatch(getTomorrow())}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingEvent)
