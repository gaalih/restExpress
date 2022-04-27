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
  const berita_dicari = data_berita.find(
    (x) => x.id_berita === parseInt(req.params.id_berita),
  )

  // jika data tidak ditemukan
  if (berita_dicari == null) {
    res.status(418).send({ message: 'Data Berita Tidak Ditemukan!' })
  }
  res.send(berita_dicari)
})

module.exports = router
