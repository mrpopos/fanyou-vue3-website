<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 16:08:54
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-11-01 18:12:22
 * @FilePath: \web\fanyou-vue3-website\src\components\nav-bar\index.vue
 * @Description: NavBar Component
-->
<template>
  <div id="body-container">
    <!-- 轮播图 -->
    <el-carousel :interval="4000" indicator-position="none" trigger="click" :height="initImgHeight" class="slot-carousel">
      <el-carousel-item>
        <img src="../assets/img/slider_01.jpg" alt="轮播图1" class="carousel-img" @load="handleImgOnload()"/>
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
  import { onMounted, ref } from 'vue'
  import { ElCarousel, ElCarouselItem } from 'element-plus'
  import SlotIntro from '../components/slot-intro/index.vue'

  let initImgHeight = ref('100vh')

  const handleImgOnload = () => {
    const imgNode: HTMLCollectionOf<Element> = document.getElementsByClassName('carousel-img')
    // console.log(imgNode[0].offsetWidth, imgNode[0].offsetHeight);
    initImgHeight.value = (imgNode[0] as HTMLElement).offsetHeight + 'px'
  }
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
        // position: relative;
        top: 89px;

        .carousel-img {
          width: 100%;
          height: auto;
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
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>
