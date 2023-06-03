<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { AppInfo } from '@/const.js'
import Account from "@/types/account";
import { Notify } from "quasar";

const user = ref("");
const password = ref("");
const isLoading = ref(false)

const router = useRouter()

const login = () => {
  isLoading.value = true

  const model = new Account()
  model.login(
    { username: user.value, password: password.value },
    () => {
      isLoading.value = false
      router.push("/home")
    },
    () => {
      isLoading.value = false
      Notify.create('Failed to logged-in.')
    })
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="bg-indigo-5 window-height window-width row justify-center items-center">
        <div class="column">
          <div class="row">
            <h5 class="text-h5 text-white q-my-md">{{ AppInfo.AppName }}</h5>
          </div>
          <div class="row">
            <q-card square bordered class="q-pa-lg shadow-1">
              <q-card-section>
                <q-form class="q-gutter-md">
                  <q-input square filled clearable v-model="user" type="text" label="User" autofocus tabindex="1">
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                  <q-input square filled clearable v-model="password" type="password" label="Password" tabindex="2">
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-md">
                <q-btn unelevated color="indigo-7" size="lg" class="full-width" label="Login" @click="login" tabindex="3"
                  :loading="isLoading" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.q-card {
  width: 50vw;
  height: auto;
}
</style>