<script setup>
import { ref, computed, onMounted, watch } from "vue"
import TodoListItem from "@/components/TodoListItem.vue"

const items = ref([])
const todoTitle = ref("")
const todoId = ref(0)

const addTodo = () => {
	if (todoTitle.value) {
		todoId.value++
		items.value.push({
			id: todoId.value,
			title: todoTitle.value
		})
	} else {
		alert("Пусто")
	}
}

const removeTodo = id => {
	console.log(id)
	const filteredItems = items.value.filter(item => {
		return item.id != id
	})
	console.log(filteredItems)
	if (filteredItems) {
		items.value = filteredItems
	}
}
</script>

<template>
	<div class="mx-auto max-w-3xl">
		<div class="mb-5 flex flex-col items-center">
			<div class="mb-5">
				<input v-model="todoTitle" type="text" class="input-primary" />
			</div>
			<div>
				<button @click.prevent="addTodo" class="btn">Create</button>
			</div>
		</div>
		<div class="divide-y divide-gray-200">
			<TodoListItem @remove="removeTodo" v-for="(item, index) in items" :key="index" :id="item.id" :item="item" />
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
