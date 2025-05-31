<script>
  import MovieCard from "$lib/components/MovieCard.svelte";
  export let data;
  const { movies } = data;
</script>

<div class="header-bar">
  <p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>
  <a href="/movies/create" class="add-button">Add New Movie</a>
</div>

<div class="row">
  {#if movies.length > 0}
    {#each movies as movie}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <MovieCard {movie}></MovieCard>
      </div>
    {/each}
  {:else}
    <p>Keine Filme gefunden.</p>
  {/if}
</div>

<style>
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
    color: white;
  }

  .add-button {
    background-color: #2196f3;
    color: white;
    padding: 0.5em 1em;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
  }

  .add-button:hover {
    background-color: #1976d2;
  }

  .movies-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
  }
</style>
