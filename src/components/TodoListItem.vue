<script setup lang="ts">
const props = defineProps({
	item: {
		type: Object
	},
	id: {
		type: Number
	}
})
const emit = defineEmits(["remove"])

const removeTodo = () => {
	emit("remove", props.id)
}
</script>

<template>
	<div class="flex items-center justify-between px-5 py-3">
		<div class="mr-4 w-full break-words">{{ item.title }} | {{ item.id }} | {{ id }}</div>
		<button @click.prevent="removeTodo" class="btn-delete">Delete</button>
	</div>
</template>

<style lang="scss" scoped></style>
