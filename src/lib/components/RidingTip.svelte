<script>
    export let tip;
</script>

<div class="row">
    <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary-emphasis"
            >{tip.experience_level}</strong
        >
        <h3 class="mb-0">{tip.manoeuver}</h3>
        <div class="mb-1 text-body-secondary">{tip.tip}</div>
        <p class="card-text mb-auto">
            {tip.description}
        </p>
        <br>
        <p>Gear: {tip.safety_gear}</p>
        <p>Maintenance Tips: {tip.maintenance_tips}</p>
    </div>
</div>
