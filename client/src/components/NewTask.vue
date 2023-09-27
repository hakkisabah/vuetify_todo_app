<template>
  <v-card :class="taskTag[newTask.tag].color">
    <v-toolbar flat color="blue-grey" dark>
      <v-toolbar-title>Submit a task</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field :class="newTask.tag != 'normal' ? 'text-black': ''" variant="filled" label="Title" v-model="newTask.title"></v-text-field>

      <v-textarea :class="newTask.tag != 'normal' ? 'text-black': ''" variant="filled" label="Text"
        v-model="newTask.description"></v-textarea>

      <v-divider class="my-2"></v-divider>

      <v-item-group multiple selected-class="bg-purple">
        <div class="text-caption mb-2">Tags</div>
        <v-item v-for="(value, n) in taskTag" :key="n">
          <v-chip @click="newTask.tag = value.name as TaskTags" :class="value.color">
            {{ value.name }}
          </v-chip>
        </v-item>
      </v-item-group>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="handleOnPost()" :class="newTask.tag != 'normal' ? 'text-black': ''">
        Post
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import useTaskStore from "@/store/task"
import { Task, TaskStatus, TaskTags, DialogNames } from "@/types";
import {v4 as uuidv4} from 'uuid';

interface Props {
  toggleF: Function,
  currentD: DialogNames
}

const props = defineProps<Props>()
const tStore = useTaskStore()
const { addNewTask, taskTag } = tStore


const newTask = reactive<Omit<Task, "id">>({
  title: "",
  description: "",
  status: TaskStatus.Pending,
  shared:false,
  collabId:null,
  tag:TaskTags.Normal,
  createdAt: Date.now(),
  updatedAt: Date.now()
});

console.log(uuidv4())

const handleOnPost = () => {
  addNewTask({
    id: `task_${uuidv4()}`,
    ...newTask,
  });


  props.toggleF(props.currentD)
};
</script>