<template>
  <div>
   <v-layout>
    <v-flex xs6>
      <song-metadata :song="song"/>
</v-flex>
<v-flex xs6>
  <youtube-video :youtubeId="song.youtubeId"/>
  </v-flex>
</v-layout>
<br>
<v-layout>
<v-flex xs6>
  <tabs :song="song"/>
  </v-flex>
<v-flex xs6>
  <lyrics :song="song"/>
   </v-flex>
  </v-layout>
 </div>
</template>

<script>
import {mapState} from 'vuex'
import SongMetadata from './SongMetadata'
import YoutubeVideo from './YoutubeVideo'
import Lyrics from './Lyrics'
import Tabs from './Tabs'
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data
    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  },
  components: {
    SongMetadata,
    YoutubeVideo,
    Lyrics,
    Tabs
  }
}
</script>
<style scoped>
</style>
