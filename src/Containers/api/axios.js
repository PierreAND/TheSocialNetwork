import axios from "axios";
import Cookies from "js-cookie";




const APIRequest = axios.create ({ baseURL: "http://localhost:1337" })


APIRequest.interceptors.request.use(({headers, ...config}) => ({
  ...config,
  headers: {
    ...headers, 
    
    "Content-type": "application/json",
  },
}));

const APIState = axios.create ({ baseURL: "http://localhost:1337" })

APIState.interceptors.request.use(({headers, ...config}) => ({
  ...config,
  headers: {
    ...headers, 
    
    "Content-type": "application/json",
   "Authorization" : ` Bearer ${Cookies.get("token")}`
  },
}));

export default class APIManager {
  static async register(data) {
    const addbase = "/auth/local/register";
    const response = await APIRequest.post( addbase, data);
    return response;
  }

  static async login(data) {
    const addbase = "/auth/local"
    const response = await APIRequest.post( addbase, data)
    Cookies.set("token", response.data.jwt)
    return response;
  }

  static async profile() {
    const addbase = "/user/me"
    const response = await APIState.get (addbase)
  
    return response;
    
  }
}



