import { Task, TaskStatus, TaskTag, TaskTags } from '@/types'

export interface ITaskStore {
    [TaskStatus.Pending]: Task[],
    [TaskStatus.InProgress]: Task[],
    [TaskStatus.Completed]: Task[]
}

export const defaultTaskStore : ITaskStore = {
    [TaskStatus.Pending]: [
        {
            id: "task_232dsa-test",
            owner:"userName1",
            title: "Default Task",
            description: "Your testimonial",
            status: TaskStatus.Pending,
            shared:true,
            collabId:"123a123",
            tag:TaskTags.Urgent,
            createdAt: Date.now(),
            updatedAt: Date.now()
        },
        {
            id: "task_232dsa-sdfsdtest",
            owner:"userName2",
            title: "Default Task2",
            description: "Your testimonial",
            status: TaskStatus.Pending,
            shared:true,
            collabId:"wer23",
            tag:TaskTags.Flexible,
            createdAt: Date.now(),
            updatedAt: Date.now()
        },
        {
            id: "task_232dsa-testss",
            title: "Default Task3",
            owner:"userName1",
            description: "Your testimonial",
            status: TaskStatus.Pending,
            shared:false,
            collabId:null,
            tag:TaskTags.Flexible,
            createdAt: Date.now(),
            updatedAt: Date.now()
        },
    ],
    [TaskStatus.InProgress]: [
        {
            id: "task_23asd2dsa-sdfsd",
            owner:"userName2",
            title: "Default Task4",
            description: "Your testimonial",
            status: TaskStatus.InProgress,
            shared:false,
            collabId:null,
            tag:TaskTags.Flexible,
            createdAt: Date.now(),
            updatedAt: Date.now()
        },
    ],
    [TaskStatus.Completed]: [],
};

export const taskTag : TaskTag = {
    [TaskTags.Urgent]: {
        name: "urgent",
        color: "bg-red"
    },
    [TaskTags.Normal]:{
        name: "normal",
        color: ""
    },
    [TaskTags.Flexible]: {
        name: "flexible",
        color : "bg-green"
    }
}