<script>
  import { enhance } from '$app/forms';
</script>

<a href="/movies">← Back</a>

<h1>Add a Movie</h1>

<form method="POST" use:enhance>
  <label>
    Name<br />
    <input type="text" name="title" required />
  </label>
  <br />

  <label>
    Year<br />
    <input type="number" name="year" required />
  </label>
  <br />

  <label>
    Length<br />
    <input type="text" name="length" required />
  </label>
  <br />

  <label>
    Poster URL (optional)<br />
    <input type="text" name="poster" />
  </label>
  <br />

  <button type="submit">Add Movie</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin-top: 1em;
  }

  label {
    margin-bottom: 0.5em;
    color: white;
  }

  input {
    padding: 0.4em;
    margin-top: 0.2em;
  }

  button {
    margin-top: 1em;
    padding: 0.5em;
    background-color: #2196f3;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #1976d2;
  }
</style>
