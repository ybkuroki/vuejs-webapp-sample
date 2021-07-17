<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Api from "@/api/auth.js"
import * as types from '@/store/mutation-types.js'

export default {
  name: 'App',
  data() {
    return {
      login: false
    };
  },
  methods: {
    checkLogin(to, from, next) {
      Api.loginStatus(
        () => {
          this.login = true
          this.setStore()
          next()
        },
        () => {
          this.login = false
          this.$router.push("/login")
        }
      )
    },
    setStore() {
      let account = this.$store.getters.getLoginAccount
      let category = this.$store.getters.getCategory
      let format = this.$store.getters.getFormat
      if (account == null && category == null && format == null) {
        this.$store.dispatch(types.GET_LOGIN_ACCOUNT)
        this.$store.dispatch(types.GET_CATEGORY)
        this.$store.dispatch(types.GET_FORMAT)
      }
    }
  }
}
</script>