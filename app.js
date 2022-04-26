const express = require('express')
const app = express()
const port = 8080

// Routes Modules
const program = require('./modules/program')
const berita = require('./modules/berita')
const donasi = require('./modules/donasi')

app.use('/program', program)
app.use('/berita', berita)
app.use('/donasi', donasi)

// using middleware
// parsing data to json
app.use(express.json())

//ROUTES
app.get('/', (req, res) => {
  res.send('Selamat datang di halaman Awal')
})

app.get('/nama/:nama', (req, res) => {
  const { nama } = req.params

  if (!nama) {
    res.status(418).send({ message: 'data tidak dapat ditemukan' })
  }
  res.status(200).send({
    nama: `nama anda ${nama}`,
  })
})

//Listening to the server
app.listen(port, () =>
  console.log(`Akses API pada URL http://localhost:${port}`),
)
