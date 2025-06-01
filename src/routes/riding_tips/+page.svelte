<script>
  import RidingTip from "$lib/components/RidingTip.svelte";
  export let data;
  const { ridingTips } = data;
</script>

<div class=" row">
  <div class="col-lg-10 col-sm-12">
    <h1>How to become a riding pro!</h1>
  </div>
  <div class="col-lg-2 col-sm-12">
    <a href="/riding_tips/create" class="btn btn-primary">Add New Tip</a>
  </div>
</div>

<div class="row">
  {#if ridingTips.length > 0}
    {#each ridingTips as tip}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <RidingTip {tip}></RidingTip>
      </div>
    {/each}
  {:else}
    <p>No Tips found.</p>
  {/if}
</div>
