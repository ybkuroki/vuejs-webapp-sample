<script setup lang="ts">
import { ref } from "vue";
import ViewBase from "@/components/ViewBase.vue";
import CreateCard from "@/components/CreateCard.vue";
import EditCard from "@/components/EditCard.vue";
import Book from "@/types/book";

const isCreate = ref(false);
const search = ref("");
const books = ref(new Array<Book>(0))
const isLoading = ref(false)

const getBooks = () => {
  isLoading.value = true
  let model = new Book()
  model.getBooks({ query: search.value },
    (data) => { books.value = data.content; isLoading.value = false },
    (err) => isLoading.value = false)
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
