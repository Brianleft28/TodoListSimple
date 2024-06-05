<script>
  import { Router, Route } from "svelte-routing";
  import Layout from "./layouts/Layout.svelte";
  import Home from "./pages/Home.svelte";
  import TaskBoard from "./components/TaskBoard.svelte";
</script>

<Router>
  <Layout>
    <Route path="/" component={Home} />
    <Route path="/taskboard" component={TaskBoard} />
  </Layout>
</Router>

<style>
</style>
