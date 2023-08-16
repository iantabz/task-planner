<template>
  <div class="backdrop" @click.self="cancel">
    <div class="dialog dialog-lg">
      <h5 class="dialog__title text-left">Edit Task</h5>
      <div class="dialog__content">
        <input
          type="text"
          :value="task.title"
          @input="handleInput"
          @keypress.enter.stop="save"
        />
      </div>
      <div class="dialog__footer">
        <button class="dialog__confirm-button" @click="save">Save</button>
        <button class="dialog__cancel-button" @click="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  emits: ["close"],
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    ...mapGetters("tasks", {
      task: "getTask",
    }),
  },
  methods: {
    ...mapActions("tasks", ["setTitle", "updateTask"]),
    handleInput(e) {
      const value = e.target.value;

      if (!value) {
        return;
      }

      this.inputValue = value;
    },
    async save() {
      if(!this.inputValue){
        this.inputValue = this.task.title
      }

      this.setTitle(this.inputValue);

      await this.updateTask();
      this.inputValue = "";
      this.$emit("close");
    },
    cancel() {
      this.$emit("close");
      this.inputValue = "";
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
.edit-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 400px;
  text-align: center;
  z-index: 9999;

  &__footer {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    &__save-button {
      border: none;
      border-radius: 15px;
      padding: 10px 20px;
      margin-right: 10px;
      cursor: pointer;

      &:hover {
        background-color: #333;
      }
    }

    &__cancel-button {
      background-color: #f5f5f5;
      color: #333;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px 20px;
      cursor: pointer;

      &:hover {
        background-color: #e0e0e0;
      }
    }
  }
}
</style>
