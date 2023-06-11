import { ref } from 'vue'
import { defineStore } from 'pinia'
import Format from '@/types/format'

export const useFormatStore = defineStore('format', () => {
  let formats: Format[] = []
  const format = ref(formats)

  function getFormats() {
    let formats: Array<Format> = [];
    formats.push({ id: 1, name: 'Paper Book' });
    formats.push({ id: 2, name: 'e-Book' });
    format.value = formats
  }

  return {
    format, getFormats
  }
})