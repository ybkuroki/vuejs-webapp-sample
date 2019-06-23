import request from 'superagent'
import cookie from 'cookie'

export default class Ajax {

    static get(url, data = {}, success, failure) {
        var cookies = cookie.parse(document.cookie)
        var csrf = cookies['XSRF-TOKEN']
        //var self = this

        request
            .get(this.requestUrl(url))
            .withCredentials()
            .set('X-XSRF-TOKEN', csrf)
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
        var cookies = cookie.parse(document.cookie)
        var csrf = cookies['XSRF-TOKEN']
        //var self = this

        request
            .post(this.requestUrl(url))
            .withCredentials()
            .set('Content-Type', 'application/json')
            .set('X-XSRF-TOKEN', csrf)
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
        var cookies = cookie.parse(document.cookie)
        var csrf = cookies['XSRF-TOKEN']
        //var self = this

        request
            .post(this.requestUrl(url))
            .withCredentials()
            .set('X-XSRF-TOKEN', csrf)
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