<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 16:08:54
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-31 20:52:56
 * @FilePath: \web\fanyou-vue3-website\src\components\nav-bar\index.vue
 * @Description: NavBar Component
-->
<template>
  <div id="body-container">
    <!-- 轮播图 -->
    <el-carousel :interval="4000" trigger="click" height="100vh" class="slot-carousel">
      <el-carousel-item>
        <img src="../assets/img/slider_01.jpg" alt="轮播图1" class="carousel-img" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/img/slider_02.jpg" alt="轮播图1" class="carousel-img" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/img/slider_03.jpg" alt="轮播图1" class="carousel-img" />
      </el-carousel-item>
    </el-carousel>
    <!-- SlotIntro -->
    <SlotIntro />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { ElCarousel, ElCarouselItem } from 'element-plus'
  import SlotIntro from '../components/slot-intro/index.vue'

  // const count = ref(0)
</script>

<style scoped lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  img {
    vertical-align: bottom;
  }

  @media screen and (min-width: 768px) {
    #body-container {
      width: 100%;
      height: auto;

      .slot-carousel {
        position: relative;

        .carousel-img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    #body-container {
      width: 100%;
      height: auto;

      .slot-carousel {
        position: relative;
        .carousel-img {
          width: auto;
          // height: auto;
        }
      }
    }
  }
</style>
