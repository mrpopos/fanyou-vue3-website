<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 16:08:54
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-11-02 11:29:44
 * @FilePath: \web\fanyou-vue3-website\src\components\nav-bar\index.vue
 * @Description: NavBar Component
-->
<template>
  <div id="slider-container">
    <span class="slider-span" id="slider-span">
      <img @click="handleSliderMenuOpen" src="../../assets/img/slider_menu.png" alt="" />
    </span>
    <ul class="slider-ul" id="slider-ul">
      <li class="hover-li" @click="handleNavActive(0, '/')"><a href="javascript:void(0)">HOME</a></li>
      <li class="hover-li" @click="handleNavActive(1, '/product')"><a href="javascript:void(0)">PRODUCT</a></li>
      <li class="hover-li" @click="handleNavActive(2, '/about')"><a href="javascript:void(0)">ABOUT</a></li>
      <li class="hover-li" @click="handleNavActive(3, '/privacy')"><a href="javascript:void(0)">PRIVACY POLICY</a></li>
      <li class="hover-li" @click="handleNavActive(4, '/terms')"><a href="javascript:void(0)">TERMS OF SERVICE</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  // import { ref } from 'vue'
  import { useRouter } from 'vue-router';

  const router = useRouter()

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

  const handleNavActive = (n: number, path: string) => {
    handleSliderMenuClose()
    router.push(path)
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
