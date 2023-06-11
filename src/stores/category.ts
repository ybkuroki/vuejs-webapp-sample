import { ref } from 'vue'
import { defineStore } from 'pinia'
import Category from '@/types/category'

export const useCategoryStore = defineStore('category', () => {
  let categories: Category[] = []
  const category = ref(categories)

  function getCategories() {
    let categories: Array<Category> = [];
    categories.push({ id: 1, name: 'Technical Book' });
    categories.push({ id: 2, name: 'Managine' });
    categories.push({ id: 3, name: 'Novel' });
    category.value = categories
  }

  return {
    category, getCategories
  }
})