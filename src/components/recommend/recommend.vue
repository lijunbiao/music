<template>
  <div class="recommend"  ref="recommend">
    <Scroll class="recommend-content" ref="scroll">
          <div>
                  <div class="decorate"></div>
                  <!-- 推荐歌单 -->
                  <div class="recommend-list" ref="recommendList">
                        <!-- 标题 -->
                        <h1 class="title">推荐歌单</h1>
                        <!-- 列表 -->
                        <ul>
                              <li v-for="(item, index) in playList" :key="index" class="item">
                                <div class="icon">
                                      <img :src="item.picUrl" :alt="item.name"/>
                                </div>
                                <p class="play-count">
                                      <i class="fa fa-headphones"></i>
                                      {{Math.floor(item.playCount / 10000)}}万
                                </p>
                                  <p class="name">
                                      {{item.name}}
                                  </p>
                              </li>
                        </ul>
                  </div>

                  <!-- 下部分 -->
                  <!-- 推荐歌曲 -->
                  <div class="recommend-song" ref="recommendSong">
                       <!-- 标题 -->
                        <h1 class="title">推荐歌曲</h1>
                        <!-- 列表 -->
                        <ul>
                             <li v-for="(item, index) in recommendMusic" :key  ="index" class="item">
                                  <div class="icon">
                                       <img :src="item.image" alt="">
                                  </div>
                                  <p class="name">{{item.name}}</p>
                                  <p class="singer">{{item.singer}}</p>
                             </li>
                        </ul>
                  </div>
          </div>
    </Scroll>
  </div>
</template>
<script>
import Scroll from '../../base/scroll/scroll.vue'
import { getRecommendList, getRecommendMusic } from '../../api/recommend'
import { ERR_OK } from '../../common/js/config'
import { createRecommendSong } from '../../common/js/song'
export default {
  name: 'm-recommend',
  components: {
    Scroll // better-scroll
  },
  data () {
    return {
      playList: [], // 推荐歌单列表
      recommendMusic: [] // 推荐歌曲列表

    }
  },
  created () {
    this._getRecommendList() // 获取推荐歌单列表
    this._getRecommendMusic() // 获取推荐歌曲列表
  },
  methods: {
    // 获取推荐歌单列表
    _getRecommendList () {
      // 发送请求获取数据
      getRecommendList().then((res) => {
        if (res.data.code === ERR_OK) {
          this.playList = res.data.result
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 获取推荐歌曲列表
    _getRecommendMusic () {
      // 发送请求
      getRecommendMusic().then((res) => {
        if (res.data.code === ERR_OK) {
          const list = res.data.result.map((item) => {
            // 返回推荐歌曲的关键属性
            return createRecommendSong(item)
          })
          list.splice(9) // 取九首歌曲
          this.recommendMusic = list
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
@import "../../common/scss/mixin.scss";
.recommend {
  position: absolute;
  width: 100%;
  top: 88px; // 头部+导航栏高度是88px
  bottom: 0;
  .recommend-content { // scroll父容器
   width: 100%;
   height: 100%;
   overflow: hidden;
   .decorate {
    width: 100%;
    height: 50vh;
    background: $color-theme;
    position: absolute;
    top: -30vh;
    z-index: -10;
 }
.recommend-list { // 上部分
   position: relative;
   box-sizing: border-box;
   width: 100%;
   text-align: center;
   .title {    // 标题
       height: 65px;
       line-height: 65px;
       text-align: left;
       font-size: $font-size-medium;
       font-weight: bold;
       padding-left: 1.5%;
       color: $color-text;
   }
   .item { // 歌单
       display: inline-block;
       position: relative;
       box-sizing: border-box;
       width: 33%;
       padding: 0 1%;
      .icon {
        position: relative;
        display: inline-block;
        width: 100%;
        margin-bottom: 5px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 3px;
        }
      }
      .play-count {
         position: absolute;
         top: 5px;
         right: 8px;
         color: $color-text-l;
         font-size: $font-size-small-s;
      }
      .name {
        font-size: 11px;
        text-align: left;
        line-height: 16px;
        margin-bottom: 10px;
        @include no-wrap();
      }
  }
}
.recommend-song {
    position: relative;
    margin-top: -10px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    .title {
        height: 65px;
        line-height: 65px;
        font-size: $font-size-medium;
        font-weight: bold;
        text-align: left;
        padding-left: 1.5%;
        color: $color-text;
    }
    .item {
      display: inline-block;
      box-sizing: border-box;
      width: 33%;
      padding: 0 1%;
      .icon {
            width: 100%;
            margin-bottom: 5px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 3px;
            }
      }
      .name {
           text-align: left;
           line-height: 16px;
           font-size: $font-size-small;
           @include no-wrap();
      }
      .singer {
           line-height: 16px;
           text-align: left;
           color:$color-text-g;
           margin-bottom: 10px;
           font-size: $font-size-small;
           @include no-wrap();
      }
    }
  }
 }
}
</style>
