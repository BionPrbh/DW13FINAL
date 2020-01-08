import React, { Component } from 'react'
import './TodayBar.css'
import TodayCard from '../TodayCard/TodayCard'
import { connect } from 'react-redux'
import { getStartTime } from '../../_actions/events'

class TodayBar extends Component {
  componentDidMount() {
    this.props.getStartTime()
  }
  render(){
    const { data, isLoading, error } = this.props.event
    console.log(data,' ===============> ini data dari startTime');
    let arr = data.slice(0,8)
    return(
      <div className="todaybar" style={{paddingTop: 50}}>
        <div className="todaybar-container">
          <div className="todaybar-title">
            <h1 style={{marginTop:0, marginBottom:0}}>Today</h1>
          </div>
          <div className="todaybar-content">
            {
              
              arr.map((details, index) => {
                return(
                  <TodayCard key={index}
                    cardImage={details.img}
                    cardTitle={details.title}
                    cardDate={details.startTime.slice(0,10)}
                    cardDesc={details.description}
                    cardPrice={details.price}
                    cardId={details.id}
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
    event: state.eventToday
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStartTime: () => { dispatch(getStartTime())}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodayBar)
