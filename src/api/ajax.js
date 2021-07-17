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

  static put(url, data = {}, success, failure) {
    axios
      .put(url, data)
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => {
        if (failure) failure(err)
      })
  }

  static delete(url, data = {}, success, failure) {
    axios
      .delete(url, data)
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