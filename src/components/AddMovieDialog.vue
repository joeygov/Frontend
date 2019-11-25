<template>
    <div class="add_movie_dialog">


        <div class="modal_title">Add Movie</div>

        <md-field class="title">
          <label>Movie Title</label>
          <md-input v-model="movie.title" required></md-input>
        </md-field>

        <md-field class="genre">
          <label for="genre">Genres</label>
          <md-select v-model="movie.genres" name="genre" id="genre" multiple>    
            <md-option value="Action">Action</md-option>
            <md-option value="Adventure">Adventure</md-option>
            <md-option value="Comedy">Comedy</md-option>
            <md-option value="Crime and Gangster">Crime and Gangster</md-option>
            <md-option value="Drama">Drama</md-option>
            <md-option value="Historical">Historical</md-option>
            <md-option value="Horror">Horror</md-option>
            <md-option value="Musical">Musical</md-option>
            <md-option value="Mystery">Mystery</md-option>
            <md-option value="Science Fiction">Science Fiction</md-option>
            <md-option value="Thriller">Thriller</md-option>
            <md-option value="War">War</md-option>
            <md-option value="Western">Western</md-option>
          </md-select>
        </md-field>

        <md-field class="director">
          <label>Director</label>
          <md-input v-model="movie.director" required></md-input>
        </md-field>

        <md-field class="productionCompany">
          <label>Production Company</label>
          <md-input v-model="movie.productionCompany" required></md-input>
        </md-field>

        <md-datepicker class="realeaseDate" v-model="movie.realeaseDate">
          <label>Release Date</label>
        </md-datepicker>

        <md-field class="runningTime">
          <label>Running Time in minutes</label>
          <md-input v-model="movie.runningTime" type="Number"></md-input>
        </md-field>

        <md-field class="synopsis">
          <label>Synopsis</label>
          <md-textarea v-model="movie.synopsis"></md-textarea>
        </md-field>


        <md-button class="md-primary cancel_btn" v-on:click="$emit('cancel')">Cancel</md-button>
        <md-button class="md-primary add_btn" v-on:click="$emit('addMovie', movie)">Add Movie</md-button>


    </div>
</template>

<script>
  export default {
    name: 'AddMovieDialog',
    data() {
      return {
        movie:{
          title: null,
          director: null,
          productionCompany: null,
          realeaseDate: null,
          runningTime: 0,
          genres: [],
          synopsis: null
        }
      }
    }  
  }
</script>

<style lang="scss" scoped>


  .add_movie_dialog {
    position: absolute;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: auto;
    width: 600px;
    height: 510px;
    padding: 20px;
    z-index: 5;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 15px;
    grid-template-rows: 35px min-content min-content min-content 1fr min-content;
    grid-template-areas: 
      "modalTitle modalTitle"
      "title genre"
      "director productionCompany"
      "realeaseDate runningTime"
      "synopsis synopsis"
      "cancelBtn addBtn";
  }

  .modal_title{ 
    grid-area : modalTitle;
    font-size: 24px;
    color: var(--txt-dark-color);
    align-self: center;
  }
  .title{ grid-area : title }
  .genre{ grid-area : genre }
  .director{ grid-area : director }
  .productionCompany{ grid-area : productionCompany }
  .realeaseDate{ grid-area : realeaseDate }
  .runningTime{ grid-area : runningTime }
  .synopsis{ grid-area : synopsis }
  .cancel_btn{grid-area : cancelBtn;}
  .add_btn{grid-area : addBtn;}

  .md-field {
    margin: 4px 0 2px;
  }

  .md-field+.md-has-textarea:not(.md-autogrow) {
    margin-top: 5px;
  }

</style>
