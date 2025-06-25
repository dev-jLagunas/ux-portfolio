<script setup></script>

<template>
  <section class="max-w-4xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4"><slot name="title" /></h1>
    <div class="mb-6"><slot name="summary" /></div>
    <div><slot /></div>
    <!-- Main content -->
  </section>
</template>

<style scoped></style>
