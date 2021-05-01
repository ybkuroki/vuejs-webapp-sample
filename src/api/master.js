import Ajax from '@/api/ajax.js'
import { ApiMaster } from '@/const.js'

export default {
  category(success) {
    Ajax.get(ApiMaster.Category, {}, success, () => false)
  },
  format(success) {
    Ajax.get(ApiMaster.Format, {}, success, () => false)
  }
}