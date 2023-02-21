<script setup>
import { ref, computed } from "vue";

import Container from "./Container.vue";
import NoteCard from "./NoteCard.vue";
import AddNote from "./AddNote.vue";
import SearchBar from "./SearchBar.vue";

const date = new Date();
const formatedDate = new Intl.DateTimeFormat("en-us", {
  dateStyle: "medium",
}).format(date);

const notesDB = ref([]);
const query = ref("");

function addNote(childEvent) {
  notesDB.value.unshift({
    id: crypto.randomUUID(),
    body: childEvent,
    date: formatedDate,
  });
}

function deleteNote(noteID) {
  notesDB.value = notesDB.value.filter((note) => note.id !== noteID);
}

const filteredNotes = computed(() => {
  return notesDB.value.filter((note) =>
    note.body.toLowerCase().includes(query.value.toLowerCase())
  );
});

function setSearch(searchQuery) {
  query.value = searchQuery;
}
</script>

<template>
  <Container>
    <SearchBar @search="setSearch" />
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
