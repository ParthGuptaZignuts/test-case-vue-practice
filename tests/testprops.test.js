import { mount } from '@vue/test-utils'
import testProps from '../src/components/testProps.vue'
import { describe, expect, test } from '@jest/globals'

describe('Test props component', () => {
  test('component output text with dynamic props', () => {
    const ticket = {
      title: 'Test ticket',
      price: 1000,
      journey: {
        to: 'AHD',
        from: 'JND' 
      }
    }

    const wrapper = mount(testProps, {
      props: { ticket }
    })
    expect(wrapper.text()).toMatch(
      `Ticket title: ${ticket.title}Price is: ${ticket.price}Journey from: ${ticket.journey.from} to: ${ticket.journey.to}Are you excited`
    )
  })
})
