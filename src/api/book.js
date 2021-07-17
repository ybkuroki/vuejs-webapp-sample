import Ajax from '@/api/ajax.js'
import { ApiBook } from '@/const.js'

export default {
  get(data, success) {
    Ajax.get(ApiBook + `/${data.id}`, "", success, () => false)
  },
  search(data, success) {
    Ajax.get(ApiBook, data, success, () => false)
  },
  create(data, success, failure) {
    Ajax.post(ApiBook, data, success, failure)
  },
  edit(data, success, failure) {
    Ajax.put(ApiBook + `/${data.id}`, data, success, failure)
  },
  delete(data, success) {
    Ajax.delete(ApiBook + `/${data}`, "", success, () => false)
  }
}