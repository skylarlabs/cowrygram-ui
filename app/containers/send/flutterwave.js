import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Script from 'react-load-script';

import { ActionButton } from '../../components/ui/buttons';
import money from '../../api/money';


@withRouter
class FlutterWaveComponent extends Component {
  scriptUrl = 'https://js.paystack.co/v1/inline.js';

  state = {
    loading: true,
    error: false,
    fw: null,
    hash: null,
    txref: null
  };


  onLoad = (e) => {
    this.setState({ loading: false, error: false });
    money.getFw(this.props.match.params.quoteId).then(data => this.setState({ fw: data[0] })).then(() =>
      console.log(this.state.fw));
  }

  onPayClick = e => {
    var PBFKey = "FLWPUBK_TEST-ab8ec44695dd20c6f70affd21aabd4a1-X";
    const _this = this;

    if (!this.state.fw) return;

/*    window.paySetup = window.getpaidSetup({
      ...this.state.fw,
      onclose: function() {},
      callback: function(response) {
        var flw_ref = response.tx.flwRef; // collect flwRef returned and pass to a          server page to complete status check.
        if (
          response.tx.chargeResponseCode == "00" ||
          response.tx.chargeResponseCode == "0"
        ) {
          paySetup.close();

          window.paySetup = null;
        } else {
            _this.props.history.push(`/send/${quoteId}/transfer/failure`);
          // redirect to a failure page.
        }
      }
    });*/

    var handler = window.PaystackPop.setup({
      key: 'pk_test_cff34c5958c71a3cb6b3c0497d5dd55802fe2f2d',
      email: 'tomi.jr@gmail.com',
      amount: _this.state.fw.amount * 100,
      currency: "NGN",
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      firstname: 'Tomi',
      lastname: 'Hassan',
      // label: "Optional string that replaces customer email"
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: function(response){
        _this.setState({ loading: true });
        const { quoteId } = _this.props.match.params;

        money.transfer(quoteId).then(data => {
          _this.props.history.push(`/send/${quoteId}/transfer/success`);
        });


          // alert('success. transaction ref is ' + response.reference);
      },
      onClose: function(){
          alert('window closed');
      }
    });

    handler.openIframe();
  }

  render() {
    const { loading, fw } = this.state;

    return (

      <div>
        <ActionButton className="btn-primary btn-block btn-sp" id="btn--pay" disabled={ loading || !fw } loading={ loading } onClick={ this.onPayClick }>Pay Now</ActionButton>
        <Script url={ this.scriptUrl } onLoad={ this.onLoad } />
      </div>
    )
  }
}

export default FlutterWaveComponent;
