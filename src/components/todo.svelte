<script lang="ts">
  import type { Todo } from '../libs/types'
  import todosStore from '../libs/todosStore';
  export let todo: Todo
</script>

<li class="flex items-center pl-4 border border-gray-200 dark:border-gray-700">
  <input
    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    type="checkbox"
    checked="{todo.completed}"
    on:change="{() => todosStore.toggleChecked(todo.id)}"
  />
  <p class={`flex-1 text-left text-lg py-4 ml-2 w-full font-medium text-gray-900 dark:text-gray-300 ${todo.completed && 'text-gray-400 line-through'}`}>
    {todo.text}
  </p>
</li>