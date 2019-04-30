import SendMoneyStore from './send-money';
import SessionStore from './session';
import onboarding from './onboarding';
import dashboard from './dashboard';
import send from './send';


export default {
  ...send,
  ...onboarding,
  ...dashboard,
  SessionStore,
  SendMoneyStore,
};