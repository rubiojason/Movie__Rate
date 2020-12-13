import React from 'react'
import './login.scss'
import { connect } from 'react-redux'
import { loginPage, signupPage, guestPage } from '../redux'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


function LoginPage(props) {

    document.body.style.background = "url('https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')";
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"

    return (
        <div>
            <div className="purple-overlay"></div>

            <nav>
                <div className="img-movie-container">
                    <Link to="/guestpage">
                        <img onClick={props.guestPage} src="https://www.nicepng.com/png/full/670-6708259_action-icon-png.png" alt="" />
                    </Link>
                </div>

                <div className="login-signup">
                    <span className="login-button-nav" onClick={props.loginPage}>Login </span> 
                    
                    <Link to="/">
                        <span className="signup-button-nav" onClick={props.signupPage}> SignUp</span>
                    </Link> 
                    
                </div>

                <div className="nav-overlay"></div>
            </nav>

            <div className="below-nav-container">

                <div className="put-info-box-container">
                    
                    <div className="box-title">
                        Login
                    </div>

                    <div className="put-in-info-box">
                        
                        <form>
                            <input placeholder="Email" />
                            <input placeholder="Password" />
                            <div className="login-button-container">
                                <button className="login-button">Login</button>
                            </div>      
                        </form>

                    </div>

                    <div className="bottom-half">
    
                        <Link to="/guestpage">
                            <div className="resume-guest" onClick={props.guestPage}>Resume as Guest</div>
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
      pagestate: state.page.pagestate,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      loginPage : () => dispatch(loginPage()), 
      signupPage : () => dispatch(signupPage()), 
      guestPage: () => dispatch(guestPage()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
