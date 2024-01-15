<script>
import { store } from '../store'
export default {
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>
<template lang="">
    <header>
        <div class="logo">
            <h2>BoolFlix</h2>
        </div>
        <div class="search">
            <input type="text" v-model='store.search' placeholder='search' @keydown.enter="$emit('load_page') ">
            <button @click="$emit('load_page')">search</button>
        </div>
    </header>
</template>
<style lang="scss" scoped>
header {
    background-color: rgb(12, 12, 12);
    color: white;
    padding: 30px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        color: red;
        font-weight: 1000;
        font-size: 40px;
        line-height: 20px;
    }

    input {
        height: 25px;
    }

    button {
        font-size: 15px;
    }
}
</style>