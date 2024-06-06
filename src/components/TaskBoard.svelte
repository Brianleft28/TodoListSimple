<script>
  import TaskForm from "./TaskForm.svelte";
  import Task from "./Task.svelte";
</script>

<div class="mt-20">
  <!-- Formulario -->
  <TaskForm />
  <!-- Tablero -->
  <div class="grid-container-task">
    <Task />
  </div>
</div>
