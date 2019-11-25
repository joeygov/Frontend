<template>
  <div class="add_artists_dialog">
    
    <div class="modal_title">
        Add Artist
    </div>

    <md-field class="first_name">
        <label>First name</label>
        <md-input v-model="artist.firstName" required></md-input>
    </md-field>
    <md-field class="last_name">
        <label>Last name</label>
        <md-input v-model="artist.lastName" required></md-input>
    </md-field>
    <md-field class="nationality">
        <label>Nationality</label>
        <md-input v-model="artist.nationality" required></md-input>
    </md-field>
    <md-datepicker class="birth_date" v-model="artist.birthDate">
        <label>Birth Date</label>
    </md-datepicker>

    <md-button class="md-primary cancel_btn" 
               v-on:click="$emit('cancel')">
        Cancel
    </md-button>
    <md-button class="md-primary add_btn" 
               v-on:click="$emit('addArtist', artist)">
        Add Artist
    </md-button>

  </div>
</template>

<script>
  export default {
    name: 'AddArtistDialog',
    data() {
      return {
        artist:{
          firstName: null,
          lastName: null,
          birthDate: null,
          nationality: null,
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
    .add_artists_dialog{
        position: absolute;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: auto;
        width: 600px;
        height: 250px;
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
        grid-template-rows: min-content min-content min-content min-content;
        grid-template-areas: 
        "modalTitle modalTitle"
        "firstName lastName"
        "nationality birthDate"
        "cancelBtn addBtn";

        .modal_title{ 
            grid-area : modalTitle;
            font-size: 24px;
            color: var(--txt-dark-color);
            align-self: center;
        }

        .first_name{grid-area : firstName;}
        .last_name{grid-area : lastName;}
        .nationality{grid-area : nationality;}
        .birth_date{grid-area : birthDate;}
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