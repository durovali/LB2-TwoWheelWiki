<script>
  export let manufacturer;
</script>

<div class="card shadow-sm h-100">
  <img class="card-img-top p-3" src={manufacturer.logo} alt="logo" />
  <div class="card-body">
    <h5 class="card-title">{manufacturer.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">
      {manufacturer.country}
    </h6>
    <p class="card-text">
      {manufacturer.description}
      and is known for: {manufacturer.known_for}
    </p>
    <p>Founded: {manufacturer.founded}</p>
  </div>
</div>


<style>
image{
  object-fit: contain; height: 150px;
}
</style>