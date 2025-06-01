<script>
    export let bike;
</script>

<a href={`/bikes/${bike._id}`}  class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
        <h5>{bike.name}</h5>
    </div>
    <p>{bike.year}</p>
</a>
