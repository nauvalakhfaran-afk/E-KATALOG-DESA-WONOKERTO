/* ============================================================
   DATA DIREKTORI UMKM
   Ini satu-satunya tempat Anda menambah / mengubah data.
   Tidak perlu menyentuh HTML. Setelah diedit, simpan lalu
   push ke GitHub — halaman otomatis ikut berubah.

   Aturan singkat:
   - "slug" dusun harus unik, huruf kecil, tanpa spasi.
   - Setiap UMKM WAJIB punya "dusun" yang sama persis dengan slug dusun.
   - "peta" = kode blok pada denah di beranda (A sampai F).
   - Kolom kosong boleh ditulis "" (string kosong).
   ============================================================ */

const DUSUN = [
  { slug: "krajan",      nama: "Dusun Krajan",      peta: "A", kepala: "Sukarno",        tagline: "Pusat desa, deretan warung dan toko harian." },
  { slug: "sumberrejo",  nama: "Dusun Sumberrejo",  peta: "B", kepala: "Warsito",        tagline: "Kawasan mata air, sentra olahan minuman dan jamu." },
  { slug: "karanganyar", nama: "Dusun Karanganyar", peta: "C", kepala: "Marfuah",        tagline: "Perajin kayu dan bambu turun-temurun." },
  { slug: "sidomulyo",   nama: "Dusun Sidomulyo",   peta: "D", kepala: "Bambang Riyadi", tagline: "Lumbung pertanian dan olahan hasil sawah." },
  { slug: "ngasem",      nama: "Dusun Ngasem",      peta: "E", kepala: "Sri Handayani",  tagline: "Konveksi rumahan dan usaha jasa." },
  { slug: "tegalsari",   nama: "Dusun Tegalsari",   peta: "F", kepala: "Joko Susilo",    tagline: "Peternakan dan produk olahan susu serta telur." }
];

const UMKM = [
  /* ---------- DUSUN KRAJAN ---------- */
  { id: "kr-01", nama: "Warung Bu Tini",            pemilik: "Sutini",           dusun: "krajan", kategori: "Kuliner",   deskripsi: "Nasi pecel dan lauk rumahan, buka sejak subuh untuk sarapan warga.", telepon: "081234500101", alamat: "RT 01 / RW 01, depan balai desa", jam: "05.00 – 11.00" },
  { id: "kr-02", nama: "Toko Sembako Berkah",       pemilik: "Hartono",          dusun: "krajan", kategori: "Toko",      deskripsi: "Kebutuhan pokok harian, gas melon, dan galon isi ulang.", telepon: "081234500102", alamat: "RT 02 / RW 01, Jalan Raya Desa", jam: "06.00 – 21.00" },
  { id: "kr-03", nama: "Bakso Pak Slamet",          pemilik: "Slamet Riyadi",    dusun: "krajan", kategori: "Kuliner",   deskripsi: "Bakso urat dan mi ayam, melayani pesanan untuk hajatan.", telepon: "081234500103", alamat: "RT 02 / RW 01, samping lapangan", jam: "10.00 – 21.00" },
  { id: "kr-04", nama: "Keripik Singkong Mekar",    pemilik: "Yuliana",          dusun: "krajan", kategori: "Kuliner",   deskripsi: "Keripik singkong balado dan original, kemasan 100 gram siap kirim.", telepon: "081234500104", alamat: "RT 03 / RW 01", jam: "08.00 – 17.00" },
  { id: "kr-05", nama: "Fotokopi & ATK Amanah",     pemilik: "Dedi Kurniawan",   dusun: "krajan", kategori: "Jasa",      deskripsi: "Fotokopi, cetak dokumen, laminating, dan alat tulis sekolah.", telepon: "081234500105", alamat: "RT 01 / RW 01, seberang SD", jam: "07.00 – 20.00" },
  { id: "kr-06", nama: "Bengkel Motor Jaya",        pemilik: "Agus Setiawan",    dusun: "krajan", kategori: "Jasa",      deskripsi: "Servis ringan, ganti oli, tambal ban, dan sedia sparepart umum.", telepon: "081234500106", alamat: "RT 04 / RW 01, Jalan Raya Desa", jam: "08.00 – 17.00" },
  { id: "kr-07", nama: "Es Dawet Ayu Mbak Sri",     pemilik: "Sri Rahayu",       dusun: "krajan", kategori: "Minuman",   deskripsi: "Dawet gula aren dengan santan segar, ada gerobak keliling sore hari.", telepon: "081234500107", alamat: "RT 03 / RW 01", jam: "09.00 – 16.00" },
  { id: "kr-08", nama: "Roti Bakar Malam Kita",     pemilik: "Rudi Hartanto",    dusun: "krajan", kategori: "Kuliner",   deskripsi: "Roti bakar dan pisang keju, mangkal di pertigaan tiap malam.", telepon: "081234500108", alamat: "RT 02 / RW 01, pertigaan pasar", jam: "18.00 – 23.00" },
  { id: "kr-09", nama: "Laundry Kilat Sinar",       pemilik: "Nur Aini",         dusun: "krajan", kategori: "Jasa",      deskripsi: "Cuci kiloan dan setrika, selesai satu hari, antar jemput gratis.", telepon: "081234500109", alamat: "RT 04 / RW 01", jam: "07.00 – 19.00" },
  { id: "kr-10", nama: "Katering Dapur Ibu",        pemilik: "Endang Puspita",   dusun: "krajan", kategori: "Kuliner",   deskripsi: "Nasi kotak dan tumpeng untuk rapat, arisan, dan syukuran.", telepon: "081234500110", alamat: "RT 01 / RW 01", jam: "Pesanan H-2" },

  /* ---------- DUSUN SUMBERREJO ---------- */
  { id: "sr-01", nama: "Jamu Gendong Bu Wati",      pemilik: "Suwati",           dusun: "sumberrejo", kategori: "Minuman",  deskripsi: "Kunyit asam, beras kencur, dan temulawak diracik setiap pagi.", telepon: "081234500201", alamat: "RT 01 / RW 02", jam: "05.30 – 10.00" },
  { id: "sr-02", nama: "Air Minum Isi Ulang Tirta", pemilik: "Suryadi",          dusun: "sumberrejo", kategori: "Minuman",  deskripsi: "Depot isi ulang galon dengan penyaringan bertingkat, siap antar.", telepon: "081234500202", alamat: "RT 02 / RW 02, dekat sendang", jam: "06.00 – 20.00" },
  { id: "sr-03", nama: "Sirup Jahe Sumber Hangat",  pemilik: "Lestari",          dusun: "sumberrejo", kategori: "Minuman",  deskripsi: "Sirup jahe merah botolan tanpa pengawet, tahan dua bulan.", telepon: "081234500203", alamat: "RT 02 / RW 02", jam: "08.00 – 16.00" },
  { id: "sr-04", nama: "Tahu Sumber Rasa",          pemilik: "Mulyono",          dusun: "sumberrejo", kategori: "Kuliner",  deskripsi: "Tahu putih dan tahu kuning produksi harian, kirim ke pasar kecamatan.", telepon: "081234500204", alamat: "RT 03 / RW 02", jam: "04.00 – 12.00" },
  { id: "sr-05", nama: "Kopi Bubuk Sendang",        pemilik: "Iwan Setyawan",    dusun: "sumberrejo", kategori: "Minuman",  deskripsi: "Kopi robusta sangrai sendiri, tersedia biji utuh dan bubuk halus.", telepon: "081234500205", alamat: "RT 01 / RW 02", jam: "08.00 – 17.00" },
  { id: "sr-06", nama: "Budidaya Lele Sumber Jaya", pemilik: "Purnomo",          dusun: "sumberrejo", kategori: "Peternakan", deskripsi: "Kolam lele konsumsi dan bibit, panen tiap dua pekan.", telepon: "081234500206", alamat: "RT 04 / RW 02", jam: "07.00 – 16.00" },
  { id: "sr-07", nama: "Peyek Kacang Renyah",       pemilik: "Siti Maryam",      dusun: "sumberrejo", kategori: "Kuliner",  deskripsi: "Peyek kacang dan teri, kemasan toples untuk oleh-oleh.", telepon: "081234500207", alamat: "RT 03 / RW 02", jam: "08.00 – 16.00" },
  { id: "sr-08", nama: "Warung Kopi Cangkruk",      pemilik: "Bagas Pratama",    dusun: "sumberrejo", kategori: "Kuliner",  deskripsi: "Kopi seduh, gorengan, dan tempat kumpul warga selepas magrib.", telepon: "081234500208", alamat: "RT 01 / RW 02", jam: "15.00 – 24.00" },
  { id: "sr-09", nama: "Madu Hutan Sumberrejo",     pemilik: "Tarmuji",          dusun: "sumberrejo", kategori: "Pertanian", deskripsi: "Madu klanceng dan madu hutan botolan, panen terbatas per musim.", telepon: "081234500209", alamat: "RT 04 / RW 02", jam: "08.00 – 17.00" },

  /* ---------- DUSUN KARANGANYAR ---------- */
  { id: "ka-01", nama: "Anyaman Bambu Karya Rukun", pemilik: "Sarmin",           dusun: "karanganyar", kategori: "Kerajinan", deskripsi: "Besek, tampah, dan keranjang bambu, terima pesanan jumlah besar.", telepon: "081234500301", alamat: "RT 01 / RW 03", jam: "07.00 – 16.00" },
  { id: "ka-02", nama: "Mebel Jati Karanganyar",    pemilik: "Sugeng Riyanto",   dusun: "karanganyar", kategori: "Kerajinan", deskripsi: "Kursi, meja, dan lemari kayu jati, bisa dibuat sesuai ukuran.", telepon: "081234500302", alamat: "RT 02 / RW 03", jam: "08.00 – 17.00" },
  { id: "ka-03", nama: "Ukiran Kayu Sanggar Asri",  pemilik: "Wahyu Nugroho",    dusun: "karanganyar", kategori: "Kerajinan", deskripsi: "Hiasan dinding dan papan nama ukir, terima desain khusus.", telepon: "081234500303", alamat: "RT 02 / RW 03", jam: "08.00 – 16.00" },
  { id: "ka-04", nama: "Gerabah Ibu Ngatini",       pemilik: "Ngatini",          dusun: "karanganyar", kategori: "Kerajinan", deskripsi: "Pot tanaman, kendi, dan celengan tanah liat bakar.", telepon: "081234500304", alamat: "RT 03 / RW 03", jam: "07.00 – 15.00" },
  { id: "ka-05", nama: "Sapu Ijuk Berkah Jaya",     pemilik: "Kamto",            dusun: "karanganyar", kategori: "Kerajinan", deskripsi: "Sapu ijuk dan sapu lidi, dikirim ke toko-toko di kecamatan.", telepon: "081234500305", alamat: "RT 01 / RW 03", jam: "07.00 – 16.00" },
  { id: "ka-06", nama: "Batik Tulis Sekar Arum",    pemilik: "Retno Wulandari",  dusun: "karanganyar", kategori: "Kerajinan", deskripsi: "Batik tulis motif desa dengan pewarna alam, kain dan kemeja jadi.", telepon: "081234500306", alamat: "RT 04 / RW 03", jam: "08.00 – 16.00" },
  { id: "ka-07", nama: "Las Ketok Karya Logam",     pemilik: "Heri Susanto",     dusun: "karanganyar", kategori: "Jasa",      deskripsi: "Pagar, teralis, kanopi, dan perbaikan rangka besi.", telepon: "081234500307", alamat: "RT 03 / RW 03", jam: "08.00 – 17.00" },
  { id: "ka-08", nama: "Souvenir Kayu Mini",        pemilik: "Dian Permata",     dusun: "karanganyar", kategori: "Kerajinan", deskripsi: "Gantungan kunci dan suvenir pernikahan berbahan kayu sisa.", telepon: "081234500308", alamat: "RT 04 / RW 03", jam: "09.00 – 16.00" },

  /* ---------- DUSUN SIDOMULYO ---------- */
  { id: "sd-01", nama: "Beras Organik Tani Makmur", pemilik: "Sutrisno",         dusun: "sidomulyo", kategori: "Pertanian", deskripsi: "Beras pandan wangi hasil panen kelompok tani, kemasan 5 dan 10 kilogram.", telepon: "081234500401", alamat: "RT 01 / RW 04", jam: "07.00 – 16.00" },
  { id: "sd-02", nama: "Penggilingan Padi Barokah", pemilik: "Sumadi",           dusun: "sidomulyo", kategori: "Jasa",      deskripsi: "Selep padi dan jagung, buka setiap hari saat musim panen.", telepon: "081234500402", alamat: "RT 02 / RW 04", jam: "06.00 – 17.00" },
  { id: "sd-03", nama: "Emping Melinjo Sari Rasa",  pemilik: "Painem",           dusun: "sidomulyo", kategori: "Kuliner",   deskripsi: "Emping melinjo tipis, tersedia mentah dan siap makan.", telepon: "081234500403", alamat: "RT 02 / RW 04", jam: "07.00 – 15.00" },
  { id: "sd-04", nama: "Kebun Sayur Hidroponik Hijau", pemilik: "Rian Saputra",  dusun: "sidomulyo", kategori: "Pertanian", deskripsi: "Selada, pakcoy, dan kangkung hidroponik, panen segar tiap pekan.", telepon: "081234500404", alamat: "RT 03 / RW 04", jam: "06.00 – 16.00" },
  { id: "sd-05", nama: "Gula Aren Manis Legi",      pemilik: "Karsono",          dusun: "sidomulyo", kategori: "Pertanian", deskripsi: "Gula aren cetak dan gula semut dari nira pohon sendiri.", telepon: "081234500405", alamat: "RT 04 / RW 04", jam: "06.00 – 15.00" },
  { id: "sd-06", nama: "Kripik Pisang Sidomulyo",   pemilik: "Wiwik Handayani",  dusun: "sidomulyo", kategori: "Kuliner",   deskripsi: "Keripik pisang manis dan asin, sudah masuk toko oleh-oleh kota.", telepon: "081234500406", alamat: "RT 01 / RW 04", jam: "08.00 – 16.00" },
  { id: "sd-07", nama: "Pupuk Kompos Subur Tani",   pemilik: "Marno",            dusun: "sidomulyo", kategori: "Pertanian", deskripsi: "Pupuk kandang dan kompos olahan, dijual karungan untuk petani.", telepon: "081234500407", alamat: "RT 03 / RW 04", jam: "07.00 – 16.00" },
  { id: "sd-08", nama: "Bibit Tanaman Rejeki Hijau", pemilik: "Titik Sumarni",   dusun: "sidomulyo", kategori: "Pertanian", deskripsi: "Bibit cabai, terong, dan buah dalam polibag, siap tanam.", telepon: "081234500408", alamat: "RT 04 / RW 04", jam: "07.00 – 17.00" },

  /* ---------- DUSUN NGASEM ---------- */
  { id: "ng-01", nama: "Konveksi Ngasem Jaya",      pemilik: "Fitri Handayani",  dusun: "ngasem", kategori: "Konveksi", deskripsi: "Kaos, seragam sekolah, dan jaket, minimal pesanan dua lusin.", telepon: "081234500501", alamat: "RT 01 / RW 05", jam: "08.00 – 17.00" },
  { id: "ng-02", nama: "Jahit Permak Bu Ratna",     pemilik: "Ratna Dewi",       dusun: "ngasem", kategori: "Jasa",     deskripsi: "Permak celana, ganti resleting, dan jahit baju sesuai ukuran.", telepon: "081234500502", alamat: "RT 02 / RW 05", jam: "08.00 – 18.00" },
  { id: "ng-03", nama: "Sablon Kaos Kreatif",       pemilik: "Doni Prasetyo",    dusun: "ngasem", kategori: "Konveksi", deskripsi: "Sablon manual dan digital untuk kaos komunitas dan acara desa.", telepon: "081234500503", alamat: "RT 02 / RW 05", jam: "09.00 – 18.00" },
  { id: "ng-04", nama: "Hijab Ngasem Cantik",       pemilik: "Anisa Rahma",      dusun: "ngasem", kategori: "Konveksi", deskripsi: "Kerudung segi empat dan pashmina jahit sendiri, jual satuan dan grosir.", telepon: "081234500504", alamat: "RT 03 / RW 05", jam: "09.00 – 17.00" },
  { id: "ng-05", nama: "Salon & Rias Pengantin Ayu", pemilik: "Yuni Astuti",     dusun: "ngasem", kategori: "Jasa",     deskripsi: "Rias pengantin adat dan modern, potong rambut, dan perawatan.", telepon: "081234500505", alamat: "RT 01 / RW 05", jam: "09.00 – 19.00" },
  { id: "ng-06", nama: "Servis Elektronik Amanah",  pemilik: "Bambang Sutejo",   dusun: "ngasem", kategori: "Jasa",     deskripsi: "Perbaikan kipas, mesin cuci, dan alat elektronik rumah tangga.", telepon: "081234500506", alamat: "RT 04 / RW 05", jam: "08.00 – 17.00" },
  { id: "ng-07", nama: "Tas Rajut Tangan Ngasem",   pemilik: "Puji Lestari",     dusun: "ngasem", kategori: "Kerajinan", deskripsi: "Tas dan dompet rajut benang katun, warna bisa dipesan.", telepon: "081234500507", alamat: "RT 03 / RW 05", jam: "09.00 – 16.00" },
  { id: "ng-08", nama: "Percetakan Undangan Rapi",  pemilik: "Yusuf Maulana",    dusun: "ngasem", kategori: "Jasa",     deskripsi: "Cetak undangan, banner, dan stiker kemasan produk UMKM.", telepon: "081234500508", alamat: "RT 02 / RW 05", jam: "08.00 – 20.00" },

  /* ---------- DUSUN TEGALSARI ---------- */
  { id: "tg-01", nama: "Peternakan Ayam Petelur Mandiri", pemilik: "Sunarto",    dusun: "tegalsari", kategori: "Peternakan", deskripsi: "Telur ayam segar dijual per tray, kirim ke warung sekitar desa.", telepon: "081234500601", alamat: "RT 01 / RW 06", jam: "06.00 – 16.00" },
  { id: "tg-02", nama: "Susu Kambing Etawa Sehat",  pemilik: "Rohmat Hidayat",   dusun: "tegalsari", kategori: "Peternakan", deskripsi: "Susu kambing segar beku dan bubuk, diambil dari kandang sendiri.", telepon: "081234500602", alamat: "RT 02 / RW 06", jam: "06.00 – 15.00" },
  { id: "tg-03", nama: "Abon Sapi Tegalsari",       pemilik: "Nanik Suprapti",   dusun: "tegalsari", kategori: "Kuliner",    deskripsi: "Abon sapi manis dan pedas dalam kemasan 100 gram.", telepon: "081234500603", alamat: "RT 02 / RW 06", jam: "08.00 – 16.00" },
  { id: "tg-04", nama: "Kambing Aqiqah Berkah",     pemilik: "Solikin",          dusun: "tegalsari", kategori: "Peternakan", deskripsi: "Layanan kambing aqiqah dan kurban, sudah termasuk masak dan antar.", telepon: "081234500604", alamat: "RT 03 / RW 06", jam: "07.00 – 17.00" },
  { id: "tg-05", nama: "Telur Asin Bu Darmi",       pemilik: "Darmi",            dusun: "tegalsari", kategori: "Kuliner",    deskripsi: "Telur asin bakar dan rebus, dikemas sepuluh butir per kotak.", telepon: "081234500605", alamat: "RT 01 / RW 06", jam: "07.00 – 17.00" },
  { id: "tg-06", nama: "Pakan Ternak Sumber Rejeki", pemilik: "Muhtar",          dusun: "tegalsari", kategori: "Toko",       deskripsi: "Konsentrat, dedak, dan vitamin ternak, bisa diantar ke kandang.", telepon: "081234500606", alamat: "RT 04 / RW 06", jam: "07.00 – 17.00" },
  { id: "tg-07", nama: "Bakmi Jawa Pak Karyo",      pemilik: "Sukaryo",          dusun: "tegalsari", kategori: "Kuliner",    deskripsi: "Bakmi godog dan nasi goreng masak arang, buka setiap malam.", telepon: "081234500607", alamat: "RT 03 / RW 06, tepi jalan dusun", jam: "17.00 – 23.00" }
];
