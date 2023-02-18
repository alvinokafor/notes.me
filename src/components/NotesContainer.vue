<script setup>
import { ref, watch, onMounted } from "vue";

import Container from "./Container.vue";
import NoteCard from "./NoteCard.vue";
import AddNote from "./AddNote.vue";
import SearchBar from "./SearchBar.vue";

const date = new Date();
const formatedDate = new Intl.DateTimeFormat("en-us", {
  dateStyle: "medium",
}).format(date);

// const postColors = ["#FDBAA3", "#FBEB95", "#B6A5CB", "#97D2BC"];

// function shuffle(postColors) {
//   return postColors[Math.floor(Math.random() * postColors.length)];
// }

const notesDB = ref([]);
const filteredNotes = ref([]);
// let postColor;

onMounted(() => {
  filteredNotes.value = notesDB.value;
});

function addNote(childEvent) {
  notesDB.value.unshift({
    id: crypto.randomUUID(),
    body: childEvent,
    date: formatedDate,
  });
}

function deleteNote(noteID) {
  filteredNotes.value = filteredNotes.value.filter(
    (note) => note.id !== noteID
  );
}

function filterNotes(searchQuery) {
  filteredNotes.value = notesDB.value.filter((note) =>
    note.body.toLowerCase().includes(searchQuery.toLowerCase())
  );
}
</script>

<template>
  <Container>
    <SearchBar @search="filterNotes" />
    <section
      class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-9 gap-y-4"
    >
      <AddNote @new-note="addNote" />

      <p class="text-3xl text-grey self-center" v-if="notesDB <= 0">
        Add a new note ✍🏾
      </p>
      <NoteCard
        @remove-note="deleteNote"
        v-else
        v-for="note in filteredNotes"
        :note="note"
        :key="note.id"
      />
    </section>
  </Container>
</template>
