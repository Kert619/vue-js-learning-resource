<template>
  <div class="p-3">
    <div class="max-w-4xl mx-auto">
      <BaseCard class="mb-3">
        <div
          class="inline-block cursor-pointer p-3 border-b-2"
          :class="{
            'border-rose-500': selectedTab === key,
            'border-gray-300': selectedTab !== key,
          }"
          v-for="(_, key) in tabs"
          :key="key"
          @click="setSelectedTab(key)"
        >
          {{ key }}
        </div>
      </BaseCard>
      <keep-alive>
        <component :is="tabs[selectedTab]"></component>
      </keep-alive>
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
