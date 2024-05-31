<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
</script>
<!-- Page Wrapper -->
<div class="w-full mx-auto font-mono">
  <Navbar />
</div>
<main class="max-w-[1920px] mx-auto bg-base-100  overflow-hidden font-mono">
  <!-- Navbar -->
    <slot></slot>

</main>
