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
    load_films() {
      if (store.search != '') {
        let apifilms = store.apiUrlFilm
        apifilms += `?api_key=${store.api_key}&query=${store.search}`
        axios.get(apifilms).then(results => {
          store.films = results.data.results
          console.log(store.films)
        })
      }
    },
  }
}
</script>
<template lang="">
  <div>
    <AppHeader @load_page="load_films"/>
    <AppMain />
  </div>
</template>
<style lang="">
  
</style>