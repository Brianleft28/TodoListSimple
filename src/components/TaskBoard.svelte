<script>
  import TaskForm from "./TaskForm.svelte";
  let title = '';
  let description = '';
  let tasks = [];

  function handleSubmit(e) {
    e.preventDefault();
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


  }

</script>


<div class="container mx-auto flex justify-center mt-8"> 
    <form >
    <TaskForm bind:title bind:description  on:submit={handleSubmit}/>
    </form>
</div>


<style> 
</style>