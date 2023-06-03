<script setup lang="ts">
import { ref, type PropType } from "vue";
import { useQuasar } from "quasar";
import { categories, formats, confirm } from '@/components/index'
import Book from "@/types/book";

let isEdit = ref(false);

const title = ref("");
const isbn = ref("");
const category = ref(categories.value[0]);
const format = ref(formats.value[0]);
const errs = ref(new Map<string, string>())

const isLoading = ref(false)

const props = defineProps({
  book: { type: Object as PropType<Book>, required: true }
})

const emit = defineEmits(['cancel'])

const $q = useQuasar()

const edit = () => {
  if (isEdit.value) {
    isLoading.value = true
    confirm($q, 'Do you want to update it?', () => doEdit(), () => false)

  } else {
    let model = new Book()
    model.getBook(props.book.id,
      (data) => {
        title.value = data.title
        isbn.value = data.isbn
        category.value = data.category
        format.value = data.format
        errs.value = new Map<string, string>()
        isEdit.value = true
      })
  }
}

const doEdit = () => {
  let model = new Book(props.book.id, title.value, isbn.value, category.value.id, category.value, format.value.id, format.value)
  model.editBook(
    () => {
      cancel()
      isLoading.value = false
    },
    (err) => {
      errs.value = err
      isLoading.value = false
    })
}

const remove = () => {
  confirm($q, 'Do you want to remove it?', () => doRemove(), () => false)
}

const doRemove = () => {
  let model = new Book(props.book.id, title.value, isbn.value, category.value.id, category.value, format.value.id, format.value)
  model.deleteBook(() => cancel())
}

const cancel = () => {
  isEdit.value = false
  emit('cancel')
}
</script>

<template>
  <q-card v-if="isEdit">
    <q-card-section class="q-px-lg">
      <q-form class="q-gutter-sm">
        <q-input v-model="title" :error="errs.has('title')" :error-message="errs.get('title')" label="Title" />
        <q-input v-model="isbn" :error="errs.has('isbn')" :error-message="errs.get('isbn')" label="ISBN" />
        <q-select v-model="category" :options="categories" :option-label="'name'" :option-value="'id'" label="Category" />
        <q-select v-model="format" :options="formats" :option-label="'name'" :option-value="'id'" label="Format" />
      </q-form>
    </q-card-section>

    <q-card-actions align="between">
      <q-btn flat class="text-indigo text-bold" @click="cancel">Cancel</q-btn>
      <q-btn flat class="text-indigo text-bold" @click="edit">Edit</q-btn>
    </q-card-actions>
  </q-card>

  <q-card v-else class="q-hoverable" v-ripple>
    <span class="q-focus-helper"></span>
    <q-card-section>
      <div class="text-h6">{{ props.book.title }}</div>
      <div class="text-subtitle1">{{ props.book.category.name }}</div>
      <div class="text-subtitle2">{{ props.book.format.name }}</div>
    </q-card-section>

    <q-card-actions align="between">
      <q-btn flat class="text-indigo text-bold" @click="edit" :loading="isLoading">Edit</q-btn>
      <q-btn flat class="text-indigo text-bold" @click="remove">Delete</q-btn>
    </q-card-actions>
  </q-card>
</template>