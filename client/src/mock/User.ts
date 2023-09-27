import { Avatar, AvatarSource } from '@/types'

export const defaultUserStore = [
    {
        id:"asasdf",
        userName:"userName1",
        email:"userName1@user.com",
        profilePicture: AvatarSource[Avatar.Male],
        friends:["userName2"],
        collabs:["wer23"]
    },
    {
        id:"dsffsdfs",
        userName:"userName2",
        email:"username2@user.com",
        profilePicture: AvatarSource[Avatar.Female],
        friends:["userName1"],
        collabs:["123a123"]
    }
]



