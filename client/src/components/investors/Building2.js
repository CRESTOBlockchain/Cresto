//import "./evt.js";
//import "./DegronEvt.js";
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faChartLine, faMapSigns, faUserFriends} from '@fortawesome/free-solid-svg-icons'

import Navbar from './InvestorsNavbar'
import './css/sidebar.css';
import { investEVT, importWallet } from './DegronEvt.js'


class Building2 extends Component {


    // This checks if user authenticated if yes automatically sends to dashboard - if enabled
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            // this.props.history.push('/dashboard');
        }

        const script = document.createElement("script");

        script.src = "./evt.min.js";

        script.type = 'text/javascript';
        script.async = true;

        document.body.appendChild(script);
        window.addEventListener('load', this.loadEVT);
        //loadEVT();

    }
    componentWillMount (){

    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to='InvestorsDashboard'>
                                            <FontAwesomeIcon icon={faHome} className='iconCSS'/>
                                            Dashboard <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <FontAwesomeIcon icon={faChartLine} className='iconCSS'/>
                                            Charts<span className="badge badge-primary" style={{marginLeft: "15px"}}>8</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">

                                            <FontAwesomeIcon icon={faMapSigns} className='iconCSS'/>Maps
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <FontAwesomeIcon icon={faUserFriends} className='iconCSS'/>Leasers
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </nav>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div
                                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Degron | Dashboard Real Estate Owner</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">
                                    </div>

                                    <div className="dropdown show">
                                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button"
                                           id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            Sort
                                        </a>

                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a className="dropdown-item" href="#">Buildings</a>
                                            <a className="dropdown-item" href="#">Offices</a>
                                            <a className="dropdown-item" href="#">Large Spaces</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*<canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>*/}

                            <h2>Buildings 1</h2>
                            <p>This building is really awesome and you should invest in it</p>
                            <p>Trust me I am a business man so I know a deal.</p>

                            <Link to='building2' className="card">
                                <img className="card-img-top" src="https://user-images.githubusercontent.com/21117852/47975664-b7c5de80-e0e9-11e8-9845-307e3dfa8fd1.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Hongkou Technology and Financial Building</h5>
                                    <p className="card-text">This card has supporting text below as a natural
                                        lead-in to additional content.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">No.463 Tanggu Road, Hongkou District, Shanghai, China</small>
                                </div>
                            </Link>
                            <section>
                                <p className="card-text">Status of Everitoken blockchain&nbsp; <input type="text" id="status" value="Unconnected"/></p>

                                <p className='card-text'>Step 1: Load Wallet </p>
                                <p className='card-text'>Investor: Michael &nbsp;&nbsp;<button className="btn btn-primary" onClick={importWallet} >Load Wallet</button></p>
                                <p className='card-text'><b>Michael's Wallet</b>: Everitoken (EVTs): <input type="text" value="" id="evt"></input> Degron(Degs): <input type="text" id="deg"></input>
                                    <p className='card-text'>Version of Everitoken blockchain &nbsp;
                                        <input type="text" id="version"/>

                                        <hr/>
                                        <p className='card-text'>Step 2: Type in amount you wish to invest and click Invest button </p></p>
                                </p>
                                <p>Using Everitoken(<b>EVT</b>) you can now invest in real estate, invest your EVT and get Degron token(<b>Deg</b>) and safeguard your money and future"</p>
                                <p>Invest EVT amount in this property (example: 20): <input type="text" id="sendEVT"></input> <button className="btn btn-primary" onClick={investEVT} >invest</button></p> <p id="investClear"></p>
                            </section>


                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

Building2.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Building2);
