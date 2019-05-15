import SessionStore from './session';
import onboarding from './onboarding';
import dashboard from './dashboard';
import send from './send';
import nav from './nav';

export default {
  ...send,
  ...onboarding,
  ...dashboard,
  nav,
  SessionStore
};