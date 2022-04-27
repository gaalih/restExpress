const express = require('express')
const router = express.Router()
var data_donatur = require('../datas/donatur.json')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// all data
router.get('/', (req, res) => {
  res.status(200).send(data_donatur)
})

// specific data
router.get('/:id_donatur', (req, res) => {
  let donatur_dicari = data_donatur.find(
    (x) => x.id_donatur === parseInt(req.params.id_donatur),
  )

  // jika data tidak ditemukan
  if (donatur_dicari == null) {
    res.status(418).send({ message: 'Data Donatur Tidak Ditemukan!' })
  }
  res.send(donatur_dicari)
})

// insert donatur
router.post('/add', (req, res) => {
  const data_donatur = req.body

  var data_disimpan = {
    message: 'Data berhasil disimpan',
    data: {
      id_donatur: Date.now(),
      nama_lengkap: data_donatur['nama_lengkap'],
      hp_email: data_donatur['hp_email'],
    },
  }

  // jika data tidak lengkap
  if (!data_donatur) {
    res.status(418).send({ message: 'Data Yang Anda Kirimkan Tidak Lengkap.' })
  }
  res.status(200).send(data_disimpan)
})

module.exports = router
