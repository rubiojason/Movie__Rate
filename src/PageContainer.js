import React from 'react'
import { connect } from 'react-redux'
import { loginPage, signupPage, guestPage, guestSearchPage } from './redux'
import GuestHomePage from './GuestFolder/GuestHomePage'
import GuestAboutMoviePage from './GuestFolder/GuestAboutMoviePage'
import GuestSearchPage from './GuestFolder/GuestSearchPage'
import { BrowserRouter, Redirect ,Route, Switch } from 'react-router-dom';


function PageContainer(props) {

  document.title = "Movie Rate"

    return (
      <div >
      <BrowserRouter>
        <Switch>

          {/* <Redirect exact from="/Movie__Rate" to="/Movie__Rate" /> */}

          <Route path="/Movie__Rate" exact component={GuestHomePage} />

          <Route path="/Movie__Rate/guestaboutmovie" component={GuestAboutMoviePage} />

          <Route path="/Movie__Rate/guestsearchpage" component={GuestSearchPage} />



          {/*
          <Redirect exact from="/Hy-Wave" to="/HyWave/home" />
                    
                <Route path="/HyWave/home" component={Main} /> 

                <Route path="/HyWave/ocean" component={Ocean} />

                <Route path="/HyWave/resorts" component={Resorts} />

                <Route path="/HyWave/animals" component={Animals} />
           */}

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
