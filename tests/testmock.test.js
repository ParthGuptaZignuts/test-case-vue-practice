
import { mount } from "@vue/test-utils";
import testMock from "../src/components/testMock.vue";
import {describe, expect, it} from '@jest/globals';

describe("TestMockFunction", () => {
 it("triggers handleClick on button click", () => {
   const handleClickMock = jest.fn();
   const wrapper = mount(testMock, {
     global: {
       mocks: {
         handleClick: handleClickMock,
       },
     },
   });

   // Simulate a button click
   wrapper.find("button").trigger("click");
 
   // Assert that the mock function was called
   expect(handleClickMock).toHaveBeenCalled();
 });
});

