<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 16:08:54
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-11-01 15:05:36
 * @FilePath: \web\fanyou-vue3-website\src\components\nav-bar\index.vue
 * @Description: NavBar Component
-->
<template>
  <div id="body-container">
    <div class="inner-container">
      <img class="word-text" src="../../assets/img/words.png" alt="">
      <div class="intro-imgbg">
        <img src="../../assets/img/bodybg_02.png" alt="logo icon">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
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
      background-image: url('../../assets/img/bodybg_01.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left top;
      opacity: 1;
      margin-top: 89px;

      .inner-container {
        width: 100%;
        max-width: 1617px;
        margin: auto;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
        padding: 90px 0 20px 0;

        .word-text {
          padding-bottom: 20px;
          width: 90%;
          max-width: 1400px;
          text-align: center;
        }

        p {
          margin: 50px 0 15px 0;
          font-size: 32px;
          font-weight: 600;
          // margin: 10px 0;
          background: linear-gradient(to bottom, #f1e1c5, #9f5737);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }

        .intro-imgbg {
          // margin: 0 0 25px 0;
          max-width: 1677px;

          img {
            width: 100%;
            max-width: 1677px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    #body-container {
      width: 100%;
      background-color: #FFFFFF;
      background-image: url('../../assets/img/bodybg_01.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left top;
      opacity: 1;

      .inner-container {
        width: 100%;
        max-width: 1617px;
        margin: auto;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
        padding: 35px 0;

        .word-text {
          padding-bottom: 20px;
          width: 90%;
          max-width: 1400px;
          text-align: center;
        }

        p {
          margin: 25px 0 5px 0;
          font-size: 18px;
          font-weight: 600;
          background: linear-gradient(to bottom, #f1e1c5, #9f5737);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }

        .intro-imgbg {
          // margin: 0 0 25px 0;

          img {
            width: 100%;
            max-width: 960px;
          }
        }
      }
    }
  }
</style>
