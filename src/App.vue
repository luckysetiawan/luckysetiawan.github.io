<template>
  <NavBar />
  <RouterView />
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import NavBar from '@/components/organisms/navbar/NavBar.vue';
</script>
