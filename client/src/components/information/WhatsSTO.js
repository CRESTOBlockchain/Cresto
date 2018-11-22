import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./css/STO.css";
import table from "./img/table2.png";

class WhatsSTO extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <button className="btn btn-info">
                What is Security Token Offerings (STO)
              </button>
              <hr />
              <p>
                Security tokens are digital securities fully compliant with fi
                nancial regulations and run on the blockchain. Security Token
                Offering is a novel way for real estate owners to raise capital:
                they can securitize real estate assets asset by issuing digital
                shares = security tokens and selling them publicly.{" "}
              </p>
            </div>
            <br />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h5> Security Tokens </h5>
              <img src="https://i.imgur.com/RJbrp3m.png" />
              <br />
              <p>Backed up by tangible or intangible assets </p>
              <br />

              <img src="https://i.imgur.com/uyr6Q3t.png" />
              <br />
              <p>Pay regular dividends or interest to investors</p>
              <br />

              <img src="https://i.imgur.com/2ELQ7hl.png" />
              <br />
              <p>Regulated offerings – KYC, AML compliance </p>
              <br />
            </div>
            <div className="col text-center">
              <h5>Utility Tokens</h5>
              <img src="https://i.imgur.com/p7AWzZr.png" />
              <br />
              <p>Represent future access to a product and service </p>
              <br />

              <img src="https://i.imgur.com/KHJeRok.jpg" />
              <br />
              <p>Return is based on coin appreciation </p>
              <br />

              <img src="https://i.imgur.com/ObGJSWw.png" />
              <br />
              <p>Unregulated sales </p>
              <br />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <button className="btn btn-info">Advantages of STO</button>
              <hr />
            </div>
            <br />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col text-center">
              <img src="https://i.imgur.com/40RUKtA.jpg" />
              <h6>Lower Cost</h6>{" "}
              <p>
                - lower transaction cost and fees than in traditional financing
              </p>
            </div>
            <div className="col text-center">
              <img src="https://i.imgur.com/EPq4Wjr.jpg" />
              <h6>More Efficient</h6> <p>- fast and easy transaction process</p>
            </div>
            <div className="col text-center">
              <img src="https://i.imgur.com/gkcWMry.jpg" />
              <h6>More Liquid</h6> <p>- 24/7 access to world markets</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col text-center">
              <img src="https://i.imgur.com/S9H5mQH.jpg" />
              <h6>More Transparent</h6>{" "}
              <p>
                - Transparent flow of information, possible to eliminate
                middlemen
              </p>
            </div>
            <div className="col text-center">
              <img src="https://i.imgur.com/iThCvXg.jpg" />
              <h6>Lower Risk</h6>{" "}
              <p>
                - Automated transaction and distribution lower operational,
                credit and default risk
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <hr />
              <h5>
                Evolution of Coin Offering: from ICO to STO
                <br />
                <br />
              </h5>
            </div>
            <br />
          </div>
        </div>
        <div>
          <img src={table} />
        </div>
        <div className="container">
          <div className="row" />
        </div>
      </div>
    );
  }
}

WhatsSTO.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(WhatsSTO);
