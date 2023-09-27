import { User } from '@/types'
import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

const userStore  = reactive<User>({} as User)

export default defineStore('userStore', () =>{
    const setUser = (user: User) => {
        userStore.id = user.id
        userStore.userName = user.userName
        userStore.email = user.email
        userStore.profilePicture = user.profilePicture
        userStore.friends = user.friends
        userStore.collabs = user.collabs
    }
    const getUser = computed(() => userStore)
    const removeUser = () => {
        userStore.id = ""
        userStore.userName = ""
        userStore.email = ""
        userStore.friends = []
        userStore.collabs = []
    }
    return {setUser, getUser, removeUser}
})