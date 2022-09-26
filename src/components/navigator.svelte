<script lang="ts">
  import NavLink from "./navigationLink.svelte";
</script>

<nav class="bg-gray-800 w-screen">
  <div class="mx-auto max-w-7xl px-2">
    <div class="relative flex h-16 items-center justify-between">
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex space-x-4">
          <NavLink to="/">
            Todos
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</nav>
