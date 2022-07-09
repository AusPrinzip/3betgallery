<template>
  <v-container>
    <v-row class="text-center">
      <GallerySample v-if="nfts" :payload="nfts"/>
    </v-row>
  </v-container>
</template>

<script>
  import GallerySample from "@/components/GallerySample.vue"
  export default {
    name: 'HelloWorld',
    components: {
      GallerySample
    },
    data: () => ({
      nfts: null
    }),
    async mounted () {
      this.nfts = await this.axios
        .get(`https://api.airnfts.com/v1/nfts/search?keywords=Sublow`)
        .then(response => response.data.nftSearchData)
    }
  }
</script>
