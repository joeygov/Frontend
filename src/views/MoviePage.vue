<template>
  <div class="movie_page">

    <div class="instruction_content">
      <div class="title_instruction">Instructions Exercice 3 :</div>
      <div class="instructions">
        <ol>
          <li>
            Fetch the specific movie by his id with an HTTP Request. This
            request has to be done when the page is created. Save the movie fetched in the 'movie' variable.
          </li>
          <li>Complete the function add actor. When the request has been received,
            the new actor should appear.
          </li>
        </ol>
      </div>
    </div>
    
    <div v-if="movie!==null" class='result_container'>
      <div class='movie_title'>{{movie.title}}</div>

      <div class='divider_title divider_1_title'>Main Informations</div>
      <md-divider class="divider divider_1"></md-divider>
      
      <div class="info_container main_informations">
        <ul style="list-style-type:circle;">
          <li><b>Director :</b> {{movie.director}}</li>
          <li><b>Production company :</b> {{movie.productionCompany}}</li>
          <li><b>Release date :</b> {{movie.date}} </li>
          <li><b>Genre :</b> {{movie.genres.join(', ')}} </li>
          <li><b>Running time :</b> {{movie.runningTime}} min</li>
        </ul> 
      </div>
      
      <div class='divider_title divider_2_title'>Synopsys</div>
      <md-divider class="divider divider_2"></md-divider>
      
      <div class="info_container synopsys"> {{movie.synopsis}}</div>
      
      <div class='divider_title divider_3_title'>
        List Actors
      <md-button class="md-icon-button md-dense md-primary add_artist_btn"
                @click="showAddArtistInMovieDialog=true">
        <md-icon>add</md-icon>
      </md-button>
      </div>
      <md-divider class="divider divider_3"></md-divider>
      
      <div class="info_container actors_list">
        <div v-for='actor in movie.actors' v-bind:key="actor.text">
          <div class="artist_card">
            {{actor.firstName}} <br/>
            {{actor.lastName}}
          </div>
        </div>
      </div>

    <AddArtistInMovieDialog v-if="showAddArtistInMovieDialog"
                    v-on:cancel='showAddArtistInMovieDialog=false'
                    v-on:addArtist='addArtist'/>

    </div>

  </div>
</template>

<script>
  // Import Components
  import AddArtistInMovieDialog from '@/components/AddArtistInMovie.vue'

  export default {
    name: 'MoviePage',
    components:{
      AddArtistInMovieDialog
    },
    data() {
      return {
        movie: null,
        showAddArtistInMovieDialog: false
      }
    },
    methods: {
      // // Decomment the following function for do the question 2
      // addArtist(artist){
      //   // TODO question 2

      //   // Use for close the add movie dialog
      //   this.showAddArtistInMovieDialog=false;
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .movie_page{
    height: 100%;
    display:grid;
    grid-template-columns: 1fr 2fr;

    .instruction_content{
      padding: 20px;
      background-color: var(--guide-line-bg);

      li{
        padding-bottom: 10px;
      }
    }

    .result_container{
      height: 100%;
      display: grid;
      grid-template-columns: min-content 2fr;
      grid-template-rows: 50px min-content 1fr min-content 1fr min-content 1fr;
      grid-template-areas: 
        "titlePage titlePage"
        "divider1Title divider1"
        "mainInfo mainInfo"
        "divider2Title divider2"
        "synopsys synopsys"
        "divider3Title divider3"
        "actors actors";

      .movie_title{
        grid-area: titlePage;
        text-align: center;
        font-size: 24px;
        padding:20px;
        color: var(--txt-dark-color);
      }

      .divider_1_title{grid-area: divider1Title;}
      .divider_1{grid-area: divider1;}
      .main_informations{grid-area: mainInfo;}
      .divider_2_title{grid-area: divider2Title;}
      .divider_2{grid-area: divider2;}
      .synopsys{grid-area: synopsys;}
      .divider_3_title{
        grid-area: divider3Title;
        display: flex;
        align-items: center;

        .add_artist_btn{
          margin-left: auto;
        }
      }
      .divider_3{grid-area: divider3;}
      .actors_list{
        grid-area: actors;
        display: flex;
        flex-wrap: wrap;

        .artist_card{
          width: 140px;
          text-align: center;
          padding: 10px 0px;
          margin: 10px 20px;
          border: 1px solid lightslategray;
          border-radius: 5px;
        }
      }

      .divider{
        align-self: center;
      }

      .divider_title{
        white-space: nowrap;
        padding: 0px 20px;
        color: var(--txt-dark-color);
        font-size: 16px;
      }

      .info_container{
        padding: 10px 20px;

        ul {
          margin: 0px;
        }
      }
    }
    
  }

</style>