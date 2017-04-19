<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" >
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟到达</div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports_count" v-if="seller.supports" @click="showDetail(true)">
        <span class="count">{{seller.supports.length}}个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail(true)">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar">
    </div>
    <div class="detail" v-show="detailShow" transition="fade">
      <div class="detail-wrapper">
        <div class="detail-main">
          <div class="name">{{seller.name}}</div>
          <div class="star-wrapper">
              <span class="star_48 star_48on"></span>
              <span class="star_48 star_48on"></span>
              <span class="star_48 star_48on"></span>
              <span class="star_48 star_48half"></span>
              <span class="star_48 star_48off"></span>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports" v-for="support in seller.supports">
            <li class="support">
              <span class="icon" :class="classMap[support.type]"></span>
              <span class="text">{{support.description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="content">
            <p>{{seller.bulletin}}</p>
          </div>
        </div>

      </div>
      <div class="detail-close" @click="showDetail(false)">
        <span class="icon-close"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      seller: Object
    },

    data () {
      return {
        detailShow: false,
        classMap: ["decrease", "discount", "guarantee", "invoice", "special"]
      }
    },

    methods: {
      showDetail (isShow) {
        this.detailShow = isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .header
    position relative
    background-color rgba(7,17,27,0.5)
    color #fff
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      display flex
      .avatar
        img
          border-radius 8px
      .content
        margin-left 16px
        .title
          margin-top 2px
          margin-bottom 8px
          .brand
            display inline-block
            bg-image(brand)
            width 30px
            height 18px
            background-repeat no-repeat
            background-size 30px 18px
          .name
            line-height 18px
            font-size 16px
            font-weight bold
        .description
          line-height 12px
          font-size 12px
          font-weight 200
        .support
          margin-top 10px
          margin-bottom 2px
          .icon
            display inline-block
            width 12px
            height 12px
            background-repeat no-repeat
            background-size 12px 12px
          .discount
            bg-image(discount_1)
          .decrease
            bg-image(decrease_1)
          .guarantee
            bg-image(guarantee_1)
          .invoice
            bg-image(invoice_1)
          .special
            bg-image(special_1)
          .text
            line-height 12px
            font-size 10px
            font-weight 200

      .supports_count
        position absolute
        right 12px
        bottom 18px
        background-color rgba(0,0,0,.2)
        border-radius 7px
        padding 7px 8px
        .count
          font-size 10px
          line-height 12px
          font-weight 200
          margin-right 2px



    .bulletin-wrapper
      position relative
      height 28px
      line-height 28px
      background-color rgba(7,17,27,0.2)
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      padding 0 20px 0 12px
      .bulletin-title
        display inline-block
        width 22px
        height 12px
        bg-image(bulletin)
        background-size 22px 12px
        background-repeat no-repeat
      .bulletin-text
        margin 0 8px 0 4px
        font-size 10px
        font-weight 200
      .icon-keyboard_arrow_right
        position absolute
        right -2px
        top 9px



    .background
      position absolute
      top:0
      bottom 0
      left 0
      right 0
      z-index -1
      filter blur(10px)
      img
        width 100%
        height 100%


    .detail
      position fixed
      top: 0
      left 0
      bottom 0
      right 0
      z-index 100
      background rgba(7,17,27,0.8)
      -webkit-backdrop-filter blur(10px)
      backdrop-filter blur(10px)
      &.fade-transition
        transition all .5s linear
        opacity 1
      &.fade-enter, &.fade-leave
        opacity 0
      .detail-wrapper
        width 100%
        min-height 100%
        overflow hidden
        .detail-main
          margin-top 64px
          text-align center
          .name
            font-size 16px
            font-weight 700
            line-height 16px
          .star-wrapper
            height: 24px
            margin-top 16px
            line-height 24px
            .star_36
              display inline-block
              width 15px
              height 15px
              background-size 15px 15px
              margin 0 10px
            .star_36on
              bg-star(star36_on)
            .star_36half
              bg-star(star36_half)
            .star_36off
              bg-star(star36_off)
            .star_24
              display inline-block
              width 10px
              height 10px
              background-size 10px 10px
              margin 0 10px
            .star_24on
              bg-star(star24_on)
            .star_24half
              bg-star(star24_half)
            .star_24off
              bg-star(star24_off)
            .star_48
              display inline-block
              width 30px
              height 29px
              background-size 30px 29px
              margin 0 10px
            .star_48on
              bg-star(star48_on)
            .star_48half
              bg-star(star48_half)
            .star_48off
              bg-star(star48_off)

          .title
            padding 28px 36px 24px
            display flex
            white-space nowrap
            .line
              position relative
              top 8px
              width 112px
              height 1px
              background-color rgba(255,255,255,0.2)
            .text
              margin 0 12px


          .supports
            padding 0 48px
            text-align left
            .support
              font-size 12px
              font-weight 200
              line-height 12px
              margin-bottom 12px
              .text
                vertical-align top
              .icon
                display inline-block
                width 16px
                height 16px
                margin-right 6px
                background-size 16px 16px
                background-repeat no-repeat
              .discount
                bg-image(discount_2)
              .decrease
                bg-image(decrease_2)
              .guarantee
                bg-image(guarantee_2)
              .invoice
                bg-image(invoice_2)
              .special
                bg-image(special_2)

          .content
            text-align left
            padding 0 48px
            &>p
              font-size 12px
              font-weight 200
              line-height 24px


      .detail-close
        text-align center
        margin-top -64px
        .icon-close
          font-size 32px
          color rgba(255,255,255,0.5)

</style>
