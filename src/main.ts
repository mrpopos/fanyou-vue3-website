/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-24 14:58:06
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-31 20:29:15
 * @FilePath: \web\fanyou-vue3-website\src\main.ts
 * @Description: main.ts 入口文件
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
