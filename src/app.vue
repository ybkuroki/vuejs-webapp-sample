<template>
	<router-view></router-view>
</template>

<script>
import Ajax from './lib/ajax.js'

export default {
	data() {
		return {
      login: false
		}
	},
	methods: {
		checkLogin(to, from, next) {
			var self = this
			Ajax.get('/api/account/loginStatus',
					{},
					() => {
						self.login = true
						next()
					},
					() => {
						self.login = false
						this.$router.push("/login")
					})
		}
	}
}
</script>