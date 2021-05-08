<template>
    <md-card md-with-hover>
      <template v-if="isEdit">
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
      </template>

      <template v-else>
        <md-card-header>
          <div class="md-title">{{ book.title }}</div>
        </md-card-header>

        <md-card-content>
          <p>{{ book.category.name }}</p>
          <p>{{ book.format.name }}</p>
        </md-card-content>
      </template>
      
      <md-card-actions md-alignment="space-between">
        <md-button @click="remove">Delete</md-button>

        <div>
          <md-button v-if="isEdit" @click="cancel">Cancel</md-button>
          <md-button @click="edit">Edit</md-button>
        </div>
      </md-card-actions>
    </md-card>
</template>

<script>
import Api from "@/api/book.js"

export default {
  name: 'EditCard',
  props: {
    book: Object
  },
  data: () => ({
    title: '',
    isbn: '',
    category: 1,
    format: 1,
    editable: false,
    errors: []
  }),
  computed: {
    isEdit: {
      get() { return this.editable },
      set(val) { this.editable = val }
    },
    categories() {
      return this.$store.getters.getCategory
    },
    formats() {
      return this.$store.getters.getFormat
    }
  },
  methods: {
    edit() {
      var self = this;
      if(this.isEdit) {
        var book = {
          id: this.book.id,
          title: this.title,
          isbn: this.isbn,
          categoryId: this.category,
          formatId: this.format
        }

        Api.edit(book, () => self.cancel(), (err) => self.errors = err.response.data)

      } else {
        Api.get( 
          {id: self.book.id},
          (body) => {
            self.errors = ''
            self.title = body.title
            self.isbn = body.isbn
            self.category = body.category.id
            self.format = body.format.id
            self.isEdit = true
          })
      }
    },
    remove() {
      var book = {
        id: this.book.id,
        title: this.title,
        isbn: this.isbn,
        categoryId: this.category,
        formatId: this.format
      }

      var self = this;
      Api.delete(book, () => self.cancel())
    },
    cancel() {
      this.isEdit = false
      this.$emit('cancel')
    }
  }
}
</script>