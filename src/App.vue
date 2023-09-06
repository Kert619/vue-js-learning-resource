<template>
  <TheHeader />
  <TheResource />
</template>

<script setup>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResource from "./components/learning-resources/TheResources.vue";
import { provide, ref } from "vue";

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

const addResource = (title, description, url) => {
  const newResource = {
    id: new Date().toISOString(),
    title,
    description,
    link: url,
  };

  storedResources.value.unshift(newResource);
};

provide("addResource", addResource);
provide("storedResources", storedResources);
</script>
