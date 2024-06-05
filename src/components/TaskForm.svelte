<script>
  import { onDestroy } from "svelte";
  import { taskStore } from "../lib/store.js";

  let title = "";
  let description = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === "" || description === "" || !title || !description) {
      alert("Por favor, llena todos los campos");
      return;
    } else {
      console.log("Tarea agregada");
      taskStore.addTask({ title, description });
      taskStore.saveTasks();
      title = "";
      description = "";
    }
  };
  let unsubscribe = taskStore.subscribe((task) => {
    console.log(task);
  });
  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="container">
  <form class="form" on:submit={handleSubmit}>
    <input
      bind:value={title}
      type="text"
      placeholder="Titulo"
      class="col-span-1"
    />
    <input
      bind:value={description}
      type="text"
      placeholder="Descripción"
      class="md:col-span-2"
    />
    <button type="submit" class="col-span-1"> Agregar Tarea </button>
  </form>
</div>
