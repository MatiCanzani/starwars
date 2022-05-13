<template>
  <div class="container">
    <h1 class="glow">Star Wars Teamwork</h1>
    <ListCharacters />
  </div>
</template>

<script>
import ListCharacters from "./components/ListCharacters.vue";
import { computed} from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    ListCharacters,

  },
  setup() {
    const store = useStore();
    let isLoading = store.state.isLoading;
    isLoading = computed(() => store.state.isLoading);
    return {
      isLoading,
    };
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Starjhol";
  src: url(./assets/fonts/Starjhol.ttf) format("truetype");
}
@font-face {
  font-family: "Starjedi";
  src: url(./assets/fonts/Starjedi.ttf) format("truetype");
}

.glow {
  font-family: "Starjhol", Helvetica, Arial;
  color: #ffe71f;
  background: black;
  font-size: 60px;
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 20px #ffee00, 0 0 30px #ffee00,
      0 0 40px #ffee00;
  }
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #ffff00, 0 0 30px #ffff00,
      0 0 40px #ffff00, 0 0 50px #ffff00;
  }
}

#app,
html {
  background: black;
}
.lightsaber {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  background: black;
}
</style>    