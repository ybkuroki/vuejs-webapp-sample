<template>
  <Header>
    <template slot="header-content">
      <span class="md-title">About</span>
    </template>
    
    <template slot="app-content">
      <md-list>
        <md-subheader class="md-primary">Application Name</md-subheader>
        <md-list-item>
          <span class="md-list-item-text">{{ AppInfo.AppName }}</span>
        </md-list-item>
        
        <md-subheader class="md-primary">Developer</md-subheader>
        <md-list-item>
          <span class="md-list-item-text">{{ AppInfo.AppDeveloper }}</span>
        </md-list-item>
        
        <md-subheader class="md-primary">Github</md-subheader>
        <md-list-item>
          <span class="md-list-item-text">{{ AppInfo.GithubLink }}</span>
        </md-list-item>
      </md-list>
    </template>
  </Header>
</template>

<script>
import { AppInfo } from '@/const.js'
import Header from '@/components/Header.vue'

export default {
  name: 'About',
  data: () => ({
    AppInfo
  }),
  components: {
    'Header': Header,
  },
}
</script>