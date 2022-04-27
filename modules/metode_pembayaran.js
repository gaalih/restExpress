const express = require('express')
const router = express.Router()
var metode_pembayaran = require('../datas/metode_pembayaran.json')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// all data
router.get('/', (req, res) => {
  res.status(200).send(metode_pembayaran)
})

// specific data
router.get('/:id_metode', (req, res) => {
  let metode_dipilih = metode_pembayaran.find(
    (x) => x.id === parseInt(req.params.id_metode),
  )

  // jika data tidak ditemukan
  if (metode_dipilih == null) {
    res.status(418).send({ message: 'Metode Pembayaran Tidak Ditemukan!' })
  }
  res.send(metode_dipilih)
})

module.exports = router
