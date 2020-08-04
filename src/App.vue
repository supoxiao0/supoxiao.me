<template>
 <div class="main">
  <TopNav />
  <router-view />
 </div>
</template>

<script>
import TopNav from "./components/TopNav.vue"
export default {
  name: 'App',
  components: {
    TopNav
  }
}
</script>
