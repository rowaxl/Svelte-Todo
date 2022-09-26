<script lang="ts">
  import { todoStore, addTodos } from '../libs/todosStore'
  import type { Todo } from '../libs/types'
  import TodoItem from '../components/todo.svelte'

  let todos: Todo[]
  let input = ''

  todoStore.subscribe(stored => {
    todos = stored
  })
  
  const addNewTodo = () => {
    if (!input) return

    const newTodo: Todo = { 
      id: todos.length,
      text: input,
      completed: false
    }

    addTodos(newTodo)

    input = ''
  }
</script>

<div class="flex flex-col items-center">
  <div class="relative rounded-md flex flex-row gap-4">
    <input class="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="todo-input" bind:value="{input}" placeholder="e.g. Buy eggs" />
    <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click="{addNewTodo}">
      New Todo
    </button>
  </div>
</div>

<div class="flex justify-center mt-4">
  <ul class="bg-white dark:bg-slate-800 rounded-lg w-96 text-gray-900">
    {#each todos as todo}
      <TodoItem todo={todo} />
    {/each}
  </ul>
</div>
