<script setup>
import { ref, computed } from 'vue'

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: 1, text: 'Learn HTML', done: true },
  { id: 2, text: 'Learn JavaScript', done: true },
  { id: 3, text: 'Learn Vue', done: false }
])

function addTodo() {
  todos.value.push({ id: 4, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  // const idx = todos.value.findIndex(todo => id === todo.id)
  // todos.value.splice(idx, 1)
  todos.value = todos.value.filter((t) => t !== todo)
}

function toggleCompleted() {
  hideCompleted.value = !hideCompleted.value
}

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter(todo => !todo.done)
    : todos.value
})

</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button class="bg-slate-700" @click="toggleCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
