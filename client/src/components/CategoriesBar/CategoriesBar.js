import React, { Component } from 'react'
import './CategoriesBar.css'
import { connect } from 'react-redux'
import { getCategories } from '../../_actions/categories'

class CategoriesBar extends Component {
  componentDidMount() {
    this.props.getCategories()
    // getCategories()
  }
  render(){
    const { data } = this.props.categories
    console.log('-----------------------------ini dataaaaaaaa',data);
    
    return(
      <div className="categories-bar">
        <div className="categories-bar-container">
          <div className="categories-bar-container-title">
            <h1 style={{marginTop:0, marginBottom:0}}>Category</h1>
          </div>
          <div className="bar">
            {
              data.map((details) => {
                return(
                  <button style={{width:200, fontSize:25}}>{details.name}</button>
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
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesBar)