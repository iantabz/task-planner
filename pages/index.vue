<template>
  <div class="container px-0 py-auto d-flex flex-column justify-content-center align-items-center">
    <Landing />
  </div>
</template>

<script>
export default {
  transition: 'home'
};
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity .5s;
}

.home-enter,
.home-leave-active {
  opacity: 0;
}</style>
