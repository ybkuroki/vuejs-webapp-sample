<template>
  <div>
    <Modal v-model="showModal">
      <template slot="header">
        書籍登録
      </template>
      <template slot="content">
        <Message messageType="error" :messages="errors" />
        <div class="ui form">
          <InputBox v-model="title" title="書籍タイトル" :isValide="errors.hasOwnProperty('title')" />
          <InputBox v-model="isbn" title="ISBN" :isValide="errors.hasOwnProperty('isbn')" />
          <SelectBox v-model="category" title="カテゴリ" :options="categories" />
          <SelectBox v-model="format" title="形式" :options="formats" />
        </div>
      </template>
      <template slot="footer">
        <CommandButton name="キャンセル" className="black" :useDiv="true" @click="bookCancel" />
        <CommandButton name="登録" className="primary right" :useDiv="true" :isLoading="isLoading" @click="bookRegist" />
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '../components/modal.vue'
import Message from '../components/message.vue'
import InputBox from "../components/inputbox.vue"
import SelectBox from "../components/selectbox.vue"
import CommandButton from '../components/commandbutton.vue'
import Ajax from '../lib/ajax.js'

export default {
  data () {
    return {
      title: '',
      isbn: '',
      errors: [],
      category: 1,
      format: 1,
      isLoading: false
    };
  },
  props: {
    showModal: { type: Boolean, default: false }
  },
  model: {
    prop: 'showModal',
    event: 'changed'
  },
  components: {
    Modal,
    Message,
    InputBox,
    SelectBox,
    CommandButton
  },
  computed: {
    categories() {
      return this.$store.getters.getCategory
    },
    formats() {
      return this.$store.getters.getFormat
    }
  },
  methods: {
    success() {
      this.initilize()
      location.href='/'
    },
    initilize() {
      this.errors = '';
      this.title = '';
      this.isbn = '';
      this.category = 1;
      this.format = 1;
      
      this.$emit('changed', false)
    },
    bookRegist() {
      var self = this;
      this.isLoading = true
      var book = {
        title: this.title,
        isbn: this.isbn,
        categoryId: this.category,
        formatId: this.format
      }

      Ajax.post('/api/book/new',
        JSON.stringify(book),
        () => {
          this.isLoading = false
          self.success()
        },
        (body) => {
          this.isLoading = false
          self.errors = body
        })
    },
    bookCancel() {
      this.initilize()
    }
  }
}
</script>