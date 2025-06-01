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
    <div class="row">
        <div class="col-12">
            <h1>Specs</h1>
            <p>
                Understanding the specifications and parts of a motorcycle is
                essential for every rider — whether beginner or experienced. A
                bike is made up of many key components, each playing an
                important role in how the machine performs, handles, and keeps
                the rider safe. By learning about parts such as the engine,
                brakes, suspension, tires, and frame, riders gain a better
                appreciation of how their motorcycle works. Knowing these
                details helps with everything from choosing the right bike for
                your needs, to performing routine maintenance, to making
                informed upgrades. Familiarity with your bike also improves
                safety. Understanding how the braking system functions, or how
                tire pressure affects handling, empowers riders to detect
                potential issues early and avoid dangerous situations on the
                road. In short, knowing your motorcycle — its specifications and
                its components — helps you ride with more confidence, take
                better care of your machine, and ultimately enjoy the riding
                experience to the fullest.
            </p>
        </div>
    </div>

    <div class="row">
        <div class="col-12 text-center">
            <img src="/images/bike_specs.png" alt="bike_specs" />
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-4">
            <div>
                <div class="py-4 d-flex flex-wrap gap-2">
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
    </div>
</div>
