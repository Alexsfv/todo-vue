<template>
    <div>
        <ul>
            <TodoItem 
                v-for="(todo, i) in todos"
                :id="todo.id"
                :title="todo.title"
                :completed="todo.completed"
                :index="i"
                :key="todo.id"
                @remove-todo="removeTodo"
                @toggle-completed="toggleCompleted"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    components: {
        TodoItem
    },
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo', id)
        },
        toggleCompleted(id) {
            this.$emit('toggle-completed', id)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>