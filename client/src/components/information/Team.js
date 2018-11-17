import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './css/team.css';

class Team extends Component {

    render() {
        return (
            <div>

                <div className=" d-flex justify-content-center flex-wrap">

                    <div className="member">
                        <div className="member-cover"><img
                            src="https://user-images.githubusercontent.com/21117852/47724521-d2372c80-dc91-11e8-8142-6fc4f4ffc5d6.png"
                            alt="Kosta Kantchev" className="member-photo"/> <a
                            target="_blank" href='https://www.linkedin.com/in/mariakutkina/'
                            className="member-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} size="1x"/></a></div>
                        <h2 className="h2">Mariia Kutkina</h2>
                        <span className="member-jobtitle"> Business Strategy </span>
                        <div className="member-bio"><p>Above 10 years of experience in commercial real estate markets in UAE, Spain & Russia. Above 8 years of entrepreneurial experience, 2 startups successfully launched. IESE / CEIBS MBA</p>
                        </div>
                    </div>
                    <div className=" member">
                        <div className="member-cover"><img
                            src="https://user-images.githubusercontent.com/21117852/47820975-10b80e80-dd9a-11e8-8f3a-b09395b89129.png"
                            alt="Kosta Kantchev" className="member-photo"/> <a
                            target="_blank" href='https://www.linkedin.com/in/shangzhi-bian-83903639/'
                            className="member-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} size="1x"/></a></div>
                        <h2 className="h2">Brian Bian</h2><span className="member-jobtitle"> Finance (due diligence) </span>
                        <div className="member-bio"><p>Above 7 years of experience in real estate investments, development projects & asset management. Co-founder of Vnet blockchain project for real estate.  CEIBS MBA & CFA level 3</p>
                        </div>
                    </div>

                    <div className=" member">
                        <div className="member-cover"><img
                            src="https://user-images.githubusercontent.com/21117852/47821008-2fb6a080-dd9a-11e8-9bd3-e3933c16634a.png"
                            alt="Kosta Kantchev" className="member-photo"/> <a
                            target="_blank" href='https://www.linkedin.com/in/otto-kafka-50899b7a/'
                            className="member-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} size="1x"/></a></div>
                        <h2 className="h2">Otto Kafka</h2><span className="member-jobtitle"> Technical Lead</span>
                        <div className="member-bio"><p>Above 10 years of entrepreneurial experience in the tech industry. Full stack developer with mastery of React, Node JS, Express. JS, and MongoDB. Successfully launched projects in California, Beijing, Shanghai, & Shenzhen

                        </p>
                        </div>
                    </div>
                </div>





                <div className=" d-flex justify-content-center flex-wrap">

                    <div className="member">
                        <div className="member-cover"><img
                            src="https://user-images.githubusercontent.com/21117852/47821109-891ecf80-dd9a-11e8-89fd-a32306b61666.png"
                            alt="Kosta Kantchev" className="member-photo"/> <a
                            target="_blank" href='https://linkedin.com/in/mobinarablou'
                            className="member-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} size="1x"/></a></div>
                        <h2 className="h2">Mobin Arablou</h2><span className="member-jobtitle"> Blockchain Developer </span>
                        <div className="member-bio"><p>8 years of experiences in software development (Machine learning, Blockchain, App development). White Hat Hacker. Holds degrees in computer engineering, computer science and electronics & biotechnology</p>
                        </div>
                    </div>

                    {/*<div className=" member">*/}
                    {/*<div className="member-cover"><img*/}
                    {/*src="https://user-images.githubusercontent.com/21117852/47821133-a358ad80-dd9a-11e8-851a-1e4934ea7418.png"*/}
                    {/*alt="Kosta Kantchev" className="member-photo"/> <a*/}
                    {/*target="_blank" href='https://linkedin.com/in/amjadkhan5191'*/}
                    {/*className="member-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} size="1x"/></a></div>*/}
                    {/*<h2 className="h2">Amjad Gul</h2><span className="member-jobtitle">  Technology </span>*/}
                    {/*<div className="member-bio"><p>2 years plus experience in software technology industry*/}
                    {/*Backend developer with experience in frontend as well</p>*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    <div className=" member">
                        <div className="member-cover"><img
                            src="https://user-images.githubusercontent.com/21117852/47942539-4c371200-df2d-11e8-99bf-86e5626e955b.png"
                            alt="Kosta Kantchev" className="member-photo"/> <a
                            href="https://www.linkedin.com/in/aruzikulov/" target="_blank"
                            className="member-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} size="1x"/></a></div>
                        <h2 className="h2">Jon Ruzikulov</h2><span className="member-jobtitle">  Blockchain Developer </span>
                        <div className="member-bio"><p>Co-Founder & CTO at OBORCHAIN Blockchain enthusiast and developer. 15 years of software development experience. Information security professional. Computer Science Lecturer at a University and PhD candidate
                        </p>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

Team.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Team);
