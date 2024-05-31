<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Header from "../components/Navbar.svelte";
</script>
<!-- Page Wrapper -->
<main class="max-w-[1920px] mx-auto bg-base-100  overflow-hidden font-mono">
  <!-- Navbar -->
  <Navbar />
    <slot></slot>

</main>
