const express = require('express')
const router = express.Router()
var data_berita = require('../datas/berita.json')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// all data
router.get('/', (req, res) => {
  res.status(200).send(data_berita)
})

// specific data
router.get('/:id_berita', (req, res) => {
  let berita_dicari = data_berita.find(
    (x) => x.id === parseInt(req.params.id_berita),
  )

  // jika data tidak ditemukan
  if (berita_dicari == null) {
    res.status(418).send({ message: 'Data Tidak Ditemukan!' })
  }
  res.send(berita_dicari)
})

module.exports = router
