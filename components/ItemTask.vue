<template>
  <li class="list-group-item task-item d-flex my-2 drop-zone">
    <div class="col task-item__check-container">
      <svg class="task-item__check-container__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" @click="markTask
        ">
        <Transition name="check">
          <path v-if="task.is_done" key="done" class="done"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          <path v-else key="pending" class="pending" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
        </Transition>
      </svg>
    </div>
    <div class="col-8 col-md-9 col-lg-10 task-item__title-container" :draggable="true"
      @dragstart="startDrag($event, task)" @drop="onDrop($event, task.id)" @dragover.prevent @dragenter.prevent>
      <span @click.prevent="$emit('open-edit-dialog', task)" :class="{
        'task-item__title-container__title--done': task.is_done,
        'task-item__title-container__title': !task.is_done,
      }">{{ task.title }}</span>
    </div>
    <div class="col task-item__options-container d-flex">
      <div class="avatar-dropdown">
        <div class="avatar" tabindex="0" @click="handleAvatarClicked($event, task)">
          <img :src="avatarSrc" alt="Avatar" />
        </div>
      </div>
      <!-- <UserSelect :avatarImg="avatarSrc" /> -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="task-item__options-container__important-icon"
        @click="$emit('mark', { task, markAs: 'important' })">
        <Transition name="important">
          <path v-if="task.is_important" key="important" class="important"
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          <path v-else key="unimportant" class="unimportant"
            d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
        </Transition>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="task-item__options-container__delete-icon"
        @click="openDeleteDialog = true">
        <path
          d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
      </svg>
    </div>

    <DeleteDialog v-if="openDeleteDialog" @close="openDeleteDialog = false" @clicked-yes="emitDelete" />
  </li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  emits: ["mark", "delete", "open-edit-dialog"],
  data() {
    return {
      openDeleteDialog: false,
      toggleAvatarDropdown: false,
    };
  },
  computed: {
    avatarSrc() {
      if (!this.task || !this.task.assignee || !this.task.assignee.avatar) {
        return "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
      }
      return this.task.assignee.avatar;
    },
    ...mapGetters("users", {
      showUserDropDown: "getShowDropDown",
    }),
  },
  methods: {
    ...mapActions("tasks", ["setTask", "moveTask"]),
    ...mapActions("users", {
      setShowDropDown: "setShowDropDown",
      setUserServerQuery: "setServerQuery",
      setUserMouseCoordinates: "setMouseCoordinates",
      setSelectedUser: "setSelectedUser",
      resetSelectedUser: "resetSelectedUser"
    }),
    markTask() {
      this.$emit('mark', {
        task: this.task,
        markAs: !this.task.is_done ? 'done' : 'undo'
      });
    },
    emitDelete() {
      this.openDeleteDialog = false
      this.$emit("delete", this.task);
    },
    handleAvatarClicked(e, task) {
      this.setShowDropDown(true);
      this.$emit("fetchUsers")
      this.setUserMouseCoordinates({
        clientX: e.clientX,
        clientY: e.clientY,
      });
      this.setTask(task);
    },
    startDrag(evt, task) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("draggedTaskID", task.id);
    },
    onDrop(evt, droppedTaskID) {
      const draggedTaskID = evt.dataTransfer.getData("draggedTaskID");
      this.moveTask({ droppedTaskID, draggedTaskID });
    },
  },
};
</script>

<style lang="scss" scoped>
.strike-through {
  text-decoration: line-through !important;
}


.important-enter-active,
.important-leave-active,

.check-enter-active,
.check-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.important-enter-from,
.important-leave-to,
.check-enter-from,
.check-leave-to {
  opacity: 0;
}
</style>
