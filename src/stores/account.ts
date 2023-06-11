import { ref } from 'vue'
import { defineStore } from 'pinia'
import Account from '@/types/account'

export const useAccountStore = defineStore('account', () => {
  const account = ref(new Account())

  function getLoginAccount() {
    let test = new Account()
    test.id = 1
    test.name = "test"
    account.value = test
  }

  return {
    account, getLoginAccount
  }
})