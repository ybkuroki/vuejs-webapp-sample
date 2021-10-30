import Confirm from '@/components/ConfirmDialog.vue'

export default class Dialog {
  static install(Vue) {
    Vue.mixin({
      methods: {
        $confirm(message) {
          return new Promise((resolve) => {
            const VM = Vue.extend(Confirm);
            new VM({
              propsData: {
                message,
                success: () => resolve(true),
                failure: () => resolve(false),
              }
            })
          })
        }
      }
    })
  }
}