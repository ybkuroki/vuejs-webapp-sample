import { ref } from 'vue'
import { defineStore } from 'pinia'
import Account from '@/types/account'

export const useAccountStore = defineStore('account', () => {
  const account = ref(new Account())

  function getLoginAccount() {
    const model = new Account()
    model.getLoginAccount((body) => account.value = body)
  }

  return {
    account, getLoginAccount
  }
})