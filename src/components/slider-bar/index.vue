<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 16:08:54
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-11-01 17:37:56
 * @FilePath: \web\fanyou-vue3-website\src\components\nav-bar\index.vue
 * @Description: NavBar Component
-->
<template>
  <div id="slider-container">
    <span class="slider-span" id="slider-span">
      <img @click="handleSliderMenuOpen" src="../../assets/img/slider_menu.png" alt="" />
    </span>
    <ul class="slider-ul" id="slider-ul">
      <!-- <li class="first-li"><a href="#"><img src="../../assets/img/menu_close.png" alt="" @click="handleSliderMenuClose"></a></li> -->
      <li class="hover-li"><a href="/">HOME</a></li>
      <li class="hover-li"><a href="/product">PRODUCT</a></li>
      <li class="hover-li"><a href="/about">ABOUT</a></li>
      <li class="hover-li"><a href="/privacy">PRIVACY POLICY</a></li>
      <li class="hover-li"><a href="/terms">TERMS OF SERVICE</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const handleSliderMenuOpen = () => {
    const sliderSpanNode: HTMLElement | null = document.getElementById('slider-span')
    const sliderUlNode: HTMLElement | null = document.getElementById('slider-ul')
    // console.log(sliderUlNode)
    sliderSpanNode!.style.display = 'none'
    sliderUlNode!.style.display = 'block'
  }

  const handleSliderMenuClose = () => {
    const sliderSpanNode: HTMLElement | null = document.getElementById('slider-span')
    const sliderUlNode: HTMLElement | null = document.getElementById('slider-ul')
    // console.log(sliderUlNode)
    sliderSpanNode!.style.display = 'block'
    sliderUlNode!.style.display = 'none'
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
    #slider-container {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    #slider-container {
      position: relative;

      .slider-span {
        display: block;
        width: 36px;
        height: 36px;
        position: fixed;
        left: 20px;
        top: 20px;
        z-index: 1;

        img {
          width: 100%;
          height: 100%;
          opacity: 1;
        }
      }

      .slider-ul {
        padding-top: 20px;
        display: none;
        width: 245px;
        height: 100vh;
        position: absolute;
        background-color: #262076;
        z-index: 1;

        li {
          height: 60px;
          width: 100%;
          overflow: hidden;
          font-size: 20px;
          font-weight: 500;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          letter-spacing: 1px;
          text-align: left;
          line-height: 60px;
          flex: auto;
          padding-left: 15px;


          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: #FFFFFF;
          }
        }

        .hover-li:hover {
          background-color: #1e185f;
          // background-image: linear-gradient(to bottom , #3a3863, #4238b7, #d0d7fc);
          cursor: pointer;
        }
      }
    }
  }
</style>
