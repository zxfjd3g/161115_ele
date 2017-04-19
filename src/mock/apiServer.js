import Mock from 'mockjs'
import apiData from './data.json'
var seller = apiData.seller
var goods = apiData.goods
var ratings = apiData.ratings

Mock.mock('/test', {
  'name': '@name',
  "age|10-20": 10
})

Mock.mock('/api2/seller', {
  code: 0,  //正确的数据
  data: seller
})
Mock.mock('/api2/goods', {
  code: 0,  //正确的数据
  data: goods
})
Mock.mock('/api2/ratings', {
  code: 0,  //正确的数据
  data: ratings
})
