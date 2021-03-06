import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/landing-page/Navbar';
import Footer from './components/landing-page/Footer';
import Landing from './components/landing-page/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/not-found/NotFound';

import AssetMangers from './components/information/AssetMangers';
import Blog from './components/information/Blog';
import FAQ from './components/information/FAQ';
import Investors from './components/information/Investors';
import Team from './components/information/Team';
import TheProcess from './components/information/TheProcess';
import WhatsSTO from './components/information/WhatsSTO';
// import ImgUploader from './components/edit-profile/ImgUploader';

import InvestorsDashboard from './components/investors/InvestorsDashboard';
import Building1 from './components/investors/Building1';
import Building2 from './components/investors/Building2';
import Building3 from './components/investors/Building3';
import Building4 from './components/investors/Building4';
import Building5 from './components/investors/Building5';
import Building6 from './components/investors/Building6';
import Chart from './components/investors/Chart';
import Leasers from './components/investors/Leasers';

import OwnersDashboard from './components/owners/OwnersDashboard';
import CreateProperty from './components/owners/CreateProperty';



import './App.css';

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Clear current Profile
        store.dispatch(clearCurrentProfile());
        // Redirect to login
        window.location.href = '/login';
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <div className="container">
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />


                            <Route exact path="/assetMangers" component={AssetMangers} />
                            <Route exact path="/blog" component={Blog} />
                            <Route exact path="/FAQ" component={FAQ} />
                            <Route exact path="/investors" component={Investors} />
                            <Route exact path="/team" component={Team} />
                            <Route exact path="/theProcess" component={TheProcess} />
                            <Route exact path="/whatsSTO" component={WhatsSTO} />
                            {/*<Route exact path="/imgUploader" component={ImgUploader} />*/}


                            <Route exact path="/InvestorsDashboard" component={InvestorsDashboard}/>
                            <Route exact path="/building1" component={Building1}/>
                            <Route exact path="/building2" component={Building2}/>
                            <Route exact path="/building3" component={Building3}/>
                            <Route exact path="/building4" component={Building4}/>
                            <Route exact path="/building5" component={Building5}/>
                            <Route exact path="/building6" component={Building6}/>
                            <Route exact path="/Chart" component={Chart}/>
                            <Route exact path="/Leasers" component={Leasers}/>


                            <Route exact path="/OwnersDashboard" component={OwnersDashboard}/>
                            <Route exact path="/CreateProperty" component={CreateProperty}/>


                            <Route exact path="/feed" component={Posts} />



                            <Route exact path="/profiles" component={Profiles} />
                            <Route exact path="/profile/:handle" component={Profile} />

                            <Switch>
                                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            </Switch>
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/create-profile"
                                    component={CreateProfile}
                                />
                            </Switch>
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/edit-profile"
                                    component={EditProfile}
                                />
                            </Switch>
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/add-experience"
                                    component={AddExperience}
                                />
                            </Switch>
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/add-education"
                                    component={AddEducation}
                                />
                            </Switch>
                            {/*<Switch>*/}
                                {/*<PrivateRoute exact path="/feed" component={Posts} />*/}
                            {/*</Switch>*/}
                            <Switch>
                                <PrivateRoute exact path="/post/:id" component={Post} />
                            </Switch>
                            <Route exact path="/not-found" component={NotFound} />
                        </div>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
