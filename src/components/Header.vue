<template>
  <md-app md-mode="reveal">
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>

        <slot name="header-content">
        </slot>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button" @click="clickGithub">
            <md-icon><font-awesome-icon :icon="['fab', 'github']" /></md-icon>
          </md-button>
          <slot name="header-content-end">
          </slot>
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
        <slot name="app-content">
        </slot>
    </md-app-content>
  </md-app>
</template>

<script>
import { AppInfo } from '@/const.js'

export default {
  name: 'Header',
  data: () => ({
    menuVisible: false
  }),
  methods: {
    clickHome() {
      this.$router.push('home')
    },
    clickAbout() {
      this.$router.push('about')
    },
    clickGithub() {
      window.open(AppInfo.GithubLink)
    }
  },
}
</script>

<style>
.md-app {
  height: 100vh;
}
</style>