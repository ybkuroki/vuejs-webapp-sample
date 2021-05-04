import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.VUE_APP_API_ROOT

export default class Ajax {

  static get(url, data = {}, success, failure) {
    const params = this.createParameter(data)
    axios
      .get(url, {params: params})
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => {
        if (failure) failure(err)
      })
  }

  static post(url, data = {}, success, failure) {
    axios
      .post(url, data)
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => {
        if (failure) failure(err)
      })
  }
  
  static formPost(url, data = {}, success, failure) {
    const params = this.createParameter(data)
    const config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    }
    axios
      .post(url, params, config)
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => {
        if (failure) failure(err)
      })
  }

  static createParameter(data = {}) {
    const params = new URLSearchParams();
    Object.keys(data).forEach(key => {
      if (data[key]) {
        params.append(key, data[key]);
      }
    });
    return params
  }
}