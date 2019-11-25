<template>
  <div class="artists_list_page">

    <div class="instruction_content">
      <div class="title_instruction">Instructions Exercice 1 :</div>
      <div class="instructions">
        <ol>
          <li>Fetch all the artists with an HTTP Request. This
            request has to be done when the page is created. Save the 
            list of artists in the 'artists' variable.
          </li>
          <li>Complete the function add movie. When the request has been received,
            the new movie should appear. Click on the add button for test your code.
          </li>
          <li>
            Complete the function delete movie by Id. When the request has been received
            the list should update.
          </li>
          <li>
            Adto na ta on the page 'Movies' by clicking in the 'Movies' button in the header 
            for do the second exercice.
          </li>
        </ol>
      </div>
    </div>
    
    <div class='title_page'>Artists</div>
    <md-button class="md-icon-button md-raised md-primary add_artist_btn"
        @click="showAddArtistDialog = true">
      <md-icon>add</md-icon>
    </md-button>

    <div class='result_part'>
      <div v-for='artist in artists' v-bind:key="artist._id">
        <ArtistCardComponent 
              v-bind:id="artist._id"
              v-bind:firstName="artist.firstName"
              v-bind:lastName="artist.lastName"
              v-bind:nationality="artist.nationality"
              v-bind:birthDate="artist.birthDate"
              v-on:deleteArtistById='deleteArtistById'/>
      </div>

    <AddArtistDialog v-if="showAddArtistDialog"
                    v-on:cancel='showAddArtistDialog=false'
                    v-on:addArtist='addArtist'/>
                    
    </div>
  </div>
</template>


<script>
  // Import Components
  import ArtistCardComponent from '@/components/ArtistCard.vue'
  import AddArtistDialog from '@/components/AddArtist.vue'

  export default {
    name: 'ArtistListPage',
    components:{
      ArtistCardComponent,
      AddArtistDialog
    },
    data() {
      return {
        artists: [],
        showAddArtistDialog : false
      }
    },
    mounted(){
      this.axios.get("http://localhost:3736/api/artists/")
      .then(response=>{
        this.showAddArtistDialog =false;
        window.console.log(response.data);
        this.artists = response.data.data
      });
    },
    methods: {
      // Decomment the following function for do the question 2
      // addArtist(artist){
      //   // TODO question 2
      // }
      addArtist(artist){
          this.axios
          .post("http://localhost:3736/api/artists/", artist) 
            .then( response => {
                this.firstName =response.firstName,
                this.lastName = response.lastName,
                this.birthDate = response.birthDate,
                this.nationality = response.nationality,
                this.showAddArtistDialog = false;
              

             })
      }

      // Decomment the following function for do the question 3
      // deleteArtistById(artistId) {
      //   // TODO question 3
      // },
    }
  }
</script>

<style lang="scss" scoped>

  .artists_list_page{
    height: 100%;
    display:grid;
    grid-template-columns: 1fr 2fr 65px;
    grid-template-rows: 50px 1fr;
    grid-template-areas: 
      "instruction titlePage addBtn"
      "instruction artistsList artistsList"
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

  .add_artist_btn{
    grid-area: addBtn;
    align-self: center;
  }
  
  .result_part{
    grid-area: artistsList;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
  }

</style>