import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { collab, Task, TaskStatus } from '@/types'
import useTaskStore from "./task"
import { defaultCollabStore } from '@/mock/Collab'


const collabStore = reactive<collab[]>(defaultCollabStore);

export default defineStore('collabStore', () => {
    const tStore = useTaskStore();
    const {getTaskById, getTaskByStatus} = tStore
    // console.log(getTaskById("task_23asd2dsa-sdfsd"))
    const getCollabByStatus = (taskStatus: TaskStatus) => {
        return  computed(() => getTaskByStatus(taskStatus).value.filter(t => t.collabId));
    };

    const getCollabById = (id: collab["collabId"])=>{
        return computed(() => collabStore.find(c => c.collabId === id))
    }

    const getTotalCollabByStatus = (taskStatus: TaskStatus) => {
        return computed(() => collabStore[taskStatus].map(task => task.collab))
    }

    const getTotalUsersOfCollabById = (id: collab["collabId"]) => {
        return computed(() =>getCollabById(id).value?.usersId.length)
    }
    const addNewCollab = (task: Task) => {
        taskStore[task.status].push(task);
    };

    const updateCollab = (task: Task, newStatus: TaskStatus) => {
        task.status = newStatus;
    };
    const deleteUserToCollab = (tasktoDelete: Task) => {
        taskStore[tasktoDelete.status] = taskStore[tasktoDelete.status].filter(
            (task) => task.id !== tasktoDelete.id
        );
    };
    return { getCollabById, getCollabByStatus, getTotalCollabByStatus, getTotalUsersOfCollabById, addNewCollab, updateCollab, deleteUserToCollab }
})