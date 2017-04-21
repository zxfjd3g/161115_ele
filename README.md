## 搭建项目
  * 使用vue-cli来搭建基于vue的模块化, 组件化,工程化的项目
  * 使用vue-router实现SPA
  * 使用vue-resource发送ajax请求

## 项目的的组件组成
  * app.vue: 根组件
    * header.vue: 头部
      * star.vue: 评星
    * 路由组件
      * goods.vue: 商品列表
        * cartcontrol.vue: 购物项数量控制
        * shopcart.vue: 购物车
        * food.vue: 食物详情
      * ratings.vue: 评论列表
      * seller.vue: 商家信息

## mock数据
  * 接口相关概念
  * 理解json数据结构, 并设计json文件
  * 将json数据暴露成接口
    * express: 只能在测试阶段使用, 一旦发布不能访问
    * mock.js: 拦截ajax请求, 返回设计好结构的随机数据
    * json-server: 能实现请求的CRUD, 但也只能是测试阶段使用

## 第三方库
  * 学会第三方库的基本使用方法
    * 下载
    * 找到文档/demo, 并根据文档编码
  * 使用better-scroll实现带回弹的滚动
