<template>
  <aside class="sidebar" v-if="asideVisible">
    <nav class="nav-links">
    </nav>
    <div class="sidebar-ctn">
      <slot></slot>
      我是边栏
    </div>
  </aside>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    return {
      asideVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid #eaecef;
  width: 260px;
  height: 100%;
  z-index: 20;
  padding-top: 60px;
  background-color: #fff;
}
@media (max-width: 719px) {
  .sidebar {
    display: none;
  }
}
</style>