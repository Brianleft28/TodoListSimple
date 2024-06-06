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
          <label
            for="title"
            class="block mb-2 text-sm font-medium text-neutral-content"
            >Título</label
          >
          <input
            type="text"
            class="block mb-2 text-sm font-medium text-neutral-content"
          />
        </div>
        <div class="mb-5">
          <label
            for="description"
            class="block text-sm mb-2 font-medium text-neutral-content"
            >Descripción</label
          >
          <input
            type="text"
            class="input-bordered input focus:border-none bg-base-200"
          />
        </div>
        <div class="flex flex-row justify-center items-center gap-2">
          <button type="submit" class="btn-edit"> Guardar </button>
          <button on:click={close} class="btn-delete">Cerrar</button>
        </div>
      </form>
    </div>
  </div>
</div>
