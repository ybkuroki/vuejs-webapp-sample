<template>
  <md-card md-with-hover>
    <md-card-content>
      <md-field :class="{ 'md-invalid' : errors.hasOwnProperty('title')}">
        <label>Title</label>
        <md-input v-model="title" autofocus required></md-input>
        <span class="md-error">{{ errors['title'] }}</span>
      </md-field>
      <md-field :class="{ 'md-invalid' : errors.hasOwnProperty('isbn')}">
        <label>ISBN</label>
        <md-input v-model="isbn" required></md-input>
        <span class="md-error">{{ errors['isbn'] }}</span>
      </md-field>
      <md-field>
        <label>Category</label>
        <md-select v-model="category">
          <md-option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</md-option>
        </md-select>
      </md-field>
      <md-field>
        <label>Format</label>
        <md-select v-model="format">
          <md-option v-for="format in formats" :key="format.id" :value="format.id">{{ format.name }}</md-option>
        </md-select>
      </md-field>
    </md-card-content>
    <md-card-actions>
      <md-button @click="cancel">Cancel</md-button>
      <md-button @click="create">Create</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import Ajax from "@/ajax/ajax.js"

export default {
  name: 'CreateCard',
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
  computed: {
    categories() {
      return this.$store.getters.getCategory
    },
    formats() {
      return this.$store.getters.getFormat
    }
  },
  methods: {
    initilize() {
      this.errors = '';
      this.title = '';
      this.isbn = '';
      this.category = 1;
      this.format = 1;
    },
    create() {
      var self = this;
      this.isLoading = true
      var book = {
        title: this.title,
        isbn: this.isbn,
        categoryId: this.category,
        formatId: this.format
      }

      Ajax.post('/api/book/new',
        book,
        () => {
          this.isLoading = false
          self.cancel()
        },
        (err) => {
          this.isLoading = false
          self.errors = err.response.data
        })
    },
    cancel() {
      this.initilize()
      this.$emit('cancel')
    }
  }
}
</script>