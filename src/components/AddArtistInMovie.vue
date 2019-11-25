<template>
  <div class="add_artists_dialog">
    
    <div class="modal_title">
        Add Artist
    </div>

    <md-field class="add_artist">
      <label for="font">Artists</label>
      <md-select v-model="artistIdToAdd" name="font" id="font">
        <div v-for='artist in artists' 
                  v-bind:key="artist._id">
          <md-option :value="artist._id">
            {{artist.firstName}} {{artist.lastName}}
          </md-option>
        </div>
        
      </md-select>
    </md-field>

    <md-button class="md-primary cancel_btn" 
               v-on:click="$emit('cancel')">
        Cancel
    </md-button>
    <md-button class="md-primary add_btn" 
               v-on:click="addActor">
        Add Artist
    </md-button>

  </div>
</template>

<script>  
  const artistsURL = "http://localhost:3736/api/artists"

  export default {
    name: 'AddArtistInMovieDialog',
    data() {
      return {
        artists:[],
        artistIdToAdd:null,
        artistToAdd:null
      }
    },
    mounted(){
      this.axios
        .get(artistsURL)
        .then(response => this.artists = response.data.data);
    },
    methods: {
      addActor() {
       this.artistToAdd = this.artists.find(el => el._id == this.artistIdToAdd)
       this.$emit('addArtist', this.artistToAdd )
      }
    }
  }
</script>

<style lang="scss" scoped>
    .add_artists_dialog{
        position: absolute;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: auto;
        width: 500px;
        height: 180px;
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
        grid-template-rows: min-content min-content min-content;
        grid-template-areas: 
        "modalTitle modalTitle"
        "addArtist addArtist"
        "cancelBtn addBtn";

        .modal_title{ 
            grid-area : modalTitle;
            font-size: 24px;
            color: var(--txt-dark-color);
            align-self: center;
        }

        .add_artist{grid-area : addArtist;}
        .cancel_btn{grid-area : cancelBtn;}
        .add_btn{grid-area : addBtn;}

         .md-field {
            margin: 4px 0 2px;
        }

        .md-field+.md-has-textarea:not(.md-autogrow) {
            margin-top: 5px;
        }
    }
</style>