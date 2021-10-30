<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">

      <div class="title">
        <div class="md-title">{{ AppInfo.AppName }}</div>
      </div>

      <div class="form">
        <md-field>
          <label>User</label>
          <md-input v-model="user" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="password" type="password" @keyup.enter="login"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <md-button class="md-raised md-primary" @click="login">Log in</md-button>
      </div>

      <div class="loading-overlay" v-if="isLoading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>

      <md-snackbar md-position="center" :md-active.sync="showErrorMessage" md-persistent>
        <span>{{ message }}</span>
      </md-snackbar>

    </md-content>
  </div>
</template>

<script>
import { AppInfo } from '@/const.js'
import Api from '@/api/auth.js'

export default {
  name: "LoginView",
  data() {
    return {
      AppInfo,
      user: '',
      password: '',
      message: '',
      showErrorMessage: false,
      isLoading: false
    }
  },
  methods: {
    login() {
      this.isLoading = true
      Api.login(
        {username: this.user, password: this.password},
        () => {
          this.isLoading = false
          this.$router.push("/home")
        },
        () => {
          this.isLoading = false
          this.showErrorMessage = true
          this.message = 'Failed to logged-in.'
        })
    }
  }
};
</script>

<style>
.centered-container {
  background-color:lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
}
.centered-container .title {
  text-align: center;
  margin-bottom: 30px;
}
.centered-container .form {
  margin-bottom: 60px;
}
.centered-container .md-content {
  z-index: 1;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  position: relative;
}
.centered-container .loading-overlay {
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>