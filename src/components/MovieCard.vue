<template>
  <div class="movie_card">
        <div class="movie_title"> {{ title}}</div>
        <div class="genres subtitle"> {{genresStr}}  </div>
        <div class="running_time subtitle"> {{runningTime}} min</div>
        <div class="synopsis"> {{synopsisStr}}</div>
        <md-button class="md-accent delete_btn"
                 v-on:click="$emit('deleteMovieById', id)">
            Delete
        </md-button>
        <md-button class="detail_btn"
                   v-on:click="seeDetailBtnClicked()">
            See detail
        </md-button>
  </div>
</template>

<script>
  export default {
    name: 'MovieCardComponent',
    props: {
        id: String,
        title: String,
        genres: Array,
        runningTime: Number,
        synopsis: String
    },
    data() {
      return {
        genresStr: this.genres.join(', '),
        synopsisStr: this.synopsis.length>140?
             this.synopsis.substring(0, 140) + '...' :
             this.synopsis
      }
    },
     methods: {
      seeDetailBtnClicked() {
        this.$router.push({ name: 'movieDetail', params: { movieId: this.id } })
      }
    }
  }
</script>

<style scoped>
    .movie_card{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        height: 200px;
        width: 300px;
        display: grid;
        padding: 10px;
        grid-row-gap: 8px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: min-content min-content 1fr min-content;
        grid-template-areas: 
            "movieTitle movieTitle movieTitle movieTitle"
            "genres genres genres runningTime"
            "synopsis synopsis synopsis synopsis"
            "deleteBtn deleteBtn detailBtn detailBtn"
    }    

    .movie_title{
        grid-area: movieTitle;
        font-size: 20px;
        text-align: center;
        color: var(--txt-dark-color);
    }
    .genres{
        grid-area: genres;
    }
    .running_time{
        grid-area: runningTime;
        white-space: nowrap;
    }
    .synopsis{
        grid-area: synopsis;
        text-overflow: ellipsis;
        text-align: justify;
    }
    .delete_btn{
        grid-area: deleteBtn;
    }
    .detail_btn{
        grid-area: detailBtn;
    }

    .subtitle{
        color: var(--text-grey);
        font-weight: 200;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .md-button {
        height: 30px;
    }
</style>