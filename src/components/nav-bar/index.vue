<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 16:08:54
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-11-02 11:23:10
 * @FilePath: \web\fanyou-vue3-website\src\components\nav-bar\index.vue
 * @Description: NavBar Component
-->
<template>
  <div id="header-container">
    <ul class="header-ul">
      <li class="first-li"><a href="javascript:void(0)"><img src="../../assets/img/jackpot.png" alt=""></a></li>
      <li class="hover-li hover-active" @click="handleNavActive(0, '/')"><a href="javascript:void(0)">HOME</a></li>
      <li class="hover-li" @click="handleNavActive(1, 'product')"><a href="javascript:void(0)">PRODUCT</a></li>
      <li class="hover-li" @click="handleNavActive(2, 'about')"><a href="javascript:void(0)">ABOUT</a></li>
      <li class="hover-li" @click="handleNavActive(3, 'privacy')"><a href="javascript:void(0)">PRIVACY POLICY</a></li>
      <li class="hover-li" @click="handleNavActive(4, 'terms')"><a href="javascript:void(0)">TERMS OF SERVICE</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  // import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  import { useStore } from '../../store'

  const store = useStore()
  const router = useRouter()

  const handleNavActive = (n: number, path: string) => {
    store.activeNavBar = n
    const liNodeList: HTMLCollectionOf<Element> = document.getElementsByClassName('hover-li')
    for(let i = 0; i < liNodeList.length; i++) {
      liNodeList[i].classList.remove('hover-active')
    }
    liNodeList[n].classList.add('hover-active')
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
    #header-container {
      display: block;
      width: 100%;
      // height: 90px;
      // background-color: #FFFFFF;
      background-image: url('../../assets/img/navbg_01.png');
      // background-repeat: no-repeat;
      background-repeat: repeat-x;
      background-size: contain;
      background-position: left top;
      opacity: 1;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;

      .header-ul {
        width: 100%;
        height: 100%;
        // margin: 0 30px;
        padding: 0 30px;
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;

        li {
          height: 90px;
          width: 20%;
          overflow: hidden;
          font-size: 24px;
          font-weight: 800;
          font-family: 'Microsoft YaHei UI';
          // letter-spacing: 1px;
          text-align: center;
          line-height: 90px;
          flex: auto;

          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: #FFFFFF;
          }
        }

        .first-li {
          flex: none;
          width: 200px;
          
          a {
            display: inline-block;
            width: 100%;
            height: 100%;

            img {
              width: 80%;
              height: auto;
              padding-bottom: 9px;
            }
          }
        }

        .sep-line {
          flex: none;
          // width: 15px;
          height: 90px;
        }

        .hover-li:hover {
          // background-color: aqua;
          background-image: linear-gradient(to bottom , rgba(27, 22, 88, 0.9), rgba(27, 22, 88, 0.4));
          cursor: pointer;
        }

        .hover-active {
          // background-image: linear-gradient(to bottom , #3e33a5, #4c5ddb);
          background-image: url('../../assets/img/daohanglan_02.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-position: left top;
          
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    #header-container {
      display: none;
      width: 100%;
      height: 90px;
      // background-color: #FFFFFF;
      background-image: url('../../assets/img/navbg_01.png');
      // background-repeat: no-repeat;
      background-repeat: repeat-x;
      // background-size: cover;
      background-position: left top;
      opacity: 1;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;

      .header-ul {
        width: 100%;
        height: 100%;
        // margin: 0 30px;
        padding: 0 30px;
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;

        li {
          height: 100%;
          width: 20%;
          overflow: hidden;
          // color: #FFFFFF;
          font-size: 20px;
          font-weight: 500;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          letter-spacing: 1px;
          text-align: center;
          line-height: 90px;
          flex: auto;

          a {
            display: inline-block;
            width: 100%;
            height: 100%;
          color: #FFFFFF;
          }
        }

        .first-li {
          flex: none;
          width: 200px;
          
          a {
            display: inline-block;
            width: 100%;
            height: 100%;

            img {
              width: 80%;
              height: auto;
              padding-bottom: 9px;
            }
          }
        }

        .hover-li:hover {
          // background-color: aqua;
          background-image: linear-gradient(to bottom , #3a3863, #4238b7, #d0d7fc);
          cursor: pointer;
        }
      }
    }
  }
</style>
