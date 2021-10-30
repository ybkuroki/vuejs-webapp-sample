<template>
  <md-dialog-confirm
    :md-active.sync="isActive"
    md-title="Confirmation"
    :md-content="message"
    md-confirm-text="OK"
    md-cancel-text="Cancel"
    @md-cancel="onCancel"
    @md-confirm="onConfirm" />
</template>

<script>
export default {
  name: 'ConfirmDialog',
  props: {
    message: String,
    success: Function,
    failure: Function
  },
  data: () => ({
    isActive: false
  }),
  created() {
    const el = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(el);
    this.$mount(el)

    this.isActive = true
  },
  methods: {
    onConfirm() {
      this.success()
      this.destroy()
    },
    onCancel() {
      this.failure()
      this.destroy()
    },
    destroy() {
      this.isActive = false
      setTimeout(() => {
        this.$el.parentNode.removeChild(this.$el)
        this.$destroy()
      }, 200)
    }
  }
}
</script>