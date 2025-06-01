<script>
    import Bike from "$lib/components/Bike.svelte";
    export let data;
    const { bikes } = data;
</script>

<div class="container">
    <h1>Bikes</h1>
    <div class="row">
        <div class="list-group">
            {#if bikes.length > 0}
                {#each bikes as bike}
                    <Bike {bike}></Bike>
                {/each}
            {:else}
                <p>No bikes found.</p>
            {/if}
        </div>
    </div>
</div>
