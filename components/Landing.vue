<template>
    <div class="container px-0 py-auto d-flex flex-column justify-content-center align-items-center">
        <div class="hero-section__title">
            <h1>Welcome to Task Planner</h1>
        </div>
        <div class="hero-section__description text-center">
            <p>Get things done with your day, a list that refreshes every day.</p>
        </div>
        <InputTask :linktoTasks="true" />
    </div>
</template>
  
<script>
export default {};
</script>
  