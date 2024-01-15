<script>
export default {
    props: {
        media: Object
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
    <div class="card">
        <ul >
            <li>{{media.title}}</li>
            <li>{{media.original_title}}</li>
            <li> <img :src="getFlag(media.language)" :alt='getFlag(media.language)'></li>
            <li>{{media.vote}}</li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
ul {
    margin: 20px;
    border: 1px solid black;
    padding: 10px;
    list-style: none;
}
</style>