<template>
  <div ref="dropdown" class="dropdown" tabindex="0" v-show="showDropdown" :style="{
    left: mouseCoordinates.clientX + 'px',
    top: mouseCoordinates.clientY + 'px',
  }">
    <div class="dropdown__header position-relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="dropdown__header__icon">
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
      <input ref="userSearch" :value="serverQuery.search" type="text" class="dropdown__header__input"
        placeholder="Search Team Member" @blur="inputIsFocused = false" @focus="inputIsFocused = true" @keyup="search" />
    </div>

    <div class="dropdown__content">
      <ul>
        <li v-for="user in usersArranged" :key="user.id" class="assignee-option" :class="{
          'assignee-option--active': currentAssigneeId == user.id,
        }" @click="handleAssigneeSelect(user)">
          <div class="user-avatar">
            <img :src="user.avatar" alt="User Avatar" />
          </div>
          <div class="user-name">{{ user.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    avatarImg: {
      type: String,
      required: false,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    },
  },
  data() {
    return {
      inputIsFocused: false,
    };
  },
  computed: {
    ...mapGetters("tasks", {
      task: "getTask",
    }),
    ...mapGetters("users", {
      users: "getUsers",
      showDropdown: "getShowDropDown",
      selectedUser: "getSelectedUser",
      mouseCoordinates: "getMouseCoordinates",
      serverQuery: "getServerQuery",
    }),
    currentAssigneeId() {
      if (!this.task || !this.task.assignee) {
        return null;
      }

      return this.task.assignee.id;
    },
    usersArranged() {
      if (!this.currentAssigneeId) {
        return this.users;
      }

      const index = this.users.findIndex(
        (user) => user.id === this.currentAssigneeId
      );

      const find = this.users.find(
        (user) => user.id === this.currentAssigneeId
      );

      const userList = JSON.parse(JSON.stringify(this.users));

      userList.splice(index, 1);
      userList.unshift(find);
      return userList;
    },
  },
  watch: {
    showDropdown(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.userSearch.focus();
          this.inputIsFocused = true;
          this.$refs.dropdown.focus();
        });
        // Add event listener on the window object to detect clicks outside the dropdown
        window.addEventListener("mousedown", this.handleClickOutside);
      } else {
        // Remove the event listener when the dropdown is hidden
        window.removeEventListener("mousedown", this.handleClickOutside);
      }
    },
  },
  methods: {
    ...mapActions("tasks", ["updateAssignee"]),
    ...mapActions("users", [
      "fetchUsers",
      "setServerQuery",
      "setShowDropDown",
      "setMouseCoordinates",
      "setServerQuery",
      "setSelectedUser",
      "updateAsignee",
    ]),
    handleAssigneeSelect(user) {
      this.updateAssignee({ task: this.task, user });
      this.setShowDropDown(false);
      this.setServerQuery({
        key: "search",
        value: "",
      });
    },
    search(e) {
      this.setServerQuery({
        key: "search",
        value: e.target.value,
      });
      clearTimeout(this.timeout);
      const self = this;
      this.timeout = setTimeout(function () {
        self.fetchUsers({
          query: self.searchValue,
        });
      }, 300);
    },
    handleAvatarClicked(e) {
      this.setShowDropDown(true);
      this.setMouseCoordinates({
        clientX: e.clientX,
        clientY: e.clientY,
      });
    },
    handleClickOutside(e) {
      if (
        !this.$refs.dropdown.contains(e.target) &&
        !this.$refs.userSearch.contains(e.target)
      ) {
        this.setShowDropDown(false);
        this.setServerQuery({
          key: "search",
          value: "",
        });
        this.fetchUsers();
      }
    },
  },
};
</script>
