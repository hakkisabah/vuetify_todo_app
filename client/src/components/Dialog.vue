<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="toggleDialog(getCurrentDialog as DialogNames)">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Settings</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn variant="text" @click="toggleDialog(getCurrentDialog as DialogNames)">
                            Save
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <NewTask :toggleF="toggleDialog" :currentD="(getCurrentDialog as DialogNames)" v-if="DStore.NewTask.isOpen" />
                <DeleteTask :toggleF="toggleDialog" :currentD="(getCurrentDialog as DialogNames)" v-if="DStore.DeleteTask.isOpen" />
                <UpdateTask :toggleF="toggleDialog" :currentD="(getCurrentDialog as DialogNames)" v-if="DStore.UpdateTask.isOpen" />
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script setup lang="ts">
import NewTask from "@/components/NewTask.vue"
import DeleteTask from "@/components/DeleteTask.vue"
import UpdateTask from "@/components/UpdateTask.vue"
import dialogStore from "@/store/dialog"
import { DialogNames } from "@/types";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = dialogStore()
const { DStore } = storeToRefs(store);
const {toggleDialog, getCurrentDialog} = store
const dialog = computed(() => DStore.value.NewTask.isOpen || DStore.value.DeleteTask.isOpen || DStore.value.UpdateTask.isOpen)
</script>