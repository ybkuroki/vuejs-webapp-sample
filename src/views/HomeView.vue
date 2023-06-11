<script setup lang="ts">
import { ref } from "vue";
import ViewBase from "@/components/ViewBase.vue";
import CreateCard from "@/components/CreateCard.vue";
import EditCard from "@/components/EditCard.vue";
import Book from "@/types/book";
import Category from "@/types/category";
import Format from "@/types/format";

const isCreate = ref(false);
const search = ref("");
const books = ref(new Array<Book>(0))
const isLoading = ref(false)

const getBooks = () => {
  let categories: Array<Category> = [];
  categories.push({ id: 1, name: 'Technical Book' });
  categories.push({ id: 2, name: 'Managine' });
  categories.push({ id: 3, name: 'Novel' });

  let formats: Array<Format> = [];
  formats.push({ id: 1, name: 'Paper Book' });
  formats.push({ id: 2, name: 'e-Book' });

  let bookdatas: Array<Book> = [];
  bookdatas.push({ id: 1, title: "Test1", isbn: "123-234-123-1", categoryId: 1, category: categories[0], formatId: 2, format: formats[1] })
  bookdatas.push({ id: 2, title: "Test2", isbn: "123-234-123-2", categoryId: 2, category: categories[1], formatId: 1, format: formats[0] })
  bookdatas.push({ id: 3, title: "Test3", isbn: "123-234-123-3", categoryId: 3, category: categories[2], formatId: 2, format: formats[1] })
  bookdatas.push({ id: 4, title: "Test4", isbn: "123-234-123-4", categoryId: 1, category: categories[0], formatId: 1, format: formats[0] })
  bookdatas.push({ id: 5, title: "Test5", isbn: "123-234-123-5", categoryId: 2, category: categories[1], formatId: 2, format: formats[1] })
  books.value = bookdatas
}

const create = () => {
  isCreate.value = true
  window.scrollTo(0, 0);
}

const createCancel = () => {
  isCreate.value = false
  getBooks()
}

getBooks()
</script>

<template>
  <ViewBase>
    <template v-slot:header>
      <q-input dark dense standout v-model="search" input-class="text-left" class="col" placeholder="Search..."
        @keyup.enter="getBooks">
        <template v-slot:append>
          <q-icon v-if="search === ''" name="search" @click="getBooks" />
          <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
        </template>
      </q-input>
    </template>

    <template v-slot:main>
      <div class="q-pa-md items-start q-gutter-md">
        <div v-if="isLoading" class="window-height window-width row justify-center items-center">
          <q-spinner color="indigo" size="xl" :thickness="10" />
        </div>

        <CreateCard v-if="isCreate" @cancel="createCancel" />
        <EditCard v-for="book in books" :book="book" :key="book.id" @cancel="createCancel" />
      </div>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn round color="indigo" icon="add" size="lg" @click="create" />
      </q-page-sticky>
    </template>
  </ViewBase>
</template>
