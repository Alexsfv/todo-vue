<template>
    <li>
        <span :class="{done: completed}">
            <input type="checkbox" :value="isCompleted" @change="changeHandler" :checked="completed">
            <strong>{{index + 1}}</strong>
            {{title | upperCase}}
        </span>
        <button 
            class="rm"
            v-on:click="$emit('remove-todo', id)"
        >
            &times;
        </button>
    </li>
</template>

<script>

export default {
    props: {
        id: { type: Number },
        title: { type: String },
        completed: { type: Boolean },
        index: { type: Number }
    },
    data() {
        return {
            isCompleted: this.completed,
        }
    },
    methods: {
        changeHandler() {
            this.$emit('toggle-completed', this.id)
        }
    },
    filters: {
        upperCase(value) {
            return value.toUpperCase()
        }
    }
}
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    .rm {
        background: blue;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
        border: none;
    }

    .done {
        text-decoration: line-through;
    }

    input {
        margin-right: 1rem;

    }
</style>