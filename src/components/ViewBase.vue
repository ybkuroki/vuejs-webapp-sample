<template>
  <div>
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>

          <slot name="header">
          </slot>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button" @click="clickGithub">
              <md-icon><font-awesome-icon :icon="['fab', 'github']" /></md-icon>
            </md-button>
            <label v-if="userName != ''">{{ userName }}</label>
            <md-button class="md-icon-button" @click="logout">
              <md-icon><font-awesome-icon :icon="['fas', 'sign-out-alt']" /></md-icon>
            </md-button>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item @click="clickHome">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item @click="clickAbout">
            <md-icon>info</md-icon>
            <span class="md-list-item-text">About</span>
          </md-list-item>

          <md-list-item @click="clickGithub">
            <md-icon><font-awesome-icon :icon="['fab', 'github']" /></md-icon>
            <span class="md-list-item-text">GitHub</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
          <slot name="main">
          </slot>
      </md-app-content>
    </md-app>
    
    <slot name="overlay" v-if="!menuVisible">
    </slot>
  </div>
</template>

<script>
import Api from "@/api/auth.js"
import { AppInfo } from '@/const.js'

export default {
  name: 'ViewBase',
  data: () => ({
    menuVisible: false
  }),
  computed: {
    userName() {
      let account = this.$store.getters.getLoginAccount
      return account != null ? account.name : ''
    }
  },
  methods: {
    clickHome() {
      this.$router.push('home', () => {})
    },
    clickAbout() {
      this.$router.push('about', () => {})
    },
    clickGithub() {
      window.open(AppInfo.GithubLink)
    },
    logout() {
      Api.logout(() => this.$router.push("/login"))
    }
  },
}
</script>

<style>
.md-app {
  height: 100vh;
}
</style>