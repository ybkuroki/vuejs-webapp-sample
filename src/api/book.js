import Ajax from '@/api/ajax.js'
import { ApiBook } from '@/const.js'

export default {
  get(data, success) {
    Ajax.get(ApiBook.Base, data, success, () => false)
  },
  list(data, success) {
    Ajax.get(ApiBook.List, data, success, () => false)
  },
  search(data, success) {
    Ajax.get(ApiBook.Search, data, success, () => false)
  },
  create(data, success, failure) {
    Ajax.post(ApiBook.Create, data, success, failure)
  },
  edit(data, success, failure) {
    Ajax.post(ApiBook.Edit, data, success, failure)
  },
  delete(data, success) {
    Ajax.post(ApiBook.Delete, data, success, () => false)
  }
}