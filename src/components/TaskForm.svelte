<script>

import { taskStore } from '../lib/store.js'

let title = ''
let description = '';

const handleSubmit = (event) => {
  event.preventDefault();


}

</script>

<div class="container">
  <form  class="form">
    <input
    type="text"
    placeholder="Titulo"
    class="col-span-1"
    />
    <input
    type="text"
    placeholder="Descripción"
    class="md:col-span-2"
    />
    <button type="submit" 
    class="col-span-1">
Agregar Tarea
  </button>
</form>
</div>

