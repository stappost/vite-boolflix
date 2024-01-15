<script>
export default {
    data() {
        return {
            array_votes: [1, 2, 3, 4, 5]
        }
    },
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
        },
        getVote(vote) {
            vote = Math.ceil(vote / 2);
            return vote
        }
    }
}
</script>
<template lang="">
    <div class="card">
        <div v-if="media.image != null" class="card-front">
            <img :src="'https://image.tmdb.org/t/p/w185' + media.image"  :alt="media.title">
        </div>
        <div v-else class="card-front">
            <img src="../assets/img/placeholder.png" :alt="media.title">
        </div>

        <ul class="card-back">
            <li>{{media.title}}</li>
            <li>{{media.original_title}}</li>
            <li> <img :src="getFlag(media.language)" :alt='getFlag(media.language)'></li>
            <li>
                <i v-for="number, index in array_votes"  class="fa-solid fa-star" v-show="number <= getVote(media.vote) " style="color: #FFD43B;"></i>
                <i v-for="number, index in array_votes"  class="fa-solid fa-star" v-show="number > getVote(media.vote) "></i>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
@import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";


.card {
    margin: 20px;

    padding: 10px;
    position: relative;
    transform-origin: center;
    transform-style: preserve-3d;
    transition: transform 1s;

    .card-back,
    .card-front {
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    .card-back {
        list-style: none;
        position: absolute;
        top: 0;
        left: 0;
        background-color: black;
        color: white;
    }

    .card-back {
        transform: rotatey(180deg);
    }


}

.card:hover {
    transform: rotatey(180deg);
}
</style>