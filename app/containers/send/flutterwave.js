import React, { Component } from 'react';
import Script from 'react-load-script';

import { ActionButton } from '../../components/ui/buttons';

class FlutterWaveComponent extends Component {
  scriptUrl = 'http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/flwpbf-inline.js';

  state = {
    loading: true,
    error: false
  };


  onLoad = e => {
    this.setState({ loading: false, error: false });
  }


  onPayClick = e => {
    console.log('clicked')
        var PBFKey = "FLWPUBK_TEST-ab8ec44695dd20c6f70affd21aabd4a1-X";

    window.getpaidSetup({
      PBFPubKey: PBFKey,
      amount: 2000,
      country: "NG",
      currency: "NGN",
      custom_description: "Pay Internet",
      custom_logo: "https://caurigram.herokuapp.com/assets/img/logo.png",
      custom_title: "Caurigram",
      customer_email: "user@example.com",
      customer_firstname: "Temi",
      customer_lastname: "Adelewa",
      customer_phone: "234099940409",
      txref: "MG-1",
      integrity_hash: "078753c9e1db7988368060d3055d79c0de3ad9ac395aef0692ac85c1587affd5",
      onclose: function() {},
      callback: function(response) {
        var flw_ref = response.tx.flwRef; // collect flwRef returned and pass to a          server page to complete status check.
        console.log("This is the response returned after a charge", response);
        if (
          response.tx.chargeResponseCode == "00" ||
          response.tx.chargeResponseCode == "0"
        ) {
          // redirect to a success page
        } else {
          // redirect to a failure page.
        }
      }
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <ActionButton className="btn-primary btn-block" id="btn--pay" disabled={ loading } loading={ loading } onClick={ this.onPayClick }>Pay Now</ActionButton>
        <Script url={ this.scriptUrl } onLoad={ this.onLoad } />
      </div>
    )
  }
}

export default FlutterWaveComponent;
