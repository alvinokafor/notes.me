<script setup>
import { ref } from "vue";

const noteBody = ref("");
const emit = defineEmits(["newNote"]);

function handleSubmit() {
  emit("newNote", noteBody.value);
}
</script>

<template>
  <div class="bg-slate-700 text-white rounded-xl py-6 px-7">
    <form @submit.prevent="handleSubmit">
      <textarea
        v-model.lazy="noteBody"
        class="bg-transparent resize-none w-full"
        name=""
        id=""
        cols="30"
        rows="8"
        placeholder="Enter a note"
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  </div>
</template>
