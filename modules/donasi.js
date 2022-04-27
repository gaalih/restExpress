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

// specific data from specific user
router.get('/:id_user', (req, res) => {
  const donasi_dicari = data_donasi.find(
    (x) => x.id_donatur === parseInt(req.params.id_user),
  )

  // jika data tidak ditemukan
  if (donasi_dicari == null) {
    res.status(418).send({ message: 'Data Donasi Tidak Ditemukan!' })
  }
  res.send(donasi_dicari)
})

// insert donation
router.post('/add/:id_program/:id_donatur', (req, res) => {
  const { id_program } = req.params
  const { id_donatur } = req.params
  const data_donasi = req.body

  var data_disimpan = {
    message: 'Data berhasil disimpan',
    data: {
      id_donatur: id_program,
      visibility: data_donasi['visibility'],
      id_donasi_program: id_program,
      kode_donasi: Date.now(),
      total_donasi: data_donasi['total_donasi'],
      id_metode_pembayaran: data_donasi['id_metode_pembayaran'],
      tgl_donasi: Date(),
      status_pembayaran: 'menunggu',
    },
  }

  // jika data tidak lengkap
  if (!data_donasi || !id_donatur || !id_program) {
    res.status(418).send({ message: 'Data Yang Anda Kirimkan Tidak Lengkap.' })
  }
  res.status(200).send(data_disimpan)
})

module.exports = router
