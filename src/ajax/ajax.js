import request from 'superagent'

export default class Ajax {

  static get(url, data = {}, success, failure) {
    request
      .get(this.requestUrl(url))
      .withCredentials()
      .query(data)
      .end((err, res) => {
        if(res && res.ok) {
          success(res.body)
        } else {
          failure(res.body)
        }
      })
  }

  static post(url, data = {}, success, failure) {
    request
      .post(this.requestUrl(url))
      .withCredentials()
      .set('Content-Type', 'application/json')
      .send(data)
      .end((err, res) => {
        if (res && res.ok) {
          success(res.body)
        } else {
          failure(res.body)
        }
      })
  }
  
  static formPost(url, data = {}, success, failure) {
    request
      .post(this.requestUrl(url))
      .withCredentials()
      .type('form')
      .send(data)
      .end((err, res) => {
        if (res && res.ok) {
          success(res.body)
        } else {
          failure(res.body)
        }
      })
  }

  static requestUrl(url) {
    if (process.env.NODE_ENV == 'development') {
      return 'http://localhost:8080' + url
    } else {
      return url
    }
  }
}