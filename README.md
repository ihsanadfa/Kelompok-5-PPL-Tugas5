# Comic Management API

Aplikasi manajemen komik sederhana yang dibangun menggunakan AdonisJS, MySQL, dan Bootstrap. Aplikasi ini menyediakan API untuk mengelola data komik dan dilengkapi dengan antarmuka pengguna (UI) yang responsif.

## Fitur

- **API Endpoints**:
  - `GET /comics` - Melihat semua data komik
  - `GET /comics/:id` - Melihat detail komik berdasarkan ID
  - `POST /comics` - Menambah komik baru
  - `PUT /comics/:id` - Mengupdate data komik
  - `DELETE /comics/:id` - Menghapus data komik

- **Antarmuka Pengguna**:
  - Form untuk menambah komik baru
  - Daftar komik dalam tampilan card
  - Fitur edit dan hapus komik
  - Desain responsif menggunakan Bootstrap 5

## Teknologi yang Digunakan

- **Backend**:
  - AdonisJS (Node.js Framework)
  - MySQL (Database)
  - Lucid ORM (Object-Relational Mapping)

- **Frontend**:
  - HTML5
  - CSS3 (Bootstrap 5)
  - JavaScript (Vanilla)

## Struktur Data

Model Comic memiliki atribut berikut:
- `id` (Primary Key)
- `title` (Judul komik)
- `author` (Penulis)
- `genre` (Genre)
- `description` (Deskripsi)
- `releaseYear` (Tahun rilis)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

## Cara Menjalankan Aplikasi

1. **Persiapan**:
   - Install Node.js
   - Install MySQL
   - Clone repository ini

2. **Konfigurasi Database**:
   - Buat database baru di MySQL
   - Sesuaikan konfigurasi database di file `.env`:
     ```
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_USER=root
     DB_PASSWORD=your_password
     DB_DATABASE=your_database_name
     ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Jalankan Migrasi**:
   ```bash
   node ace migration:run
   ```

5. **Jalankan Server**:
   ```bash
   node ace serve --watch
   ```

6. **Akses Aplikasi**:
   - Buka browser dan akses `http://localhost:3333`
   - Atau gunakan Postman untuk mengakses API endpoints

## Penggunaan API

### 1. Melihat Semua Komik
```http
GET http://localhost:3333/comics
```

### 2. Melihat Detail Komik
```http
GET http://localhost:3333/comics/:id
```

### 3. Menambah Komik Baru
```http
POST http://localhost:3333/comics
Content-Type: application/json

{
    "title": "One Piece",
    "author": "Eiichiro Oda",
    "genre": "Adventure",
    "description": "Manga tentang petualangan bajak laut",
    "releaseYear": 1997
}
```

### 4. Mengupdate Komik
```http
PUT http://localhost:3333/comics/:id
Content-Type: application/json

{
    "title": "One Piece",
    "author": "Eiichiro Oda",
    "genre": "Adventure",
    "description": "Manga tentang petualangan bajak laut",
    "releaseYear": 1997
}
```

### 5. Menghapus Komik
```http
DELETE http://localhost:3333/comics/:id
```

## Kontributor

- M. Ihsan Rizqullah Adfa (2208107010029)
- Nashed Bayazid Ali (2208107010049)
- Arif Maulana (2208107010067)

## Lisensi

Proyek ini dibuat untuk memenuhi tugas Pemrograman Perangkat Lunak (PPL) Semester 6. 