<template>
  <div class="container">
    <nav aria-label="...">
      <ul class="pagination justify-content-end">
        <li class="page-item me-2">
          <button
            class="page-item btn btn-warning"
            @click="setCurrentPage(prevPeople)"
          >
            Previous
          </button>
        </li>
        <li class="page-item">
          <button class="btn btn-dark" @click="setCurrentPage(nextPeople)">
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const nextPeople = computed(() => store.state.nextPeople);
    const count = computed(() => store.state.count);
    const prevPeople = computed(() => store.state.prevPople);
    const setCurrentPage = (page) => {
      store.dispatch("setLoading");
      store.dispatch("getCharacters", page);
    };
    return {
      nextPeople,
      count,
      prevPeople,
      setCurrentPage,
    };
  },
};
</script>


<style>
</style>