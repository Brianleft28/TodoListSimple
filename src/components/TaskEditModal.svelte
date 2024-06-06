<script>
  import { createEventDispatcher } from "svelte";
  import { taskStore } from "../lib/store.js";

  export let taskToEdit;

  let dispatch = createEventDispatcher();

  function close() {
    dispatch("close");
  }

  function save() {
    taskStore.editTask(taskToEdit);
    dispatch("save");
    dispatch("close");
  }
</script>

<div class="modal-div">
  <div class="modal-div-content">
    <div class="modal-div-input">
      <h1 class="modal-h1">Editar tarea</h1>
      <form>
        <div class="mb-5">
          <label for="title" class="modal-label">Título</label>
          <input
            bind:value={taskToEdit.title}
            type="text"
            class="modal-input"
          />
        </div>
        <div class="mb-5">
          <label for="description" class="modal-label">Descripción</label>
          <input
            bind:value={taskToEdit.description}
            type="text"
            class="modal-input"
          />
        </div>
        <div class="modal-div-buttons">
          <button on:click={save} type="submit" class="btn-edit">
            Guardar
          </button>
          <button on:click={close} class="btn-delete">Cerrar</button>
        </div>
      </form>
    </div>
  </div>
</div>
