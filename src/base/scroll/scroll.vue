<template>
    <div ref="wrapper">
         <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'm-scroll',
  props: {
    probeType: { // 1: 滚动的时候会派发scroll事件，会截流(节流)
      type: Number,
      default: 1
    },
    click: { // 点击列表是否派发click事件
      type: Boolean,
      default: true
    },
    data: { //  列表的数据
      type: Array,
      default: null
    },
    listenScroll: { //  是否派发滚动事件
      type: Boolean,
      default: false
    },
    pullup: { // 是否派发滚动到底部的事件，用于上拉加载
      type: Boolean,
      default: false
    },
    refreshDelay: { // 当数据更新后，刷新scroll的延时。
      type: Number,
      default: 20
    }
  },
  mounted () {
    // 保证在DOM渲染完毕后初始化better-scroll
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
      // 是否派发滚动事件
      if (this.listenScroll) {
        const _this = this
        this.scroll.on('scroll', (pos) => {
          _this.$emit('scroll', pos)
        })
      }
      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollToEnd')
          }
        })
      }
    },
    enable () {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable()
    },
    disable () {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable()
    },
    refresh () {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    },
    scrollTo () {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    data () {
      // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>
