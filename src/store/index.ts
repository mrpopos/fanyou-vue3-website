/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-31 20:30:20
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-31 20:31:42
 * @FilePath: \web\fanyou-vue3-website\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 想要使用必须先引入 defineStore
import { defineStore } from 'pinia'
// 这里我们使用的是es6 的模块化规范进行导出的

// defineStore 方法有两个参数，第一个参数是模块化名字（也就相当于身份证一样，不能重复）

// 第二个参数是选项，对象里面有三个属性，相比于vuex 少了一个 mutations
export const useStore = defineStore('main', {
  state(){  // 存放的就是模块的变量
    return {
      activeNavBar: 0
    }
  },
  getters:{ // 相当于vue里面的计算属性，可以缓存数据

  },
  actions:{ // 可以通过actions 方法，改变 state 里面的值。
      
  }
})
