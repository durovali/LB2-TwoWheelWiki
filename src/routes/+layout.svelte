<script>
  import "./styles.css";
  let { children } = $props();
</script>

<nav
  class="navbar navbar-expand-lg bg-body-tertiary bg-dark"
  data-bs-theme="dark"
>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">TwoWheelWiki</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li><a class="nav-link active" aria-current="page" href="/manufacturers">Manufacturers</a></li>
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="/bikes">Bikes</a></li>
        <li><a class="nav-link active" aria-current="page" href="/specs">Specs</a></li>
        <li><a class="nav-link active" aria-current="page" href="/riding_tips">Riding Tips</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>
