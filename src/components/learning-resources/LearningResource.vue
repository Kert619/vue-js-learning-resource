<template>
  <li>
    <BaseCard>
      <div class="flex justify-between items-center gap-3">
        <div class="flex flex-col gap-2">
          <h3 class="text-xl font-bold">{{ title }}</h3>
          <p>{{ description }}</p>
          <a class="link link-warning" :href="link">View Resource</a>
        </div>

        <button class="btn btn-ghost btn-sm">Delete</button>
      </div>
    </BaseCard>
  </li>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>
