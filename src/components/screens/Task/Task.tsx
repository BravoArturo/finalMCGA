export default interface Task {
    description: string,
    createdAt?: string | Date,
    deadline: string,
    title: string,
    updatedAt?: string | Date,
    _id?: string
}