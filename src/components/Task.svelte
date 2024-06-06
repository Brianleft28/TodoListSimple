<script>
  import { onDestroy } from "svelte";
  import { taskStore } from "../lib/store.js";
  import TaskEditModal from "./TaskEditModal.svelte";

  let tasks = [];
  let editModalOpen = false;

  const unsubscribe = taskStore.subscribe((updatedTasks) => {
    tasks = updatedTasks;
  });

  onDestroy(unsubscribe);

  function deleteTask(id) {
    taskStore.deleteTask(id);
    taskStore.saveTasks();
  }
</script>

<!-- Item -->
{#if tasks.length === 0}
  <div class="task-item justify-center">
    <p>No hay tareas</p>
  </div>
{:else}
  {#each tasks as task}
    <div class="task-item">
      <!-- Texto -->
      <div class="div-text-task">
        <h1 class="h1-task">{task.title}</h1>
        <p class="p-task">
          {task.description}
        </p>
      </div>
      <!-- Botones -->
      <div class="div-buttons">
        <button on:click={() => (editModalOpen = true)} class="btn-edit"
          >Editar</button
        >

        <button on:click={deleteTask(task.id)} class="btn-delete"
          >Eliminar</button
        >
      </div>
    </div>
  {/each}
{/if}
{#if editModalOpen}
  <TaskEditModal on:close={() => (editModalOpen = false)} />
{/if}
