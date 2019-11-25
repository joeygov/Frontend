<template>
    <md-dialog :md-active.sync="showAddMovieDialog"
    v-on:md-clicked-outside='clickOutside'>


        <md-dialog-title class="modal_title">Add Movie</md-dialog-title>

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

        <md-dialog-actions class="modalAction">
          <md-button class="md-primary" v-on:click="$emit('cancel')">Cancel</md-button>
          <md-button class="md-primary" v-on:click="$emit('addMovie', movie)">Add Movie</md-button>
        </md-dialog-actions>

    </md-dialog>
</template>

<script>
  export default {
    name: 'AddMovieDialog',
    props: {
        showAddMovieDialog: Boolean,
    },
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
    },
    methods: {
      clickOutside(event) {
        event.preventDefault()
        window.console.log('CLICK OUTSIDE');
        
      }
    }    
  }
</script>

<style lang="scss" scoped>
  .md-dialog {
    width: 650px;
    padding: 15px 25px;
  }

  /deep/.md-dialog-container {
    display:grid;
    width: 100px;
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
      "modalAction modalAction";
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
  .modalAction{ grid-area : modalAction }

  .md-field {
    margin: 4px 0 2px;
  }

  .md-field+.md-has-textarea:not(.md-autogrow) {
    margin-top: 5px;
  }

</style>
