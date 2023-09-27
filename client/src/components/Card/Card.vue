<template>
    <v-item-group multiple>
        <v-container>
            <v-row>
                <v-col @click="showTask(value)" v-for="(value, n) in task" :key="n + 1" cols="12" md="4">
                    <v-item v-slot="{ toggle }">
                        <v-card :class="`d-flex align-center ${taskTag[value.tag].color}`" dark height="200"
                            @click="toggle">
                            <v-scroll-y-transition>
                                <div class="text-h3 flex-grow-1 text-center">
                                    {{ value.title }}
                                </div>
                            </v-scroll-y-transition>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>
<script setup lang="ts">
import { TaskStatus, TaskTags } from '@/types';
import useTaskStore from '@/store/task';

interface Props {
    tStatus: TaskStatus
}

const props = defineProps<Props>()

const tStore = useTaskStore()
// const {TStore} = storeToRefs(tStore)
const { getTaskByStatus, taskTag } = tStore

const task = getTaskByStatus(props.tStatus)
const showTask = (val) => { console.log(val); console.log(taskTag[val.tag as TaskTags].color) }

</script>