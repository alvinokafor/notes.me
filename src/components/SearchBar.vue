<script setup>
// const searchQuery = ref("");
const emit = defineEmits(["search"]);

function handleSearch(event) {
  emit("search", event.target.value);
  console.log(event.target.value);
}
</script>

<template>
  <input
    @input="handleSearch"
    class="text-primary outline-grey mt-8 px-3 py-2 border-2 border-slate-200 rounded-lg"
    type="text"
    placeholder="Search for a note"
  />
</template>
