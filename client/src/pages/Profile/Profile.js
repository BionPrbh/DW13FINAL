import React, { Component } from 'react'
import "./Profile.css"
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/TodayCard/TodayCard'
import { getUser, getUserFavorited } from '../../_actions/users'
import { withRouter } from 'react-router-dom'

class Profile extends Component {
  componentDidMount(){
    this.props.getUser(this.props.user_id)
    this.props.getUserFavorited(this.props.user_id)
  }
  render(){
    const { data } = this.props.profile
    const { favorited } = this.props.favorited
    console.log('ini user id',this.props.user_id);
    console.log('ini datanyaaaa',data);
    console.log('ini datanyaaaa favorited woe',favorited)
    return(
      <div className="profile">
        <div className="profile-navbar-container">
          <NavBar />
        </div>
        <div style={{display:'flex', justifyContent:'center', height: '80%'}}>
          <div className="profile-content" style={{width:"80%"}}>
            <div className="profile-content-data">
              <div>
                <p style={{marginTop:0, marginBottom:20, fontSize:45, fontWeight:'bold',color:'#ff5555'}}>Profile</p>
                <p style={{marginTop:0, marginBottom:0, fontSize:45, fontWeight:'bold',color:'darkslategray'}}>{data.name}</p>
                <p style={{marginTop:0, marginBottom:0, fontSize:45, color:"gray"}}>{}</p>
                <p style={{marginTop:0, marginBottom:0, fontSize:45, color:"gray"}}>{data.phone}</p>
                <p style={{marginTop:0, marginBottom:0, fontSize:45, color:"gray"}}>{data.email}</p>
              </div>
              <div>
                <Button  style={{backgroundColor:"#ff5555", color:"white", marginTop:100}}>edit profile</Button>
              </div>
              <div>
                <img src={data.img} alt="" width="300" height="300" style={{objectFit: 'cover', borderRadius:150}}/>
              </div>
            </div>
            <div className="profile-content-favorited" style={{marginTop:80}}>
              <div>
                <p style={{marginTop:0, marginBottom:20, fontSize:45, fontWeight:'bold',color:'#ff5555'}}>Favorite</p>
              </div>
              <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                {
                  favorited.map((details, index) => {
                    return (
                      <Card 
                        key={index}
                        cardImage={details.favoritedEvent.img}
                        cardTitle={details.favoritedEvent.title}
                        cardDate={details.favoritedEvent.startTime.slice(0,10)}
                        cardDesc={details.favoritedEvent.description}
                        cardPrice={details.favoritedEvent.price}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className="profile-footer-container" style={{marginTop:70}}>
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    favorited: state.userFavorited,
    profile: state.userOne,
    user_id: ownProps.match.params.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser:(user_id) => {dispatch(getUser(user_id))},
    getUserFavorited:(user_id) => { dispatch(getUserFavorited(user_id))}
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
)
