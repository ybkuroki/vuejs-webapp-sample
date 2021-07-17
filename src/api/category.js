import Ajax from '@/api/ajax.js'
import { ApiCategory } from '@/const.js'

export default {
  list(success) {
    Ajax.get(ApiCategory, {}, success, () => false)
  }
}