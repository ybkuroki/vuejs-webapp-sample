import Ajax from '@/api/ajax.js'
import { ApiFormat } from '@/const.js'

export default {
  list(success) {
    Ajax.get(ApiFormat, {}, success, () => false)
  }
}