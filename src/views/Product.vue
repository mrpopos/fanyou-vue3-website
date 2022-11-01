<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 16:08:54
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-11-01 17:57:13
 * @FilePath: \web\fanyou-vue3-website\src\components\nav-bar\index.vue
 * @Description: NavBar Component
-->
<template>
  <div id="body-container">
    <div class="game-cate">
      <div class="game-1">
        <img src="../assets/img/game-cate.png" alt="">
        <div class="down-btn">
          <a href="https://play.google.com/store/apps/details?id=com.jackpotfeverslot.com">
            <img src="../assets/img/google.png" alt="">
          </a>
          <a href="https://apps.apple.com/us/app/jackpot-fever-casino-slots/id1626961297">
            <img src="../assets/img/appstore.png" alt="">
          </a>
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
        padding: 80px 0 0 0;
        width: 100%;
        margin-top: 88px;

        .game-1 {
          width: 100%;
          height: auto;
          position: relative;

          img {
            width: 100%;
            height: auto;
          }

          .down-btn {
            height: 12%;
            width: auto;
            position: absolute;
            bottom: 30px;
            left: 53%;


            img {
              height: 100%;
              width: auto;
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
          position: relative;

          img {
            width: 100%;
            height: auto;
          }

          .down-btn {
            height: 12%;
            width: auto;
            position: absolute;
            bottom: 18px;
            left: 51%;


            img {
              height: 100%;
              width: auto;
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
          position: relative;

          img {
            width: 100%;
            height: auto;
          }

          .down-btn {
            height: 14%;
            width: auto;
            position: absolute;
            bottom: 10px;
            left: 48%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;

            img {
              height: 100%;
              width: auto;
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
