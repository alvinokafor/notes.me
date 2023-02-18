<script setup>
import { ref } from "vue";

import Container from "./Container.vue";
import NoteCard from "./NoteCard.vue";
import AddNote from "./AddNote.vue";

const date = new Date();
const formatedDate = new Intl.DateTimeFormat("en-us", {
  dateStyle: "medium",
}).format(date);

const notesDB = ref([
  {
    id: crypto.randomUUID(),
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quo nam minus est eligendi unde inventore",
    date: formatedDate,
  },
  {
    id: crypto.randomUUID(),
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    date: formatedDate,
  },
  {
    id: crypto.randomUUID(),
    body: "Impedit quo nam minus est eligendi unde inventore",
    date: formatedDate,
  },
]);

function addNote(childEvent) {
  notesDB.value.unshift({
    id: crypto.randomUUID(),
    body: childEvent,
    date: formatedDate,
  });
  console.log(childEvent);
}
</script>

<template>
  <Container>
    <section
      class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-9 gap-y-4"
    >
      <AddNote @new-note="addNote" />
      <NoteCard v-for="note in notesDB" :note="note" :key="note.id" />
    </section>
  </Container>
</template>
