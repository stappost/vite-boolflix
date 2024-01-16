<script>
// AXIOS 
import axios from "axios";
// COMPONENTS 
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
// STORE 
import { store } from './store'
export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    // Function SEARCH FILMS AND TV SERIES 
    load_media() {
      if (store.search != '') {
        store.films = []
        store.series_tv = []
        let apifilms = store.apiUrlFilm
        let apiTv = store.apiUrlSerie
        apifilms += `?api_key=${store.api_key}&query=${store.search}`
        axios.get(apifilms).then(results => {
          let movies = results.data.results
          movies.forEach((elem) => {
            let obj = {
              image: elem.poster_path,
              title: elem.title,
              original_title: elem.original_title,
              vote: elem.vote_average,
              language: elem.original_language,
              overview: elem.overview
            }

            store.films.push(obj)
          })
        })
        apiTv += `?api_key=${store.api_key}&query=${store.search}`
        axios.get(apiTv).then(results => {
          let series = results.data.results
          series.forEach((elem) => {
            let obj = {
              image: elem.poster_path,
              title: elem.name,
              original_title: elem.original_name,
              vote: elem.vote_average,
              language: elem.original_language,
              overview: elem.overview
            }

            store.series_tv.push(obj)
          })
        })
      }
    },
    // FUNCTION MOST POPULAR FILM E TV SERIES 
    getPopular() {
      if (store.search == '') {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${store.api_key}`).then(results => {
          let movies = results.data.results
          movies.forEach((elem) => {
            let obj = {
              image: elem.poster_path,
              title: elem.title,
              original_title: elem.original_title,
              vote: elem.vote_average,
              language: elem.original_language,
              overview: elem.overview
            }

            store.films.push(obj)
          })
        })

        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${store.api_key}`).then(results => {
          let series = results.data.results
          series.forEach((elem) => {
            let obj = {
              image: elem.poster_path,
              title: elem.name,
              original_title: elem.original_name,
              vote: elem.vote_average,
              language: elem.original_language,
              overview: elem.overview
            }

            store.series_tv.push(obj)
          })
        })
      }
    }

  },
  created() {
    this.getPopular()
  }
}
</script>
<template lang="">
  <div>
    <AppHeader @load_page="load_media"/>
    <AppMain />
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
</style>