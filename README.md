# Ajar DKV 2026 — Perangkat Ajar Dasar-dasar DKV Kelas X

Website lokal, dibuka dengan **klik dua kali `index.html`**. Tanpa server, tanpa internet — font dan gambar semua lokal.

Semua konten ada di **satu file: `data/kurikulum.js`**. HTML/CSS/JS tidak perlu disentuh.

## Menandai pekan berjalan

Buka `data/kurikulum.js`, ubah satu angka di bagian atas:

```js
config: {
  pekanBerjalan: 1,   // ← ganti tiap minggu (1–16)
  ...
}
```

Nomor pekan itu di peta semester diberi cincin hitam, dan dua kartu "pekan ini" di beranda ikut berpindah otomatis.

## Menandai pertemuan yang sudah diajarkan

Buka halaman pertemuan → klik tombol **"Tandai sudah diajarkan"**. Tanda ✓ muncul di peta semester dan daftar pertemuan, dan penghitungnya tampil di beranda. Catatan: tanda ini tersimpan di browser (localStorage) — kalau ganti laptop/browser, tandai ulang.

## Ilustrasi materi

Diagram konsep (segitiga eksposur, roda warna, shot size, dll.) ada di `assets/img/ilustrasi/` sebagai file SVG — bisa diedit dengan Illustrator atau editor teks. Menambahkan ilustrasi ke sebuah bagian materi: tambahkan properti `img` pada objek modulnya:

```js
{ judul: "...", img: { file: "assets/img/ilustrasi/nama.svg", alt: "...", caption: "..." }, isi: [...], poin: [...] }
```

## Menambah / melengkapi pertemuan

Semua pertemuan ada di `KURIKULUM.pertemuan.a` (Jalur A) dan `.b` (Jalur B), urut per objek. Pertemuan yang baru kerangka punya `lengkap: false`. Untuk melengkapinya, ganti objeknya mengikuti format P1–P4 Jalur A:

```js
{
  p: 5, judul: "Layout & Grid", pekan: 5, uts: false, lengkap: true,
  ringkas: "Satu kalimat ringkasan (dipakai kalau detail belum lengkap).",
  tujuan: [ "Siswa dapat ... (kata kerja terukur)", "..." ],
  materi: [ "Poin materi inti", "..." ],
  modul: [ // materi ajar lengkap — tampil sebagai bagian yang bisa dibuka-tutup
    { judul: "Judul bagian", isi: [ "Paragraf penjelasan...", "..." ], poin: [ "Butir opsional", "..." ] }
  ],
  alur: [
    { durasi: 15, segmen: "Pembuka", detail: "..." },
    { durasi: 45, segmen: "Teori + demo", detail: "..." },
    { durasi: 90, segmen: "Praktik terbimbing", detail: "..." },
    { durasi: 20, segmen: "Review karya antar siswa", detail: "..." },
    { durasi: 10, segmen: "Penutup + brief tugas", detail: "..." }
  ], // total harus 180 — ditampilkan otomatis di halaman
  alat: [ "Alat 1", "Alat 2" ],
  tugas: { judul: "Nama tugas", deskripsi: "...", portofolio: true },
  catatan: "Catatan pribadi guru."
}
```

Untuk pekan UTS, set `uts: true` — frame-nya otomatis kuning.

Setelah mengedit, simpan lalu refresh browser (Ctrl/Cmd+R).

## Menambah gambar karya ke showcase

1. Kompres gambar dulu (idealnya < 300 KB, lebar ± 1100 px), simpan ke `assets/img/`.
2. Tambahkan satu objek di `KURIKULUM.profil.showcase`:

```js
{
  file: "assets/img/nama-file.jpg",
  alt: "Deskripsi visual gambar untuk pembaca layar",
  caption: "Apa brief-nya dan keputusan desain apa yang diambil (1–2 kalimat)."
}
```

## Mencetak lembar pegangan

Buka halaman pertemuan → klik **"Cetak lembar pegangan"** (atau Ctrl/Cmd+P). Navigasi, peta semester, dan tombol otomatis tidak ikut tercetak.

## Struktur folder

```
index.html          — kerangka halaman (jangan diedit untuk urusan konten)
data/kurikulum.js   — SEMUA konten: profil, pertemuan, rubrik, pekan berjalan
assets/css/style.css— tampilan (palet CMYK, contact sheet, print)
assets/js/app.js    — router hash & render
assets/fonts/       — font lokal (.woff2)
assets/img/         — foto profil & karya showcase
```
