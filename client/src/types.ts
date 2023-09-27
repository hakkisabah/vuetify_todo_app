// User

export enum AvatarSource {
  female = "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light",
  male = "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light",
  neuter = "https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=White&eyeType=Close&eyebrowType=Default&mouthType=Default&skinColor=Light"
}

export enum Avatar {
  Female = "female",
  Male = "male",
  Neuter = "neuter"
}
export interface User {
  id: string,
  userName: string,
  email: string,
  profilePicture: AvatarSource.female | AvatarSource.male | AvatarSource.neuter
  friends: string[] | null,
  collabs: collab["collabId"][] | null
}

export interface LoginCredentials {
  email: string,
  password: string
}

// Notification
interface NotificationActions {
  isRead: boolean,
  isAccepted: boolean
  action: string
}
export interface Notification {
  pendingInvitation: {
    friends: [{ id: number, action: NotificationActions }],
    collabs: [{ action: NotificationActions, collab: Omit<collab, "usersId"> }],
  }
  collabActions: [{ action: NotificationActions, collab: collab }]
}

// Tasks
export interface collab {
    collabId:string,
    ownerName: User["userName"],
    taskId: Task["id"],
    usersId: User["userName"][],
    description?: string
}

export interface Task {
  id: string,
  owner: User["userName"],
  title: string,
  description: string,
  status: TaskStatus,
  shared: boolean,
  collabId: string | null
  tag: TaskTags
  createdAt: number,
  updatedAt: number
}

export enum TaskStatus {
  Pending = "pending",
  InProgress = "inProgress",
  Completed = "completed",
}

export enum TaskTags {
  Urgent = "urgent",
  Normal = "normal",
  Flexible = "flexible"
}

export interface TaskTag {
  urgent: {
    name: string,
    color: string,
  },
  normal: {
    name: string,
    color: string,
  },
  flexible: {
    name: string,
    color: string,
  },
}

// Dialogs
export enum DialogNames {
  NewTask = "NewTask",
  DeleteTask = "DeleteTask",
  UpdateTask = "UpdateTask"
}

export interface Dialog {
  dialog: DialogNames,
  isOpen: boolean
}

export interface Dialogs {
  NewTask: {
    dialog: Dialog,
    task: Task
  };
  DeleteTask: {
    dialog: Dialog,
    id: number,
  };
  UpdateTask: {
    dialog: Dialog,
    from: Task,
    to: Task
  }
}