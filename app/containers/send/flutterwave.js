import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Script from 'react-load-script';

import { ActionButton } from '../../components/ui/buttons';
import money from '../../api/money';


@withRouter
class FlutterWaveComponent extends Component {
  scriptUrl = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js';

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
    console.log('clicked')
    var PBFKey = "FLWPUBK_TEST-ab8ec44695dd20c6f70affd21aabd4a1-X";
    const _this = this;

    window.paySetup = window.getpaidSetup({
      ...this.state.fw,
      onclose: function() {},
      callback: function(response) {
        var flw_ref = response.tx.flwRef; // collect flwRef returned and pass to a          server page to complete status check.
        if (
          response.tx.chargeResponseCode == "00" ||
          response.tx.chargeResponseCode == "0"
        ) {
          paySetup.close();

          _this.setState({ loading: true });
          const { quoteId } = _this.props.match.params;

          money.transfer(quoteId).then(data => {
            _this.props.history.push(`/send/${quoteId}/transfer/success`);
          });

          window.paySetup = null;
        } else {
            _this.props.history.push(`/send/${quoteId}/transfer/failure`);
          // redirect to a failure page.
        }
      }
    });
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
