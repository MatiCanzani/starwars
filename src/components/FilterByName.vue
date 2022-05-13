<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search by Name"
      @keyup="filter()"
      v-model="name"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const name = ref("");
    const filter = () => {
      store.dispatch("filterByname", name.value);
    };
    return { name, filter };
  },
};
</script>

<style lang="scss">
.search {
  width: 250px;
  font-size: 16px;
  margin: 1rem 0;
  border: 1px solid #ddd;
  margin-bottom: 0.8rem;
  margin-top: 2rem;
  border-radius: 5px;
  input {
    width: 100%;
    border: none;
    padding: 10px;
    background: none;
    color: #ffe71f;
    &:focus {
      box-shadow: 0 0 1px #fff, 0 0 5px #ffee00, 0 0 10px #ffee00,
        0 0 10px #ffee00;
    }
  outline: none;
  }
}
</style>