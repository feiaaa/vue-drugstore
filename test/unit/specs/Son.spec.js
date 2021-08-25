import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import Son from '@/components/Son'
import { mount, } from "@vue/test-utils";

// 获取组件实例
const Constructor = Vue.extend(Son)
const vm = new Constructor().$mount()

// 自己写的计算方法
describe('Son.vue', function () { 
  it('测试数字正常显示',async ()=>{
    const age=18;
    const wrapper = mount(Son);
    await wrapper.setProps({age});
    expect(wrapper.vm.age).toBe(age)
    expect(wrapper.findAll('span').at(0).text()).toContain(age);
  }) 
  it("点击按钮传值给子组件", async() => {
    const wrapper = mount(Son);
    const mockFn=jest.fn();
    await wrapper.setProps({fn:mockFn});
    wrapper.find("#button2").trigger("click") // 试下son有没有获取到
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn.mock.calls.length).toBe(1);// 判断是否点了一次
  })

  // 异步

});
