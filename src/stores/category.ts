import { ref } from 'vue'
import { defineStore } from 'pinia'
import Category from '@/types/category'

export const useCategoryStore = defineStore('category', () => {
  let categories: Category[] = []
  const category = ref(categories)

  function getCategories() {
    const model = new Category()
    model.getCategories((body) => category.value = body)
  }

  return {
    category, getCategories
  }
})