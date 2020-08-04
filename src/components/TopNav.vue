<template>
  <header class="topnav">
    <div class="topnav-left">
      <img src="../assets/img/logo.png" alt class="icon" @click="toggleAsideVisible" />
      <a href="/" class="home-li">supoxiao.me</a>
    </div>
    <div class="links">
      <router-link to="/articles">文章</router-link>
      <router-link to="/projects">实验室</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAsideVisible = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {
      toggleAsideVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #eaecef;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #fff;
  .topnav-left {
    display: flex;
    align-items: center;
    font-size: 20px;
    .icon {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .links {
    display: flex;
    a {
      margin-right: 10px;
    }
  }
}
</style>