const express = require('express')
const router = express.Router()
var data_donasi = require('../datas/donasi.json')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// all data
router.get('/', (req, res) => {
  res.status(200).send(data_donasi)
})

// specific data
router.get('/:id_donasi', (req, res) => {
  let donasi_dicari = data_donasi.find(
    (x) => x.id === parseInt(req.params.id_donasi),
  )

  // jika data tidak ditemukan
  if (donasi_dicari == null) {
    res.status(418).send({ message: 'Data Tidak Ditemukan!' })
  }
  res.send(donasi_dicari)
})

module.exports = router
