import React from 'react'
import { connect } from 'react-redux'
import { loginPage, signupPage, guestPage, guestSearchPage } from './redux'
import GuestHomePage from './GuestFolder/GuestHomePage'
import GuestAboutMoviePage from './GuestFolder/GuestAboutMoviePage'
import GuestSearchPage from './GuestFolder/GuestSearchPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function PageContainer(props) {

  document.title = "Movie Rate"

    return (
      <div >
      <BrowserRouter>
        <Switch>

          <Route path="/movie_project/" exact component={GuestHomePage} />

          <Route path="/movie_project/guestaboutmovie/" component={GuestAboutMoviePage} />

          <Route path="/movie_project/guestsearchpage/" component={GuestSearchPage} />

        </Switch>
      </BrowserRouter>
      </div>
    )
}

const mapStateToProps = state => {
    return {
      pagestate: state.page.pagestate,
      imgpic: state.guesttitlemovie.imgpic, 
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      loginPage : () => dispatch(loginPage()), 
      signupPage : () => dispatch(signupPage()), 
      guestPage: () => dispatch(guestPage()),
      guestSearchPage: () => dispatch(guestSearchPage()), 
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)
