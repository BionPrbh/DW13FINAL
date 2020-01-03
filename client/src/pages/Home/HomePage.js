import React, { Component } from 'react'
import NavBar from '../../components/Navbar/Navbar'
import EventSearch from '../../components/EventSearch/EventSearch'
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar'
import TodayBar from '../../components/TodayBar/TodayBar'
import { connect } from 'react-redux'
import UpcomingEvent from '../../components/UpcomingEvent/UpcomingEvent'
import Footer from '../../components/Footer/Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar /> 
        <EventSearch />
        <CategoriesBar />
        <TodayBar />
        <UpcomingEvent />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // state ini ngambil dari combine reducers/store.js
    // categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getCategories: () => {
      // membuat function getCategories() yang di define pada line 45 yang nantinya akan di nyalakan di line 8
      // dispatch(getCategories())
    // }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)