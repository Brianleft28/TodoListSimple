<script>
    export let title = '';
    export let description = '';
      export let isEditing = false;

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch('submit');
    }
</script>

<form on:submit={submitForm} class="form-control mx-auto w-full border-2 border-secondary/5   p-3 bg-base-100/15">
  
    <div class=" shadow-sm flex sm:gap-0 gap-3 lg:flex-row md:flex-row sm:flex-row flex-col justify-between ">
        
        <input 
        bind:value={title} 
        type="text" placeholder="Titulo" 
        class="input w-full input-bordered lg:max-w-xs md:max-w-xs sm:max-w-xs"
         
    />
        <input 
        bind:value={description} 
        type="text" 
        placeholder="Descripción" 
        class="input input-bordered w-full" 
    />
        <button 
        type="submit" 
        class="ml-1 btn btn-primary lg:max-w-xs">
        
        {
            isEditing ? 'Editar Tarea' : 'Agregar Tarea'
        }
        </button>

    </div>
</form>