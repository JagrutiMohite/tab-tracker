const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try {
          const songs = await Song.findAll({
              limit: 10
          })
          res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'Error while fetching the song.'
            })
        }
    },
    async post (req, res) {
        try {
          const song = await Song.create(req.body)
          res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'Error while creating a song.'
            })
        }
    }
}