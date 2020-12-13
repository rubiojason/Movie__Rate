import React, { useState } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import { loginPage, signupPage, guestPage, guestSearchPage, fetchMovieChangeSearchData, 
         fetchMovieChangeSearchTvData, guestAccountPage, fetchGuestTitleMovie } from '../redux'

function GuestAccountPage({ loginPage, signupPage, guestPage, guestSearchPage, 
                            fetchMovieChangeSearchData, fetchMovieChangeSearchTvData, 
                            guestAccountPage, fetchGuestTitleMovie }) {

    document.body.style.background = "unset"
    document.body.style.backgroundColor = "rgb(15, 15, 15)"

    const [search, setSearch] = useState('')
    const [redirectPage, setRedirectPage] = useState(false)

    const handleSubmitSearch = e => {
        e.preventDefault()
        if (!search || !search.trim()) {
            return 
        }
        else {
            fetchMovieChangeSearchData(search)
            fetchMovieChangeSearchTvData(search)
            //guestSearchPage()
            setRedirectPage(true)
        }
    }

    const handleOnChangeSearch = e => {
        e.preventDefault()

        setSearch(e.target.value)
    }

    if (redirectPage) {
        return <Redirect to="/guestsearchpage" />
    }


    return (
        <div>

            <nav>
                <div className="img-movie-container">
                    <Link to="guestpage">
                        <img onClick={guestPage} src="https://www.nicepng.com/png/full/670-6708259_action-icon-png.png" alt="" />
                    </Link>
                </div>

                <div className="login-signup">
                    <form className="search-button" onSubmit={handleSubmitSearch} onChange={handleOnChangeSearch} >
                        <input type="text" placeholder="Search"/>
                            <button className="search-icon-container" type="submit">
                                <img className="dis-img" alt="" src="https://rubiojason.github.io/Around-The-World/static/media/SearchIcon.e1a3c478.svg"/>
                            </button>    
                    </form>

                    <Link to="/login">
                        <span className="login-button-nav" onClick={loginPage}>Login </span> 
                    </Link>
                    
                    <Link to="/">
                        <span className="signup-button-nav" onClick={signupPage}> SignUp</span>
                    </Link>
                    
                    <div className="guest-img-container" onClick={guestAccountPage}>
                        <img alt="" src="https://cdn3.iconfinder.com/data/icons/login-6/512/LOGIN-10-512.png" />       
                    </div>
                </div>

                <div className="nav-overlay"></div>
            </nav>

            <div className="guest-account-page-container">
                <div className="left-side-container">
                    
                    <div className="account-img-container">
                        <img alt="" src="https://cdn3.iconfinder.com/data/icons/login-6/512/LOGIN-10-512.png" />
                    </div>

                    <div className="account-bottom-img-container">
                        <div className="welcome-guest-bottom">
                            Welcome Guest
                        </div>
                        <Link to="/">
                            <button onClick={signupPage} >Log Out</button>
                        </Link>
                        
                    </div>

                </div>

                <div className="right-side-container">
                    
                    <div className="right-content-tab">
                        <div className="right-content-title">
                            Your Watch Later
                        </div>
                        <div className="right-content-content">
                            <div className="bracket"></div>
                            <div className="no-content">There is no Content Available</div>
                        </div>
                    </div>

                    <div className="right-content-tab">
                        <div className="right-content-title">
                            Recently Rated      
                        </div>
                        <div className="right-content-content">
                            <div className="bracket"></div>
                            <div className="no-content">There is no Content Available</div>
                        </div>
                    </div>

                </div>
            </div>
            

        </div>
    )
}


const mapStateToProps = state => {
    return {
        info: state.guesttitlemovie, 
        imgpic: state.guesttitlemovie.imgpic, 
        imgtitle: state.guesttitlemovie.imgtitle, 
        imgrate: state.guesttitlemovie.imgrate,
        imggenre: state.guesttitlemovie.imggenre,
        pagestate: state.page.pagestate,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGuestTitleMovie: () => dispatch(fetchGuestTitleMovie()), 
        loginPage: () => dispatch(loginPage()), 
        signupPage: () => dispatch(signupPage()), 
        guestPage: () => dispatch(guestPage()), 
        guestSearchPage: () => dispatch(guestSearchPage()), 
        guestAccountPage: () => dispatch(guestAccountPage()), 
        fetchMovieChangeSearchData: (i) => dispatch(fetchMovieChangeSearchData(i)), 
        fetchMovieChangeSearchTvData: (i) => dispatch(fetchMovieChangeSearchTvData(i)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestAccountPage)
