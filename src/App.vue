<!--
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 14:58:06
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-31 20:50:36
 * @FilePath: \web\fanyou-vue3-website\src\App.vue
 * @Description: App根组件
-->
<script setup lang="ts">
import NavBar from './components/nav-bar/index.vue'
import SliderBar from './components/slider-bar/index.vue'
import SlotFooter from './components/slot-footer/index.vue'
import { reactive } from 'vue';

const info = reactive([
  { name: 'zhangsan', age: 18 },
  { name: 'lisi', age: 28 },
])
</script>

<template>
  <!-- 导航组件 -->
  <NavBar />
  <!-- 侧边栏组件 -->
  <SliderBar />
  <!-- 路由组件 -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <!-- 底部栏 -->
  <SlotFooter />
</template>

<style scoped>

</style>
