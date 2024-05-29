<script>
  let name = 'Svelte';
  function changeName() {
  if (name === 'Svelte') {
    name = 'Mundo';
} else {
    name = 'Svelte';
  }
}


</script>

<div>
  <h1>hola {name}</h1>
  <button on:click={changeName}>Cambiar</button>
</div>