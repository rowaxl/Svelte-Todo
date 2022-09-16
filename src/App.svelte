<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import Navigator from './components/navigator.svelte';
  import About from './pages/About.svelte';
  import Home from './pages/Home.svelte'
  
  export let url = ''
</script>

<main>
  <Router url="{url}">
    <Navigator />

    <Route path="/" component="{Home}" />
    <Route path="/about" component="{About}" />
  </Router>
</main>
