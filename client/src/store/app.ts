// Utilities
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('app', ()  => {
  const title = ref<string>("Test")
  const getTitle = computed(() => title)
  const changeTitle = (newTitle:string) => { title.value = newTitle }
  return {getTitle, changeTitle}
})
