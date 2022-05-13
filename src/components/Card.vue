<template>
  <div class="card">
    <div class="card-header text-warning bg-dark">
      {{ planet.name }}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item bg-dark text-light">
        Diameter: {{ planet.diameter }}
      </li>
      <li class="list-group-item bg-dark text-light">
        Climate: {{ planet.climate }}
      </li>
      <li class="list-group-item bg-dark text-light">
        Population : {{ planet.population }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["planet"],
};
</script>

<style>
.card {
  margin: 1rem 0;
}
.card-header {
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
}
</style>