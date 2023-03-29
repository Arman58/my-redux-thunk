export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export interface State {
    todos: Todo[],
    loading: boolean,
    error: string | null
}