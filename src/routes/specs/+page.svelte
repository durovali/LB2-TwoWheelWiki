<script>
    import "../styles.css";
    import Spec from "$lib/components/Spec.svelte";
    export let data;
    const { specs } = data;

    let specName = "";
    let specDesc = "";
    let specToDisplay = null;

    function onClick(spec) {
        specToDisplay = spec;
    }
</script>

<div class="container">
    <h1>Specs</h1>
    <div>
        <img src="/images/bike_specs.png" alt="bike_specs" />

        <div class="d-flex flex-wrap gap-2">
            {#each specs as spec}
                <button
                    type="button"
                    class="btn spec-btn"
                    on:click={() => onClick(spec)}
                >
                    {spec.id}
                </button>
            {/each}
        </div>

        {#if specToDisplay}
            <Spec spec={specToDisplay} />
        {:else}
            <p>Please click a button to view details about a part.</p>
        {/if}
    </div>
</div>
