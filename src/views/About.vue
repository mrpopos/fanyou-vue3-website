<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 16:08:54
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-31 20:53:48
 * @FilePath: \web\fanyou-vue3-website\src\components\nav-bar\index.vue
 * @Description: NavBar Component
-->
<template>
  <!-- 导航组件 -->
  <NavBar />
  <!-- 侧边栏组件 -->
  <SliderBar />
  <div id="body-container">
    <div class="game-cate">
      <div class="cate-bottom">
        <p>We like to provide you top tier Social Casino games company. With massive mobile game hits such as Dancing Lion, BarBarians Tribes, Piggy bank, Empress Cleopatra and more. Flora Fun Games is by far the fastest growing company in the entire Social Casino category!</p>
        <p>Our mission is delivery the momment of lucky and happiness to player around the world!</p>
      </div>
    </div>
    <div class="icon-img">
      <img src="../assets/img/bodybg_02.png" alt="">
    </div>
  </div>
  <!-- 底部栏 -->
  <SlotFooter />
</template>

<script setup lang="ts">
  import { ref } from 'vue'

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
      background-color: #FFFFFF;
      background-image: url('../assets/img/bodybg_01.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left top;
      opacity: 1;

      .game-cate {
        padding: 50px 0 0 0;

        .cate-bottom {
          width: 100%;
          margin-top: 120px;
          background-image: linear-gradient(to right, #3d1e5c, #1f064e, #32194b);
          padding: 30px 0;
          box-shadow: 0px 3px 5px 0 #614c88 inset;

          p {
            width: 70%;
            margin: 6px auto;
            font-size: 18px;
            color: #FFFFFF;
            letter-spacing: 1px;
            line-height: 28px;
          }
        }
      }

      .icon-img {
        width: 100%;
        max-width: 1617px;
        margin: auto;
        padding: 20px 0;

        img {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    #body-container {
      width: 100%;
      background-color: #FFFFFF;
      background-image: url('../assets/img/bodybg_01.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left top;
      opacity: 1;

      .game-cate {
        padding: 50px 0 0 0;
        width: 100%;
        
        .cate-bottom {
          width: 100%;
          margin-top: -50px;
          background-image: linear-gradient(to right, #3d1e5c, #1f064e, #32194b);
          padding: 40px 0;
          box-shadow: 0px 3px 5px 0 #614c88 inset;

          p {
            width: 90%;
            margin: 10px auto;
            font-size: 16px;
            color: #FFFFFF;
            letter-spacing: 1px;
            line-height: 28px;
          }
        }
      }

      .icon-img {
        width: 90%;
        margin: auto;
        padding: 20px 0;

        img {
          width: 100%;
        }
      }
    }
  }
</style>
