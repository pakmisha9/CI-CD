<script setup lang="ts">
import TodoList from "./components/TodoList.vue"
import Counter from "./components/Counter.vue"
import { ref } from "vue"
const count = ref(0)
const times = ref(1)
const increment = (value: number) => {
	count.value += value
}
const clear = () => {
	count.value = 0
}
</script>

<template>
	<div class="flex h-screen flex-col items-center justify-center">
		<Counter :count="count" :times="times" @increment="increment" @clear="clear" />
		<TodoList />
	</div>
</template>

<style scoped lang="scss"></style>
