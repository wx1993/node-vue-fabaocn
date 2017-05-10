<template>
  <swiper :options="swiperOption" ref="mySwiper" class="slide-wrap">
    <swiper-slide><img src="images/img1.jpg"></swiper-slide>
    <swiper-slide><img src="images/img2.jpg"></swiper-slide>
    <swiper-slide><img src="images/img3.jpg"></swiper-slide>
    <swiper-slide><img src="images/img4.jpg"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import Vue from 'vue'
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  Vue.use(VueAwesomeSwiper);

  export default {
    name: 'carrousel',
    components: {
      swiper, swiperSlide
    },
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
          debugger: true,
          onTransitionStart(swiper){
            // console.log(swiper)
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>

<style media="screen" scoped>
  .slide-wrap img {
    width: 100%;
    height: 200px;
  }
</style>
