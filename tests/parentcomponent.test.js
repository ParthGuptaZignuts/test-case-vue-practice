import { mount } from '@vue/test-utils'
import parent from '../src/components/parentComponent.vue'
import child from '../src/pages/child.vue'
import {describe, expect, it } from '@jest/globals';

describe('parent.vue', () => {
 it('renders without errors', () => {
   const wrapper = mount(parent)
   expect(wrapper.exists()).toBe(true)
 })

 it('parent has child component', () => {
   const wrapper = mount(child)
   // Access the child component
   const testForm = wrapper.findComponent(child);

   expect(testForm.exists()).toBe(true);
 })
})