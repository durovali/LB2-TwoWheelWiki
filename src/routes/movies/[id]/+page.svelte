<script>
  export let data;
  const { movie } = data;
</script>

<a href="/movies">← Back</a>

<h1>{movie.title}</h1>

<p>Jahr: {movie.year}</p>
<p>Dauer: {movie.length}</p>

{#if movie.actors?.length}
  <p>Cast:</p>
  <ul>
    {#each movie.actors as actor}
      <li>{actor}</li>
    {/each}
  </ul>
{/if}

<img src={movie.poster} alt={`Poster von ${movie.title}`} width="300" />
