<template>
  <!--star_48 star_48on, star_48 star_48half star_48 star_48off-->
  <span v-for="sc in starClasses" :class="sc" track-by="$index"></span>
</template>

<script>
  export default {
    props: ['score', 'size'],

    computed: {
      starClasses () {
        const scs = []
        const score = this.score
        const size = this.size
        const scoreInteger = Math.floor(score)
        //添加全星
        for (var i = 0; i < scoreInteger; i++) {
          scs.push(`star_${size} star_${size}on`)
        }
        //添加半星
        if(score-scoreInteger>=0.5) {
          scs.push(`star_${size} star_${size}half`)
        }
        //添加灰星
        while(scs.length<5) {
          scs.push(`star_${size} star_${size}off`)
        }

        return scs
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
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
</style>
