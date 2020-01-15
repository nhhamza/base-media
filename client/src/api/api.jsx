import axios from 'axios';
import { API_ROOT } from './api.conf';
//import { setToken } from './interceptors';

class API {
  http;
  constructor() {
    axios.defaults.baseURL = API_ROOT;
    //setToken();
    this.http = axios;
  }

  getHelp = personalTag => this.http.get(`GetHelp/${personalTag}`);
}

export default new API();
