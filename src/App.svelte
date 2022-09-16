<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import Layout from './components/layout.svelte';
  import About from './pages/About.svelte';
  import Home from './pages/Home.svelte'
  
  export let url = ''
</script>

<Router url="{url}">
  <Layout>
    <Route path="/" component="{Home}" />
    <Route path="/about" component="{About}" />
  </Layout>
</Router>
