<script>
export default {
    props: {
        media: Object
    },
    methods: {
        getFlag(lang) {
            switch (lang) {
                case 'en':
                    lang = "gb";
                    break;
                case 'ja':
                    lang = "jp";
                    break;
                case 'uk':
                    lang = "ua";
                    break;
                case 'ko':
                    lang = "kr";
                    break;
                case 'hi':
                    lang = "in";
                    break;
                case 'el':
                    lang = "gr";
                    break;
                case 'da':
                    lang = "dk";
                    break;
            }
            return `https://flagsapi.com/${lang.toUpperCase()}/shiny/24.png`
        }
    }
}
</script>
<template lang="">
    <div class="card">
        <div v-if="media.image != null">
            <img :src="'https://image.tmdb.org/t/p/w185' + media.image"  :alt="media.title">
        </div>
        <div v-else>
            <img src="../assets/img/placeholder.png" :alt="media.title">
        </div>

        <ul >
            <li>{{media.title}}</li>
            <li>{{media.original_title}}</li>
            <li> <img :src="getFlag(media.language)" :alt='getFlag(media.language)'></li>
            <li>{{media.vote}}</li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.card {
    margin: 20px;
    border: 1px solid black;
    padding: 10px;

    ul {
        list-style: none;
    }

}
</style>