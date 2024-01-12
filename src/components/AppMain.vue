<script>
import { store } from '../store'
export default {
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">
    <main>
        <ul v-for="film, index in store.films" :key="index">
            <li>{{film.title}}</li>
            <li>{{film.original_title}}</li>
            <li>{{film.original_language}}</li>
            <li>{{film.vote_average}}</li>
        </ul>
    </main>
</template>
<style lang="scss" scoped>
main {
    display: flex;
    max-width: 1200px;
    flex-wrap: wrap;

    ul {
        margin: 20px;
        border: 1px solid black;
    }
}
</style>