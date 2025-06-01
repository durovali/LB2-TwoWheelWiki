<script>
    import RidingTip from "$lib/components/RidingTip.svelte";
    export let data;
    const { ridingTips } = data;
</script>

<h1>How to become a riding pro!</h1>
<h2>Riding Tips:</h2>

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

<div class="">
    <a href="/riding_tips/create" class="btn btn-primary">Add New Tip</a>
</div>
