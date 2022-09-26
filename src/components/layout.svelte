<script lang="ts">
  import Navigator from "./navigator.svelte";
</script>

<div class="container min-w-full min-h-screen bg-slate-200 dark:bg-slate-700">
  <Navigator />

  <main class="py-4 px-4 min-h-full">
    <slot />
  </main>  
</div>