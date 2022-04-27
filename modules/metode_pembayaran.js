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
    (x) => x.id_metode_pembayaran === parseInt(req.params.id_metode),
  )

  // jika data tidak ditemukan
  if (metode_dipilih == null) {
    res.status(418).send({ message: 'Metode Pembayaran Tidak Ditemukan!' })
  }
  res.send(metode_dipilih)
})

// insert metode pembayaran
router.post('/add', (req, res) => {
  const data_metode = req.body

  let data_disimpan = {
    message: 'Data berhasil disimpan',
    data: {
      id_metode_pembayaran: Date.now(),
      nama_metode_pembayaran: data_metode['nama_metode_pembayaran'],
      nomor_rekening: data_metode['nomor_rekening'],
    },
  }

  // jika data tidak lengkap
  if (!data_metode) {
    res.status(418).send({ message: 'Data Yang Anda Kirimkan Tidak Lengkap.' })
  }
  res.status(200).send(data_disimpan)
})

// update metode pembayaran
router.put('/update/:id_metode', (req, res) => {
  const { id_metode } = req.params
  const data_metode = req.body

  let data_disimpan = {
    message: `Data: ${id_metode} berhasil diubah`,
    data: {
      nama_metode_pembayaran: data_metode['nama_metode_pembayaran'],
      nomor_rekening: data_metode['nomor_rekening'],
    },
  }

  // jika data tidak lengkap
  if (!data_metode) {
    res.status(418).send({ message: 'Data Yang Anda Kirimkan Tidak Lengkap.' })
  }
  res.status(200).send(data_disimpan)
})

router.delete('/delete/:id_metode', (req, res) => {
  const { id_metode } = req.params

  // jika data tidak lengkap
  if (!id_metode) {
    res.status(418).send({ message: 'Data Yang Anda Cari Tidak Tersidia.' })
  }
  res.status(200).send({ message: `Data: ${id_metode} berhasil dihapus` })
})

module.exports = router
