<template>
  <div class="container">
    <div class="blade" v-if="isLoading">
      <Loading />
    </div>
    <section>
      <FilterByName />
      <table class="table table-dark table-striped" >
        <thead>
          <tr>
            <th
              v-for="(menuSort, index) in sorts"
              :key="index"
              scope="col"
              @click="sortByColumn(menuSort)"
              class="column"
            >
              <span class="sort">
                {{ menuSort }}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(character, index) in characters || []" :key="index">
            <th scope="row">{{ character.name }}</th>
            <td>{{ character.height }}</td>
            <td>{{ character.mass }}</td>
            <td>{{ moment(character.created).format("DD/MM/YYYY") }}</td>
            <td>{{ moment(character.edited).format("DD/MM/YYYY") }}</td>
            <td
              @click="(isOpen = true), (planet = character.planet)"
              v-if="character.planet"
              class="planet"
            >
              {{ character.planet.name }}
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </section>
  </div>
  <div>
    <Modal :open="isOpen" @close="isOpen = !isOpen" v-if="isOpen">
      <Card :planet="planet" />
    </Modal>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Modal from "./Modal.vue";
import Card from "./Card.vue";
import Pagination from "./Pagination.vue";
import FilterByName from "./FilterByName.vue";
import Loading from "./Loading.vue";
import moment from "moment";
import { useStore } from "vuex";

export default {
  components: {
    Modal,
    Card,
    FilterByName,
    Pagination,
    Loading,
  },
  props: ["characters"],
  created: function () {
    this.moment = moment;
  },

  setup(props) {
    const store = useStore();
    let isLoading = store.state.isLoading;
    isLoading = computed(() => store.state.isLoading);
    const sorts = ref([
      "name",
      "height",
      "mass",
      "created",
      "edited",
      "planet",
    ]);
    const isOpen = ref(false);
    const planet = ref();

    const sortByColumn = (prop) => {
      const characters = props.characters;
      characters.sort((a, b) => {
        if (prop === "height" || prop === "mass") {
          return a[prop] - b[prop];
        } else if (prop === "created" || prop === "edited") {
          return new Date(a[prop]) - new Date(b[prop]);
        } else if (prop === "planet") {
          return a.planet.name > b.planet.name ? 1 : -1;
        } else {
          return a[prop] > b[prop] ? 1 : -1;
        }
      });
    };
    return {
      isOpen,
      sortByColumn,
      sorts,
      planet,
      isLoading,
    };
  },
};
</script>

<style lang="scss">
.blade{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.column{
  width: 20rem;
}
.planet{
  cursor: pointer;
  &:hover{
    font-weight: bold;
  }
}
.sort {
  cursor: pointer;
  text-transform: capitalize;
  font-size: 1.3rem;
  color: #ffee00;
}
th {
  max-width: 200px;
}
</style>
