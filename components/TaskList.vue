<template>
  <div class="task-list container d-flex flex-column p-0">
    <div class="row mt-5">
      <div class="col">
        <NuxtLink to="/" class="task-list__title"> Task Planner </NuxtLink>
        <!-- <h1 class="task-list__title">Task Planner</h1> -->
      </div>
      <div class="col-4">
        <div class="d-flex flex-row-reverse">
          <button class="filter-button order-3" :class="{
            'filter-button--active': filterBy == 'all',
          }" @click="changeFilter('all')">
            All
          </button>
          <button class="filter-button order-2" :class="{
            'filter-button--active': filterBy == 'important',
          }" @click="changeFilter('important')">
            {{ importantCount }} Important
          </button>
          <button class="filter-button order-1" :class="{
            'filter-button--active': filterBy == 'done',
          }" @click="changeFilter('done')">
            {{ doneCount }} Done
          </button>
        </div>
      </div>
    </div>
    <!-- search input -->
    <div class="position-relative my-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="search-input--icon">
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
      <input type="text" placeholder="Search" class="search-input" :value="serverQuery.search" @keyup="search" />
    </div>
    <ItemTask v-for="task in filtered" :key="task.id" :task="task" @delete="handleDelete" @mark="markTask"
      @open-edit-dialog="handleOpenEditDialog" />
    <p v-if="filtered.length < 1" class="text-center text-gray-400">
      <em>Nothing here</em>
    </p>

    <UserSelect />
    <EditDialog v-show="openEditDialog" @close="handleCloseEditDialog" />
    <InputTask :placeholder-prop="'Add a task'" :class-list="['mt-auto', 'mb-3']" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      filterBy: "all",
      searchValue: "",
      timeout: null,
      openEditDialog: false,
    };
  },
  async fetch() {
    // await this.fetchTasks();
    await this.fetchUsers();
  },
  computed: {
    ...mapGetters("tasks", {
      tasks: "getTasks",
      serverQuery: "getServerQuery",
    }),
    filtered() {
      // console.log(this.tasks)
      // return [];
      // return this.tasks;
      switch (this.filterBy) {
        case "important":
          return this.tasks.filter((task) => task.is_important);
        case "done":
          return this.tasks.filter((task) => task.is_done);
        case "all":
        default:
          return this.tasks;
      }
    },
    importantCount() {
      if (!this.tasks) {
        return "";
      }

      const length = this.tasks.filter((task) => task.is_important).length;
      if (!length || length === 0) {
        return "";
      }
      return length;
      // return 1;
    },
    doneCount() {
      if (!this.tasks) {
        return "";
      }
      const length = this.tasks.filter((task) => task.is_done).length;
      if (!length || length === 0) {
        return "";
      }
      return length;
      // return 2;
    },
  },
  methods: {
    ...mapActions("tasks", [
      "fetchTasks",
      "deleteTask",
      "markAsDone",
      "undoTask",
      "markImportant",
      "filterTasks",
      "setServerQuery",
      "setTask",
      "resetTask",
    ]),
    ...mapActions("users", ["fetchUsers"]),
    changeFilter(filter) {
      this.filterBy = filter;
    },
    search(e) {
      this.setServerQuery({
        key: "search",
        value: e.target.value,
      });
      clearTimeout(this.timeout);
      const self = this;
      this.timeout = setTimeout(function () {
        // enter this block of code after 1 second
        // handle stuff, call search API etc.
        self.fetchTasks({
          query: self.searchValue,
        });
      }, 1000);
    },
    markTask({ task, markAs }) {
      switch (markAs) {
        case "done":
          this.markAsDone(task);
          break;
        case "undo":
          this.undoTask(task);
          break;
        case "important":
          this.markImportant(task);
          break;
      }
    },
    handleDelete(task) {
      this.deleteTask(task);
    },
    handleOpenEditDialog(task) {
      this.openEditDialog = true;
      this.setTask(task);
    },
    handleCloseEditDialog() {
      this.openEditDialog = false;
      this.resetTask();
    },
  },
  mounted() {
    this.fetchTasks()
  }
};
</script>

<style lang="scss" scoped>
.button {
  &--active {
    background: gray;
  }
}

.list-group {
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #d8dbe2; // $gray-300;
  }
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
