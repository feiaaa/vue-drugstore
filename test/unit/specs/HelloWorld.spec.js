import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
// const {Son} 

import { mount,shallowMount } from "@vue/test-utils";

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
  expect(add(3, 1)).toEqual(4); // assert pass
  //↓assert failed: Comparing two different types of values. Expected string but received number.
  // expect(add(3, 1)).toBe('4'); 
  });

  // wrapper.vm 是一个 Vue 实例，只有 Vue 组件的包裹器才有 vm 这个属性；
  // 通过 wrapper.vm 可以访问所有 Vue 实例的属性和方法。比如：wrapper.vm.nextTick()
  
  it("测试累加", () => {
    const wrapper = mount(HelloWorld);
    wrapper.setData({ a: 13 });
    const button = wrapper.find("#button1");
    button.trigger("click");
    expect((wrapper.vm ).a).toBe(14);
  });

  // 父子传值 & 点击按钮传值给子组件
  it("父传子", () => {
    const wrapper = shallowMount(HelloWorld);
    wrapper.setData({ age: 13 });
    wrapper.vm.changeAge();
    expect(wrapper.vm.age).toBe(12);
  })

  it("点击按钮传值给子组件", () => {
    const wrapper = mount(HelloWorld.components.son);
    const mockFn=jest.fn();
    wrapper.setProps({fn:mockFn});
    wrapper.find("#button2").trigger("click")
    expect(mockFn.mock.calls.length).toBe(1);// 判断是否点了一次,todo 此处bug，可能mock写法问题
  })

  // 异步

});
