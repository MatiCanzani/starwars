<template>
  <Transition>
    <div class="vue-modal " v-show="open">
      <div class="vue-modal-inner">
        <div class="vue-modal-content">
          <slot />
          <button type="button" class="btn btn-warning" @click="close">Close</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref } from "vue";

export default {
  props:
    {
      open: {
        type: Boolean,
        default: false,
      },
    },
  setup(_, { emit }) {
    const close = () => emit("close");
    const isOpen = ref(false);
    return {isOpen, close };
  },
};
</script>

<style>
.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  overflow-y: auto;
  z-index: 9999;
}

.vue-modal-inner {
  max-width: 500px;
  margin: 15% auto;
}

.vue-modal-content {
  position: relative;
  background-color: #000;
  border-radius: 0.5rem;
box-shadow: 0 0 1px #fff, 0 0 5px #ffee00, 0 0 10px #ffee00,
        0 0 10px #ffee00;
  background-clip: border-box;
  padding: 1rem;
}

.v-enter-active,
.v-leave-leave {
  transition: opacity 0.5s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
