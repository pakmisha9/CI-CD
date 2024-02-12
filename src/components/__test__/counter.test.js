import { expect, test } from "vitest"
import { mount } from "@vue/test-utils"

import Counter from "@/components/Counter.vue"

test("counter text updates", async () => {
	const wrapper = mount(Counter, {
		props: {
			count: 0
		}
	})
	const counter = wrapper.find('[data-test="counter"]')
	const increment = wrapper.find('[data-test="increment"]')

	expect(counter.text()).toEqual("0")
	await increment.trigger("click")
	expect(wrapper.emitted()).toHaveProperty("increment")
	expect(wrapper.emitted().increment[0]).toEqual([1])
	expect(counter.text()).toEqual("0")
})
