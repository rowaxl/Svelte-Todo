import { writable } from "svelte/store"
import type { Todo } from './types'
import { fetchTodos, insertTodo, updateTodo } from './supabase'

const createTodoStore = () => {
  const { subscribe, update, set } = writable<Todo[]>([])

  const addTodo = (newTodo: Todo) => {
    update(todos =>  [...todos, newTodo])

    insertTodo(newTodo)
  }

  const toggleChecked = (targetId: number) => {
    update(todos => {
      const targetIndex = todos.findIndex(todo => todo.id === targetId)
  
      return [
        ...todos.slice(0, targetIndex),
        {...todos[targetIndex], completed: !todos[targetIndex].completed },
        ...todos.slice(targetIndex + 1)
      ]
    })

    // FIXME?
    // subscribeのコールバックは、アップデート済みのStoreが入る
    subscribe(async (todos) => {
      const targetIndex = todos.findIndex(todo => todo.id === targetId)
  
      updateTodo({...todos[targetIndex], completed: todos[targetIndex].completed })
    })
  }

  const initStore = async () => {
    const todos = await fetchTodos()
    set(todos)
  }
  
  return {
    subscribe,
    initStore,
    addTodo,
    toggleChecked,
  }
}

export default createTodoStore()
