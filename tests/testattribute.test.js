import { mount } from '@vue/test-utils'
import testAttribute from '../src/components/testAttribute.vue'
import {describe, expect, test} from '@jest/globals';

describe('Test attribute', () => {
  test('Particular single html attribute output', () => {
    const wrapper = mount(testAttribute);
    expect(wrapper.find('[id="jest-test-id"]').text()).toEqual(
      'hello I am a card :)'
    );
  })
})


