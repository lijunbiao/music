<template>
   <div class="tab">
        <router-link to="/recommend" tag="div" class="tab-item">
             <span>推荐</span>
        </router-link>

        <router-link to="/rand" tag="div" class="tab-item">
             <span>排行</span>
        </router-link>

        <router-link to="/singer" tag="div" class="tab-item">
             <span>歌手</span>
        </router-link>
   </div>
</template>
<script>
export default {
  name: 'm-tab'
}
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    background: $color-theme;
    .tab-item {
        flex: 1;
        text-align: center;
        color: $color-text-lm;
        font-size: $font-size-medium;
        span {
            padding-bottom: 3px;
        }
        &.router-link-active {
        span {
             color: $color-text-l;
             font-weight: bold;
             border-bottom: 2px solid $color-text-l;
       }
    }
  }
}
</style>
