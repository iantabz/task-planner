<template>
  <TaskList />
</template>

<script>
export default {
  transition: 'tasks'
};
</script>

<style >
.tasks-enter-active {
  transition: all 0.3s ease-out;
}

.tasks-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.tasks-enter-from,
.tasks-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
