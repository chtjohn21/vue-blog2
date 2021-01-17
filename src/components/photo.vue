<template>
    <div id="photo">
    <div class="swiper-container" style="height:40vw,width:20vw">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide"><img src="../assets/logo.png" alt=""></div>
        <div class="swiper-slide"><img src="../assets/logo2.png" alt=""></div>
        <div class="swiper-slide"><img src="../assets/logo3.jpg" alt=""></div>
        ...
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        autoplay:{
          delay:2000,
          disableOnInteraction: false,
        },
        effect : 'flip',

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    },
  }
</script>