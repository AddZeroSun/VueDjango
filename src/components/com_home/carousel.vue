<template id="carousel">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
          <img class="banner" src="../../assets/img/banner1.jpg" alt="">
      </div>
       <div class="swiper-slide">
          <img class="banner" src="../../assets/img/banner2.jpg" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  methods: {
    initSwiper () {
      let swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    }
  },
  mounted () {
    this.initSwiper()
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 760px;
}
.swiper-slide{
   width: 100%;
  height: 100%;
}
.banner{
    width: 100%;
    height: 100%;
}
</style>
