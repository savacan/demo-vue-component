<template>
    <div class='Wrapper'>
        <button @click="increment()"> increment </button>
        <span id='count'>{{count}}</span>
        <button @click="decrement()"> decrement </button>
    </div>    
</template>
<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
}
</script>
<style scoped>
    #count {
        color: red;
    }
</style>
