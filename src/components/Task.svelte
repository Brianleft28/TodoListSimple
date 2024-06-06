<script>
  import { onDestroy } from "svelte";
  import TaskEditModal from "./TaskEditModal.svelte";
  import { taskStore } from "../lib/store.js";

  let tasks = [];
  let editModalOpen = false;
  let taskToEdit = null;

  const unsubscribe = taskStore.subscribe((updatedTasks) => {
    tasks = updatedTasks;
  });

  onDestroy(unsubscribe);

  function deleteTask(id) {
    taskStore.deleteTask(id);
    taskStore.saveTasks();
  }

  function editTask(task) {
    taskToEdit = tasks.find((t) => t.id === task.id);
    editModalOpen = true;
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
        <button on:click={editTask(task)} class="btn-edit">Editar</button>

        <button on:click={deleteTask(task.id)} class="btn-delete"
          >Eliminar</button
        >
      </div>
    </div>
  {/each}
{/if}
{#if editModalOpen}
  <TaskEditModal {taskToEdit} on:close={() => (editModalOpen = false)} />
{/if}
