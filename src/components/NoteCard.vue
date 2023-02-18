<script setup>
import { ref } from "vue";
import Trash from "./icons/Trash.vue";

const props = defineProps({
  note: Object,
});

function hueNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const hue = ref(hueNum(0, 360));

const emit = defineEmits(["removeNote"]);
function handleDelete(noteID) {
  emit("removeNote", noteID);
}
</script>

<template>
  <div
    :style="{ backgroundColor: `hsl(${hue}, 40%, 30%)` }"
    class="bg-slate-300 text-white rounded-xl py-6 px-7"
  >
    <textarea
      class="bg-transparent outline-none resize-none w-full"
      name=""
      id=""
      cols="30"
      rows="8"
      >{{ note.body }}</textarea
    >

    <div class="flex justify-between items-center">
      <p>{{ note.date }}</p>
      <button @click="handleDelete(note.id)">
        <Trash />
      </button>
    </div>
  </div>
</template>
