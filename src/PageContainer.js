import React from 'react'
import { connect } from 'react-redux'
import { loginPage, signupPage, guestPage, guestSearchPage } from './redux'
import LoginPage from './LoginFolder/LoginPage'
import SignUpPage from './LoginFolder/SignUpPage'
import GuestHomePage from './GuestFolder/GuestHomePage'
import GuestAboutMoviePage from './GuestFolder/GuestAboutMoviePage'
import GuestSearchPage from './GuestFolder/GuestSearchPage'
import GuestAccountPage from './GuestFolder/GuestAccountPage'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


function PageContainer(props) {

  document.title = "Movie Rate"

    return (
      <div >
      <BrowserRouter>
        <Switch>
          {
            /*props.pagestate === 'guest-page' ? <Route path="/guestpage" component={GuestHomePage} />
            : 
            props.pagestate === 'login-page' ? <Route path="/login" component={LoginPage}/>
            : 
            props.pagestate === 'signup-page' ? <Route path="/signup"><SignUpPage/></Route>
            :  
            props.pagestate === 'guest-about-movie-page' ? <GuestAboutMoviePage/>
            : 
            props.pagestate === 'guest-search-page' ? <GuestSearchPage/>
            : 
            props.pagestate === 'guest-account-page' ? <GuestAccountPage/>
            :
            <Route path="/signup" exact component={SignUpPage}/>
        */}

          {/*<Route path="/login" component={LoginPage} />

          <Route path="/" exact component={SignUpPage} />*/}

          <Route path="/movie_project/" exact component={GuestHomePage} />

          {/*<Route path="/guestaccountpage" component={GuestAccountPage} />*/}

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
