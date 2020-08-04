<template>
  <main class="main">
    <SideBar />
    <div class="content">
      wo shi projects
    </div>
  </main>
</template>

<script>
import SideBar from "../components/SideBar.vue"
export default {
  components: {
    SideBar
  }
}
</script>

<style lang="scss" scoped>
.main {
  .content {
    padding-left: 260px;
    margin-top: 60px;
  }
}
@media (max-width: 719px) {
  .main {
    .content {
      padding-left: 0;
    }
  }
}
</style>