<template>
  <ul class="flex flex-col gap-3">
    <LearningResource
      v-for="resource in storedResources"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    />
  </ul>
</template>

<script setup>
import LearningResource from "./LearningResource.vue";
import { ref } from "vue";

const storedResources = ref([
  {
    id: 1,
    title: "Official Guide",
    description: "Official vue js documentation",
    link: "https://vuejs.org",
  },
  {
    id: 2,
    title: "Google",
    description: "Learn to google...",
    link: "https://google.com",
  },
]);
</script>
