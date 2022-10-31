<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 16:08:54
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-31 18:53:23
 * @FilePath: \web\fanyou-vue3-website\src\components\nav-bar\index.vue
 * @Description: NavBar Component
-->
<template>
  <div id="body-container">
    <div class="game-cate">
      <div class="cate-top">
        <h2>JACKPOT FEVER</h2>
      </div>
      <div class="cate-bottom">
        <div class="cate-bl">
          <img src="../assets/img/icon.png" alt="">
          <br />
          <img src="../assets/img/daoying.png" alt="">
        </div>
        <div class="cate-br">
          <ul class="cate-br-ul">
            <li><img src="../assets/img/icon_01.png" alt=""></li>
            <li><img src="../assets/img/icon_02.png" alt=""></li>
            <li><img src="../assets/img/icon_03.png" alt=""></li>
            <li><img src="../assets/img/icon_04.png" alt=""></li>
            <li><img src="../assets/img/icon_05.png" alt=""></li>
            <li><img src="../assets/img/icon_06.png" alt=""></li>
            <li><img src="../assets/img/icon_07.png" alt=""></li>
            <li><img src="../assets/img/icon_08.png" alt=""></li>
          </ul>
          <!-- download button -->
          <div class="cate-br-download">
            <a href=""><img src="../assets/img/google.png" alt=""></a>
            <a href=""><img src="../assets/img/appstore.png" alt=""></a>
          </div>
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
        padding: 50px 0 0 0;
        width: 100%;
        margin-top: 90px;

        .cate-top {
          height: 44px;

          h2 {
            height: 44px;
            line-height: 44px;
            font-size: 44px;
            font-weight: 800;
            background-image: linear-gradient(to bottom, #3f156e, #93e4f7, #380a6b);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-align: center;
            // text-shadow: 1px -3px 0 #661f86;
            filter: drop-shadow(-1px 3px 0 #661f86);
          }
        }

        .cate-bottom {
          // max-width: 1200px;
          background-image: linear-gradient(to right, #271836, #5122a8, #271836);
          padding: 30px 80px;
          margin-top: 30px;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;

          .cate-bl {
            max-width: 300px;
            flex: auto;
            margin: -100px 100px 0 0;

            img {
              width: 300px;
              height: auto;
            }
          }
          .cate-br {
            max-width: 800px;
            flex: auto;
            margin-right: 100px;

            .cate-br-ul {
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
              align-items: center;

              li {
                width: 25%;
                flex: auto;
                text-align: center;

                img {
                  width: 160px;
                  height: auto;
                }
              }
            }

            .cate-br-download {
              margin-top: 30px;
              text-align: center;

              img {
                width: 180px;
                height: auto;
              }
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

        .cate-top {
          height: 44px;

          h2 {
            height: 44px;
            line-height: 44px;
            font-size: 44px;
            font-weight: 800;
            background-image: linear-gradient(to bottom, #3f156e, #93e4f7, #380a6b);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            display: block;
            text-align: center;
          }
        }

        .cate-bottom {
          background-image: linear-gradient(to right, #271836, #5122a8, #271836);
          padding: 30px 80px;
          margin-top: 30px;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;

          .cate-bl {
            width: 240px;
            flex: none;
            margin: -140px 50px 0 0;

            img {
              width: 240px;
              height: auto;
            }
          }
          .cate-br {
            width: 600px;
            flex: none;

            .cate-br-ul {
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
              align-items: center;

              li {
                width: 25%;
                flex: auto;
                text-align: center;

                img {
                  width: 140px;
                  height: auto;
                }
              }
            }

            .cate-br-download {
              margin-top: 30px;
              text-align: center;

              img {
                width: 180px;
                height: auto;
              }
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

        .cate-top {
          height: 44px;

          h2 {
            height: 44px;
            line-height: 44px;
            font-size: 28px;
            font-weight: 800;
            background: linear-gradient(to bottom, #ffffff, #8659cb);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            display: block;
            text-align: center;
          }
        }

        .cate-bottom {
          background-image: linear-gradient(to right, #271836, #5122a8, #271836);
          // padding: 30px 80px;
          margin-top: 30px;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
          align-items: center;

          .cate-bl {
            display: none;
            flex: auto;
            margin: -100px 50px 0 0;

            img {
              display: none;
              width: 240px;
              height: auto;
            }
          }
          .cate-br {
            flex: auto;

            .cate-br-ul {
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
              align-items: center;

              li {
                width: 50%;
                flex: auto;
                text-align: center;

                img {
                  width: 120px;
                  height: auto;
                }
              }
            }

            .cate-br-download {
              margin: 30px 0;
              text-align: center;

              img {
                width: 125px;
                height: auto;
              }
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
