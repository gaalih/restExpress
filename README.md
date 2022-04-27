# Rest API

#### _Framework: Express.js_

merupakan rest API yang dibuat untuk memenuhi proses assignment test di Ruang Talenta.

## Routes

Berikut ini merupakan list dari semua routes yang dibuat.
rout terbagi menjadi beberapa bagian sesuai applikasi, diantaranya:

#### 1. Program

| Method | Routes                                   | Description                                                                                  | Example                                          |
| ------ | ---------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| GET    | /program                                 | mendapatkan semua data dari program                                                          | http://localhost:8080/program                    |
| GET    | /program/:id_program                     | mendapatkan data detail dari program yang dipilih                                            | http://localhost:8080/program/2                  |
| GET    | /program/categories                      | mendapatkan data kategori yang ada di program                                                | http://localhost:8080/categories                 |
| GET    | /program/category/:category_name         | mendapatkan data program yang termasuk kedalam kategori pilihan kategori yang ada di program | http://localhost:8080/program/category/kesehatan |
| GET    | /program/search/judul=:cari_nama_program | melakukan pencarian data program berdasarkan judul                                           | http://localhost:8080/program/search/judul=puasa |

#### 2. Berita

| Method | Routes             | Description                                      | Example                        |
| ------ | ------------------ | ------------------------------------------------ | ------------------------------ |
| GET    | /berita            | mendapatkan semua data berita                    | http://localhost:8080/berita   |
| GET    | /berita/:id_berita | mendapatkan data detail dari berita yang dipilih | http://localhost:8080/berita/2 |

#### 3. Donatur

| Method | Routes               | Description                                                           | Example                                                                                                                           |
| ------ | -------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /donatur             | mendapatkan semua data donatur yang terdaftar                         | http://localhost:8080/donatur                                                                                                     |
| GET    | /donatur/:id_donatur | mendapatkan data detail dari donatur yang dipilih                     | http://localhost:8080/donatur/2                                                                                                   |
| POST   | /donatur/add         | melakukan insert data donatur baru. data yang dikirim berformat json. | http://localhost:8080/donatur/add Data yang di kirim adalah : {"nama_lengkap": "Nama lengkap","hp_email": "NomorHp/alamat email"} |

#### 4. Donasi

| Method | Routes                              | Description                                                          | Example                                                                                                                                        |
| ------ | ----------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /donasi                             | mendapatkan semua data donasi yang telah dilakukan                   | http://localhost:8080/donasi                                                                                                                   |
| GET    | /donasi/:id_user                    | mendapatkan data detail donasi dari donatur yang dipilih             | http://localhost:8080/donasi/1                                                                                                                 |
| POST   | /donasi/add/:id_program/:id_donatur | melakukan insert data donasi baru. data yang dikirim berformat json. | http://localhost:8080/donasi/add/2/1 Data yang di kirim adalah : {"visibility": "sembunyikan","total_donasi": 50397,"id_metode_pembayaran": 1} |

#### 5. Metode Pembayaran

| Method | Routes                               | Description                                                                                     | Example                                                                                                                                   |
| ------ | ------------------------------------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /metode_pembayaran                   | mendapatkan semua data metode pembayaran yang tersia                                            | http://localhost:8080/metode_pembayaran                                                                                                   |
| GET    | /metode_pembayaran/:id_metode        | mendapatkan data detail metode pembayaran yang dipilih                                          | http://localhost:8080/metode_pembayaran/1                                                                                                 |
| POST   | /metode_pembayaran/add               | melakukan insert data metode pembayaran baru. data yang dikirim berformat json.                 | http://localhost:8080/metode_pembayaran/add Data yang di kirim adalah : {"nama_metode_pembayaran":"Dana","nomor_rekening": "121212"}      |
| PUT    | /metode_pembayaran/update/:id_metode | melakukan perubahan data pada metode pembayaran yang dipilih. data yang dikirim berformat json. | http://localhost:8080/metode_pembayaran/update/1 Data yang di kirim adalah : {"nama_metode_pembayaran":"Dana","nomor_rekening": "121212"} |
| DELETE | /metode_pembayaran/delete/:id_metode | melakukan penghapusan data pada metode pembayaran yang dipilih.                                 | http://localhost:8080/metode_pembayaran/delete/1                                                                                          |
