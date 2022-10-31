<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 16:08:54
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-31 20:53:26
 * @FilePath: \web\fanyou-vue3-website\src\components\nav-bar\index.vue
 * @Description: NavBar Component
-->
<template>
  <div id="body-container">
    <div class="game-cate">
      <div class="game-1">
        <img src="../assets/img/game-cate.png" alt="">
      </div>
    </div>
    <div class="icon-img">
      <img src="../assets/img/bodybg_02.png" alt="">
    </div>
  </div>
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
  @media screen and (min-width: 1300px){
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
        margin-top: 88px;

        .game-1 {
          width: 100%;
          height: auto;

          img {
            width: 100%;
            height: auto;
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
  @media screen and (min-width: 768px) and (max-width: 1300px) {
    #body-container {
      width: 100%;
      // background-color: #FFFFFF;
      background-image: url('../assets/img/bodybg_01.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left top;
      opacity: 1;

      .game-cate {
        padding: 50px 0 0 0;
        width: 100%;
        margin-top: 90px;

        .game-1 {
          width: 100%;
          height: auto;

          img {
            width: 100%;
            height: auto;
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
  @media screen and (max-width: 768px) {
    #body-container {
      margin-top: -90px;
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
        margin-top: 90px;
        
        .game-1 {
          width: 100%;
          height: auto;

          img {
            width: 100%;
            height: auto;
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
