<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 16:08:54
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-31 18:09:01
 * @FilePath: \web\fanyou-vue3-website\src\components\nav-bar\index.vue
 * @Description: NavBar Component
-->
<template>
  <div id="footer-container">
    <div class="foot-body">
      <div class="foot-child foot_1">
        <a href="#"><img src="../../assets/img/jackpot.png" alt=""></a>
      </div>
      <div class="foot-child foot_2">
        <span>Contact Information</span>
      </div>
      <div class="foot-child foot_3">
        <span>copyright@2022 Flora Fun Game</span>
      </div>
      <div class="foot-child foot_4">
        <div class="foot_4_1 foot_4_flex">
          <img src="../../assets/img/icon_email.png" alt="" /><span>Email: Support@Jackpot-fevergame.com</span>
        </div>
        <div class="foot_4_2 foot_4_flex">
          <img src="../../assets/img/icon_locate.png" alt="" /><span>Address: 234,TOWER B-2,SPAZE IT PARK,SOHNA ROAD,<br />SECTOR49,Gurgaon,Haryana,122018</span>
        </div>
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
    #footer-container {
      width: 100%;
      height: auto;
      padding: 20px;
      background-color: #1d1f3d;

      .foot-body {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        .foot-child {
          flex: none;
          text-align: center;
          margin: 0 30px;
        }

        .foot_1 {
          a {
            display: inline-block;

            img {
              width: auto;
              height: 80px;
            }
          }
        }

        .foot_2 {
          font-size: 20px;
          font-weight: 500;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          color: #c7b56f;
          letter-spacing: 1px;
        }

        .foot_3 {
          font-size: 14px;
          // font-weight: 400;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          color: #FFFFFF;
          letter-spacing: 1px;
        }

        .foot_4 {
          width: 30%;
          text-align: left;
          flex: none;
          font-size: 14px;
          // font-weight: 400;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          color: #FFFFFF;

          .foot_4_flex {
            display: flex;
            flex-flow: row nowrap;
            justify-content: left;
            align-items: center;
            padding: 5px 0;

            img {
              margin-right: 10px;
              width: 25px;
              height: 20px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    #footer-container {
      width: 100%;
      height: auto;
      padding: 20px;
      background-color: #1d1f3d;

      .foot-body {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        .foot-child {
          flex: auto;
          text-align: center;
          margin: 7px;
        }

        .foot_1 {
          a {
            display: inline-block;

            img {
              width: auto;
              height: 80px;
            }
          }
        }

        .foot_2 {
          font-size: 20px;
          font-weight: 500;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          color: #c7b56f;
          letter-spacing: 1px;
        }

        .foot_3 {
          font-size: 14px;
          // font-weight: 400;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          color: #FFFFFF;
          letter-spacing: 1px;
        }

        .foot_4 {
          width: 90%;
          text-align: left;
          flex: none;
          font-size: 14px;
          // font-weight: 400;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          color: #FFFFFF;

          .foot_4_flex {
            display: flex;
            flex-flow: row nowrap;
            justify-content: left;
            align-items: center;
            padding: 5px 0;

            img {
              margin-right: 10px;
              width: 22px;
              height: 22px;
            }
          }
        }
      }
    }
  }
</style>
