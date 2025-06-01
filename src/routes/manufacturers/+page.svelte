<script>
  import Manufacturer from "$lib/components/Manufacturer.svelte";
  export let data;
  const { manufacturers } = data;
</script>

<div class="container">
  <h1>Manufacturers</h1>

  <div class="row">
    {#if manufacturers.length > 0}
      {#each manufacturers as manufacturer}
        <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
          <Manufacturer {manufacturer}></Manufacturer>
        </div>
      {/each}
    {:else}
      <p>No manufacturer found.</p>
    {/if}
  </div>
</div>
