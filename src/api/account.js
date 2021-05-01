import Ajax from '@/api/ajax.js'
import { ApiAccount } from '@/const.js'

export default {
  loginStatus(success, failure) {
    Ajax.get(ApiAccount.LoginStatus, {}, success, failure)
  },
  loginAccount(success) {
    Ajax.get(ApiAccount.LoginAccount, {}, success, () => false)
  },
  login(data, success, failure) {
    Ajax.formPost(ApiAccount.Login, data, success, failure)
  },
  logout(success) {
    Ajax.post(ApiAccount.Logout, {}, success, () => false)
  }
}