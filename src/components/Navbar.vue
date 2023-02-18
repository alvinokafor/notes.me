<script setup>
import { ref } from "vue";

import Logout from "./icons/Logout.vue";
import Logo from "./icons/Logo.vue";
import Container from "./Container.vue";
import SearchBar from "./SearchBar.vue";

const isMenuOpen = ref(false);
</script>

<template>
  <section class="py-4 shadow-sm">
    <Container>
      <div class="flex items-center justify-between text-lg">
        <div>
          <Logo />
        </div>

        <!-- <SearchBar /> -->

        <div class="flex items-center gap-x-2">
          <div class="w-[40px] h-[40px] rounded-full relative">
            <img
              @click="isMenuOpen = !isMenuOpen"
              class="rounded-full object-cover cursor-pointer"
              src="https://avatars.githubusercontent.com/u/60660504?v=4"
              alt="profile picture"
            />

            <button
              v-if="isMenuOpen"
              class="absolute flex items-center gap-x-2 right-1 top-12 text-primary bg-slate-200 px-3 py-2 text-base rounded-lg"
            >
              <Logout />
              Logout
            </button>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
