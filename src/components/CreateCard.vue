<script setup lang="ts">
import { ref } from "vue";
import { categories, formats, confirm } from '@/components/index'
import Book from '@/types/book'
import Category from "@/types/category";
import Format from "@/types/format";
import { useQuasar } from "quasar";

const title = ref("");
const isbn = ref("");
const category = ref(categories.value[0]);
const format = ref(formats.value[0]);
const errs = ref(new Map<string, string>())

const isLoading = ref(false)

const emit = defineEmits(['cancel'])

const $q = useQuasar()

const create = () => {
  confirm($q, 'Do you want to register it?', () => doCreate(), () => false)
}

const doCreate = () => {
  isLoading.value = true
  let model = new Book(0, title.value, isbn.value, category.value.id, new Category(), format.value.id, new Format())
  model.createBook(
    () => {
      isLoading.value = false
      emit('cancel')
    },
    (err) => {
      isLoading.value = false
      errs.value = err
    });
}
</script>

<template>
  <q-card>
    <q-card-section class="q-px-lg">
      <q-form class="q-gutter-sm">
        <q-input v-model="title" :error="errs.has('title')" :error-message="errs.get('title')" label="Title" />
        <q-input v-model="isbn" :error="errs.has('isbn')" :error-message="errs.get('isbn')" label="ISBN" />
        <q-select v-model="category" :options="categories" :option-label="'name'" :option-value="'id'" label="Category" />
        <q-select v-model="format" :options="formats" :option-label="'name'" :option-value="'id'" label="Format" />
      </q-form>
    </q-card-section>

    <q-card-actions align="between">
      <q-btn flat class="text-indigo text-bold" @click="emit('cancel')">Cancel</q-btn>
      <q-btn flat class="text-indigo text-bold" @click="create" :loading="isLoading">Create</q-btn>
    </q-card-actions>
  </q-card>
</template>