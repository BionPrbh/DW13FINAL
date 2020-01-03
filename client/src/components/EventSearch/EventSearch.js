import React, { Component } from 'react'
import { TextField, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import './EventSearch.css'

class EventSearch extends Component {
  render(){
    return (
      <div className="event-search">
       <div className="event-search-container">
        <form noValidate autoComplete="off" >
          <TextField id="standard-basic" label="Standard" className="event-search-input"/>
        </form>
        <IconButton>
          <SearchIcon />
        </IconButton>
       </div>
      </div>
    )
  }
}

export default EventSearch