<template>
    <v-container fluid>
        <h2 class="text-h6 mb-2 text-center">
            Select Filter
        </h2>
        <v-row class="mx-auto justify-center">
            <v-card max-width="400" cols="12" md="8" sm="4" class="d-flex justify-center">
                <v-col cols="6" md="4" sm="4">
                    <span class="text-center">Status</span>
                    <Filter :tStatus="TaskStatus" @filter="s($event)" />
                </v-col>
                <v-col cols="6" md="4" sm="4">
                    <span class="text-center">Tag</span>
                    <Filter :tTags="TaskTags" @filter="s($event)" />
                </v-col>
            </v-card>
        </v-row>
        <v-row class="justify-center" v-for="(valuesOfStatus, n) in allTasks" :key="n">
            <Suspense>
                <template #default>
                    <Cards :task="valuesOfStatus" />
                </template>
                <template #fallback>
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </template>
            </Suspense>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
import Filter from "./Filter.vue"
import Cards from "@/components/Card/Cards.vue"
import useTaskStore from "@/store/task"
import useUserStore from "@/store/user"
import { Task, TaskStatus, TaskTags, DialogNames } from "@/types";
import { reactive } from "vue";

const tStore = useTaskStore()
const { getTaskByStatus } = tStore
const uStore = useUserStore()
const { getUser } = uStore


interface Props {
    toggleF: Function,
    currentD: DialogNames
}

const FilterResults = reactive<Task | {}>({})
console.log(Object.keys(FilterResults).length)

const s = (e) => console.log(e)

const props = defineProps<Props>()

// props.toggleF(props.currentD) // when using delete button

const allTasks = {
    Pending: getTaskByStatus(TaskStatus.Pending).value.filter((t) => t.owner == getUser.userName),
    InProgress: getTaskByStatus(TaskStatus.InProgress).value.filter((t) => t.owner == getUser.userName),
    Completed: getTaskByStatus(TaskStatus.Completed).value.filter((t) => t.owner == getUser.userName)
}


</script>