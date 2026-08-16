# Panduan Direktori UMKM Desa

Situs statis, tanpa server dan tanpa proses build. Cukup salin folder ini ke repositori GitHub, aktifkan GitHub Pages, selesai.

---

## 1. Isi folder

```
direktori-umkm/
├── index.html          ← beranda / dashboard (denah dusun + pencarian)
├── dusun.html          ← daftar dusun, dan isi satu dusun lewat ?d=slug
├── tentang.html        ← contoh halaman biasa
├── TEMPLATE.html       ← salin file ini setiap membuat halaman baru
├── PANDUAN.md          ← berkas yang sedang Anda baca
└── assets/
    ├── css/tema.css    ← SATU-SATUNYA tempat warna, huruf, dan komponen
    ├── js/data.js      ← SATU-SATUNYA tempat data dusun & UMKM
    ├── js/situs.js     ← identitas desa, header, footer, fungsi bantu
    └── img/            ← foto usaha (opsional)
```

Kunci konsistensinya ada di tiga berkas: **tema.css** (tampilan), **situs.js** (kerangka), **data.js** (isi). Halaman HTML hanya menyusun, bukan menyimpan.

---

## 2. Menjalankan di komputer sendiri

Klik dua kali `index.html`. Selesai — tidak perlu server lokal.

Data sengaja disimpan sebagai berkas JavaScript (`data.js`), bukan JSON. Kalau memakai JSON, browser memblokir pembacaan berkas saat dibuka langsung dari folder, sehingga halaman tampak kosong sampai diunggah. Cara ini menghindari masalah itu.

---

## 3. Menaikkan ke GitHub Pages

1. Buat repositori baru, misalnya `umkm-desa`.
2. Unggah **isi** folder ini ke akar repositori, jadi `index.html` berada paling atas — bukan di dalam subfolder.
3. Buka **Settings → Pages**.
4. Bagian *Source* pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
5. Tunggu satu sampai dua menit. Alamatnya: `https://namaakun.github.io/umkm-desa/`

Semua tautan sudah relatif (`assets/css/tema.css`, `dusun.html`), jadi tetap jalan meski situs berada di dalam subfolder repositori. Jangan mengubahnya menjadi diawali garis miring (`/assets/...`) — itu akan rusak di GitHub Pages.

---

## 4. Mengubah identitas desa

Buka `assets/js/situs.js`, bagian paling atas:

```js
const SITUS = {
  namaDesa:   "Desa Sukamaju",
  kecamatan:  "Kecamatan Ngawen",
  kabupaten:  "Kabupaten Blora",
  lambang:    "SM",            // dua huruf di kotak kuning header
  tahunData:  "Agustus 2026",
  narahubung: "Sekretariat Desa Sukamaju",
  telepon:    "081234500000",
  email:      "umkm@sukamaju.desa.id",
  menu: [ ... ]                // menu navigasi
};
```

Satu kali diubah, header dan footer di **semua** halaman ikut berubah.

---

## 5. Menambah atau mengubah UMKM

Buka `assets/js/data.js`, tambahkan satu baris di dalam `UMKM`:

```js
{ id: "kr-11", nama: "Warung Sate Pak Ali", pemilik: "Ali Mustofa",
  dusun: "krajan", kategori: "Kuliner",
  deskripsi: "Sate ayam dan kambing, buka setiap malam.",
  telepon: "081234500111", alamat: "RT 05 / RW 01", jam: "17.00 – 23.00" },
```

Yang perlu dijaga:

| Kolom | Aturan |
|---|---|
| `id` | unik, tidak boleh sama dengan yang lain |
| `dusun` | harus persis sama dengan `slug` salah satu dusun |
| `kategori` | pakai kategori yang sudah ada bila cocok, agar penyaringan tidak pecah |
| `telepon` | format `08xxxx`, otomatis diubah jadi tautan WhatsApp |

Angka pada beranda, denah, footer, dan penyaring kategori dihitung otomatis. Tidak ada angka yang perlu diperbarui manual.

**Menambah dusun ke-7 dan seterusnya:** tambahkan objek di `DUSUN` dengan `peta` berupa kode blok baru, lalu tambahkan bentuk petaknya di `index.html` pada objek `PETAK` (`d` = jalur SVG, `x`/`y` = titik tulisan). Kalau tidak ingin repot menggambar petak, dusun tanpa entri di `PETAK` tetap muncul di kartu dan daftar — hanya tidak muncul di denah.

---

## 6. Membuat halaman baru dengan tema yang sama

Jangan menulis halaman dari nol. **Salin `TEMPLATE.html`**, ganti namanya, isi bagian `<main>`.

Lima baris di template ditandai `[WAJIB]` — selama kelimanya tidak dihapus, halaman baru otomatis mendapat huruf, warna, header, footer, dan komponen yang sama:

```html
<link ... fonts.googleapis.com ...>            <!-- huruf -->
<link rel="stylesheet" href="assets/css/tema.css">
<header data-situs-header></header>            <!-- diisi situs.js -->
<footer data-situs-footer></footer>            <!-- diisi situs.js -->
<script src="assets/js/data.js"></script>
<script src="assets/js/situs.js"></script>     <!-- urutan jangan dibalik -->
```

Lalu daftarkan halaman baru ke menu di `SITUS.menu` agar bisa dijangkau.

### Empat aturan supaya tema tidak melenceng

1. **Jangan pernah menulis `#hex` baru di halaman.** Selalu `var(--nila)`, `var(--kunyit)`, `var(--kapur-terang)`, dan seterusnya. Kalau butuh warna yang belum ada, tambahkan tokennya di `tema.css`, bukan di halaman.
2. **Jarak antarbagian memakai `class="bagian"`.** Jangan menulis `padding` sendiri per bagian — itu penyebab paling umum halaman terlihat berbeda ritmenya.
3. **Pakai komponen yang sudah ada** sebelum membuat yang baru: `.kartu`, `.pil`, `.tombol`, `.eyebrow`, `.kisi--2/3/4`, `.kosong`, `.remah`, `.data`.
4. **CSS khusus halaman ditulis di `<style>` halaman itu**, dengan nama kelas khas halaman tersebut (`.langkah`, `.denah`), supaya tidak menimpa gaya halaman lain. Yang dipakai lebih dari satu halaman dipindahkan ke `tema.css`.

### Komponen siap pakai

```html
<p class="eyebrow">Label kecil</p>              <!-- label mono di atas judul -->
<div class="kisi kisi--3"> … </div>             <!-- grid otomatis -->
<article class="kartu"> … </article>
<a class="kartu kartu--tautan" href="#"> … </a> <!-- kartu yang bisa diklik -->
<a class="tombol" href="#">Aksi</a>
<a class="tombol tombol--garis" href="#">Aksi kedua</a>
<span class="pil">Label</span>
<div class="kosong"><h3>Belum ada isi</h3></div>
<section class="bagian bagian--gelap"> … </section>
```

### Fungsi siap pakai (dari `situs.js`)

```js
Situs.dusun("krajan")        // data satu dusun
Situs.umkmDusun("krajan")    // daftar UMKM di dusun itu
Situs.jumlah("krajan")       // jumlah UMKM
Situs.kategori(daftar)       // [{nama, jml}] terurut
Situs.kartuUmkm(umkm)        // HTML kartu UMKM
Situs.kartuDusun(dusun)      // HTML kartu dusun
Situs.wa("081234500101")     // https://wa.me/6281234500101
Situs.param("d")             // isi ?d= pada alamat
Situs.aman(teks)             // amankan teks sebelum ditempel ke HTML
```

---

## 7. Catatan desain

Bahan tema diambil dari benda sehari-hari desa, bukan dari palet acak:

| Token | Warna | Asal |
|---|---|---|
| `--kapur` | `#E9EDE3` | tembok kapur |
| `--nila` | `#142A3F` | pewarna indigo |
| `--pandan` | `#3F7A56` | daun pandan |
| `--kunyit` | `#E0A126` | kunyit, dipakai hemat sebagai penanda |

Huruf: **Bricolage Grotesque** untuk judul (bentuknya sedikit tidak rapi, seperti papan nama tulis tangan), **Plus Jakarta Sans** untuk teks (huruf buatan perancang Indonesia), **IBM Plex Mono** untuk label dan angka.

Elemen utama beranda adalah **denah dusun**: enam petak yang saling bersinggungan seperti peta bidang tanah, bukan daftar biasa. Mengarahkan kursor ke satu petak akan menyorot kartu dusun terkait di bawahnya, dan sebaliknya. Denah ini skematik — bukan peta berukuran sebenarnya. Bila nanti ingin memakai peta asli, gantilah jalur SVG pada objek `PETAK` di `index.html` tanpa mengubah bagian lain.

---

## 8. Yang bisa ditambahkan berikutnya

- `umkm.html?id=kr-01` — halaman detail per usaha, lengkap dengan foto dan peta lokasi.
- Foto usaha: simpan di `assets/img/`, tambahkan kolom `foto: "assets/img/kr-01.jpg"` di `data.js`, lalu tampilkan di `Situs.kartuUmkm`.
- Penyaringan menurut kategori di beranda.
- Berkas `sitemap.xml` sederhana agar mudah ditemukan mesin pencari.
