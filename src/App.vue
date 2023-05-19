<template>
  <div id="app">
        <!-- 头部 -->
       <MHeader></Mheader>
  </div>
</template>
<script>
import MHeader from './components/m-header/m-header.vue'
export default {
  components: {
    MHeader
  }
}
</script>
<style lang="scss">
@import "./common/scss/index.scss";
</style>
