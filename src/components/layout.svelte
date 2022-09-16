<script lang="ts">
  import Navigator from "./navigator.svelte";
</script>

<div class="container min-w-full min-h-screen bg-slate-200 dark:bg-slate700">
  <Navigator />

  <main class="pt-2 px-4 min-h-full">
    <slot />
  </main>  
</div>