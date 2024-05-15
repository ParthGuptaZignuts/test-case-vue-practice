import { shallowMount } from "@vue/test-utils";
import asyncTest from '../src/components/asyncTest.vue'
import { expect, test } from '@jest/globals';

test('async await function', async () => {
    const wrapper = shallowMount(asyncTest)
  
    wrapper.find('button').trigger('click')
  
    await wrapper.vm.$nextTick()  //use ths line instead of nextTick()
    expect(wrapper.html()).toContain('Count: 1')
  })
  