<template>
  <div class="p-3">
    <div class="max-w-4xl mx-auto">
      <BaseCard class="mb-3">
        <button
          class="btn btn-sm rounded-none"
          :class="{
            'btn-primary': selectedTab === key,
            'btn-ghost': selectedTab !== key,
          }"
          v-for="(_, key) in tabs"
          :key="key"
          @click="setSelectedTab(key)"
        >
          {{ key }}
        </button>
      </BaseCard>
      <component :is="tabs[selectedTab]"></component>
    </div>
  </div>
</template>

<script setup>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
import { ref } from "vue";

const tabs = {
  "Stored Resources": StoredResources,
  "Add Resource": AddResource,
};

const selectedTab = ref("Stored Resources");

const setSelectedTab = (tab) => {
  selectedTab.value = tab;
};
</script>
