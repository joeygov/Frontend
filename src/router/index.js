import Vue from 'vue'
import VueRouter from 'vue-router'

// Import views
import MoviesListPage from '../views/MoviesListPage'
import MoviePage from '../views/MoviePage'
import ArtistListPage from '../views/ArtistsListPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/artists'
  },
  {
    path: '/artists',
    name: 'artistsList',
    component: ArtistListPage
  },
  {
    path: '/movies',
    name: 'moviesList',
    component: MoviesListPage
  },
  {
    path: '/movies/:movieId',
    name: 'movieDetail',
    component: MoviePage
  }
]

const router = new VueRouter({
  routes
})

export default router
