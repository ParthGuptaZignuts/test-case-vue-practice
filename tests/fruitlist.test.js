import { shallowMount } from '@vue/test-utils'
import {describe, expect, test} from '@jest/globals';
import fruits from '../src/components/fruitList.vue'

describe('testing component small parts test', () => {
  const wrapper = shallowMount(fruits)
  
  test('test the fruits variable', () => {
    expect(wrapper.vm.fruits).toEqual(['apple', 'banana', 'orange'])
  })

  test('test computed one numFruits', () => {
    expect(wrapper.vm.numFruits).toEqual(3)
  })

  test('test function one fruitsName', () => {
    expect(wrapper.vm.fruitsName()).toEqual(3)
  })
})



