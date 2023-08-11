<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'

const props = defineProps({
  title: { type: String, required: true },
  message: { type: String, required: true },
  cancel: { type: Boolean, defalut: false },
  persistent: { type: Boolean, defalut: false },
})

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits
])

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
// dialogRef      - Vue ref to be applied to QDialog
// onDialogHide   - Function to be used as handler for @hide on QDialog
// onDialogOK     - Function to call to settle dialog with "ok" outcome
//                    example: onDialogOK() - no payload
//                    example: onDialogOK({ /*...*/ }) - with payload
// onDialogCancel - Function to call to settle dialog with "cancel" outcome
</script>

<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide" :persistent="persistent">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div class="text-indigo text-h6">{{ title }}</div>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle2">{{ message }}</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat class="text-indigo text-bold" label="OK" @click="onDialogOK" />
        <q-btn v-if="cancel" flat class="text-indigo text-bold" label="Cancel" @click="onDialogCancel" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>