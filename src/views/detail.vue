<template>
  <div>
    <a href="#" @click="clickDetail">{{ book.title }}</a>
    
    <Modal v-model="showModal" >
      <template slot="header">
        書籍詳細
      </template>
      <template slot="content">
        <div class="ui form">
          <LabelGroup title="書籍タイトル" :name="book.title" />
          <LabelGroup title="ISBN" :name="book.isbn" />
          <LabelGroup title="カテゴリ" :name="book.category.name" />
          <LabelGroup title="形式" :name="book.format.name" />
        </div>
      </template>
      <template slot="footer">
        <CommandButton name="OK" className="primary right" @click="clickOk" />
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '../components/modal.vue'
import LabelGroup from "../components/labelgroup.vue"
import CommandButton from '../components/commandbutton.vue'

export default {
  name: 'Detail',
  props: ['book'],
  data () {
    return {
      showModal: false
    };
  },
  components: {
    Modal,
    LabelGroup,
    CommandButton
  },
  methods: {
    clickDetail() {
      this.showModal = true
    },
    clickOk() {
      this.showModal = false
    }
  }
}
</script>