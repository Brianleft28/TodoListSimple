<script>
  import { onMount } from "svelte";
  import TaskForm from "./TaskForm.svelte";
  let title = '';
  let description = '';
  let tasks = [];
  let isEditing = false;
  let taskToEdit = null;



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
    
    if (isEditing) {
      // Actualizar la tarea
      const index = tasks.findIndex(task => task.id === taskToEdit.id);
      tasks[index] = {
        id: taskToEdit.id,
        title: title,
        description: description
      }
      localStorage.setItem('tasks', JSON.stringify(tasks))
      taskToEdit = null;
    } else {
      // agregar nueva tarea
      const task = {
        id: Date.now(),
        title: title,
        description: description
      }
      tasks = [...tasks, task];
    }
    
 
    /* Limpiar inputs */
     title = ''
     description = ''
     isEditing = false;

    }
    // funcion handleEdit
    function handleEdit(id) {
     isEditing = true;
     taskToEdit = tasks.find(task => task.id === id);
     title = taskToEdit.title;
     description = taskToEdit.description;


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
    <TaskForm bind:isEditing bind:title bind:description  on:submit={handleSubmit}/>
    <div class="mx-auto px-3 w-full max-h-[425px] overflow-auto border-x border-secondary/5 ">
    <div class="bg-base-300 ">
      {#if tasks.length > 0}
        <ul class="list-none ">
          {#each tasks as task}
            <li class="flex justify-between p-3 border-b border-secondary/5">
              <div class="max-w-[80%]">
                <h3 class="text-lg font-bold">{task.title}</h3>
                <p class="break-words ">{task.description}</p>
              </div>
              <div class="flex gap-3 items-center">
                <button on:click={handleEdit(task.id)} class="btn btn-secondary">
                  Editar
                </button>
                <button on:click={handleDelete(task.id)} class="btn btn-secondary">Eliminar</button>
              </div>
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