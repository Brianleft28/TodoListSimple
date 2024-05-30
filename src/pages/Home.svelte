<script>

import { Link, link } from 'svelte-routing';
</script>

<main class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
        <div class="max-w-d">
            <h1 class="text-5xl font-bold">TodoList</h1>
            <p class="py-6">Comience agregando una tarea</p>
            <Link to="/taskboard" class="btn rounded-none btn-primary">
                Agregar tarea
            </Link>
        </div>
    </div>  
</main>

<style>

</style>