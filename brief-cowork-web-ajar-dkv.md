# BRIEF UNTUK CLAUDE COWORK — Website Perangkat Ajar Dasar DKV

> **Cara pakai:** buat folder `Ajar-DKV-2026/` di komputermu. Buka Claude Cowork, arahkan ke folder itu, lalu tempel seluruh isi dokumen ini sebagai pesan pertama.
>
> **Sebelum menempel:** cek bagian bertanda `[CEK]` dan sesuaikan dengan datamu.

---

## 1. Konteks

Saya guru mata pelajaran **Dasar-dasar Desain Komunikasi Visual** untuk **SMK kelas X (Fase E)**. Ini semester pertama saya mengajar. Saya butuh satu website lokal — dibuka dari file, **tidak di-deploy, tidak publik** — sebagai perangkat ajar pribadi saya selama satu semester.

Jadwal: **8 JP per minggu, dibagi 2 hari.**
- **Hari 1 — Jalur A: Fotografi & Desain** (4 JP = 180 menit)
- **Hari 2 — Jalur B: Videografi** (4 JP = 180 menit)

Dua jalur ini **berjalan paralel**, bukan berurutan. 16 minggu efektif, UTS di minggu ke-9, lalu berakhir di minggu 16 sebelum UAS. Produk akhir siswa: **portofolio individu** yang terkumpul dari tugas mingguan.

Fasilitas sekolah: kamera DSLR/mirrorless, lab komputer dengan Adobe & Canva, studio foto mini dengan lighting.

---

## 2. Yang harus kamu bangun

Struktur folder:

```
Ajar-DKV-2026/
├── index.html
├── data/
│   └── kurikulum.js
├── assets/
│   ├── css/style.css
│   ├── js/app.js
│   ├── fonts/
│   └── img/
└── README.md
```

### Aturan teknis — wajib

1. **Harus jalan dari `file://`.** Saya buka dengan klik dua kali `index.html`. Tidak ada server, tidak ada build step, tidak ada npm.
2. **JANGAN pakai `fetch()` untuk memuat JSON lokal** — diblokir CORS di `file://`. Simpan data sebagai objek JavaScript di `data/kurikulum.js` yang di-load lewat `<script src>`, contoh: `const KURIKULUM = { ... };`
3. **Tanpa CDN.** Tidak ada Tailwind CDN, tidak ada Google Fonts link. Download file `.woff2` yang dibutuhkan ke `assets/fonts/` dan panggil lewat `@font-face`. Website ini harus tetap utuh saat wifi sekolah mati.
4. **Vanilla HTML/CSS/JS.** Tanpa framework.
5. **Satu halaman, render dari data.** `index.html` merender semuanya dari `KURIKULUM` lewat routing hash (`#/jalur-a/p5`). Menambah pertemuan = mengedit satu objek di `kurikulum.js`, tidak menyentuh HTML.
6. **Responsif.** Saya akan membukanya dari laptop saat mengajar dan dari HP saat menyiapkan materi.
7. **Bisa dicetak.** Sediakan `@media print` supaya satu halaman pertemuan bisa dicetak jadi lembar pegangan tanpa navigasi ikut tercetak.

### Arah visual

Bahannya diambil dari dunia produksi cetak — ini kelas DKV, jadi antarmukanya sendiri sebaiknya mengajarkan sesuatu.

- **Palet: logika CMYK sebagai pengkode informasi, bukan hiasan.** Jalur A (Fotografi & Desain) = magenta. Jalur B (Videografi) = cyan. Pekan UTS = kuning. Teks & struktur = "key" (hitam pekat, jangan `#000` murni). Latar: abu netral dingin seperti kertas proofing, bukan cream. Setiap warna harus **berarti sesuatu** — kalau ada elemen berwarna yang tidak menandakan jalur atau status, buang warnanya.
- **Signature: peta 16 minggu sebagai contact sheet.** Beranda menampilkan seluruh semester seperti lembar kontak foto — dua strip sejajar, 16 frame masing-masing, bernomor. Di sinilah paralelisme dua jalur itu jadi terlihat sekali pandang. Ini satu-satunya tempat kamu boleh berani; sisanya tenang dan disiplin.
- **Tipografi:** satu display grotesk berkarakter (dipakai hemat — nomor pertemuan, judul), satu body face yang nyaman untuk paragraf Bahasa Indonesia, satu utility face untuk label & durasi. Jangan pakai keluarga yang sama untuk semua peran.
- **Hindari:** cream + serif + aksen terracotta; hitam + hijau neon; layout koran hairline. Tiga arah itu default AI, bukan pilihan.
- **Motion seperlunya.** Transisi antar pertemuan boleh. Selebihnya, tidak.
- **Nomor urut memang bermakna di sini** — ini betul-betul rangkaian 16 minggu, jadi penomoran boleh menonjol.

### Halaman

**Beranda**
- Profil saya (isi di §3)
- Contact sheet 16 minggu × 2 jalur — klik frame → buka detail pertemuan
- Penanda pekan berjalan

**Detail pertemuan** — tiap pertemuan menampilkan:
- Nomor, jalur, judul, pekan
- Tujuan Pembelajaran (2–3 poin, kata kerja terukur)
- Materi inti
- **Alur 180 menit** dengan durasi tiap segmen
- Alat & bahan yang perlu disiapkan
- Tugas / output portofolio
- Catatan saya (teks statis di data file)

**Halaman rubrik** — rubrik UTS dan rubrik portofolio akhir.

**Template alur 180 menit** (pakai ini sebagai default, sesuaikan per pertemuan):

| Durasi | Segmen |
|---|---|
| 15' | Pembuka — review tugas lalu, pemantik |
| 45' | Teori + demo |
| 90' | Praktik terbimbing |
| 20' | Review karya antar siswa |
| 10' | Penutup + brief tugas |

---

## 3. Konten: Profil saya

**Rendi Irawan** — desainer grafis, motion designer, dan video editor. Sedang menempuh S2 Magister Desain di Telkom University.

Pengalaman klien yang relevan disebut ke siswa:
- **Wardah Malaysia** — aset kampanye untuk brand kecantikan
- **RSGM Bhakti Wiyata** & **FKG IIK** — desain dan materi cetak institusi kesehatan
- **Kediri Dental Care** — konten Instagram klinik
- **Titik Tuju Coffee**, **JC Cafe and Lounge** — identitas & konten F&B
- **Kediri Vision 2045** — buku visual RPJPD Kota Kediri 2025–2045

**Tautan** (tampilkan jelas di beranda, siswa diarahkan ke sini):
- Behance — https://www.behance.net/rrnndd
- Instagram — https://www.instagram.com/ir.rendi_/

Beri kedua tautan ini `target="_blank"` dan `rel="noopener noreferrer"`.

**Showcase karya:** ada folder `sample design/` di folder proyek ini berisi portofolio saya. Buka folder itu, pilih **3–4 karya terkuat dan paling beragam** (jangan semuanya poster — usahakan ada cetak, digital, dan identitas visual supaya siswa melihat rentang pekerjaan DKV). Salin file yang kamu pilih ke `assets/img/`, kompres kalau ukurannya besar, dan pasang `alt` text deskriptif untuk tiap gambar.

Untuk tiap karya yang kamu pilih, buatkan caption 1–2 kalimat: **apa brief-nya dan keputusan desain apa yang diambil** — bukan judul karya saja. Tunjukkan captionnya ke saya untuk saya koreksi, karena kamu tidak tahu konteks aslinya.

`[CEK: taruh foto profil di assets/img/ juga, atau bilang ke Cowork kalau belum ada.]`

Nada halaman profil: bukan CV. Tujuannya menunjukkan ke anak kelas X bahwa materi yang mereka pelajari dipakai di pekerjaan nyata — sebutkan brief aslinya, bukan daftar jabatan.

---

## 4. Konten: Jalur A — Fotografi & Desain (Hari 1)

| P | Judul | Materi inti | Praktik → output |
|---|---|---|---|
| 1 | Orientasi DKV + K3LH | Apa itu DKV, ruang lingkup profesi, perkenalan guru, kontrak belajar, K3LH studio & lab | Mood board "DKV di sekitarku" |
| 2 | Nirmana dwimatra | Titik, garis, bidang, ruang; prinsip kesatuan, keseimbangan, irama | Komposisi hitam-putih |
| 3 | Warna | Roda warna, harmoni, psikologi warna, RGB vs CMYK | Palet + eksplorasi warna |
| 4 | Tipografi | Anatomi huruf, klasifikasi, keterbacaan, pairing | Poster tipografi |
| 5 | Layout & grid | Grid, hierarki visual, white space, alignment | Poster acara sekolah |
| 6 | Anatomi kamera & eksposur | Bagian kamera, segitiga eksposur (ISO/aperture/shutter), depth of field | Latihan mode manual |
| 7 | Komposisi foto & lighting studio | Rule of thirds, framing, leading lines; three-point lighting (key/fill/rim) | Latihan pencahayaan produk |
| 8 | **Foto produk + gladi bersih UTS** | Setup meja produk, background, refleksi; simulasi penuh alur UTS dalam 1 pertemuan | Foto produk → poster, 1 pertemuan |
| **9** | **UTS: Foto produk + desain promosi** | Ujian praktik terpadu — lihat §6 | Foto + poster promosi |
| 10 | Bedah hasil UTS + editing foto | Review karya kelas, Lightroom/Photoshop dasar, retouch, color grading | Revisi hasil UTS |
| 11 | Foto produk lanjutan | Flat lay, lifestyle shot, variasi angle & storytelling produk | Set variasi angle |
| 12 | Dasar identitas visual | Konsep brand, logo sederhana, konsistensi elemen | Mini brand kit |
| 13 | Brief klien simulasi | Membaca brief, aplikasi multi-media: feed IG, banner, kemasan | Set promosi lengkap |
| 14 | Produksi portofolio | Kerja mandiri terbimbing, konsultasi per siswa | Progres portofolio |
| 15 | Kurasi portofolio | Seleksi karya, urutan, penulisan deskripsi proyek, layout PDF/Behance | Portofolio final |
| 16 | Presentasi & review pra-UAS | Presentasi portofolio, feedback, kisi-kisi UAS | — |

**Catatan P8 penting:** ini gladi bersih, bukan materi baru. Siswa harus sudah pernah menyelesaikan alur foto→desain satu kali sebelum dinilai di P9. Beri produk yang lebih sederhana daripada UTS.

---

## 5. Konten: Jalur B — Videografi (Hari 2)

| P | Judul | Materi inti | Praktik → output |
|---|---|---|---|
| 1 | Orientasi videografi | Ruang lingkup videografi, bedah 1 iklan/film pendek | Analisis 1 iklan |
| 2 | Shot size & camera angle | ECU sampai ELS; high/low/eye level/dutch angle | Shot challenge pakai HP |
| 3 | Camera movement & continuity | Pan, tilt, tracking, dolly; 180° rule, continuity editing | Latihan gerak kamera |
| 4 | Storytelling | Struktur 3 babak, premis, konflik, pesan dalam 30 detik | Konsep cerita 30 detik |
| 5 | Storyboard & shot list | Menggambar storyboard, menyusun shot list & jadwal | Storyboard siap syuting |
| 6 | Kamera video | Frame rate, shutter angle, picture profile, white balance | Setting kamera sekolah |
| 7 | Audio & lighting video | Mic dasar, room tone, lighting wawancara | Setup wawancara |
| 8 | Editing dasar Premiere | Timeline, cut, trim, ripple/roll, ekspor | Rough cut |
| **9** | **UTS: Video pendek 30 detik** | Ujian praktik — konsep sampai ekspor | Video 30 detik |
| 10 | Editing lanjutan | J-cut & L-cut, ritme, pacing, transisi bermakna | Revisi cut |
| 11 | Color grading & audio mixing | Lumetri dasar, LUT, level audio, musik & SFX | Final look |
| 12 | Motion graphic dasar | Teks kinetik, lower third, animasi sederhana | Title sequence |
| 13 | Pra-produksi proyek akhir | Pitching konsep, proposal, storyboard, jadwal produksi | Proposal + storyboard |
| 14 | Produksi | Syuting terbimbing | Footage mentah |
| 15 | Pasca-produksi | Editing, grading, mixing, ekspor | Video 60 detik |
| 16 | Screening & review pra-UAS | Pemutaran karya kelas, feedback, kisi-kisi UAS | — |

---

## 6. Konten: Rubrik UTS Jalur A

**Ketentuan ujian:**
- Guru menyediakan 4–5 jenis produk seragam (botol, kemasan kotak, sachet, benda kecil reflektif). **Diundi**, tidak dibawa siswa — supaya tingkat kesulitan setara dan penilaian adil.
- Alur: foto produk di studio mini → pilih & edit → desain poster promosi.
- Durasi: 180 menit.

**Rubrik dua kolom terpisah.** Jangan digabung jadi satu nilai — siswa yang fotonya kuat tapi desainnya lemah harus terbaca jelas di mana letak masalahnya.

**Kolom 1 — Teknis Fotografi (50)**

| Aspek | Bobot |
|---|---|
| Eksposur tepat (tidak clipping) | 15 |
| Pencahayaan (arah, kualitas, kontrol refleksi) | 15 |
| Komposisi & angle | 10 |
| Ketajaman & fokus pada titik yang tepat | 10 |

**Kolom 2 — Desain Promosi (50)**

| Aspek | Bobot |
|---|---|
| Hierarki visual & keterbacaan | 15 |
| Tipografi (pemilihan & penerapan) | 15 |
| Warna & keselarasan dengan produk | 10 |
| Kesesuaian pesan dengan target audiens | 10 |

Tiap aspek pakai 4 tingkat: **Belum Berkembang / Mulai Berkembang / Berkembang Sesuai Harapan / Sangat Berkembang.** Tuliskan deskriptor konkret tiap tingkat — saya butuh ini untuk memberi umpan balik, bukan sekadar angka.

Buat juga rubrik serupa untuk **UTS Jalur B** (video 30 detik) dan **portofolio akhir**, dengan pola yang sama.

---

## 7. Setelah selesai

Tulis `README.md` singkat berisi:
- Cara menambah pertemuan baru (di mana, format objeknya)
- Cara menandai pekan berjalan
- Cara menambah gambar karya ke showcase

Lalu laporkan: apa yang sudah dibuat, keputusan desain yang kamu ambil, dan bagian mana yang masih perlu saya isi.

**Bangun dulu Jalur A pertemuan 1–4 secara lengkap sebagai contoh, tunjukkan ke saya, baru lanjutkan sisanya setelah saya setujui arahnya.**
