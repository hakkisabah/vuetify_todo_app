<template>
  <v-app>
    <v-toolbar color="blue-grey-darken-3">
      <v-spacer></v-spacer>

      <v-btn class="text-none" stacked>
        <v-badge dot color="success">
          <v-icon>mdi-home-outline</v-icon>
        </v-badge>
      </v-btn>

      <v-btn class="text-none" stacked>
        <v-icon>mdi-account-multiple-outline</v-icon>
      </v-btn>

      <v-btn class="text-none" stacked>
        <v-badge content="9+" color="error">
          <v-icon>mdi-store-outline</v-icon>
        </v-badge>
      </v-btn>

      <v-btn class="text-none" stacked>
        <v-badge content="2" color="error">
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>

      <v-btn class="text-none" stacked>
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <div v-if="!uStore.getUser.id">
        <v-btn @click="triggerLogin(1)">Login as User1</v-btn>
        <v-btn @click="triggerLogin(2)">Login as User2</v-btn>
      </div>
      <v-btn v-else @click="logout()">Logout</v-btn>
    </v-toolbar>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Home from '@/views/Home.vue'
import useCookies from '@/composables/cookies'
import useUserStore from '@/store/user'
import useAuth from '@/composables/auth'

const uStore = useUserStore()
const { login, logout } = useAuth()

const triggerLogin = async (id: number) => {
  await login(id)
}
const { getUser } = useCookies()
const checkLogin = () => {
  const u = getUser()
  if (u) {
    uStore.setUser(u)
  }
}

checkLogin()

</script>
