<template>
 <div class="page-ctn">
  <TopNav />
  <router-view />
 </div>
</template>

<script lang="ts">
import TopNav from "./components/TopNav.vue"
import { ref, provide } from 'vue'
export default {
  name: 'App',
  components: {
    TopNav
  },
  setup() {
    const clientWidth = document.documentElement.clientWidth;
    const asideVisible = ref(clientWidth >= 720 ? true : false)
    provide('asideVisible', asideVisible)
  }
}
</script>
