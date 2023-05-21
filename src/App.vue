<template>
  <div id="app">
        <!-- 头部 -->
       <MHeader></Mheader>
       <!-- 导航栏 -->
       <Tab></Tab>
       <!-- 路由占位符 -->
       <router-view></router-view>
  </div>
</template>
<script>
import MHeader from './components/m-header/m-header.vue'
import Tab from './components/tab/tab.vue'
export default {
  components: {
    MHeader,
    Tab
  }
}
</script>
<style lang="scss">
@import "./common/scss/index.scss";
</style>
