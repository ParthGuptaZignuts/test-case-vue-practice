import { mount } from '@vue/test-utils'
import MyComponent from '../src/components/myComponent.vue'
import { describe, expect, test } from '@jest/globals'

describe('Test my-component', () => {
  // without child component

  // test('component output text', () => {
  //     // Wrap the imported component into mount
  //     const wrapper = mount(MyComponent)
  //     expect(wrapper.text()).toBe('Test component: its a parent one')
  //   })

  //with child component

  test('component output text', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.text()).toBe('Test component: its a parent one  Hello from child component')
  })
})
