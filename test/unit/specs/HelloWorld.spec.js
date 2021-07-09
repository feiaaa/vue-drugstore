import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

// 获取组件实例
const Constructor = Vue.extend(HelloWorld)
const vm = new Constructor().$mount()

describe('HelloWorld.vue', () => {
  // 默认内容，校验文字
  it('should render correct contents', () => {    
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
  
});
// 自己写的计算方法
describe('method内加法的测试', function () {
  const add=vm.add;
  it('两个数相加', function () {
  expect(add(3, 1)).toEqual(4); // 断言
  expect(add(3, 1)).toBe('4'); // 断言
  });
});
