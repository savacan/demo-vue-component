<template>
    <div class="wrapper">
        <div class="hello"> Hello this is Vue Component! </div>
        <Counter></Counter>
    </div>
</template>
<script>
import Counter from "./Counter";
export default {
    components: {Counter},
    data() {
        return {
            sample: "hoge"
        }
    }
}
</script>
<style scoped>
    .hello {
        color: red
    }
</style>
