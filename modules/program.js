const express = require('express')
const router = express.Router()
var data_program = require('../datas/program.json')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// all data
router.get('/', (req, res) => {
  res.status(200).send(data_program)
})

// specific data
router.get('/:id_program', (req, res) => {
  let program_dicari = data_program.find(
    (x) => x.id === parseInt(req.params.id_program),
  )

  // jika data tidak ditemukan
  if (program_dicari == null) {
    res.status(418).send({ message: 'Data Program Tidak Ditemukan!' })
  }
  res.send(program_dicari)
})

module.exports = router
