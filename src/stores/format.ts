import { ref } from 'vue'
import { defineStore } from 'pinia'
import Format from '@/types/format'

export const useFormatStore = defineStore('format', () => {
  let formats: Format[] = []
  const format = ref(formats)

  function getFormats() {
    const model = new Format()
    model.getFormats((body) => format.value = body)
  }

  return {
    format, getFormats
  }
})