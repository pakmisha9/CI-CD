<script setup lang="ts">
defineProps({ count: Number, times: Number })

const emit = defineEmits(["increment", "clear"])
const increment = () => {
	emit("increment", 0)
}
const clear = () => {
	emit("clear")
}
</script>

<template>
	<div class="mb-10 flex flex-col items-center">
		<div data-test="counter" class="counter text-xl">{{ count }}</div>
		<div class="flex items-center gap-3">
			<button data-test="increment" @click.prevent="increment" class="increment mt-4 rounded border bg-gray-100 px-5 py-2 font-semibold">increment +{{ times }}</button>
			<button @click.prevent="clear" class="mt-4 rounded border bg-gray-100 px-5 py-2 font-semibold">Clear</button>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
