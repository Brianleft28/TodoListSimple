<script>
  import "../app.css";
  import Navbar from "../components/UI/Navbar.svelte";
</script>

<!-- Navbar -->

<!-- Page Wrapper -->
<main class="page-container">
  <div class="navbar-container">
    <Navbar />
  </div>
  <slot />
</main>
