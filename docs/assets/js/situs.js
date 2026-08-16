/* ============================================================
   SITUS.JS — kerangka bersama semua halaman
   Menyuntik header + footer yang sama ke setiap halaman, dan
   menyediakan fungsi bantu (cari dusun, hitung UMKM, dll).
   Ubah identitas desa di objek SITUS di bawah, sekali saja.
   ============================================================ */

const SITUS = {
  namaDesa:   "Desa Sukamaju",
  kecamatan:  "Kecamatan Ngawen",
  kabupaten:  "Kabupaten Blora",
  lambang:    "SM",                 // 2 huruf di kotak kuning header
  tahunData:  "Agustus 2026",
  narahubung: "Sekretariat Desa Sukamaju",
  telepon:    "081234500000",
  email:      "umkm@sukamaju.desa.id",
  menu: [
    { label: "Beranda",  href: "index.html"  },
    { label: "Dusun",    href: "dusun.html"  },
    { label: "Tentang",  href: "tentang.html" }
  ]
};

/* ---------- Fungsi bantu ---------- */
const Situs = {
  /** Ambil nilai dari alamat, misal ?d=krajan -> Situs.param("d") */
  param(nama) {
    return new URLSearchParams(location.search).get(nama);
  },

  /** Satu dusun berdasarkan slug */
  dusun(slug) {
    return DUSUN.find(d => d.slug === slug) || null;
  },

  /** Semua UMKM di satu dusun, diurutkan sesuai abjad */
  umkmDusun(slug) {
    return UMKM.filter(u => u.dusun === slug)
               .sort((a, b) => a.nama.localeCompare(b.nama, "id"));
  },

  /** Jumlah UMKM per dusun */
  jumlah(slug) {
    return UMKM.filter(u => u.dusun === slug).length;
  },

  /** Daftar kategori unik beserta jumlahnya */
  kategori(daftar = UMKM) {
    const peta = new Map();
    daftar.forEach(u => peta.set(u.kategori, (peta.get(u.kategori) || 0) + 1));
    return [...peta.entries()]
      .map(([nama, jml]) => ({ nama, jml }))
      .sort((a, b) => b.jml - a.jml);
  },

  /** Tautan WhatsApp dari nomor 08xxxx */
  wa(nomor) {
    if (!nomor) return "";
    const bersih = String(nomor).replace(/\D/g, "").replace(/^0/, "62");
    return "https://wa.me/" + bersih;
  },

  /** Aman dari HTML sisipan saat menampilkan data */
  aman(teks) {
    return String(teks ?? "").replace(/[&<>"']/g, c => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
  },

  /** Potongan HTML kartu UMKM — dipakai di halaman mana pun */
  kartuUmkm(u) {
    const a = Situs.aman;
    const wa = Situs.wa(u.telepon);
    return `
      <article class="kartu kartu-umkm" id="${a(u.id)}">
        <span class="data">${a(u.kategori)}</span>
        <h3>${a(u.nama)}</h3>
        <p class="kartu-umkm__pemilik">Pemilik: ${a(u.pemilik)}</p>
        <p class="kartu-umkm__desk">${a(u.deskripsi)}</p>
        <div class="kartu-umkm__kaki">
          ${u.jam ? `<span class="pil">${a(u.jam)}</span>` : ""}
          ${wa ? `<a class="pil" href="${wa}" target="_blank" rel="noopener">Hubungi</a>` : ""}
        </div>
      </article>`;
  },

  /** Potongan HTML kartu dusun */
  kartuDusun(d) {
    const a = Situs.aman;
    return `
      <a class="kartu kartu--tautan kartu-dusun" href="dusun.html?d=${a(d.slug)}" data-dusun="${a(d.slug)}">
        <div class="kartu-dusun__atas">
          <h3>${a(d.nama)}</h3>
          <span class="kartu-dusun__kode">BLOK ${a(d.peta)}</span>
        </div>
        <div class="kartu-dusun__jml">${Situs.jumlah(d.slug)}<span>USAHA</span></div>
        <p>${a(d.tagline)}</p>
        <div class="kartu-dusun__kaki"><span>Lihat daftar</span><i>&rarr;</i></div>
      </a>`;
  }
};

/* ---------- Header & footer bersama ---------- */
function halamanAktif() {
  const berkas = location.pathname.split("/").pop();
  return berkas === "" ? "index.html" : berkas;
}

function pasangKerangka() {
  const kini = halamanAktif();

  const header = document.querySelector("[data-situs-header]");
  if (header) {
    header.className = "bar";
    header.innerHTML = `
      <div class="wadah bar__isi">
        <a class="bar__merek" href="index.html">
          <span class="bar__lambang">${SITUS.lambang}</span>
          <span>
            <span class="bar__nama">Direktori UMKM</span><br>
            <span class="bar__sub">${SITUS.namaDesa}</span>
          </span>
        </a>
        <nav class="bar__nav" aria-label="Menu utama">
          ${SITUS.menu.map(m => `
            <a href="${m.href}"${m.href === kini ? ' aria-current="page"' : ""}>${m.label}</a>
          `).join("")}
        </nav>
      </div>`;
  }

  const kaki = document.querySelector("[data-situs-footer]");
  if (kaki) {
    kaki.className = "kaki";
    kaki.innerHTML = `
      <div class="wadah">
        <div class="kaki__isi">
          <div>
            <h4>Direktori</h4>
            <p style="font-family:var(--font-judul);font-size:1.3rem;color:#fff;margin:0 0 8px">${SITUS.namaDesa}</p>
            <p style="font-size:var(--ukuran-kecil);margin:0">${SITUS.kecamatan}, ${SITUS.kabupaten}</p>
          </div>
          <div>
            <h4>Halaman</h4>
            <ul>${SITUS.menu.map(m => `<li><a href="${m.href}">${m.label}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Dusun</h4>
            <ul>${DUSUN.map(d => `<li><a href="dusun.html?d=${d.slug}">${d.nama}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Narahubung</h4>
            <ul>
              <li>${SITUS.narahubung}</li>
              <li><a href="${Situs.wa(SITUS.telepon)}" target="_blank" rel="noopener">${SITUS.telepon}</a></li>
              <li><a href="mailto:${SITUS.email}">${SITUS.email}</a></li>
            </ul>
          </div>
        </div>
        <div class="kaki__garis">
          <span>DATA DIPERBARUI ${SITUS.tahunData.toUpperCase()}</span>
          <span>${UMKM.length} USAHA &middot; ${DUSUN.length} DUSUN</span>
        </div>
      </div>`;
  }
}

document.addEventListener("DOMContentLoaded", pasangKerangka);
