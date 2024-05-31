<script>
    export let title = '';
    export let description = '';
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch('submit');
    }
</script>

<form on:submit={submitForm} class="form-control border-2 border-secondary/5  p-3 bg-base-100/15">
    <div class="shadow-sm flex sm:gap-0 gap-3 lg:flex-row md:flex-row sm:flex-row flex-col  ">
        <input bind:value={title} type="text" placeholder="Titulo" class="input sm:max-w-[150px] w-full input-bordered" />
        <input bind:value={description} type="text" placeholder="Descripción" class="input input-bordered md: lg:min-w-[500px] md:max-w-xs w-full" />
        <button type="submit" class="ml-1 btn btn-primary max-w-xs">Agregar tarea</button>
    </div>
</form>