import {shallowMount} from "@vue/test-utils"
import HelloWorld from "@/components/HelloWorld";

it("test1", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).toContain('Hello')
})