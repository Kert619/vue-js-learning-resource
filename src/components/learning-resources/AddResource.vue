<template>
  <BaseCard>
    <VeeForm :validation-schema="schema" @submit="handleAddResource">
      <div class="form-control">
        <label class="label"
          ><span class="label-text"
            >Title<span class="text-red-500 ms-1">*</span></span
          ></label
        >
        <VeeField
          type="text"
          class="input input-bordered input-sm rounded-none"
          name="title"
          label="Title"
        />
        <ErrorMessage name="title" class="text-red-500"></ErrorMessage>
      </div>

      <div class="form-control">
        <label class="label"
          ><span class="label-text"
            >Description<span class="text-red-500 ms-1">*</span></span
          ></label
        >
        <VeeField
          as="textarea"
          class="textarea textarea-bordered rounded-none h-24"
          name="description"
          label="Description"
        ></VeeField>
        <ErrorMessage name="description" class="text-red-500"></ErrorMessage>
      </div>

      <div class="form-control">
        <label class="label"
          ><span class="label-text"
            >Link<span class="text-red-500 ms-1">*</span></span
          ></label
        >
        <VeeField
          type="text"
          class="input input-bordered input-sm rounded-none"
          name="link"
          label="Link"
        />
        <ErrorMessage name="link" class="text-red-500"></ErrorMessage>
      </div>

      <button class="btn btn-primary mt-5 btn-sm">Add Resource</button>
    </VeeForm>
  </BaseCard>
</template>

<script setup>
import { inject } from "vue";

const addResource = inject("addResource");

const schema = {
  title: "required|alphaSpaces",
  description: "required|alphaSpaces",
  link: "required|url",
};

const handleAddResource = (values, { resetForm }) => {
  addResource(values.title, values.description, values.link);
  resetForm();
};
</script>
