import React, { Component } from 'react'
import './TodayBar.css'
import TodayCard from '../TodayCard/TodayCard'
// import { connect } from 'react-redux'

class TodayBar extends Component {
  // componentDidMount() {

  // }
  render(){
    // const { data, isLoading, error } = 
    // this.props.categories
    return(
      <div className="todaybar">
        <div className="todaybar-container">
          <div className="todaybar-title">
            <h1 style={{marginTop:0, marginBottom:0}}>Today</h1>
          </div>
          <div className="todaybar-content">
            <TodayCard />
            <TodayCard />
            <TodayCard />
            <TodayCard />
            <TodayCard />
            <TodayCard />
            <TodayCard />
            <TodayCard />
          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     // state ini ngambil dari combine reducers/store.js
//     // categories: state.categories
//     categories: state.categories
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     // getCategories: () => {
//       // membuat function getCategories() yang di define pada line 45 yang nantinya akan di nyalakan di line 8
//       // dispatch(getCategories())
//     // }
//     getCategories: () => {
//       dispatch(getCategories())
//     }
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodayBar)

export default TodayBar