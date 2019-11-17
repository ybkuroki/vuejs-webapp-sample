<template>
  <div>
    <NavBar title="書籍管理システム" :isToggle="false" />
    <div class="main ui container">
        <div class="column">
          <Message messageType="error" :messages="message" />
          <div class="ui large form">
            <div class="ui segment">
              <InputBox v-model="user" title="ユーザ名" placeholder="ユーザ名" @enter="login" />
              <InputBox v-model="password" title="パスワード" typeName="password" placeholder="パスワード" @enter="login" />
              <CommandButton name="ログイン" className="fluid large primary" :isLoading="isLoading" @click="login" />
            </div>
          </div>
      </div>  
    </div>
  </div>
</template>

<style>
.main.container {
  padding: 4em 2em 2em;
}

.column {
    max-width: 450px;
    margin: 0 auto !important;
}
</style>

<script>
import Ajax from '../lib/ajax.js'
import InputBox from '../components/inputbox.vue'
import NavBar from '../components/navbar.vue'
import Message from '../components/message.vue'
import CommandButton from '../components/commandbutton.vue'

export default {
  data() {
    return {
      user: '',
      password: '',
      message: [],
      isLoading: false
    }
  },
  components: {
    NavBar,
    Message,
    InputBox,
    CommandButton
  },
  methods: {
    login() {
      this.isLoading = true
      var self = this
      Ajax.formPost('/api/account/login',
        {username: self.user, password: self.password},
        () => {
          this.isLoading = false
          this.$router.push("/top")
          self.message = ''
        },
        () => {
          this.isLoading = false
          self.message = {'error': 'ログインに失敗しました。'}
        })
    }
  }
}
</script>
