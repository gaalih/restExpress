const express = require('express')
const app = express()
const port = 8080

// using middleware
// parsing data to json
app.use(express.json())

// Routes Modules
const program = require('./modules/program')
const berita = require('./modules/berita')
const donatur = require('./modules/donatur')
const donasi = require('./modules/donasi')
const metode_pembayaran = require('./modules/metode_pembayaran')

app.use('/program', program)
app.use('/berita', berita)
app.use('/donatur', donatur)
app.use('/donasi', donasi)
app.use('/metode_pembayaran', metode_pembayaran)

//ROUTES
app.get('/', (req, res) => {
  res.send('Ini adalah Rest API untuk assesment test di ada ruang talenta')
})

//Listening to the server
app.listen(port, () =>
  console.log(`Akses API pada URL http://localhost:${port}`),
)
