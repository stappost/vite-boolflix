<script>
import { store } from '../store'
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        getFlag(lang) {
            if (lang == 'en') {
                lang = 'gb'
            }
            else if (lang == 'ja') {
                lang = 'jp'
            }
            return `https://flagsapi.com/${lang.toUpperCase()}/shiny/24.png`
        }
    }
}
</script>
<template lang="">
    <main>
        <ul v-for="film, index in store.films" :key="index">
            <li>{{film.title}}</li>
            <li>{{film.original_title}}</li>
            <li> <img :src="getFlag(film.original_language)" :alt='getFlag(film.original_language)'></li>
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