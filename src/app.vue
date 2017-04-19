<template>
  <div>
    <ele-header :seller="seller"></ele-header>

    <div class="tab">
      <div class="tab-item">
        <a v-link="{path: '/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/seller'}">商家</a>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  export default {
    data () {
      return {
        seller: {}
      }
    },

    created () {
      /*this.$http.get('/test')
        .then(response => {
          console.log(response.body)
        })*/
      setTimeout(() => {
        this.$http.get('/api2/seller')
          .then(response => {
            console.log(response.body)
            const result = response.body
            if(result.code===0) {
              this.seller = result.data
            }
          })
      }, 500)
    },
    components: {
      'ele-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"

  .tab
    height 40px
    line-height 40px
    display flex
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex 1
      text-align center
      font-size 14px
      color rgb(77,85,93)
      .v-link-active
        color rgb(240,20,20)

</style>
