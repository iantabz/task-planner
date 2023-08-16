<template>
  <div class="backdrop" @click.self="cancelDelete">
    <div class="dialog" draggable="false">
      <h3 class="dialog__title">Are you sure you want to delete this Task?</h3>
      <div class="dialog__buttons">
        <button class="dialog__confirm-button dialog__confirm-button--delete" @click="confirmDelete">Yes</button>
        <button class="dialog__cancel-button" @click="cancelDelete">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["delete", "close"],
  methods: {
    confirmDelete() {
      this.$emit("clicked-yes");
    },
    cancelDelete() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
