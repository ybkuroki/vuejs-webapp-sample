<script setup lang="ts">
import ViewBase from "@/components/ViewBase.vue";
import { AppInfo } from '@/const.js'
</script>

<template>
  <ViewBase>
    <template v-slot:main>
      <div class="q-pa-md">
        <q-list>
          <q-item-label header class="text-indigo text-bold">Application Name</q-item-label>
          <q-item>
            <q-item-section>{{ AppInfo.AppName }}</q-item-section>
          </q-item>

          <q-separator spaced />

          <q-item-label header class="text-indigo text-bold">Developer</q-item-label>
          <q-item>
            <q-item-section>{{ AppInfo.AppDeveloper }}</q-item-section>
          </q-item>

          <q-separator spaced />

          <q-item-label header class="text-indigo text-bold">GitHub</q-item-label>
          <q-item>
            <q-item-section>{{ AppInfo.GithubLink }}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </template>
  </ViewBase>
</template>

