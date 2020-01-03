import React, { Component } from 'react'
import './CategoriesBar.css'
import { connect } from 'react-redux'
import { getCategories } from '../../_actions/categories'
import { Button } from '@material-ui/core'

class CategoriesBar extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render(){
    const { data } = this.props.categories    
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
                  <Button 
                    className="categoryButton"  
                    href={"/category/"+details.id+"/event"}
                    style={{width:200, fontSize:15, fontWeight:'bold',borderRadius:5, border:'0px', boxShadow:"0 8px 8px 0 rgba(0,0,0,0.2)", transition: '0.3s',height:40, color:'white', backgroundColor:'black'}}>{details.name}</Button>
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
    categories: state.categoriesAll,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesBar)