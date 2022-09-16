<script lang="ts">
  export let location: any

  let todos: {
    id: number, 
    text: string,
    completed: boolean
  }[] = []

  let input = ''
  
  const addNewTodo = () => {
    if (!input) return

    const newTodo = { 
      id: todos.length,
      text: input,
      completed: false
    }

    todos = [...todos, newTodo]

    input = ''
  }

  const handleCheckbox = (target: number) => {
    const targetTodoIndex = todos.findIndex(todo => todo.id === target)

    if (targetTodoIndex < 0) return

    const newTodos = [
      ...todos.slice(0, targetTodoIndex),
      { ...todos[targetTodoIndex], completed: !todos[targetTodoIndex].completed },
      ...todos.slice(targetTodoIndex + 1)
    ]

    todos = newTodos
  }
</script>

<div class="flex flex-col items-center">
  <label for="todo-input" class="block text-sm font-medium text-gray-700">
    New Todo:
  </label>

  <div class="relative rounded-md flex flex-row gap-4">
    <input class="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="todo-input" bind:value="{input}" placeholder="e.g. Buy eggs" />
    <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click="{addNewTodo}">
      Add Todo
    </button>
  </div>
</div>

<ul class="list-disc px-2 mt-4 ml-auto mr-auto max-w-lg">
  {#each todos as todo}
    <li class="flex flex-row py-4 w-full">
      <p class="flex-1 text-left">{todo.text}</p>
      <input type="checkbox" checked="{todo.completed}" on:change="{() => handleCheckbox(todo.id)}" />
    </li>
  {/each}
</ul>
