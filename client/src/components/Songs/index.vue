<template>
  <v-layout column>
    <songs-search-panel />
      <songs-panel class= "mt-3"/>
  </v-layout>
</template>

<script>
import SongsSearchPanel from './SongsSearchPanel'
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  data () {
    return {
      Songs: null
    }
  },
  async mounted () {
    this.Songs = (await SongsService.index()).data
  }
}
</script>
<style scoped>
.Song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.Song-title {
  font-size: 30px;
}
.Song-artist {
  font-size: 24px;
}
.Song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
