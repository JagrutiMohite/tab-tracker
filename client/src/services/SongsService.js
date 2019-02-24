import Api from '@/services/Api'

export default{
  index () {
    return Api().get('Songs')
  },
  post (song) {
    return Api().post('Songs', song)
  }
}
