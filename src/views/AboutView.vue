<template>
  <ViewBase>
    <template slot="header">
      <span class="md-title">About</span>
    </template>
    
    <template slot="main">
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
  </ViewBase>
</template>

<script>
import { AppInfo } from '@/const.js'
import ViewBase from '@/components/ViewBase.vue'

export default {
  name: 'AboutView',
  data: () => ({
    AppInfo
  }),
  components: {
    'ViewBase': ViewBase,
  },
}
</script>