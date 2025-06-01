<script>
  export let data;
  const { bike } = data;
</script>

<a href="/bikes">← Back</a>

<div class="container mt-4">
  <div class="row">
    <div class="col-lg-8 col-sm-12">
    <h1>{bike.name}</h1>
    <h5>{bike.description}</h5>

    <ul class="list-group mb-3">
      <li class="list-group-item"><p>Year: {bike.year}</p></li>
      <li class="list-group-item"><p>Type: {bike.type}</p></li>
    </ul>
</div>
    <div class="col-lg-4 col-sm-12 d-flex align-items-center">
      <img src="/images/bike_placeholder.png" alt="bike_placeholder"/>
    </div>
  </div>
</div>
