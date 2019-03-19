<template>
  <v-layout column>
    <v-flex>
      <panel title="Songs">
          <v-btn
            slot="action"
            :to="{
        name: 'songs-create'
        }"
            fab
            class="blue darken-2"
            dark
            small
            absolute
            right
            middle>
           <v-icon>add</v-icon>
          </v-btn>
        <div v-for="Song in Songs"
        class="Song"
        :key="Song.id">

        <v-layout>
          <v-flex xs6>
            <div class="Song-title">
              {{Song.title}}
            </div>
            <div class="Song-artist">
              {{Song.artist}}
            </div>
            <div class="Song-genre">
              {{Song.genre}}
            </div>
            <v-btn
            dark
            class="cyan"
            :to="{
        name: 'Songs',
          params: {songId: Song.id}
        }">
            View
            </v-btn>
          </v-flex>

          <v-flex xs6>
            <img class="album-image" :src="Song.albumImage" />
          </v-flex>
        </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      Songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.Songs = (await SongsService.index(value)).data
      }
    }
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
