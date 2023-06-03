<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import { AppInfo } from '@/const.js'
import { useAccountStore } from '@/stores/account'
import { useCategoryStore } from '@/stores/category'
import { useFormatStore } from '@/stores/format'
import Account from "@/types/account";

const router = useRouter()
const store = useAccountStore()

const leftDrawerOpen = ref(false);

const userName = computed(() => {
  return store.account != null ? store.account.name : ''
})

const clickGitHubBtn = () => {
  window.open(AppInfo.GithubLink)
}

const logout = () => {
  const model = new Account()
  model.logout(() => router.push("/login"))
}

const setStore = () => {
  useAccountStore().getLoginAccount()
  useCategoryStore().getCategories()
  useFormatStore().getFormats()
}

setStore()
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-indigo text-white">
      <q-toolbar>
        <q-btn class="q-my-sm q-mr-sm" flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />

        <slot name="header"></slot>
        <q-space></q-space>

        <q-btn class="q-mx-sm" flat round @click="clickGitHubBtn">
          <q-icon name="fab fa-github" />
        </q-btn>

        <q-chip class="" color="indigo" text-color="white">
          <q-avatar>
            <q-icon name="fas fa-user" color="white"></q-icon>
          </q-avatar>
          {{ userName }}
        </q-chip>

        <q-btn class="q-mx-sm" flat round @click="logout">
          <q-icon name="logout" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer class="bg-indigo-5" v-model="leftDrawerOpen" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <q-item clickable class="text-white" active-class="bg-indigo-8" v-ripple @click="$router.push('/home')">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              Home
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable class="text-white" active-class="bg-indigo-8" v-ripple @click="clickGitHubBtn">
            <q-item-section avatar>
              <q-icon name="fab fa-github" />
            </q-item-section>
            <q-item-section>
              GitHub
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable class="text-white" active-class="bg-indigo-8" v-ripple @click="$router.push('/about')">
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>
            <q-item-section>
              About
            </q-item-section>
          </q-item>
          <q-separator />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <slot name="main"></slot>
    </q-page-container>
  </q-layout>
</template>