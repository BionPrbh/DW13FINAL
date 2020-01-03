import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './AddEvent.css'
import { TextField, Button, InputLabel, Select, MenuItem } from '@material-ui/core'

export class AddEvent extends Component {
  componentDidMount() {
    
  }
  
  render() {
    return (
      <div>
        <div className="addevent">
          <NavBar />
          <div className="addevent-content-container">
            <div className="addevent-content-title">
              <p style={{fontSize:50, fontWeight:'bold'}}>Add Event</p>
            </div>
          </div>
          <div className="addevent-content-form-container">
            <div className="addevent-content-form">
              <form noValidate autoComplete="off" style={{display:'flex', flexDirection:'column'}}>
                <TextField id="standard-basic" label="Event Title" />
                <div style={{marginTop:10}}>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select 
                    // value={age} 
                    // onChange={handleChange} 
                    // displayEmpty 
                    // className={classes.selectEmpty}
                    style={{width:'100%'}}
                    >
                    <MenuItem value="" disabled>
                    </MenuItem>
                    <MenuItem value={'Sports'}>Sports</MenuItem>
                    <MenuItem value={'Music'}>Music</MenuItem>
                    <MenuItem value={'Science'}>Science</MenuItem>
                    <MenuItem value={'Programming'}>Programming</MenuItem>
                  </Select>
                </div>
                <div>
                  <TextField id="standard-basic" label="Upload Pamflet" style={{width:'80%', marginRight:50}}/>
                  <Button style={{marginTop:15, backgroundColor:"gray", color:'white', fontWeight:'bold'}}>Attach Image</Button>
                </div>
                <TextField id="standard-basic" label="DD/MM/YYYY" />
                <TextField id="standard-basic" label="Time" />
                <TextField id="standard-basic" label="Price" />
                <TextField id="standard-basic" label="Address Event" />
                <TextField id="standard-basic" label="Url Map" />
                <TextField id="standard-basic" label="Telp" />
                <TextField id="standard-basic" label="Email EO" />
                <TextField id="standard-basic" label="Event Description" />
              </form>
            </div>
          </div>
          <div style={{display:'flex', justifyContent:"center", marginTop:40, marginBottom:40}}>
            <Button style={{
              backgroundColor:'skyblue',
              fontSize:30,
              width:"18vw",
              color:'white',
              fontWeight:'bold',
              borderRadius:'10px 10px'
            }}>Publish</Button>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent)
