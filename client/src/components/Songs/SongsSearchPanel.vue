<template>
  <v-layout>
    <v-flex>
      <panel title="Search">
        <v-text-field
        label="Search by title, artist, album and genre"
        v-model="search"
        ></v-text-field>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
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
