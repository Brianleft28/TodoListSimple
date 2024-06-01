<script>
  import { onMount } from "svelte";
  import TaskForm from "./TaskForm.svelte";
  let title = '';
  let description = '';
  let tasks = [];

  // Cargar las tareas del localstorage
  onMount(() => {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  });

  // funcion para agregar tareas
  function handleSubmit(e) {
    e.preventDefault();
    
    // condiciones para validar los campos
    if (!title || !description) {
      alert('Todos los campos son requeridos');
      return;
    } 
    
    /* Crear la tarea, y el array de tareas */
    const task = {
      id: tasks.length + 1,
      description: description,
      title: title
    };
    tasks = [...tasks, task];

    /* Limpiar inputs */
     title = ''
     description = ''
     console.log(task, tasks)

     /* Guardar el localstorage  */

      localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  // funcion para eliminar tareas
  function handleDelete(id) {
    const newTasks = tasks.filter(task => task.id !== id);
    tasks = newTasks;
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

</script>


<div class="container mx-auto flex flex-col justify-center mt-8"> 
    <TaskForm bind:title bind:description  on:submit={handleSubmit}/>
    <div class="mx-auto px-3 w-full  border-x border-secondary/5 ">
    <div class="bg-base-300">
      {#if tasks.length > 0}
        <ul class="list-none">
          {#each tasks as task}
            <li class="flex justify-between p-3 border-b border-secondary/5">
              <div>
                <h3 class="text-lg font-bold">{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <button on:click={handleDelete(task.id)} class="btn btn-secondary">Eliminar</button>
            </li>
          {/each}
        </ul>
      {:else}
        <p class="text-center p-3">No hay tareas</p>
      {/if}
    </div>
  </div>

</div>


<style> 
</style>