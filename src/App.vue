<template>
  <div id="app" class="page-container">
    <router-view/>
  </div>
</template>

<script>
import Ajax from "@/ajax/ajax.js"

export default {
  name: 'App',
  data() {
    return {
      login: false
    };
  },
  methods: {
    checkLogin(to, from, next) {
      var self = this;
      Ajax.get(
        "/api/account/loginStatus",
        {},
        () => {
          self.login = true;
          next();
        },
        () => {
          self.login = false;
          this.$router.push("/login");
        }
      );
    }
  }
}
</script>