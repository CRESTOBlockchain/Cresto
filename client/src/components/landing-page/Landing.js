import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import WhatsSTO from '../information/WhatsSTO'
import Team from '../information/Team'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBalanceScale, faHandshake, faWifi} from '@fortawesome/free-solid-svg-icons'

import './css/landing.css';

class Landing extends Component {

    // This checks if user authenticated if yes automatically sends to dashboard - if enabled
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            // this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <div>
                <div className="landing">

                    <div className="dark-overlay landing-inner text-light">

                        <div className="container">
                            {/*<div className="row">*/}
                                {/*<div className='col-md-12'>*/}
                                    {/*<a href="https://github.com/CRESTOBlockchain/Cresto/raw/master/client/src/info/CRESTOPresentation.pdf"*/}
                                       {/*download="proposed_file_name">*/}
                                        {/*<button className='btn downloadBrochure' style={{float: "right"}}>Download Brochure</button>*/}
                                    {/*</a>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            <div className="row">

                                <div className="col-md-12 text-center">
                                    <h1 className="display-3 mb-4"></h1>
                                    <h4>A NOVEL WAY OF FUNDRAISING AND INVESTING
                                    </h4>

                                    <hr style={{border: "solid", color: "yellow"}}/>

                                    <br/>


                                </div>
                            </div>
                            <div className="row">
                                <div className='col'>
                                    <p>Real estate owners can issue digital securities and hold a SECURITY TOKEN OFFERING – a hybrid investment model combining advantages of an IPO, an ICO, and a VC funding.</p>
                                    <p>Both traditional and crypto investors can  purchase SECURITY TOKENS backed by real estate assets. This investment is backed by legally binding SMART CONTRACT and is fully compliant with existing financial regulations.</p>
                                </div>
                            </div>

                            <br/>
                            <div className="row">
                                <div className='col-md-12 text-center'>
                                    <a href="https://github.com/CRESTOBlockchain/Cresto/raw/master/client/src/info/CRESTOPresentation.pdf"
                                       download="proposed_file_name">
                                        <button className='btn downloadBrochure' style={{border: "solid", borderColor: "yellow"}}>Download Brochure</button>
                                    </a>
                                </div>
                            </div>

                            {/*<div className="row">*/}
                                {/*<div className='col text-center'>*/}
                                    {/*<p className='lead'>We tokenize your assets &*/}
                                        {/*hold initial sale of your securities</p>*/}
                                {/*</div>*/}
                                {/*<div className='col text-center'>*/}
                                    {/*<p className='lead'>*/}
                                        {/*We give you opportunity to invest into real estate backed securities & Trade*/}
                                        {/*your securities on secondary market</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<hr/>*/}

                                {/*<div className="d-flex justify-content-center flex-wrap">*/}
                                    {/*<div className="text-center iconDiv">*/}
                                        {/*<FontAwesomeIcon icon={faBalanceScale} size="3x" />*/}
                                        {/*<h6>Full legal compliance</h6>*/}
                                        {/*<p className="small border border-light" style={{minHeight: "154px"}}>We are committed not only to comply with all financial regulations, but to actively promote cooperation with relevant financial authorities of countries, where we will operate. We see crystal clear reputation of our own company and all our partners as the key to success in this nascent and very patent industry.</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="text-center iconDiv">*/}
                                        {/*<FontAwesomeIcon icon={faHandshake} size="3x" />*/}
                                        {/*<h6>Cooperation instead of “disruption”</h6>*/}
                                        {/*<p className="small border border-light" style={{minHeight: "154px"}} >We aim at organic and seamless integration of proposed solution into existing financial ecosystem, providing real estate investors and sponsors with additional opportunities. We do not believe in "disruption” of current financial institutions. We believe in cooperation.</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="text-center iconDiv">*/}
                                        {/*<FontAwesomeIcon icon={faWifi} size="3x"/><h6>Advantages through technology</h6>*/}
                                        {/*<p className="small border border-light" style={{minHeight: "154px"}}>Asset holders and retail investors are offered alternative way to connect - through CRESTO platform. CRESTO is built on Ethereum public blockchain and allows to trade tokens (being essentially digital securities) on primary and secondary markets. Smart contract technology is used to regulate asset managers' and investors' relations in a transparent and safe way.</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                <div className="d-flex justify-content-center flex-wrap" style={{padding: 100}}>
                    <img src='https://user-images.githubusercontent.com/21117852/48662995-ceded600-eac4-11e8-8cb6-700dbb0ef333.png' style={{marginRight: 50}}/>
                    <img src='https://user-images.githubusercontent.com/21117852/48663003-e61dc380-eac4-11e8-97c8-a2629b313f15.png' style={{marginLeft: 50}}/>

                </div>
                <div className="d-flex justify-content-center flex-wrap">
                    <WhatsSTO/>
                </div>
                <hr/>
                <Team/>
                </div>
        );
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Landing);
