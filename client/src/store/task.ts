import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { TaskStatus, Task } from '@/types'
import { defaultTaskStore, ITaskStore, taskTag } from '@/mock/Task'
import { defaultCollabStore } from '@/mock/Collab'

const taskStore = reactive<ITaskStore>(defaultTaskStore);

export default defineStore('TaskStore', () => {
    const getTaskStatusByTaskId = (taskId: Task["id"]) => {
        return Object.keys(taskStore).find(e => taskStore[e as TaskStatus].find(i => i.id == taskId));
    }

    const getTaskByStatus = (taskStatus: TaskStatus) => {
        return computed(() => taskStore[taskStatus]);
    };

    const getTaskById = (taskId: Task["id"]) => {
        const findedStatus = getTaskStatusByTaskId(taskId)
        return findedStatus ? getTaskByStatus(findedStatus as TaskStatus).value.find(i => i.id == taskId) : {}
    }

    const addNewTask = (task: Task) => {
        taskStore[task.status].push(task);
    };

    const updateTaskStatus = (task: Task, newStatus: TaskStatus) => {
        task.status = newStatus;
    };
    const deleteTask = (tasktoDelete: Task) => {
        taskStore[tasktoDelete.status] = taskStore[tasktoDelete.status].filter(
            (task) => task.id !== tasktoDelete.id
        );
    };
    const TStore = computed(() => taskStore)
    return { getTaskById, getTaskByStatus, getTaskStatusByTaskId, addNewTask, updateTaskStatus, deleteTask, TStore, taskTag }
})