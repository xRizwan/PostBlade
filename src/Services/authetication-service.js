import config from '../config';

const TokenService = {
  loginUser() {
    window.localStorage.setItem(config.LOG_KEY, true);
  },
  checkUser() {
    return window.localStorage.getItem(config.LOG_KEY);
  },
  logoutUser() {
    window.localStorage.removeItem(config.LOG_KEY);
  },
};

export default TokenService;
