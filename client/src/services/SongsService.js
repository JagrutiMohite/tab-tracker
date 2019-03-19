import Api from '@/services/Api'

export default{
  index (search) {
    return Api().get('Songs', {
      params: {
        search: search
      }
    })
  },
  show (songId) {
    return Api().get(`Songs/${songId}`)
  },
  put (song) {
    return Api().put(`Songs/${song.id}`, song)
  },
  post (song) {
    return Api().post('Songs', song)
  }
}
