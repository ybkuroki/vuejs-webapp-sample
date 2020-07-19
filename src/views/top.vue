<template>
  <div>
    <NavBar title="書籍管理システム" :isToggle="true">
      <template slot="content">
        <a class="item" href="#" @click="clickRegist">新規登録</a>
        <a class="item" href="#" @click="downloadReport">ダウンロード</a>
        
        <div class="right menu">
          <div class="item">{{ userName }}さん</div>
          <a class="item" href="#" @click="logout">ログアウト</a>
        </div>
      </template>
      <template slot="mobile-right-content">
        <div class="item">{{ userName }}さん</div>
      </template>
      <template slot="toggle-content">
        <a class="item" href="#" @click="clickRegist">新規登録</a>
        <a class="item" href="#" @click="downloadReport">ダウンロード</a>
        <a class="item" href="#" @click="logout">ログアウト</a>
      </template>
    </NavBar>
    <div class="main ui container">
      <Search @search="searchBook" :isLoading="isLoading" />
      <BookList ref="bookList" :books="books" :totalPages="totalPages" @clickPage="getBookList" />
      <Regist v-model="showModal" @refresh="refreshData" />
    </div>
  </div>
</template>

<script>
import Regist from '../views/regist.vue'
import NavBar from '../components/navbar.vue'
import BookList from '../views/booklist.vue'
import Search from '../views/search.vue'
import Ajax from '../lib/ajax.js'
import * as types from '../store/mutation-types.js'

export default {
  data () {
    return {
      books: [],
      query: '',
      currentPage: 1,
      totalPages: 1,
      uri: '',
      userName: 'user',
      showModal: false,
      isLoading: false
    };
  },
  methods: {
    searchBook(keyword) {
      this.isLoading = true
      this.uri = '/api/book/search?query=' + keyword
      this.currentPage = 1
      this.refreshData()
      this.isLoading = false
    },
    getBookList(page) {
      var self = this;
      Ajax.get(self.uri,
        {page: page - 1, size: 5},
        (body) => {
          self.books = body.content
          self.totalPages = body.totalPages
          self.currentPage = page
        },
        () => {
        })
    },
    refreshData() {
      this.getBookList(this.currentPage)
      if (this.totalPages > 0) this.$refs.bookList.$refs.pagination.setPage(this.currentPage - 1)
    },
    clickRegist() {
      this.showModal = true;
    },
    downloadReport() {
      window.open(Ajax.requestUrl('/api/book/allListPdfReport'))
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
  },
  components: {
    Regist,
    BookList,
    Search,
    NavBar
  },
  created() {
    this.uri = '/api/book/list'
    this.getBookList(1)
    
    var self = this;
    Ajax.get('/api/account/loginAccount',
      {},
      (body) => {
        self.userName = body.name
       })
    
    this.$store.dispatch(types.GET_CATEGORY)
    this.$store.dispatch(types.GET_FORMAT)
  }
}
</script>

<style>
.main.container {
  padding: 4em 2em 2em;
}
</style>