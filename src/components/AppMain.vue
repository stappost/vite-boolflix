<script>
import { store } from '../store';

import MediaCard from './MediaCard.vue';

export default {
    components: {
        MediaCard,

    },
    data() {
        return {
            store
        }
    },

}
</script>
<template lang="">
    <main>
        <!-- CARD FILMS  -->
        <div v-if="store.films.length > 0">
            <h2 class="films">Films <span v-if="store.search==''">Più popolari</span></h2>
            <div class="cards">
                <MediaCard v-for="film, index in store.films" :key="index" :media='film'/>
            </div>
        </div>
        <div v-if="store.series_tv.length > 0">
            <!-- CARD TV SERIES  -->
            <h2>Serie TV <span v-if="store.search==''">Più popolari</span></h2>
            <div class="cards">
                <MediaCard v-for="serie, index in store.series_tv" :key="index" :media='serie'/>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
main {
    background-color: rgba(66, 66, 66, 0.801);

    h2 {
        margin-top: 0;
        padding: 30px 0 30px 30px;
        text-align: center;
        font-size: 50px;
    }

    .cards {
        gap: 20px;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: center;
    }
}
</style>