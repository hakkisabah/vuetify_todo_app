<template>
        <v-col cols="12" md="4" sm="4" v-for="(value, n) in props.task" :key="n">
            <v-hover v-slot="{ isHovering, props }">
                <v-card class="mx-auto" max-width="344" v-bind="props">
                    <v-card class="mx-auto bg-red" theme="dark" max-width="400" :title="value.title">

                        <v-card-text class="text-h5 py-2">
                            {{ value.description }}
                        </v-card-text>

                        <v-card-actions>
                            <v-list-item class="w-100">
                            
                                <template v-slot:prepend>
                                    <v-avatar color="grey-darken-3" :image="taskOwnerPictures[value.owner]"></v-avatar>
                                </template>

                                <v-list-item-title>{{value.owner}}</v-list-item-title>

                                <v-list-item-subtitle>Urgent</v-list-item-subtitle>

                                <template v-slot:append>
                                    <div class="justify-self-end">
                                        <v-icon class="me-1" icon="mdi-account-multiple"></v-icon>
                                        <span class="subheading me-2">{{ value.collabId ? getTotalUsersOfCollabById(value.collabId) : 0 }}</span>
                                    </div>
                                </template>
                            </v-list-item>
                        </v-card-actions>
                    </v-card>

                    <v-overlay :model-value="isHovering" contained scrim="#036358" class="align-center justify-center">
                        <v-btn variant="flat">Delete</v-btn>
                    </v-overlay>
                </v-card>
            </v-hover>
        </v-col>
</template>
<script setup lang="ts">
import { Task, User, AvatarSource } from "@/types"
import useCollabStore from "@/store/collab"
import userComposer from "@/composables/user"
import { reactive } from "vue";

const taskOwnerPictures = reactive<{[key: string]: string}>({})

const noGenre = "https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=White&eyeType=Close&eyebrowType=Default&mouthType=Default&skinColor=Light"

const {fetchUser} = userComposer()
const getUserPicture = async (username: User["userName"]) => await fetchUser(username).profilePicture as Promise<AvatarSource>
interface Props {
    task: Task[]
}
const props = defineProps<Props>()

const setTaskOwnerPictures = async  (task: Task) => {
    if (!taskOwnerPictures[task.owner]) {
        taskOwnerPictures[task.owner] = await getUserPicture(task.owner) || noGenre
    }
}
const setOwnerPictures = async (tasks: Task[]) => {
    for (const task of tasks) {
        await setTaskOwnerPictures(task)
    }
}

await setOwnerPictures(props.task)


const cStore = useCollabStore()
const {getTotalUsersOfCollabById} = cStore

</script>