<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img src="seller_avatar_256px.jpg" width="64" height="64" >
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊（回龙观）</span>
        </div>
        <div class="description">蜂鸟转送/38分钟到达</div>
        <div class="support">
          <span class="icon guarantee_1"></span>
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
      <div class="supports_count">
        <span class="count">5个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img src="seller_avatar_256px.jpg">
    </div>
    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper">
        <div class="detail-main">
          <div class="name">粥品香坊（回龙观）</div>
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
          <ul class="supports">
            <li class="support">
              <span class="icon decrease_2"></span>
              <span class="text">在线支付满28减5</span>
            </li>
            <li class="support">
              <span class="icon discount_2"></span>
              <span class="text">VC无限橙果汁全场8折</span>
            </li>
            <li class="support">
              <span class="icon guarantee_2"></span>
              <span class="text">单人精彩套餐</span>
            </li>
            <li class="support">
              <span class="icon invoice_2"></span>
              <span class="text">该商家支持发票,请下单写好发票抬头</span>
            </li>
            <li class="support">
              <span class="icon special_2"></span>
              <span class="text">已加入“外卖保”计划,食品安全保障</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="content">
            <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
          </div>
        </div>

      </div>
      <div class="detail-close">
        <span class="icon-close"></span>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {
        detailShow: false
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
          .discount_1
            bg-image(discount_1)
          .decrease_1
            bg-image(decrease_1)
          .guarantee_1
            bg-image(guarantee_1)
          .invoice_1
            bg-image(invoice_1)
          .special_1
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
              .discount_2
                bg-image(discount_2)
              .decrease_2
                bg-image(decrease_2)
              .guarantee_2
                bg-image(guarantee_2)
              .invoice_2
                bg-image(invoice_2)
              .special_2
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
