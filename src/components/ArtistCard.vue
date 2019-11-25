<template>
  <div class="artist_card">
    <div class="artists_name">
      {{firstName}} <br/>
      {{lastName}}
    </div>
    <div class="nationality subtitle"> Nationality : {{nationality}}  </div>
    <div class="birth_date subtitle"> {{birthDate | formatDate}}</div>
    <md-button class="md-accent delete_btn"
              v-on:click="$emit('deleteArtistById', id)">
        Delete
    </md-button>
  </div>
</template>

<script>
  export default {
    name: 'ArtistCardComponent',
    props: {
      id: String,
      firstName: String,
      lastName: String,
      nationality: String,
      birthDate: String,
    }
  }
</script>

<style scoped>
    .artist_card{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        height: 150px;
        width: 300px;
        display: grid;
        padding: 10px 10px 0px 10px;
        grid-row-gap: 8px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        align-items: center;
        grid-template-areas: 
            "artistName artistName"
            "nationality birthDate "
            "deleteBtn deleteBtn "
    }

    .artists_name{
        grid-area: artistName;
        font-size: 20px;
        text-align: center;
        color: var(--txt-dark-color);
    }
    .nationality{
        grid-area: nationality;
    }
    .birth_date{
        grid-area: birthDate;
        justify-self: end;
    }
    .delete_btn{
        grid-area: deleteBtn;
    }
    .subtitle{
        color: var(--text-grey);
        font-weight: 200;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>