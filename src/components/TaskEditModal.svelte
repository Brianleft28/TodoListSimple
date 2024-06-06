<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();

  function close() {
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
          <input type="text" class="modal-input" />
        </div>
        <div class="mb-5">
          <label for="description" class="modal-label">Descripción</label>
          <input type="text" class="modal-input" />
        </div>
        <div class="modal-div-buttons">
          <button type="submit" class="btn-edit"> Guardar </button>
          <button on:click={close} class="btn-delete">Cerrar</button>
        </div>
      </form>
    </div>
  </div>
</div>
