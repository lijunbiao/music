<template>
    <div class="m-header">
         <!-- 标题 -->
         <h1 class="text">VMUSICJIN</h1>
         <!-- 左侧菜单图标 -->
         <router-link to="/" class="mine">
                <i class="iconfont icon-caidan"></i>
         </router-link>
          <!-- 右侧搜索图标 -->
         <router-link to="/" class="search">
                <i class="iconfont icon-search"></i>
         </router-link>
    </div>
</template>
<script>
export default {
  name: 'm-header'
}
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.m-header {
   position: relative;
   height: 44px;
   width: 100%;
   background: $color-theme; // 主题颜色：红色
   text-align: center;
   .text {
     line-height: 44px;
     font-weight: bold;
     color: $color-text-l; // 白色
     letter-spacing: 3px;
   }
   .mine {
       position: absolute;
       left: 0;
       top: 0;
       .iconfont {
            color: $color-theme-l; // 白色
            display: block;
            padding: 11px;
            font-size: 22px;
       }
   }
   .search {
       position: absolute;
       right: 0;
       top: 0;
         .iconfont {
            color: $color-theme-l; // 白色
            display: block;
            padding: 11px;
            font-size: 22px;
       }
   }
}
</style>
