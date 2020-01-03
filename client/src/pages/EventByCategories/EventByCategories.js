import React, { Component } from 'react'
import './EventByCategories.css'
import { connect } from 'react-redux'
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TextField from '@material-ui/core/TextField';
import Card from '../../components/TodayCard/TodayCard'
import { getCategory, getEventsByCategories, getCategories } from '../../_actions/categories'
import { withRouter } from 'react-router-dom'

class EventByCategories extends Component {
  componentDidMount(){
    this.props.getCategory(this.props.category_id)
    this.props.getEventsByCategories(this.props.category_id)
  }
  render(){
    const { event } = this.props.eventCategories
    const { single } = this.props.category
    // const { data } = this.props.categories
    // let title = data[this.props.category_id].name
    console.log("ini event woeeee", single);

    return(
      <div className="category-page">
        <div>
          <NavBar />
        </div>
        <div className="category-page-container">
          <div className="category-page-content">
            <h1 style={{marginTop: 50}}>{ single.name }</h1>
            <div className="category-page-chooser">
              <p>Sort by:</p>
              <form noValidate style={{marginLeft:50}}>
                <TextField
                  id="date"
                  label="Choose Date"
                  type="date"
                  defaultValue="2019-12-30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>
            <div className="category-page-content-card" style={{marginBottom:'11vh'}}>
              {
                event.map((details, index) => {
                  return(
                    <Card 
                      key={index}
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
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    category: state.category,
    category_id: ownProps.match.params.id,
    eventCategories: state.categoriesAllEvent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategory: (category_id) => dispatch(getCategory(category_id)),
    getEventsByCategories: (category_id) => dispatch(getEventsByCategories(category_id))
  }
}


export default withRouter(
  connect( mapStateToProps, mapDispatchToProps)(EventByCategories)
  )