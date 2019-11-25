<template>
  <div class="movies_list_page">

    <div class="instruction_content">
      <div class="title_instruction">Instructions Exercice 2 :</div>
      <div class="instructions">
        <ol>
          <li>Fetch all the movies with an HTTP Request. This
            request has to be done when the page is created. Save the 
            list of movies in the 'movies' variable.
          </li>
          <li>Complete the function add movie. When the request has been received,
            the new movie should appear.
          </li>
          <li>
            Complete the function delete movie by Id. When the request has been received
            the list should update.
          </li>
          <li>
            For go to the third exercice click on 'see detail' on a movie card.
          </li>
        </ol>
      </div>
    </div>
    
    <div class='title_page'>Movies</div>
    <md-button class="md-icon-button md-raised md-primary add_movie_btn"
               @click="showAddMovieDialog = true">
      <md-icon>add</md-icon>
    </md-button>

    <div class='result_part'>
      <div v-for='movie in movies' v-bind:key="movie._id">
        <MovieCardComponent 
            v-bind:id="movie._id"
            v-bind:title="movie.title"
            v-bind:genres="movie.genres"
            v-bind:runningTime="movie.runningTime"
            v-bind:synopsis="movie.synopsis"
            v-on:deleteMovieById='deleteMovieById'/>
      </div>

       <AddMovieDialog v-if="showAddMovieDialog"
                    v-on:cancel='showAddMovieDialog=false'
                    v-on:addMovie='addMovie'/>
    </div>
   
  </div>
</template>


<script>
  // Import Components
  import MovieCardComponent from '@/components/MovieCard.vue'
  import AddMovieDialog from '@/components/AddMovieDialog.vue'
  
  export default {
    name: 'MoviesListPage',
    components:{
      MovieCardComponent,
      AddMovieDialog
    },
    data() {
      return {
        movies: [],
        showAddMovieDialog : false
      }
    },
    methods: {
      // // Decomment the following function for do the question 2
      // addMovie(movie){
      //   // TODO question 2
      //   
      //   // Use for close the add movie dialog
      //   this.showAddMovieDialog=false;
      // },
      // // Decomment the following function for do the question 3
      // deleteMovieById(movieId) {
      //   // TODO question 3
      // },
    }
  }
</script>

<style lang="scss" scoped>

  .movies_list_page{
    height: 100%;
    display:grid;
    grid-template-columns: 1fr 2fr 65px;
    grid-template-rows: 50px 1fr;
    grid-template-areas: 
      "instruction titlePage addMovieBtn"
      "instruction moviesList moviesList"
  }

  .instruction_content{
    grid-area: instruction;
    padding: 20px;
    background-color: var(--guide-line-bg);

    li{
      padding-bottom: 10px;
    }
  }

  .title_page{
    align-self: center;
    text-align: center;
    grid-area: titlePage;
    font-size: 24px;
    color: var(--txt-dark-color);
  }

  .add_movie_btn{
    grid-area: addMovieBtn;
    align-self: center;
  }
  
  .result_part{
    grid-area: moviesList;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
  }

</style>