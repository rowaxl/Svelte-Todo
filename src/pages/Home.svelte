<script lang="ts">
  export let location: any

  $: {
    console.log({location})
  }

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

<div>
  <input type="text" bind:value="{input}" />
  <button on:click="{addNewTodo}">Add</button>

  <ol>
    {#each todos as todo}
      <li>
        <p>{todo.text}</p>
        <input type="checkbox" checked="{todo.completed}" on:change="{() => handleCheckbox(todo.id)}" />
      </li>
    {/each}
  </ol>
</div>
