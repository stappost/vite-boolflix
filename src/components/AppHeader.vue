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
        <input type="text" v-model='store.search'>
        <button @click="$emit('load_page')">search</button>
    </header>
</template>
<style lang="">
    
</style>