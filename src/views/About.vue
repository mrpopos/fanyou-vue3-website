<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 16:08:54
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-11-01 17:47:46
 * @FilePath: \web\fanyou-vue3-website\src\components\nav-bar\index.vue
 * @Description: NavBar Component
-->
<template>
  <div id="body-container">
    <div class="game-cate">
      <div class="cate-bottom">
        <div class="cate-p">
          <p>We like to provide you top tier Social Casino games company. With massive mobile game hits such as Dancing Lion, BarBarians Tribes, Piggy bank, Empress Cleopatra and more. Flora Fun Games is by far the fastest growing company in the entire Social Casino category!</p>
          <p>Our mission is delivery the momment of lucky and happiness to player around the world!</p>
        </div>
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
          padding: 30px 0;
          background-image: url('../assets/img/bodybg_03.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-position: left top;

          .cate-p {
            width: 75%;
            max-width: 1250px;
            margin: auto;

            p {
              width: 100%;
              color: #FFFFFF;
              font-size: 26px;
              font-family: 'Microsoft YaHei UI';
              font-weight: 800px;
              line-height: 40px;
              letter-spacing: 1px;
              padding: 10px 0;
              text-align: justify;
            }
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
          margin-top: 10px;
          padding: 20px 0;
          background-image: url('../assets/img/bodybg_03.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-position: left top;

          .cate-p {
            width: 80%;
            max-width: 1250px;
            margin: auto;

            p {
              width: 100%;
              color: #FFFFFF;
              font-size: 14px;
              font-family: 'Microsoft YaHei UI';
              // font-weight: 800px;
              line-height: 24px;
              letter-spacing: 1px;
              padding: 10px 0;
              text-align: justify;
            }
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
