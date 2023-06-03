import { computed } from "vue";
import type { QVueGlobals } from "quasar";
import { useCategoryStore } from '@/stores/category'
import { useFormatStore } from '@/stores/format'

export const categories = computed(() => {
  const store = useCategoryStore()
  return store.category
})

export const formats = computed(() => {
  const store = useFormatStore()
  return store.format
})

export const confirm = ($q: QVueGlobals, message: string, onOk: () => void, onCancel: () => void) => {
  $q.dialog({
    title: 'Confirm',
    message: message,
    cancel: true,
    persistent: true
  }).onOk(() => {
    onOk()
  }).onCancel(() => {
    onCancel()
  })
}