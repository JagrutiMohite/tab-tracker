<template>
   <v-layout>
    <v-flex xs8 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2" />
    </v-flex>

    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs8: isUserLoggedIn
      }">
    <songs-search-panel />
      <songs-panel class= "mt-3"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
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
