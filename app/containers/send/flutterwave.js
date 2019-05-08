import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Script from 'react-load-script';

import { ActionButton } from '../../components/ui/buttons';
import money from '../../api/money';


@withRouter
@inject('SessionStore')
class FlutterWaveComponent extends Component {
  scriptUrl = 'https://js.paystack.co/v1/inline.js';

  store = () => this.props.SessionStore;

  state = {
    loading: true,
    error: false,
    fw: null,
    hash: null,
    txref: null
  };


  onLoad = (e) => {
    this.setState({ loading: false, error: false });
    money.getFw(this.props.match.params.quoteId).then(data => this.setState({ fw: data[0] }));
  }

  async onSuccess(response) {
    this.setState({ loading: true });
    const { quoteId } = this.props.match.params;


    const [data, error] = await money.verifyTransaction(quoteId, { reference: response.reference });

    if (!error) {
      const [transfer, err] = await money.transfer(quoteId);
      if (!err) {
        this.props.history.replace(`/send/${quoteId}/transfer/success`);
      }
      return;
    };

    this.props.history.replace(`/send/${quoteId}/transfer/failure`);
  }

  onPayClick = e => {
    const _this = this;

    const { user } = this.store();
    const name = user.name.split(' ');

    var handler = window.PaystackPop.setup({
      key: 'pk_test_cff34c5958c71a3cb6b3c0497d5dd55802fe2f2d',
      amount: Number(String(_this.state.fw.amount).split('.')[0]) * 100,
      email: user.email,
      currency: "NGN",
      firstname: name[0],
      lastname: name.length > 1 ? name[1] : '',

      callback: function(response){
        _this.onSuccess(response);
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

