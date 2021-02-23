<template>
  <div>
    <Header>
      <template slot="header-content">
        <md-field md-clearable class="search-box md-autocomplete md-autocomplete-box md-inline">
          <div class="md-menu">
            <md-input v-model="keyword" @keyup.enter="search" />
          </div>
          <label>Search...</label>
        </md-field>
        <md-button class="md-icon-button" @click="search">
          <md-icon>search</md-icon>
        </md-button>
      </template>

      <template slot="header-content-end">
        <label>{{ userName }}</label>
        <md-button class="md-icon-button" @click="logout">
          <md-icon><font-awesome-icon :icon="['fas', 'sign-out-alt']" /></md-icon>
        </md-button>
      </template>
      
      <template slot="app-content">
        <CreateCard v-if="isCreate" @cancel="createCancel" />
        <md-progress-spinner v-if="isLoading" md-mode="indeterminate"></md-progress-spinner>
        <EditCard v-else v-for="book in books" :book="book" :key="book.id" @cancel="getBookList" />
        <div class="margin"></div>
      </template>
    </Header>

    <md-button class="md-fab md-fab-bottom-right md-primary" @click="create">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<style>
.search-box {
  min-width: 20px;
}
.md-card {
  margin: 10px;
}
.md-card-content {
  font-size: 16px !important;
  padding: 20px;
}
.margin {
  height:70px;
}
</style>

<script>
import Ajax from "@/ajax/ajax.js"
import Header from '@/components/Header.vue'
import CreateCard from '@/views/CreateCard.vue'
import EditCard from '@/views/EditCard.vue'
import * as types from '@/store/mutation-types.js'
 
export default {
  name: 'home',
  data: () => ({
    books: [],
    query: '',
    uri: '',
    userName: 'user',
    keyword: '',
    contents: [],
    isLoading: false,
    isCreate: false,
  }),
  components: {
    'CreateCard': CreateCard,
    'EditCard': EditCard,
    'Header': Header,
  },
  created() {
    this.uri = '/api/book/list'
    this.getBookList()
    
    var self = this;
    Ajax.get('/api/account/loginAccount',
      {},
      (body) => {
        self.userName = body.name
      })
    
    this.$store.dispatch(types.GET_CATEGORY)
    this.$store.dispatch(types.GET_FORMAT)
  },
  methods: {
    search() {
      this.isLoading = true
      this.uri = '/api/book/search?query=' + this.keyword
      this.currentPage = 1
      this.isLoading = false
      this.getBookList()
    },
    getBookList() {
      var self = this;
      Ajax.get(self.uri, {},
        (body) => {
          self.books = body.content
        },
        () => {
        })
    },
    create() {
      this.isCreate = true
      document.querySelector('.md-scrollbar').scrollTop = 0
    },
    createCancel() {
      this.isCreate = false
      this.getBookList()
    },
    logout() {
      Ajax.post('/api/account/logout',
        {},
        () => {
          this.$router.push("/login")
          Ajax.get("/api/account/loginStatus",{},{},{})
        },
        () => {
        })
    }
  }
}
</script>
