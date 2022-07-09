<template>
<div id="app">
  <gallery
    :images="nfts"
    :index="index"
    @close="index = null">
  </gallery>

  <v-card
    class="image"
    v-for="(image, imageIndex) in nfts"
    :key="imageIndex"
    max-width="344"
    
  >
    <v-img
      :src="image.urlThumbnail"
      height="200px"
      @click="index = imageIndex"
    ></v-img>

    <v-card-title>
      {{image.name}}
    </v-card-title>

    <v-card-subtitle>
      $ {{image.USDPrice}}
    </v-card-subtitle>

<!--     <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition> -->
  </v-card>
</div>
</template>

<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    components: {
      'gallery': VueGallery
    },
    props: {
      payload: {
        required: false,
        type: Array
      }
    },
    data: function() {
      return {
        nfts: null,
        index: null
      }
    },
    computed: {
      images () {
        return this.payload.map(el => el.url)
      }
    },
    mounted () {
      console.log(this.payload)
      this.nfts = this.payload.map((el) => {
        return { ...el, description: `$${el.USDPrice}`, title: el.name, href: el.url}
      })
    }
  }
</script> 

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>