module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}! NEW user has been Register! Have Fun!!`
    })
  })
}
