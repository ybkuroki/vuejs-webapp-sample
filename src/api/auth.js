import Ajax from '@/api/ajax.js'
import { apiAuth } from '@/const.js'

export default {
  loginStatus(success, failure) {
    Ajax.get(apiAuth.LoginStatus, {}, success, failure)
  },
  loginAccount(success) {
    Ajax.get(apiAuth.LoginAccount, {}, success, () => false)
  },
  login(data, success, failure) {
    Ajax.post(apiAuth.Login, data, success, failure)
  },
  logout(success) {
    Ajax.post(apiAuth.Logout, {}, success, () => false)
  }
}