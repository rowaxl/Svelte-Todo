import { writable } from "svelte/store"
import type { Todo } from './types'

export const todoStore = writable<Todo[]>([])

export const addTodos = (newTodo: Todo) => {
  todoStore.update(todos =>  [...todos, newTodo])
}



export const toggleChecked = (targetId: number) => {
  todoStore.update(todos => {
    const targetIndex = todos.findIndex(todo => todo.id === targetId)

    return [
      ...todos.slice(0, targetIndex),
      {...todos[targetIndex], completed: !todos[targetIndex].completed },
      ...todos.slice(targetIndex + 1)
    ]
  })
}
