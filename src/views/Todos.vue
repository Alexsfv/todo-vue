<template>
  <div>
    <router-link to="/">Home Page</router-link>
    <h2>TodoApplication</h2>
    <AddTodo 
      v-on:add-todo="addTodo"
    />
    <p>Фильтры</p>
    <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
    </select>
    <hr>
    <Loader v-if="loading"/>
    <TodoList 
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      v-on:remove-todo="removeTodo"
      @toggle-completed="toggleCompleted"
    />
    <p v-else>Список пуст! Добавьте задание.</p>

  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'

export default {
  name: 'Todos',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  components: {
    TodoList,
    AddTodo,
    Loader
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(json => {
        setTimeout(() => {
            this.todos = json
            this.loading = false
        }, 1000);
    })
  },
  computed: {
    filteredTodos() {
        if (this.filter === 'all') {
            return this.todos
        }

        if (this.filter === 'completed') {
            return this.todos.filter(todo => todo.completed)
        }

        if (this.filter === 'not-completed') {
            return this.todos.filter(todo => !todo.completed)
        }
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(newTodo) {
      this.todos.push(newTodo)
    },
    toggleCompleted(id) {
        const todo = this.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })

    }
  }
}
</script>