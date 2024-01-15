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
    load_media() {
      if (store.search != '') {
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
              language: elem.original_language
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
              language: elem.original_language
            }

            store.series_tv.push(obj)
          })
        })
      }
    },
  }
}
</script>
<template lang="">
  <div>
    <AppHeader @load_page="load_media"/>
    <AppMain />
  </div>
</template>
<style lang="">
  
</style>