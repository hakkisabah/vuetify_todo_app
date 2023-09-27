<template>
    <v-container>
        <v-row no-gutters>
            <v-col>
                <v-sheet class="pa-2 ma-2" color="transparent">
                    <v-btn @click="toggleDialog(DStore.NewTask.dialog)" class="me-2 text-none" block rounded="2">New
                        Task</v-btn>
                </v-sheet>
            </v-col>
            <v-col>
                <v-sheet class="pa-2 ma-2" color="transparent">
                    <v-btn @click="toggleDialog(DStore.DeleteTask.dialog)" class="me-2 text-none" block rounded="2">Delete
                        Task</v-btn>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col cols="4">
                <v-sheet class="pa-2 ma-2" color="transparent">
                    <v-btn class="me-2 text-none" block rounded="2">Pending</v-btn>
                </v-sheet>
            </v-col>
            <v-col cols="4">
                <v-sheet class="pa-2 ma-2" color="transparent">
                    <v-btn class="me-2 text-none" block rounded="2">In Progress</v-btn>
                </v-sheet>
            </v-col>
            <v-col cols="4">
                <v-sheet class="pa-2 ma-2" color="transparent">
                    <v-btn class="me-2 text-none" block rounded="2">Completed</v-btn>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col>
                <v-sheet class="pa-2 ma-2" color="transparent">
                    <v-btn @click="toggleDialog(DStore.UpdateTask.dialog)" class="me-2 text-none" block rounded="2">Update
                        Task</v-btn>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-expansion-panels>
                <v-col cols="12" v-for="(value, k) in TaskStatus" :key="k">
                    <v-expansion-panel>
                        <v-expansion-panel-title v-slot="{ open }">
                            <v-row no-gutters>
                                <v-col cols="4" class="d-flex justify-start">
                                    {{ getUpper(value) }}
                                </v-col>
                                <v-col cols="8" class="text--secondary">
                                    <v-fade-transition leave-absolute>
                                        <v-row no-gutters style="width: 100%">
                                            <v-col cols="6" class="d-flex justify-start">
                                                Collab: {{ null }}
                                            </v-col>
                                            <v-col cols="6" class="d-flex justify-start">
                                                Total: {{ getTaskByStatus(value).value.length }}
                                            </v-col>
                                        </v-row>
                                    </v-fade-transition>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-sheet class="pa-2 ma-2" color="transparent">
                                <Card :tStatus="value" />
                            </v-sheet>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-col>
            </v-expansion-panels>
        </v-row>
        <Dialog />
    </v-container>
</template>
<script setup lang="ts">
import Card from "@/components/Card/Card.vue"

import { storeToRefs } from 'pinia';
import Dialog from './Dialog.vue';
import useTaskStore from '@/store/task'
import useDialogStore from '@/store/dialog';

const tStore = useTaskStore()
const { getTaskByStatus } = tStore

const getUpper = (v:string) => v.substring(0, 1).toUpperCase() + v.substring(1)

const dStore = useDialogStore()
const { DStore } = storeToRefs(dStore)
const { toggleDialog, TaskStatus } = dStore

</script>