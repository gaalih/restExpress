const express = require('express')
const router = express.Router()
var data_program = require('../datas/program.json')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Access Date: ', Date.now())
  next()
})

// all data
router.get('/', (req, res) => {
  res.status(200).send(data_program)
})

// all categories
router.get('/categories', (req, res) => {
  let results = []
  for (let i = 0; i < data_program.length; i++) {
    results.push(data_program[i]['kategori'])
  }
  results = [...new Set(results)]
  res.status(200).send(results)
})

// search from specific category
router.get('/category/:category_name', (req, res) => {
  const { category_name } = req.params
  let results = []
  for (let i = 0; i < data_program.length; i++) {
    if (data_program[i]['kategori'] == category_name) {
      results.push(data_program[i])
    }
  }

  if (results.length === 0 || category_name == null) {
    res.status(418).send({
      message: `Data Dengan Kategori ${category_name} Tidak Ditemukan!`,
    })
  }
  res.status(200).send(results)
})

// specific data from id
router.get('/:id_program', (req, res) => {
  const program_dipilih = data_program.find(
    (x) => x.id === parseInt(req.params.id_program),
  )
  // jika data tidak ditemukan
  if (program_dipilih == null) {
    res.status(418).send({ message: 'Data Program Tidak Ditemukan!' })
  }
  res.status(200).send(program_dipilih)
})

// search some data from judul
router.get('/search/judul=:cari_nama_program', (req, res) => {
  const { cari_nama_program } = req.params
  let results = []
  for (let i = 0; i < data_program.length; i++) {
    let judul = data_program[i]['judul']
    if (judul.includes(`${cari_nama_program}`)) {
      results.push(data_program[i])
    }
  }
  // jika data tidak ditemukan
  if (results.length === 0 || cari_nama_program == null) {
    res
      .status(418)
      .send({ message: `Data Program ${cari_nama_program} Tidak Ditemukan!` })
  }
  res.status(200).send(results)
})

module.exports = router
