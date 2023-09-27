import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { Dialog, DialogNames, TaskStatus } from '@/types'


interface IDialog {
  [DialogNames.NewTask]: Dialog,
  [DialogNames.DeleteTask]: Dialog,
  [DialogNames.UpdateTask]: Dialog
}

const defaultDialogs = {
  [DialogNames.NewTask]: {
    dialog: DialogNames.NewTask,
    isOpen: false,
  },
  [DialogNames.DeleteTask]: {
    dialog: DialogNames.DeleteTask,
    isOpen: false,
  },
  [DialogNames.UpdateTask]: {
    dialog: DialogNames.UpdateTask,
    isOpen: false,
  },
};

const dialogStore = reactive<IDialog>(defaultDialogs);

export default defineStore('dialog', () => {
  const currentDialog = ref<string>("")
  const toggleDialog = (dialog: DialogNames) => {
    currentDialog.value = dialogStore[dialog as DialogNames].dialog
    dialogStore[dialog].isOpen = !dialogStore[dialog].isOpen
  }
  const DStore = computed(() => dialogStore)
  const getCurrentDialog = computed(() => currentDialog)
  return { toggleDialog, DStore, TaskStatus, currentDialog, getCurrentDialog }
})