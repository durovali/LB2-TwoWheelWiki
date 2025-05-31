<script>
  export let movie;
</script>

<a href={`/movies/${movie._id}`} class="movie-link">
  <div class="movie-card">
    <div>
      <img class="img-fluid" src={movie.poster} alt="" />
    </div>
    <div class="details">
      <div class="title">
        {movie.title}
      </div>
      <div>
        Jahr: {movie.year}
      </div>
      <div>
        Dauer: {movie.length}
      </div>
    </div>
  </div>
</a>

<style>
  .movie-card {
    border: 1px solid #555;
    height: 100%;
    background-color: #444;
    color: white;
  }
  .details {
    padding: 0.5em;
  }
  .title {
    font-weight: bold;
  }
</style>
