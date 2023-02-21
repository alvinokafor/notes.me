<script setup>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

function handleLogin() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((res) => {
      console.log(res.user);
      router.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<template>
  <div class="flex text-black items-center justify-center h-screen">
    <div class="lg:w-1/4 w-3/4">
      <div class="flex mb-8">
        <img src="/assets/logo-dark.svg" alt="merce logo" />
      </div>
      <p class="text-5xl font-black mb-8">Sign In</p>
      <p class="font-semibold mb-5">Sign in with google</p>
      <button
        @click="handleLogin"
        class="group hover:bg-primary hover:border-primary transition-all duration-150 flex justify-center text-base font-semibold mb-5 border-slate-500 w-full rounded-lg py-3 border-2"
      >
        <img src="/assets/google.svg" alt="" />
        <span class="ml-2 group-hover:text-white transition-all duration-150"
          >Google</span
        >
      </button>
      <p class="font-semibold mt-8 border-t-2 pt-8 border-slate-500 text-grey">
        This site is protected by reCAPTCHA and the Google Privacy Policy.
      </p>
    </div>
  </div>
</template>
