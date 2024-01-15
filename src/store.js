import { reactive } from 'vue';
export const store = reactive({
    apiUrlFilm: 'https://api.themoviedb.org/3/search/movie',
    apiUrlSerie: 'https://api.themoviedb.org/3/search/tv',
    films: [],
    series_tv: [],
    api_key: '1be1847942544cb9ad6772227c9a0766',
    search: '',
    loading: true
})