<template>
  <section>
    <div>
      <Suspense>
        <Table :characters="characters" />
      </Suspense>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Table from "./Table.vue";

export default {
  components: {
    Table,
  },

   setup() {
    const store = useStore();
    const characters = computed(() => store.state.charactersFilter);
    onMounted(() => {
      store.dispatch("getCharacters");
    });
    return { characters };
  },
};
</script>

<style>
</style>
