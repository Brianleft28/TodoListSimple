<script>
  import "../app.css";
  import Navbar from "../components/UI/Navbar.svelte";
</script>

<!-- Navbar -->
<div class="navbar-container">
  <Navbar />
</div>

<!-- Page Wrapper -->
<main class="page-container">
    <slot/>
</main>
