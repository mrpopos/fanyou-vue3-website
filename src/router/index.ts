/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-25 15:49:26
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-26 18:34:57
 * @FilePath: \web\fanyou-vue3-website\src\router\index.ts
 * @Description: router
 */
import { createRouter, createWebHistory } from 'vue-router'

// 1. 定义路由组件
const Home = () => import('../views/Home.vue')
const Product = () => import('../views/Product.vue')
const About = () => import('../views/About.vue')
const PrivacyPolicy = () => import('../views/Privacy.vue')
const TermsOfService = () => import('../views/Terms.vue')

// 2. 定义一些路由
// 每个路由都需要映射到一个组件
// 我们后面再讨论嵌套路由

const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/about', component: About },
  { path: '/privacy', component: PrivacyPolicy },
  { path: '/terms', component: TermsOfService },
]

// 3. 创建路由实例并传递 routes 配置
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
