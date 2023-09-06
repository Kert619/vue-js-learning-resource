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
import { inject } from "vue";
import LearningResource from "./LearningResource.vue";
const storedResources = inject("storedResources");
</script>
