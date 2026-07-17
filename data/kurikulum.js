/* ============================================================
   KURIKULUM — Dasar-dasar DKV, SMK Kelas X (Fase E)
   Semua konten website diambil dari objek ini.
   Menambah/mengedit pertemuan = edit di sini, HTML tidak disentuh.
   Lihat README.md untuk format lengkap.
   ============================================================ */

const KURIKULUM = {

  config: {
    tahunAjaran: "2026/2027 — Semester Ganjil",
    // Ganti angka ini tiap minggu (1–16) untuk memindahkan penanda pekan berjalan
    pekanBerjalan: 1,
    totalPekan: 16,
    pekanUTS: 9
  },

  profil: {
    nama: "Rendi Irawan",
    peran: "Desainer grafis · Motion designer · Video editor",
    foto: "assets/img/profil.jpg",
    intro: "Saya bekerja sebagai desainer grafis, motion designer, dan video editor, dan sekarang sedang menempuh S2 Magister Desain di Telkom University. Semua yang kita pelajari di kelas ini — komposisi, warna, tipografi, kamera, editing — adalah alat yang saya pakai setiap hari untuk klien sungguhan. Di bawah ini beberapa pekerjaan nyatanya.",
    pengalaman: [
      { klien: "Wardah Malaysia", kerja: "Aset kampanye untuk brand kecantikan — key visual, konten peluncuran produk" },
      { klien: "RSGM Bhakti Wiyata & FKG IIK", kerja: "Desain dan materi cetak institusi kesehatan" },
      { klien: "Kediri Dental Care", kerja: "Konten Instagram klinik" },
      { klien: "Titik Tuju Coffee & JC Cafe and Lounge", kerja: "Identitas visual & konten F&B" },
      { klien: "Kediri Vision 2045", kerja: "Buku visual RPJPD Kota Kediri 2025–2045" }
    ],
    tautan: [
      { label: "Behance", url: "https://www.behance.net/rrnndd" },
      { label: "Instagram", url: "https://www.instagram.com/ir.rendi_/" }
    ],
    software: [
      "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign",
      "Adobe Premiere Pro", "Adobe After Effects", "Adobe Lightroom"
    ],
    // Showcase karya — file ada di assets/img/. Caption menunggu koreksi Pak Rendi.
    showcase: [
      {
        file: "assets/img/karya-wardah-kv.jpg",
        alt: "Key visual kampanye Wardah Lip Rescue: dua tube jelly balm merah muda dan toska tergeletak di atas sprei bergaris pink dengan headline It's zzZlip Time!",
        caption: "Key visual peluncuran Wardah Lip Rescue (Malaysia). Brief-nya: produk lip balm malam hari — jadi keputusan utamanya membangun suasana kamar tidur (sprei, bantal, cahaya hangat) supaya manfaat \"overnight\" terbaca tanpa perlu dijelaskan."
      },
      {
        file: "assets/img/karya-wardah-beforeafter.jpg",
        alt: "Visual manfaat produk Wardah Lip Rescue: close-up bibir terbagi dua sisi before dan after dengan tube produk di tengah sebagai pembatas",
        caption: "Visual manfaat untuk kampanye yang sama. Klaim \"bibir lebih cerah dan plump\" harus dibuktikan secara visual — solusinya: satu foto bibir dibelah jadi before/after, dan tube produknya sendiri dipakai sebagai garis pembatas."
      },
      {
        file: "assets/img/karya-wardah-applicator.jpg",
        alt: "Infografik fitur aplikator Wardah Lip Rescue: close-up makro ujung aplikator di dalam gelembung transparan dengan anotasi Easy Swipe dan Hygienic",
        caption: "Konten edukasi fitur aplikator baru. Fiturnya kecil dan teknis, jadi keputusan desainnya: foto makro ekstrem di dalam \"gelembung\" pembesar, dengan anotasi bergaya diagram supaya terasa seperti spesifikasi produk, bukan iklan."
      },
      {
        file: "assets/img/karya-rpjpd-buku.jpg",
        alt: "Mockup dua buku hardcover Rencana Pembangunan Jangka Panjang Daerah Kota Kediri 2025–2045 dengan sampul kolase landmark kota membentuk siluet peta",
        caption: "Buku visual RPJPD Kota Kediri 2025–2045 (Kediri Vision 2045). Brief-nya: dokumen perencanaan 20 tahun yang tebal dan formal harus terasa layak dibaca warga — keputusannya: landmark kota dikolase membentuk siluet wilayah Kediri di sampul, supaya dokumen kebijakan terasa seperti buku tentang kotanya sendiri."
      }
    ],
    // Contoh hasil pembelajaran fotografi — ditunjukkan ke siswa sebagai target kemampuan
    contohFoto: [
      {
        file: "assets/img/foto-output-1.jpg",
        alt: "Potret low-key siswa berseragam SMK dengan pencahayaan samping biru dramatis di latar hitam",
        caption: "Potret studio low-key: satu sumber cahaya dari samping, latar hitam. Materi pertemuan 7 — komposisi & lighting studio."
      },
      {
        file: "assets/img/foto-output-2.jpg",
        alt: "Potret low-key siswa berseragam SMK dengan tangan menyilang dan rim light biru di latar hitam",
        caption: "Variasi pose dan arah cahaya pada setup yang sama — perhatikan rim light yang memisahkan subjek dari latar."
      }
    ]
  },

  jalur: {
    a: { id: "a", nama: "Fotografi & Desain", hari: "Hari 1", jp: "4 JP · 180 menit", kode: "A" },
    b: { id: "b", nama: "Videografi", hari: "Hari 2", jp: "4 JP · 180 menit", kode: "B" }
  },

  /* ------------------------------------------------------------
     PERTEMUAN
     lengkap: true  → punya detail penuh (tujuan, alur, alat, tugas)
     lengkap: false → baru kerangka; halaman detail menampilkan ringkasan
     ------------------------------------------------------------ */
  pertemuan: {

    a: [
      {
        p: 1, judul: "Orientasi DKV + K3LH", pekan: 1, uts: false, lengkap: true,
        ringkas: "Apa itu DKV, ruang lingkup profesi, kontrak belajar, K3LH studio & lab.",
        tujuan: [
          "Siswa dapat menjelaskan ruang lingkup DKV dan menyebutkan minimal 5 profesi di dalamnya beserta contoh hasil kerjanya.",
          "Siswa dapat menerapkan prosedur K3LH saat menggunakan studio foto dan lab komputer.",
          "Siswa dapat menyusun mood board \"DKV di sekitarku\" berisi minimal 8 temuan visual dari lingkungannya."
        ],
        materi: [
          "Apa itu Desain Komunikasi Visual: desain sebagai penyampai pesan, bukan sekadar \"membuat gambar bagus\".",
          "Peta profesi DKV: desainer grafis, fotografer, videografer, motion designer, ilustrator, desainer UI — ditunjukkan lewat karya klien nyata guru (lihat profil di beranda).",
          "Kontrak belajar & sistem portofolio: setiap pertemuan menghasilkan satu output; portofolio akhir adalah kumpulan output terbaik.",
          "K3LH: aturan studio foto (kabel lighting, tripod, penyimpanan kamera), aturan lab (posisi duduk, durasi layar, makanan-minuman, penyimpanan file)."
        ],
        modul: [
          {
            judul: "Apa itu Desain Komunikasi Visual?",
            isi: [
              "Desain Komunikasi Visual (DKV) adalah ilmu menyampaikan pesan kepada orang lain menggunakan elemen visual: gambar, huruf, warna, foto, dan gerak. Kata kuncinya bukan \"gambar bagus\", tapi \"pesan sampai\". Sebuah desain disebut berhasil kalau orang yang melihatnya mengerti dan melakukan sesuatu — membeli, datang, berhenti, atau sekadar ingat.",
              "Bedanya dengan seni murni: pelukis boleh berkarya untuk dirinya sendiri, tapi desainer selalu bekerja untuk pesan dan audiens tertentu. Karena itu setiap tugas di kelas ini selalu mulai dari dua pertanyaan yang sama: pesannya apa, dan siapa yang harus menerimanya."
            ],
            poin: [
              "Tiga komponen yang selalu ada: PESAN (apa yang mau disampaikan), AUDIENS (siapa penerimanya), MEDIA (lewat apa — poster, kemasan, video, feed IG).",
              "DKV ada di mana-mana: kemasan mi instan, spanduk warung, logo sekolah, tampilan aplikasi, iklan di TikTok.",
              "Latihan cepat: ambil satu kemasan jajanan — coba sebutkan pesannya, audiensnya, dan medianya."
            ]
          },
          {
            judul: "Peta profesi DKV",
            img: { file: "assets/img/ilustrasi/a1-peta-profesi.svg", alt: "Peta profesi DKV: desainer grafis, fotografer, videografer, motion designer, desainer brand, ilustrator, dan desainer UI mengelilingi pusat DKV", caption: "Peta profesi DKV — warna merah muda dipelajari di Jalur A, biru di Jalur B." },
            isi: [
              "Lulusan DKV tidak hanya jadi \"tukang desain\". Bidangnya bercabang, dan hampir semuanya akan kalian cicipi di semester ini."
            ],
            poin: [
              "Desainer grafis — poster, kemasan, materi promosi (dipelajari di Jalur A).",
              "Fotografer — produk, potret, dokumentasi (Jalur A, mulai P6).",
              "Videografer & editor video — iklan, konten sosial media, film pendek (Jalur B).",
              "Motion designer — grafis bergerak, animasi teks (Jalur B P12).",
              "Ilustrator — gambar untuk buku, merchandise, karakter.",
              "Desainer identitas visual/brand — logo dan sistem visual merek (Jalur A P12).",
              "Desainer UI — tampilan aplikasi dan website."
            ]
          },
          {
            judul: "K3LH: aturan main studio & lab",
            isi: [
              "Alat yang kalian pakai semester ini mahal dan sebagian berbahaya kalau ceroboh. Aturan ini bukan formalitas — pelanggaran K3LH memengaruhi izin pakai alat."
            ],
            poin: [
              "Studio: jangan melangkahi kabel lighting; lampu studio panas — jangan disentuh bagian kepalanya; kamera selalu pakai strap dan dikembalikan ke dry box.",
              "Tripod dikunci dulu baru kamera dipasang; dua tangan saat memindahkan lightstand.",
              "Lab: tidak ada makanan/minuman di meja komputer; simpan file di folder kelas dengan format nama yang disepakati (NAMA_KELAS_TUGAS).",
              "Duduk tegak, istirahatkan mata tiap 20 menit (lihat jauh 20 detik).",
              "Lapor kerusakan alat segera — yang kena sanksi adalah yang menyembunyikan, bukan yang melapor."
            ]
          },
          {
            judul: "Kontrak belajar & sistem penilaian semester",
            isi: [
              "Bacakan dan sepakati bersama di pertemuan pertama, lalu tanda tangan — kontrak yang disepakati jauh lebih kuat daripada aturan yang diumumkan. Intinya satu: kelas ini dinilai dari KARYA dan PROSES, bukan hafalan.",
              "Jelaskan juga logika portofolionya: setiap pertemuan menghasilkan satu output kecil; di akhir semester output-output itu dikurasi jadi portofolio — jadi tugas mingguan bukan setoran, tapi tabungan."
            ],
            poin: [
              "Komponen nilai semester (sampaikan terbuka): portofolio akhir terbesar, lalu UTS praktik, tugas mingguan, dan UAS sebagai konfirmasi teori.",
              "Aturan tugas: dikumpulkan sesuai tenggat ke folder kelas dengan format NAMA_KELAS_TUGAS; terlambat tetap diterima dengan konsekuensi yang disepakati kelas hari ini.",
              "Aturan karya: boleh terinspirasi, haram menjiplak; karya jiplakan/di-generate penuh tanpa proses = mengulang tugas.",
              "Aturan alat: pelanggaran K3LH memengaruhi izin pakai alat — bukan nilai sikap yang abstrak, tapi akses yang nyata.",
              "Hak siswa: bertanya kapan pun, meminta konsultasi karya, dan mendapat alasan atas setiap nilai (rubrik terbuka di website ini).",
              "Simpan SEMUA file sejak hari ini — 'file saya hilang' di pekan 14 adalah tragedi yang bisa dicegah hari ini."
            ]
          },
          {
            judul: "Mood board: alat berpikir desainer",
            isi: [
              "Mood board adalah kumpulan gambar yang disusun untuk menangkap suasana atau arah visual. Desainer profesional selalu mulai dari sini sebelum mendesain — termasuk untuk klien besar. Hari ini kalian membuatnya dari temuan sendiri: bukti bahwa desain ada di sekeliling kalian.",
              "Mood board yang baik bukan tempelan asal banyak. Ada seleksi (pilih yang menarik, buang yang tidak), ada pengelompokan (warna, gaya, jenis), dan ada satu kesimpulan kecil: apa yang membuat temuan-temuan ini menarik?"
            ],
            poin: [
              "Langkah: (1) keliling area sekolah 20 menit, foto minimal 15 temuan desain; (2) pilih 8–12 terbaik; (3) susun satu halaman di Canva; (4) beri judul dan 3 kalimat refleksi.",
              "Yang dihitung \"temuan desain\": kemasan, spanduk, signage, mural, poster, seragam, stiker motor — apa pun yang dirancang untuk menyampaikan sesuatu."
            ]
          }
        ],
        alur: [
          { durasi: 20, segmen: "Pembuka & perkenalan", detail: "Perkenalan guru lewat karya, bukan CV. Pemantik: \"Desain apa saja yang kalian lihat sejak bangun tidur tadi?\"" },
          { durasi: 50, segmen: "Teori + demo", detail: "Ruang lingkup DKV, peta profesi, bedah 2–3 karya klien nyata: apa brief-nya, siapa audiensnya, kenapa keputusannya begitu." },
          { durasi: 20, segmen: "Tur studio & lab + K3LH", detail: "Keliling studio foto mini dan lab. Tunjukkan titik bahaya (kabel, lighting panas, colokan) dan aturan pakai alat." },
          { durasi: 60, segmen: "Praktik terbimbing: mood board", detail: "Siswa berkeliling area sekolah memotret temuan desain dengan HP (kemasan, spanduk, mural, signage), lalu menyusunnya jadi mood board 1 halaman di Canva." },
          { durasi: 20, segmen: "Review antar siswa", detail: "Tukar layar dengan teman sebangku: temuan mana yang paling menarik, kenapa." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum, tanda tangan kontrak belajar, brief penyelesaian mood board di rumah." }
        ],
        alat: [
          "Proyektor + contoh karya guru (siap di beranda website ini)",
          "Lembar kontrak belajar (cetak, 1 per siswa)",
          "HP siswa (kamera) — pastikan minimal 1 per kelompok kecil",
          "Lab komputer + akun Canva",
          "Studio foto mini (untuk tur K3LH)"
        ],
        tugas: {
          judul: "Mood board \"DKV di sekitarku\"",
          deskripsi: "8–12 foto temuan desain di lingkungan sekitar (kemasan, spanduk, signage, dst.) disusun satu halaman, ditambah 3 kalimat refleksi: temuan mana yang menurutmu paling berhasil menyampaikan pesan, dan kenapa.",
          portofolio: true
        },
        catatan: "Pertemuan pertama menentukan nada satu semester. Jangan habiskan waktu di aturan — tunjukkan karya dulu supaya mereka melihat ujung perjalanannya, baru kontrak belajar. Simpan daftar nama siswa yang HP-nya bermasalah untuk antisipasi pertemuan praktik foto."
      },

      {
        p: 2, judul: "Nirmana Dwimatra", pekan: 2, uts: false, lengkap: true,
        ringkas: "Titik, garis, bidang, ruang; prinsip kesatuan, keseimbangan, irama.",
        tujuan: [
          "Siswa dapat mengidentifikasi elemen rupa (titik, garis, bidang, ruang) pada karya desain yang diamatinya.",
          "Siswa dapat menerapkan prinsip kesatuan, keseimbangan, dan irama dalam komposisi hitam-putih buatannya sendiri.",
          "Siswa dapat menilai komposisi karya teman menggunakan kosakata nirmana yang tepat."
        ],
        materi: [
          "Delapan unsur desain: titik, garis, bidang, bentuk, ruang, tekstur, warna, gelap-terang (value).",
          "Enam prinsip penyusunan: kesatuan, keseimbangan, irama, penekanan, proporsi, keselarasan — praktik hari ini fokus di tiga yang pertama.",
          "Bedah contoh: karya nirmana klasik berdampingan dengan desain sehari-hari (poster, kemasan) yang memakai prinsip yang sama.",
          "Teknik kerja manual: potong-tempel kertas hitam di atas putih — kenapa manual dulu, bukan langsung komputer."
        ],
        modul: [
          {
            judul: "Delapan unsur desain",
            img: { file: "assets/img/ilustrasi/p2-unsur-desain.svg", alt: "Diagram delapan unsur desain: titik, garis, bidang, bentuk, ruang, tekstur, warna, dan gelap-terang", caption: "Delapan unsur desain — tunjukkan satu per satu sambil menunjuk contohnya di kemasan produk nyata." },
            isi: [
              "Semua desain — poster, logo, foto, bahkan frame video — tersusun dari delapan unsur dasar ini. Kalau kalian bisa melihatnya satu per satu, kalian bisa membongkar desain apa pun dan tahu kenapa ia terasa rapi atau berantakan. Anggap ini seperti unsur kimia: sedikit jenisnya, tapi kombinasinya tak terbatas.",
              "Cara mengajarkannya di kelas: tunjukkan satu kemasan produk, lalu tunjuk unsur-unsurnya satu per satu bersama siswa."
            ],
            poin: [
              "TITIK — satuan terkecil. Sendirian ia jadi pusat perhatian; berkelompok ia membentuk tekstur atau arah (contoh: halftone di koran, screentone komik).",
              "GARIS — jejak titik yang bergerak. Horizontal = tenang, vertikal = kokoh, diagonal = dinamis, lengkung = luwes. Garis juga bisa tersirat: arah pandang mata model di poster adalah 'garis'.",
              "BIDANG — area dua dimensi hasil garis yang menutup (kotak, lingkaran, segitiga, bentuk bebas). Geometris terasa teratur & modern; organik terasa alami & santai.",
              "BENTUK (form) — bidang yang berkesan tiga dimensi karena bayangan dan perspektif. Ikon aplikasi datar = bidang; tombol dengan bayangan = bentuk.",
              "RUANG — area di antara dan di sekitar elemen, termasuk ruang kosong (white space). Ruang kosong BUKAN sisa — ia yang membuat elemen lain bisa bernapas dan terbaca.",
              "TEKSTUR — kesan permukaan: kasar, halus, berserat. Di desain digital, tekstur hadir lewat foto latar, grain, atau pola.",
              "WARNA — unsur paling cepat menyentuh emosi. Dibahas tuntas satu pertemuan penuh minggu depan (P3).",
              "GELAP-TERANG (value) — perbedaan tingkat terang antar elemen. Inilah yang membuat desain hitam-putih hari ini tetap bisa 'berbunyi': kontras value = hierarki."
            ]
          },
          {
            judul: "Enam prinsip penyusunan",
            isi: [
              "Unsur adalah bahannya; prinsip adalah cara memasaknya. Ada enam prinsip yang perlu siswa kenal namanya sejak sekarang — tapi praktik hari ini cukup fokus di tiga pertama supaya tidak kewalahan."
            ],
            poin: [
              "KESATUAN (unity) — semua elemen terasa satu keluarga: gaya, arah, atau bentuknya saling terhubung. Uji: tutup satu elemen — kalau tidak ada yang berubah, elemen itu mungkin tidak perlu.",
              "KESEIMBANGAN (balance) — bobot visual kiri-kanan/atas-bawah terasa stabil. Simetris = formal dan tenang; asimetris = dinamis tapi lebih sulit (elemen besar dekat pusat diimbangi elemen kecil yang jauh dari pusat, seperti jungkat-jungkit).",
              "IRAMA (rhythm) — pengulangan elemen dengan pola: ukuran membesar, jarak berubah teratur. Irama membuat mata bergerak mengikuti alur yang kita rancang.",
              "PENEKANAN (emphasis) — satu titik paling menonjol sebagai pintu masuk mata. Kalau semua berteriak, tidak ada yang terdengar.",
              "PROPORSI — perbandingan ukuran antar elemen yang terasa pas. Judul poster 5× lebih besar dari teks isi itu proporsi yang bekerja.",
              "KESELARASAN (harmony) — keseluruhan terasa enak dilihat karena unsur-unsurnya saling mendukung, bukan bersaing. Ini hasil akhir kalau lima prinsip lainnya jalan."
            ]
          },
          {
            judul: "Kenapa hitam-putih, kenapa manual?",
            isi: [
              "Hitam-putih memaksa kalian fokus ke komposisi — tanpa warna, tidak ada yang bisa menutupi susunan yang lemah. Manual (potong-tempel) memaksa kalian memutuskan dengan tangan dan mata, bukan menggeser-geser sambil berharap kebetulan bagus. Di industri pun, sketsa kasar selalu datang sebelum file digital."
            ]
          },
          {
            judul: "Langkah praktik hari ini",
            poin: [
              "Siapkan 3 kertas A5 putih sebagai kanvas dan 1 kertas hitam sebagai bahan potong.",
              "Studi 1 — KESATUAN: potong 5–8 bentuk sederhana, susun agar terasa satu keluarga.",
              "Studi 2 — KESEIMBANGAN ASIMETRIS: satu bentuk besar + beberapa kecil, cari titik stabilnya sebelum dilem.",
              "Studi 3 — IRAMA: satu bentuk diulang minimal 5 kali dengan perubahan teratur.",
              "Aturan: susun dulu tanpa lem, foto dengan HP, baru lem versi terbaik. Lem adalah keputusan final."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review 3–4 mood board terbaik dari P1. Pemantik: tunjukkan 2 poster — satu ramai berantakan, satu tertata. Mana yang lebih enak dibaca, kenapa?" },
          { durasi: 45, segmen: "Teori + demo", detail: "Elemen dan prinsip nirmana dengan contoh nyata. Demo langsung: susun potongan kertas di bawah kamera dokumen/HP, geser-geser sampai seimbang." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Tiga studi komposisi hitam-putih di kertas A5: (1) kesatuan, (2) keseimbangan asimetris, (3) irama. Potong-tempel kertas hitam di atas putih. Guru keliling per meja." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Kurasi dinding: semua karya ditempel, siswa memberi 1 stiker pada komposisi terkuat milik orang lain dan menyebut prinsip apa yang membuatnya kuat." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum kosakata baru. Brief: foto karya terbaikmu untuk portofolio." }
        ],
        alat: [
          "Kertas gambar A5 putih (3 lembar per siswa) + kertas hitam/origami hitam",
          "Gunting, lem stik, cutter + cutting mat (perhatikan K3LH)",
          "Selotip/paku pines untuk kurasi dinding + stiker voting",
          "Kamera dokumen atau HP + holder untuk demo"
        ],
        tugas: {
          judul: "Komposisi hitam-putih",
          deskripsi: "Pilih 1 dari 3 studi komposisimu yang paling kuat, foto dengan rapi (cahaya rata, tegak lurus), dan tulis keterangan: prinsip apa yang kamu terapkan dan di bagian mana terlihat.",
          portofolio: true
        },
        catatan: "Tahan keinginan siswa untuk langsung ke komputer — di kertas, mereka terpaksa memikirkan komposisi, bukan efek. Siapkan kertas cadangan; selalu ada yang salah potong. Karya kurasi dinding jangan dilepas: ini awal 'galeri kelas' yang tumbuh tiap minggu."
      },

      {
        p: 3, judul: "Warna", pekan: 3, uts: false, lengkap: true,
        ringkas: "Roda warna, harmoni, psikologi warna, RGB vs CMYK.",
        tujuan: [
          "Siswa dapat membedakan ruang warna RGB dan CMYK serta menentukan kapan masing-masing digunakan.",
          "Siswa dapat menyusun tiga skema harmoni warna (komplementer, analog, triadik) dari satu warna dasar.",
          "Siswa dapat mengaitkan pilihan warna dengan pesan dan audiens sebuah desain."
        ],
        materi: [
          "Roda warna; hue, saturation, value — tiga kata yang dipakai seumur hidup desainer.",
          "Harmoni warna: komplementer, analog, triadik, monokromatik — kapan masing-masing cocok.",
          "Psikologi & konteks warna: warna yang sama bisa berarti beda tergantung budaya dan produk.",
          "RGB vs CMYK: cahaya vs tinta. Kenapa desain yang menyala di layar bisa kusam saat dicetak — didemokan langsung dengan printer."
        ],
        modul: [
          {
            judul: "Tiga dimensi warna: hue, saturation, value",
            isi: [
              "Setiap warna bisa dijelaskan dengan tiga kata ini, dan tiga kata ini akan kalian pakai seumur hidup sebagai desainer."
            ],
            poin: [
              "HUE — jenis warnanya: merah, biru, hijau. Posisinya di roda warna.",
              "SATURATION — kepekatan: dari abu-abu kusam sampai menyala penuh.",
              "VALUE — gelap-terang: dari hampir hitam sampai hampir putih.",
              "Kesalahan pemula paling umum: semua warna sama pekat dan sama terang, sehingga desain terasa \"berteriak\" semua. Bedakan value-nya, desain langsung tenang."
            ]
          },
          {
            judul: "Skema harmoni warna",
            img: { file: "assets/img/ilustrasi/p3-roda-warna.svg", alt: "Roda warna 12 bagian dengan empat skema harmoni: komplementer, analog, triadik, monokromatik", caption: "Roda warna dan empat skema harmoni — cocokkan dengan Adobe Color saat demo." },
            isi: [
              "Harmoni adalah resep mengombinasikan warna berdasarkan posisinya di roda warna. Ini bukan aturan mati, tapi titik mulai yang hampir selalu aman."
            ],
            poin: [
              "KOMPLEMENTER — dua warna berseberangan (biru–oranye). Kontras kuat, cocok untuk menarik perhatian; pakai satu sebagai dominan, satunya aksen.",
              "ANALOG — 2–3 warna bersebelahan (biru–toska–hijau). Tenang dan menyatu, tapi butuh kontras value agar tidak datar.",
              "TRIADIK — tiga warna berjarak sama di roda. Ceria dan seimbang; turunkan saturasi salah duanya supaya tidak ramai.",
              "MONOKROMATIK — satu hue, main di saturation dan value. Paling aman, terlihat profesional, cocok untuk pemula."
            ]
          },
          {
            judul: "Warna membawa pesan",
            isi: [
              "Warna dipilih bukan karena bagus, tapi karena artinya cocok dengan pesan. Arti warna juga tergantung konteks dan budaya — merah di kemasan sambal berarti pedas, merah di rambu berarti larangan, merah di undangan pernikahan Tionghoa berarti keberuntungan.",
              "Karena itu di setiap tugas, pertanyaan saya bukan \"kenapa warnanya bagus\" tapi \"kenapa warna ini cocok untuk pesan dan audiensmu\"."
            ]
          },
          {
            judul: "RGB vs CMYK: cahaya vs tinta",
            isi: [
              "Layar memancarkan CAHAYA: campuran Red, Green, Blue — makin dicampur makin terang (additive). Printer menumpuk TINTA: Cyan, Magenta, Yellow, Key/hitam — makin dicampur makin gelap (subtractive).",
              "Rentang warna tinta lebih sempit daripada cahaya. Hijau neon atau biru elektrik yang menyala di layar tidak punya padanan tinta — saat dicetak ia \"jatuh\" ke versi kusamnya. Itu yang akan kalian lihat di demo cetak hari ini.",
              "Aturan praktis: desain untuk layar (IG, video) = RGB; desain untuk cetak (poster, kemasan, kartu nama) = CMYK sejak awal, supaya tidak kaget saat hasil cetak berbeda."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review komposisi P2. Pemantik: tunjukkan logo-logo terkenal yang warnanya diubah — kenapa rasanya salah?" },
          { durasi: 45, segmen: "Teori + demo", detail: "Roda warna dan harmoni di Adobe Color. Demo kunci: cetak satu gambar RGB mencolok, bandingkan hasil cetak CMYK-nya di depan kelas." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Ekstrak palet 5 warna dari salah satu foto mood board P1, lalu bangun 3 skema harmoni dari warna dominannya. Terapkan salah satu skema untuk mewarnai ulang komposisi nirmana P2 secara digital." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Bandingkan berpasangan: skema mana yang paling mengubah 'rasa' komposisi? Sebutkan dengan kosakata hue/saturation/value." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum RGB vs CMYK dalam satu kalimat versi siswa. Brief lembar eksplorasi warna." }
        ],
        alat: [
          "Lab komputer + Adobe Color / Illustrator / Canva",
          "Printer berwarna + 1–2 lembar uji cetak (untuk demo RGB vs CMYK)",
          "Contoh cetakan nyata: kemasan/brosur dengan warna khas",
          "File komposisi P2 siswa (difoto/discan sebelumnya)"
        ],
        tugas: {
          judul: "Palet + eksplorasi warna",
          deskripsi: "Satu lembar eksplorasi: palet 5 warna hasil ekstraksi fotomu, 3 skema harmoni turunannya, dan komposisi P2-mu yang diwarnai ulang dengan salah satu skema. Tulis 2 kalimat: skema apa yang kamu pilih dan pesan/suasana apa yang ingin dicapai.",
          portofolio: true
        },
        catatan: "Demo cetak RGB→CMYK adalah momen paling membekas di pertemuan ini — jangan dilewati walau printer antre. Simpan hasil uji cetaknya, tempel di galeri kelas sebagai pengingat permanen. Siswa yang cepat selesai: minta buat skema warna untuk 'brand sekolah'."
      },

      {
        p: 4, judul: "Tipografi", pekan: 4, uts: false, lengkap: true,
        ringkas: "Anatomi huruf, klasifikasi, keterbacaan, pairing.",
        tujuan: [
          "Siswa dapat mengidentifikasi anatomi huruf (baseline, x-height, ascender, descender, serif) dan mengklasifikasikan typeface ke dalam serif, sans-serif, script, dan display.",
          "Siswa dapat menilai keterbacaan sebuah teks berdasarkan pilihan huruf, ukuran, dan spasi.",
          "Siswa dapat memasangkan maksimal dua typeface secara fungsional dalam satu poster tipografi."
        ],
        materi: [
          "Anatomi huruf: baseline, x-height, ascender, descender, counter, serif — kosakata untuk membicarakan huruf.",
          "Klasifikasi: serif, sans-serif, script, display — karakter dan penggunaannya.",
          "Keterbacaan (readability) vs kejelasan (legibility); hierarki teks: judul, subjudul, isi.",
          "Prinsip pairing: kontras peran (display + teks), bukan dua huruf yang mirip; batas aman 2 typeface per desain."
        ],
        modul: [
          {
            judul: "Anatomi huruf",
            img: { file: "assets/img/ilustrasi/p4-anatomi-huruf.svg", alt: "Diagram anatomi huruf: baseline, x-height, ascender line, descender line, dan counter pada huruf Axpb", caption: "Garis-garis anatomi huruf — gambar ulang di papan sambil siswa menyebutkan namanya." },
            isi: [
              "Huruf punya anatomi seperti tubuh manusia, dan kosakata ini yang membedakan orang yang \"suka font\" dengan orang yang bisa membicarakan huruf secara profesional."
            ],
            poin: [
              "BASELINE — garis tempat huruf \"berdiri\".",
              "X-HEIGHT — tinggi huruf kecil tanpa tangkai (setinggi huruf x). X-height besar = terasa lebih mudah dibaca di ukuran kecil.",
              "ASCENDER — tangkai ke atas (b, d, k); DESCENDER — ekor ke bawah (g, j, p).",
              "COUNTER — ruang tertutup di dalam huruf (lubang huruf o, e, a).",
              "SERIF — \"kaki\" kecil di ujung goresan. Ada = huruf serif; tidak ada = sans-serif."
            ]
          },
          {
            judul: "Empat klasifikasi besar",
            poin: [
              "SERIF — berkaki (Times, Garamond). Kesan: klasik, formal, terpercaya. Nyaman untuk teks panjang di cetak.",
              "SANS-SERIF — tanpa kaki (Helvetica, Inter). Kesan: modern, bersih. Andalan untuk layar dan signage.",
              "SCRIPT — meniru tulisan tangan. Kesan: personal, mewah, atau santai. HANYA untuk aksen pendek — jangan pernah untuk paragraf.",
              "DISPLAY — huruf \"berkostum\", dirancang untuk ukuran besar dan mencuri perhatian. Sama seperti script: aksen, bukan badan teks."
            ]
          },
          {
            judul: "Keterbacaan & hierarki",
            isi: [
              "Legibility = seberapa mudah satu huruf dikenali (urusan bentuk huruf). Readability = seberapa nyaman teks utuh dibaca (urusan ukuran, spasi, panjang baris, kontras). Huruf yang legible bisa jadi tidak readable kalau disusun buruk.",
              "Hierarki = urutan baca yang kalian rancang. Orang tidak membaca poster — orang memindai. Tugas kalian menentukan: apa yang terbaca dalam 1 detik pertama, 3 detik, lalu 10 detik. Alatnya: ukuran, ketebalan, warna, posisi."
            ]
          },
          {
            judul: "Aturan pairing (memasangkan huruf)",
            isi: [
              "Prinsipnya satu: pasangan huruf harus BERBEDA PERAN, bukan bersaing. Display yang berkarakter untuk judul + sans/serif yang tenang untuk isi. Dua huruf yang mirip tapi tidak sama justru terasa seperti salah pilih."
            ],
            poin: [
              "Aman: 1 typeface untuk judul + 1 untuk teks. Maksimal 2 di kelas ini — titik.",
              "Butuh variasi? Pakai keluarga yang sama: bold, italic, ukuran — bukan typeface baru.",
              "Uji pairing: kecilkan desain sampai thumbnail — hierarki masih terlihat? Judul masih menonjol?"
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review lembar warna P3. Pemantik: kuis tebak merek hanya dari bentuk hurufnya (logo dengan nama disensor)." },
          { durasi: 45, segmen: "Teori + demo", detail: "Anatomi dan klasifikasi lewat spesimen. Demo pairing langsung: satu kutipan diset dengan 4 kombinasi huruf berbeda — rasakan bedanya." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Poster tipografi A4: kutipan pendek pilihan siswa, hanya huruf (tanpa gambar/foto), maksimal 2 typeface, hitam-putih + 1 warna aksen dari palet P3 mereka sendiri." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Uji jarak: poster ditampilkan dari jauh — masih terbaca? Hierarkinya jalan? Teman menebak kata mana yang ingin ditonjolkan." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: huruf juga berbicara sebelum dibaca. Brief finalisasi poster untuk portofolio." }
        ],
        alat: [
          "Lab komputer + Adobe/Canva dengan koleksi font memadai",
          "Spesimen huruf cetak (1 lembar per klasifikasi) untuk diamati dari dekat",
          "Kumpulan kutipan pendek (siapkan cadangan bagi siswa yang bingung memilih)",
          "Proyektor untuk uji keterbacaan jarak jauh"
        ],
        tugas: {
          judul: "Poster tipografi",
          deskripsi: "Finalisasi poster tipografi A4: kutipan pilihanmu, maksimal 2 typeface, hitam-putih + 1 warna aksen. Ekspor PDF + PNG. Tulis 2 kalimat: kenapa memilih pasangan huruf itu dan kata apa yang kamu jadikan hierarki teratas.",
          portofolio: true
        },
        catatan: "Batasi pilihan font (kurasi 10–15 font di awal) — kebebasan penuh justru membuat 90 menit habis untuk scrolling. Larangan keras: lebih dari 2 typeface. Poster terbaik pertemuan ini biasanya jadi kandidat kuat portofolio akhir, arsipkan versi PDF-nya sejak sekarang."
      },

      {
        p: 5, judul: "Layout & Grid", pekan: 5, uts: false, lengkap: true,
        ringkas: "Grid, hierarki visual, white space, alignment → poster acara sekolah.",
        tujuan: [
          "Siswa dapat menjelaskan fungsi margin, kolom, dan gutter dalam sebuah grid.",
          "Siswa dapat menyusun poster dengan hierarki visual yang terbaca dalam tiga detik.",
          "Siswa dapat menerapkan alignment dan white space secara konsisten dalam satu layout."
        ],
        materi: [
          "Anatomi grid: margin, kolom, gutter — dan kenapa koran, majalah, sampai feed Instagram semuanya memakai grid.",
          "Hierarki visual: mengatur apa yang terbaca dalam 1 detik, 3 detik, dan 10 detik pertama.",
          "White space sebagai elemen aktif; alignment sebagai perekat tak terlihat.",
          "Studi kasus: membedah layout poster yang berhasil dan yang gagal."
        ],
        modul: [
          {
            judul: "Kenapa desainer butuh grid",
            img: { file: "assets/img/ilustrasi/p5-anatomi-grid.svg", alt: "Diagram anatomi grid halaman: margin di tepi, tiga kolom, dan gutter di antara kolom", caption: "Anatomi grid: margin, kolom, gutter — rangka tak terlihat di balik layout yang rapi." },
            isi: [
              "Grid adalah rangka bangunan sebuah desain — tak terlihat di hasil akhir, tapi menentukan semuanya berdiri rapi atau miring. Koran, majalah, website, sampai feed Instagram yang estetik semuanya duduk di atas grid.",
              "Demo yang efektif: tunjukkan satu halaman majalah, lalu gambar ulang garis-garis kolomnya dengan spidol di atas fotokopiannya. Siswa akan 'melihat' rangka yang selama ini tersembunyi."
            ],
            poin: [
              "MARGIN — bingkai kosong di tepi halaman. Konten yang menempel ke tepi terasa sesak dan murahan.",
              "KOLOM — pembagi vertikal area konten. Poster sederhana cukup 2–3 kolom.",
              "GUTTER — jarak antar kolom, supaya kolom tidak saling menempel.",
              "Aturan main kelas: pilih grid SEBELUM mulai mendesain, lalu patuhi. Melanggar grid boleh — asal sadar dan beralasan."
            ]
          },
          {
            judul: "Hierarki visual: siapa bicara duluan",
            isi: [
              "Orang tidak membaca poster — orang memindainya sambil lewat. Tugas desainer menentukan urutan bicara: dalam 1 detik pertama apa yang tertangkap (judul/gambar), dalam 3 detik info kunci apa yang sampai (acara apa, kapan, di mana), dan baru dalam 10 detik detail kecilnya (kontak, sponsor, syarat).",
              "Alat pengatur hierarki cuma empat: UKURAN (besar menang), KETEBALAN (bold menang), WARNA (kontras menang), dan POSISI (atas & tengah menang). Mata orang Indonesia membaca kiri-atas ke kanan-bawah membentuk pola Z — letakkan informasi mengikuti jalur itu."
            ],
            poin: [
              "Uji 3 detik: tampilkan poster 3 detik, tutup, tanya siswa: acaranya apa? kapan? Kalau tidak terjawab, hierarkinya gagal — bukan desainnya kurang ramai.",
              "Kesalahan pemula: SEMUA dianggap penting sehingga semua dibesarkan. Hasilnya justru tidak ada yang penting.",
              "Latihan cepat: tulis 5 informasi acara di papan, minta siswa mengurutkan dari paling penting sebelum menyentuh komputer."
            ]
          },
          {
            judul: "White space & alignment",
            isi: [
              "White space (ruang kosong) adalah tanda desain yang percaya diri. Poster yang penuh sesak terlihat panik; poster dengan ruang napas terlihat mahal. Bandingkan iklan brand mewah (banyak ruang kosong) dengan brosur kredit elektronik (penuh) — keduanya sengaja, tapi untuk pesan yang berbeda.",
              "Alignment adalah perekat yang tak terlihat: elemen-elemen yang rata pada satu garis imajiner terasa terhubung walau berjauhan."
            ],
            poin: [
              "Rata kiri = paling aman dan mudah dibaca untuk teks panjang.",
              "Rata tengah = formal, cocok untuk undangan & sertifikat — tapi lemah untuk teks lebih dari 3 baris.",
              "Satu layout satu sistem: jangan campur rata kiri, kanan, dan tengah tanpa alasan.",
              "Trik cek: tarik garis vertikal di tepi elemen — semakin sedikit jumlah garis imajiner, semakin rapi layout."
            ]
          },
          {
            judul: "Checklist poster yang siap tempel",
            poin: [
              "Satu elemen paling dominan (judul ATAU gambar — jangan dua-duanya bersaing).",
              "Info kunci (apa, kapan, di mana) terbaca dari jarak 3 meter.",
              "Margin konsisten di empat sisi; tidak ada elemen menempel tepi.",
              "Maksimal 2 typeface (ingat P4) dan palet warna dari satu skema (ingat P3).",
              "Ada white space — kalau terasa kosong, itu biasanya justru pas."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review poster tipografi P4. Pemantik: dua poster acara — satu ber-grid satu tidak — mana yang lebih dipercaya isinya?" },
          { durasi: 45, segmen: "Teori + demo", detail: "Anatomi grid, hierarki, white space. Demo langsung: susun konten acara yang sama dengan grid 2 kolom vs tanpa grid." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Poster acara sekolah (A4/A3) dengan konten teks yang SAMA untuk semua siswa — grid minimal 2 kolom, hierarki 3 lapis. Guru keliling mengecek margin & alignment." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Uji 3 detik berpasangan: teman melihat poster 3 detik lalu menyebutkan info yang tertangkap." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: grid → hierarki → ruang. Brief finalisasi poster." }
        ],
        alat: [
          "Lab komputer + Adobe/Canva",
          "Konten acara sekolah yang seragam (judul, tanggal, tempat, kontak — siapkan H-1)",
          "Contoh poster bagus & buruk untuk dibedah (cetak atau slide)",
          "Majalah/koran bekas + spidol untuk demo menggambar ulang grid"
        ],
        tugas: {
          judul: "Poster acara sekolah",
          deskripsi: "Finalisasi poster acara sekolah dengan grid yang jelas dan hierarki 3 lapis. Sertakan versi PDF dan screenshot yang memperlihatkan guide grid-nya. Tulis 2 kalimat: elemen apa yang kamu jadikan dominan dan kenapa.",
          portofolio: true
        },
        catatan: "Konten teks disamakan untuk semua siswa itu penting — penilaian jadi murni soal layout, bukan siapa yang idenya paling ramai. Simpan poster terbaik untuk benar-benar dicetak dan ditempel di mading: motivasi terbesar adalah karya yang dipakai sungguhan."
      },

      {
        p: 6, judul: "Anatomi Kamera & Eksposur", pekan: 6, uts: false, lengkap: true,
        ringkas: "Bagian kamera, segitiga eksposur (ISO/aperture/shutter), depth of field → latihan mode manual.",
        tujuan: [
          "Siswa dapat menyebutkan bagian-bagian utama kamera dan fungsinya.",
          "Siswa dapat menjelaskan hubungan aperture, shutter speed, dan ISO dalam segitiga eksposur.",
          "Siswa dapat menghasilkan foto dengan eksposur tepat menggunakan mode manual."
        ],
        materi: [
          "Anatomi kamera: body, lensa, sensor, mode dial, dan cara memegang yang benar.",
          "Segitiga eksposur dengan analogi dan angka nyata: aperture, shutter speed, ISO.",
          "Depth of field: kenapa latar bisa blur dan kapan itu diinginkan.",
          "Membaca light meter dan histogram untuk mengecek eksposur."
        ],
        modul: [
          {
            judul: "Kenalan dengan kamera",
            img: { file: "assets/img/ilustrasi/a6-anatomi-kamera.svg", alt: "Diagram anatomi kamera: tombol shutter, mode dial M, jendela bidik dengan light meter, lensa, layar, dan grip", caption: "Bagian-bagian kamera — peragakan dengan kamera sungguhan sambil menunjuk diagram ini." },
            isi: [
              "Kamera pada dasarnya kotak kedap cahaya dengan satu tugas: mengatur berapa banyak cahaya yang jatuh ke sensor. Semua tombol yang tampak rumit itu hanya melayani satu urusan tersebut.",
              "Peragakan cara memegang: tangan kanan di grip, telapak kiri menopang lensa dari bawah (bukan mencubit dari samping), siku merapat ke badan, kaki selebar bahu. Ini menurunkan blur akibat goyangan lebih dari fitur mahal mana pun."
            ],
            poin: [
              "BODY — rumah sensor dan komputer kamera.",
              "LENSA — mata kamera; angka 18-55mm = rentang zoom, angka f/3.5-5.6 = bukaan maksimalnya.",
              "SENSOR — 'film digital', tempat cahaya menjadi gambar. Jangan pernah disentuh.",
              "MODE DIAL — hari ini kita langsung ke M (manual). Auto boleh untuk dokumentasi, tapi di kelas ini kalian yang memutuskan, bukan kamera.",
              "Kartu memori & baterai: cek SEBELUM sesi — dua penyebab gagal foto nomor satu di dunia nyata."
            ]
          },
          {
            judul: "Segitiga eksposur: analogi ember & keran",
            img: { file: "assets/img/ilustrasi/p6-segitiga-eksposur.svg", alt: "Diagram segitiga eksposur: aperture f/1.8 sampai f/16, shutter speed 1/1000 sampai 1/30, dan ISO 100 sampai 6400", caption: "Segitiga eksposur — ubah satu sisi, minimal satu sisi lain harus menyesuaikan." },
            isi: [
              "Eksposur = jumlah cahaya yang terkumpul, seperti mengisi ember dengan air keran. APERTURE adalah seberapa besar keran dibuka, SHUTTER SPEED adalah berapa lama keran dibuka, ISO adalah seberapa 'sensitif' embernya. Ember penuh pas = eksposur tepat; kurang = gelap (underexposed); luber = terang pecah (overexposed).",
              "Ketiganya saling menukar: kalau keran dikecilkan (f besar), waktunya harus lebih lama (shutter lambat) supaya air tetap penuh. Inilah kenapa disebut segitiga — ubah satu, minimal satu yang lain harus menyesuaikan."
            ],
            poin: [
              "APERTURE (f-number): f/1.8 = bukaan BESAR (banyak cahaya, latar blur) · f/8 = sedang · f/16 = KECIL (sedikit cahaya, tajam semua). Angka kecil = bukaan besar — ini yang paling sering terbalik di kepala siswa.",
              "SHUTTER SPEED: 1/1000 detik membekukan orang melompat · 1/125 aman untuk orang diam · 1/30 mulai blur kalau handheld · 1 detik butuh tripod. Aturan praktis handheld: minimal 1/panjang-fokal (lensa 50mm → minimal 1/50).",
              "ISO: 100 (outdoor terang, bersih) · 400–800 (dalam ruangan) · 3200+ (gelap, mulai muncul noise/bintik). Naikkan ISO sebagai pilihan TERAKHIR.",
              "Satu 'stop' = kelipatan dua jumlah cahaya. f/2.8→f/4 = turun 1 stop; 1/60→1/125 = turun 1 stop; ISO 200→400 = naik 1 stop."
            ]
          },
          {
            judul: "Depth of field: bermain dengan blur",
            isi: [
              "Depth of field (DOF) = rentang area yang tajam. Potret dengan latar lembut memakai DOF tipis (f/1.8–f/2.8) supaya perhatian jatuh ke wajah. Foto produk justru sebaliknya: f/8–f/11 supaya seluruh produk tajam — klien tidak mau ada bagian produknya blur.",
              "Tiga hal yang menipiskan DOF: bukaan makin besar, jarak ke subjek makin dekat, dan panjang fokal makin panjang (zoom)."
            ],
            poin: [
              "Demo kelas: foto botol yang sama di f/1.8 lalu f/11 — tampilkan berdampingan di proyektor.",
              "Vocabulary: 'bokeh' = kualitas blur di area tak fokus, bukan sekadar 'blur'.",
              "Fokus selalu di titik terpenting: untuk potret = mata; untuk produk = label/logo."
            ]
          },
          {
            judul: "Mode manual: urutan mengatur",
            isi: [
              "Beri siswa resep urutan yang sama setiap kali, supaya tidak panik memutar tombol acak. Light meter di jendela bidik (garis -2..0..+2) adalah panduannya: jarum di 0 = eksposur pas menurut kamera."
            ],
            poin: [
              "Langkah 1 — ISO: set sesuai kondisi cahaya (outdoor 100–200, indoor 400–800).",
              "Langkah 2 — APERTURE: pilih sesuai kebutuhan DOF (potret blur → f kecil; produk tajam → f/8+).",
              "Langkah 3 — SHUTTER: putar sampai light meter menunjuk 0, cek tidak lebih lambat dari batas handheld.",
              "Langkah 4 — potret, lihat hasil + histogram: menumpuk di kiri = under, menabrak kanan = over.",
              "Kalau shutter terpaksa terlalu lambat: buka aperture, baru naikkan ISO."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Pemantik: tampilkan 3 foto gagal (gelap, blur goyang, noise parah) — tebak apa yang salah. Hari ini kalian belajar mengendalikan ketiganya." },
          { durasi: 45, segmen: "Teori + demo", detail: "Segitiga eksposur dengan live view kamera ke proyektor: ubah satu variabel, lihat efeknya langsung. Peragakan cara pegang & urutan setting mode M." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Rotasi kelompok (1 kamera per kelompok), 3 tantangan: (1) bekukan teman melompat, (2) potret dengan latar blur, (3) foto di lorong redup tanpa flash. Semua wajib mode M dan mencatat setting tiap foto." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Tiap kelompok tampilkan 1 foto terbaik per tantangan + sebutkan settingnya; kelas menebak kenapa setting itu dipilih." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum segitiga dengan analogi ember. Brief tugas foto manual." }
        ],
        alat: [
          "Kamera DSLR/mirrorless (1 per kelompok kecil) — baterai penuh & kartu kosong, cek H-1",
          "Kabel HDMI/capture untuk live view ke proyektor",
          "Lembar tantangan + kolom catatan setting (cetak per kelompok)",
          "Lorong/ruang redup yang sudah disurvei untuk tantangan low-light"
        ],
        tugas: {
          judul: "Tiga foto mode manual",
          deskripsi: "Serahkan 3 foto (bekukan gerakan, latar blur, low-light) beserta setting masing-masing (ISO, aperture, shutter). Boleh pakai kamera sekolah saat sesi atau kamera/HP mode pro di rumah. Tulis 1 kalimat per foto: kenapa setting itu yang dipilih.",
          portofolio: true
        },
        catatan: "Ini pertemuan dengan kurva belajar paling curam sesemester — jangan tergoda menambah materi (metering mode, RAW, dsb.), cukup segitiga eksposur sampai benar-benar duduk. Siswa yang cepat paham jadikan 'asisten' di kelompoknya. Fotonya boleh jelek; catatan setting yang benar lebih penting minggu ini."
      },

      {
        p: 7, judul: "Komposisi Foto & Lighting Studio", pekan: 7, uts: false, lengkap: true,
        ringkas: "Rule of thirds, framing, leading lines; three-point lighting → latihan pencahayaan produk.",
        tujuan: [
          "Siswa dapat menerapkan minimal tiga teknik komposisi (rule of thirds, leading lines, framing) dalam fotonya.",
          "Siswa dapat membedakan cahaya keras dan lembut serta efek arah cahaya terhadap subjek.",
          "Siswa dapat menyusun setup three-point lighting (key, fill, rim) di studio mini."
        ],
        materi: [
          "Teknik komposisi: rule of thirds, leading lines, framing, negative space, simplicity.",
          "Angle dan jarak sebagai keputusan bercerita.",
          "Kualitas cahaya (keras vs lembut) dan arah cahaya (depan, samping, belakang).",
          "Three-point lighting: key, fill, rim — fondasi lighting foto dan video sekaligus."
        ],
        modul: [
          {
            judul: "Komposisi: mengarahkan mata penonton",
            img: { file: "assets/img/ilustrasi/p7-rule-of-thirds.svg", alt: "Diagram rule of thirds: frame dengan grid 3x3, subjek di persimpangan garis, horizon di sepertiga bawah", caption: "Rule of thirds: empat titik kuat tempat mata manusia paling nyaman menemukan subjek." },
            isi: [
              "Komposisi adalah cara memutuskan APA yang masuk frame dan DI MANA posisinya. Kamera mahal tidak menolong komposisi buruk; HP dengan komposisi bagus mengalahkan DSLR yang asal jepret.",
              "Aktifkan grid 3×3 di kamera/HP semua siswa hari ini juga — kebiasaan kecil yang efeknya permanen."
            ],
            poin: [
              "RULE OF THIRDS — bagi frame 3×3, letakkan subjek di garis/persimpangannya, bukan selalu di tengah. Mata manusia menganggap posisi ini lebih hidup.",
              "LEADING LINES — jalan, pagar, bayangan, deretan meja: garis apa pun yang menuntun mata ke subjek.",
              "FRAMING — bingkai alami (jendela, pintu, dedaunan) di sekeliling subjek menambah kedalaman.",
              "NEGATIVE SPACE — ruang kosong luas di sekitar subjek = kesan tenang, dramatis, premium (ingat white space di P5 — prinsipnya sama).",
              "SIMPLICITY — singkirkan yang tidak perlu dari frame. Melangkah satu meter lebih dekat sering menyelesaikan 80% masalah.",
              "Center boleh! — untuk subjek simetris atau kesan formal. Melanggar aturan itu sah kalau sadar."
            ]
          },
          {
            judul: "Kualitas & arah cahaya",
            isi: [
              "Dua pertanyaan untuk setiap cahaya: seberapa KERAS dan dari MANA arahnya. Cahaya keras (matahari langsung, lampu telanjang) menghasilkan bayangan tegas dan kesan dramatis. Cahaya lembut (mendung, jendela dengan gorden, softbox) menghasilkan bayangan halus dan kesan bersih — inilah default foto produk.",
              "Kuncinya: makin BESAR sumber cahaya relatif terhadap subjek, makin lembut cahayanya. Softbox itu sebenarnya cuma cara membesarkan lampu kecil."
            ],
            poin: [
              "Cahaya DEPAN — rata, aman, tapi datar (foto KTP).",
              "Cahaya SAMPING — memunculkan tekstur dan dimensi; sudut 45° adalah titik mulai klasik.",
              "Cahaya BELAKANG — siluet, atau rim light yang memisahkan subjek dari latar (lihat contoh foto potret siswa di halaman Profil!).",
              "Demo 1 menit: senter + botol — putari botol dengan senter, lihat karakter berubah tiap 45°."
            ]
          },
          {
            judul: "Three-point lighting",
            img: { file: "assets/img/ilustrasi/p7-three-point-lighting.svg", alt: "Diagram three-point lighting dilihat dari atas: key light 45 derajat, fill light di sisi lawan, rim light dari belakang subjek", caption: "Three-point lighting dari atas — bangun urut: key dulu, tambah fill, terakhir rim." },
            isi: [
              "Resep pencahayaan paling terkenal di dunia foto dan film — tiga lampu, tiga tugas. Setelah paham ini, siswa bisa membaca lighting film dan iklan mana pun.",
              "Di studio mini kita: 2 lampu + 1 reflektor sudah cukup (fill tidak harus lampu)."
            ],
            poin: [
              "KEY LIGHT — pemeran utama, sumber paling terang, 45° dari sumbu kamera-subjek.",
              "FILL LIGHT — pengisi bayangan di sisi lawan key, lebih redup (setengahnya atau kurang). Reflektor/styrofoam putih bisa menggantikan.",
              "RIM/BACK LIGHT — dari belakang-atas subjek, menciptakan garis cahaya di tepi yang memisahkan subjek dari latar.",
              "Urutan setup: nyalakan key dulu sampai pas → tambah fill secukupnya → terakhir rim. Satu per satu, jangan sekaligus.",
              "Rasio key:fill menentukan mood — 2:1 lembut & komersial, 8:1 dramatis (low-key seperti contoh potret di profil)."
            ]
          },
          {
            judul: "Refleksi pada produk mengilap",
            isi: [
              "Produk glossy (botol, kemasan plastik, logam) adalah cermin: ia memantulkan sumber cahaya dan sekitarnya. Refleksi tidak bisa dihilangkan — hanya bisa DIBENTUK. Hukumnya satu: sudut datang = sudut pantul.",
              "Praktik hari ini: foto botol dengan refleksi 'jendela putih' memanjang yang rapi di badan botol — tanda foto produk profesional."
            ],
            poin: [
              "Kertas/styrofoam PUTIH di samping produk = menambah refleksi terang yang membentuk badan produk.",
              "Kertas HITAM = memblok refleksi liar dan menegaskan tepi produk.",
              "Geser POSISI LAMPU atau KAMERA (bukan produknya) untuk memindahkan letak refleksi.",
              "Lap produk sebelum difoto — sidik jari kelihatan semua di makro."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review tugas foto manual P6. Pemantik: satu foto produk iklan — hitung bersama ada berapa arah cahaya di dalamnya." },
          { durasi: 45, segmen: "Teori + demo", detail: "Komposisi (cepat, banyak contoh visual) lalu demo three-point lighting live: bangun setup satu per satu dari gelap total, siswa melihat efek tiap lampu ditambahkan." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Rotasi kelompok di studio mini: bangun three-point untuk 1 objek produk sederhana, hasilkan 2 foto (soft komersial & dramatis) + bentuk refleksi dengan kertas putih/hitam. Kelompok lain latihan komposisi di luar studio sambil menunggu." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Bandingkan versi soft vs dramatis tiap kelompok di proyektor; kelas menebak posisi lampunya." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: komposisi mengarahkan mata, cahaya membentuk rasa. Minggu depan semua digabung — gladi UTS." }
        ],
        alat: [
          "Studio mini: 2 lampu + softbox/payung, 1 reflektor atau styrofoam, background polos",
          "Kertas putih & hitam A3 untuk membentuk refleksi",
          "2–3 produk latihan (botol minum, kemasan skincare, mug)",
          "Kamera + tripod; senter untuk demo arah cahaya",
          "Lap microfiber"
        ],
        tugas: {
          judul: "Dua wajah satu produk",
          deskripsi: "Serahkan 2 foto produk yang sama: versi terang-lembut (komersial) dan versi gelap-dramatis (low-key). Sertakan sketsa kasar posisi lampu untuk masing-masing (gambar tangan difoto saja cukup).",
          portofolio: true
        },
        catatan: "Bagian paling ajaib pertemuan ini adalah demo membangun lighting dari gelap total — matikan semua lampu ruangan dulu supaya efek tiap lampu terasa. Awasi kabel & lampu panas (ingat kontrak K3LH P1). Foto potret low-key di halaman Profil bisa dipakai sebagai contoh penutup: 'ini dibuat dengan resep yang sama'."
      },

      {
        p: 8, judul: "Foto Produk + Gladi Bersih UTS", pekan: 8, uts: false, lengkap: true,
        ringkas: "Simulasi penuh alur UTS dalam 1 pertemuan dengan produk lebih sederhana. Bukan materi baru.",
        tujuan: [
          "Siswa dapat menyelesaikan alur foto → seleksi → edit → poster dalam satu sesi 180 menit.",
          "Siswa dapat mengatur waktu kerja sesuai pembagian tahap yang direncanakan.",
          "Siswa dapat mengidentifikasi titik lemah pribadinya sebelum UTS sesungguhnya."
        ],
        materi: [
          "Alur kerja lengkap UTS dan pembagian waktunya.",
          "Setup meja produk cepat: sweep background, satu lampu utama + reflektor.",
          "Checklist teknis sebelum-selama-sesudah sesi.",
          "Kesalahan umum manajemen waktu dan cara menghindarinya."
        ],
        modul: [
          {
            judul: "Alur kerja UTS: satu peta besar",
            isi: [
              "Hari ini bukan materi baru — hari ini menggabungkan SEMUA yang sudah dipelajari: eksposur (P6), lighting & refleksi (P7), lalu warna (P3), tipografi (P4), dan layout (P5) untuk posternya. UTS minggu depan memakai alur yang persis sama, hanya produknya diundi.",
              "Tekankan: yang paling sering menggagalkan siswa bukan skill, tapi WAKTU. Latihan hari ini terutama latihan disiplin waktu."
            ],
            poin: [
              "Alur baku: setup & tes cahaya → sesi foto → seleksi 1 foto terbaik → edit → desain poster → ekspor & kumpul.",
              "Patokan pembagian: foto maksimal 1/3 waktu total. Sisakan minimal 50 menit untuk poster — poster yang belum selesai lebih fatal daripada foto yang kurang sempurna.",
              "Keputusan tersulit: BERHENTI memotret. 20 foto yang dipikirkan > 100 foto asal jepret (memilihnya juga makan waktu)."
            ]
          },
          {
            judul: "Setup meja produk dalam 10 menit",
            poin: [
              "Sweep background: karton putih melengkung dari alas ke dinding tanpa lipatan — horizon hilang, kesan studio profesional.",
              "Satu lampu + softbox dari samping-atas 45° sebagai key; reflektor di sisi lawan sebagai fill. Cukup!",
              "Kamera di tripod, ketinggian sedikit di atas level produk (sekitar 30–45°), grid menyala.",
              "White balance samakan dengan lampu; ISO 100–200; f/8 untuk ketajaman; shutter mengikuti (tripod = bebas lambat).",
              "Tes 1 frame → cek histogram & refleksi → baru sesi sungguhan."
            ]
          },
          {
            judul: "Checklist gladi (pakai juga saat UTS)",
            poin: [
              "SEBELUM: baterai penuh? kartu kosong? file template poster siap? folder kerja dibuat (NAMA_KELAS_UTS)?",
              "SELAMA: tiap 30 menit lirik jam dan cocokkan dengan rencana; tandai foto kandidat dengan rating bintang saat seleksi.",
              "SESUDAH: ekspor JPG (foto) + PDF/PNG (poster); nama file benar; file masuk folder pengumpulan; JANGAN hapus mentahan.",
              "Kesalahan umum minggu lalu yang jangan diulang: lupa white balance (foto kebiruan), poster dikerjakan 15 menit terakhir, file tersimpan di desktop komputer lab lalu hilang."
            ]
          }
        ],
        alur: [
          { durasi: 10, segmen: "Briefing", detail: "Jelaskan alur & target waktu per tahap; tulis jadwalnya di papan agar terlihat sepanjang sesi." },
          { durasi: 20, segmen: "Setup & tes", detail: "Tiap kelompok/siswa menyiapkan meja produk, tes eksposur & refleksi." },
          { durasi: 55, segmen: "Sesi foto", detail: "Foto produk latihan (lebih sederhana dari UTS — mug/botol matte). Guru hanya mengingatkan waktu, bukan membantu teknis: simulasikan kondisi ujian." },
          { durasi: 20, segmen: "Seleksi & edit cepat", detail: "Pilih 1 foto, edit dasar: crop, white balance, exposure, kontras." },
          { durasi: 55, segmen: "Desain poster", detail: "Poster promosi A4 dari foto tadi: hierarki, tipografi maksimal 2, warna selaras produk." },
          { durasi: 20, segmen: "Review + penutup", detail: "Tukar layar antar siswa, cek dengan checklist. Refleksi tertulis 3 baris: tahap mana yang paling menyita waktumu? Itu fokus latihanmu minggu ini." }
        ],
        alat: [
          "Studio mini lengkap (seperti P7) + meja produk & karton sweep",
          "Produk latihan sederhana permukaan matte (mug polos, botol matte) — lebih mudah dari produk UTS",
          "Timer besar / jam dinding yang terlihat semua siswa",
          "Checklist gladi dicetak per siswa",
          "Lab komputer siap dengan template ukuran poster"
        ],
        tugas: {
          judul: "Refleksi gladi + rencana perbaikan",
          deskripsi: "Kumpulkan hasil gladi (1 foto edit + 1 poster) beserta refleksi 3 baris: tahap paling lambat, kesalahan yang terjadi, dan satu hal yang akan dilakukan berbeda saat UTS. Bukan untuk dinilai — untuk dipetakan.",
          portofolio: false
        },
        catatan: "Tahan diri untuk tidak menolong teknis saat sesi — biarkan mereka merasakan panik waktu sekarang, bukan minggu depan. Catat siswa yang macet di tahap yang sama (biasanya seleksi foto & mulai poster): sapa mereka secara personal sebelum UTS. Produk gladi HARUS lebih mudah dari produk UTS (matte, bentuk sederhana)."
      },

      {
        p: 9, judul: "UTS: Foto Produk + Desain Promosi", pekan: 9, uts: true, lengkap: true,
        ringkas: "Ujian praktik terpadu 180 menit: foto produk undian → edit → poster promosi. Rubrik lengkap di halaman Rubrik.",
        tujuan: [
          "Menilai kemampuan siswa menghasilkan foto produk dengan eksposur, pencahayaan, dan komposisi yang tepat.",
          "Menilai kemampuan siswa merancang desain promosi dengan hierarki, tipografi, dan warna yang selaras dengan produk.",
          "Menilai kemampuan siswa mengelola alur kerja lengkap secara mandiri dalam batas waktu."
        ],
        materi: [
          "Ujian praktik individu — tidak ada materi baru.",
          "Produk diundi dari 4–5 jenis yang disediakan guru (botol, kemasan kotak, sachet, benda kecil reflektif).",
          "Penilaian memakai rubrik dua kolom terpisah: Teknis Fotografi (50) + Desain Promosi (50) — lihat halaman Rubrik."
        ],
        modul: [
          {
            judul: "Ketentuan ujian (bacakan di awal sesi)",
            poin: [
              "Individu. Durasi total 180 menit, jadwal per tahap tertulis di papan.",
              "Produk DIUNDI — bukan dibawa sendiri — supaya tingkat kesulitan setara dan penilaian adil.",
              "Deliverable: (1) satu foto produk hasil edit (JPG), (2) satu poster promosi A4 (PDF/PNG) memakai foto tersebut.",
              "Poster wajib memuat: nama produk, satu pesan utama, dan satu elemen ajakan (harga/promo/kontak — boleh fiktif).",
              "Format nama file: NAMA_KELAS_UTS-FOTO dan NAMA_KELAS_UTS-POSTER. Salah folder/nama = potongan poin kedisiplinan.",
              "Boleh membuka catatan pribadi; dilarang membuka template jadi & meminta bantuan teman."
            ]
          },
          {
            judul: "Pembagian waktu yang disarankan",
            poin: [
              "0:00–0:15 — briefing & undian produk.",
              "0:15–1:15 — sesi foto studio (bergilir sesuai jadwal kelompok meja).",
              "1:15–2:00 — seleksi & edit foto.",
              "2:00–2:50 — desain poster.",
              "2:50–3:00 — ekspor, cek nama file, kumpul.",
              "Siswa boleh menyimpang dari jadwal ini — yang dinilai hasil akhirnya. Tapi ingatkan pelajaran gladi minggu lalu."
            ]
          },
          {
            judul: "Untuk guru: persiapan H-1",
            poin: [
              "4–5 jenis produk × jumlah yang cukup (undian per siswa), termasuk minimal satu yang reflektif.",
              "Kertas undian, daftar giliran meja studio, timer besar.",
              "Cek semua kamera: baterai, kartu, setting kembali ke netral.",
              "Folder pengumpulan di komputer/drive kelas sudah dibuat per kelas.",
              "Cetak rubrik penilaian (halaman Rubrik → tombol cetak) untuk menilai sambil berkeliling."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Briefing & undian", detail: "Bacakan ketentuan, undi produk, tulis jadwal tahap di papan." },
          { durasi: 60, segmen: "Sesi foto studio", detail: "Bergilir per kelompok meja. Guru mengamati & menilai aspek proses (kemandirian, K3LH) tanpa membantu teknis." },
          { durasi: 45, segmen: "Seleksi & edit", detail: "Pilih satu foto terbaik, edit dasar. Guru keliling menilai alur kerja." },
          { durasi: 50, segmen: "Desain poster", detail: "Poster promosi A4 dari foto sendiri." },
          { durasi: 10, segmen: "Pengumpulan", detail: "Ekspor, cek nama file, kumpul ke folder kelas. Tutup dengan apresiasi singkat — nilai menyusul setelah dirubrik." }
        ],
        alat: [
          "4–5 jenis produk undian (botol, kemasan kotak, sachet, benda kecil reflektif) + kertas undian",
          "Studio mini lengkap + meja produk (setup sama seperti gladi)",
          "Timer besar & jadwal tahap di papan",
          "Lembar rubrik tercetak untuk penilaian",
          "Folder pengumpulan digital yang sudah diuji"
        ],
        tugas: {
          judul: "Deliverable UTS",
          deskripsi: "1 foto produk hasil edit (JPG) + 1 poster promosi A4 (PDF/PNG). Keduanya akan dinilai dengan rubrik dua kolom dan dibedah bersama di pertemuan 10 — simpan file mentahan untuk revisi.",
          portofolio: true
        },
        catatan: "Nilai dengan rubrik SEGERA setelah sesi selagi ingatan proses masih segar — deskriptor per tingkat sudah disiapkan di halaman Rubrik supaya umpan balik minggu depan spesifik, bukan sekadar angka. Foto-foto proses siswa bekerja juga: berguna untuk bedah P10 dan dokumentasi sekolah."
      },

      {
        p: 10, judul: "Bedah Hasil UTS + Editing Foto", pekan: 10, uts: false, lengkap: true,
        ringkas: "Review karya kelas, Lightroom/Photoshop dasar, retouch, color grading → revisi hasil UTS.",
        tujuan: [
          "Siswa dapat mengkritisi karya (miliknya dan orang lain) dengan metode empat langkah, bukan sekadar 'bagus/jelek'.",
          "Siswa dapat melakukan edit dasar terurut di Lightroom/Photoshop: crop, white balance, exposure, kontras, HSL.",
          "Siswa dapat merevisi karya UTS-nya berdasarkan umpan balik rubrik."
        ],
        materi: [
          "Metode bedah karya empat langkah: deskripsi → analisis → interpretasi → penilaian.",
          "Alur edit dasar yang terurut (dari global ke lokal) di Lightroom/Camera Raw.",
          "Retouch ringan di Photoshop: healing untuk debu & noda, dodge & burn halus.",
          "Color grading ringan dengan HSL untuk konsistensi rasa."
        ],
        modul: [
          {
            judul: "Cara membedah karya seperti profesional",
            isi: [
              "Sebelum menyentuh software, kelas belajar BERBICARA tentang karya. Di industri, kemampuan menerima dan memberi umpan balik sama pentingnya dengan kemampuan membuat. Aturannya: bedah karyanya, bukan orangnya — dan haram hukumnya berhenti di 'bagus' atau 'kurang menarik' tanpa penjelasan.",
              "Gunakan empat langkah ini untuk setiap karya yang dibedah di depan kelas:"
            ],
            poin: [
              "1. DESKRIPSI — apa yang benar-benar terlihat? (produk, warna, cahaya, teks) Tanpa opini dulu.",
              "2. ANALISIS — bagaimana unsur-unsurnya bekerja? (dari mana arah cahaya? apa yang paling dulu terbaca? kenapa mata bergerak ke sana?)",
              "3. INTERPRETASI — kesan apa yang muncul? cocok untuk audiens siapa?",
              "4. PENILAIAN — apa yang berhasil, apa satu hal yang paling layak diperbaiki? Selalu tutup dengan saran konkret, bukan vonis."
            ]
          },
          {
            judul: "Alur edit yang terurut: global dulu, detail belakangan",
            isi: [
              "Editing yang baik seperti memasak: ada urutannya. Prinsipnya dari koreksi GLOBAL (seluruh foto) ke penyesuaian LOKAL (bagian tertentu). Melompat-lompat = hasil tidak konsisten dan waktu terbuang.",
              "Satu prinsip yang harus disebut berulang: edit itu MEMPERKUAT foto yang sudah benar, bukan menyelamatkan foto yang salah. Foto UTS yang under 3 stop tidak bisa 'ditolong' tanpa hancur kualitasnya."
            ],
            poin: [
              "Urutan baku: (1) Crop & straighten — rapikan komposisi dulu; (2) White balance — pakai eyedropper di area netral; (3) Exposure — terang keseluruhan; (4) Contrast; (5) Highlights turun untuk menyelamatkan detail terang, Shadows naik seperlunya; (6) Texture/Clarity sedikit saja untuk produk; (7) HSL untuk warna spesifik.",
              "Histogram tetap teman kalian: setelah edit pun jangan ada clipping di area penting.",
              "Bandingkan sebelum-sesudah (tombol \\ di Lightroom) tiap beberapa langkah — kalau versi sesudah tidak jelas lebih baik, kembalikan.",
              "Tanda over-edit: langit abu keunguan, kulit oranye, halo putih di tepi objek, saturasi menyala. Kalau terlihat 'diedit', berarti kebablasan."
            ]
          },
          {
            judul: "Retouch ringan di Photoshop",
            poin: [
              "SPOT HEALING — hilangkan debu, noda, dan sidik jari di produk (yang lupa dilap saat UTS akan paham gunanya lap microfiber).",
              "CLONE STAMP — untuk area berpola yang healing-nya gagal.",
              "DODGE & BURN halus — terangkan (dodge) bagian produk yang tenggelam, gelapkan (burn) yang terlalu menarik perhatian; exposure tool 5–10% saja.",
              "Etika retouch produk: boleh membersihkan debu & merapikan refleksi; TIDAK boleh mengubah warna/bentuk produk sampai beda dari aslinya — itu menipu konsumen."
            ]
          },
          {
            judul: "Color grading ringan dengan HSL",
            isi: [
              "Grading = memberi 'rasa' setelah koreksi selesai. Untuk foto produk, grading harus halus — produk tetap harus tampak seperti warna aslinya (ingat etika di atas), yang digeser adalah suasana sekitarnya."
            ],
            poin: [
              "HSL: geser Hue/Saturation/Luminance PER WARNA — contoh: latar biru dibuat sedikit teal, tanpa menyentuh warna produk.",
              "Konsistensi seri: kalau fotonya lebih dari satu (feed IG), samakan resep gradingnya — copy/paste settings atau simpan preset.",
              "Hubungkan dengan P3: skema warna hasil grading tetap harus harmonis dengan palet poster."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Kembalikan hasil rubrik UTS. Jelaskan cara membaca dua kolom nilai: kolom mana yang jadi PR masing-masing." },
          { durasi: 45, segmen: "Bedah karya kelas", detail: "Bedah 4–5 karya UTS terpilih (variasi kasus: lighting kuat/desain lemah, dan sebaliknya) dengan metode 4 langkah — kelas yang bicara, guru memandu." },
          { durasi: 90, segmen: "Praktik terbimbing: revisi", detail: "Demo alur edit 20 menit di satu foto siswa (izin dulu), lalu semua merevisi foto & poster UTS masing-masing berdasarkan catatan rubriknya. Guru keliling sesuai peta nilai: dahulukan yang kolomnya merah." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Tampilkan 3–4 pasangan sebelum-sesudah revisi di proyektor; kelas menyebutkan apa yang berubah." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum urutan edit. Brief tugas revisi lengkap." }
        ],
        alat: [
          "Lab komputer + Lightroom/Photoshop (atau Camera Raw)",
          "File mentah UTS semua siswa (pastikan tidak terhapus!)",
          "Hasil penilaian rubrik per siswa (cetak/digital)",
          "Proyektor untuk bedah karya"
        ],
        tugas: {
          judul: "Revisi UTS: sebelum & sesudah",
          deskripsi: "Kumpulkan foto dan poster UTS versi revisi berdampingan dengan versi asli, plus 3 kalimat: apa saja yang diubah dan aspek rubrik mana yang diperbaiki. Versi revisi inilah kandidat portofolio akhirmu.",
          portofolio: true
        },
        catatan: "Pilih karya bedah dengan sengaja: minimal satu kasus 'foto kuat desain lemah' dan satu kebalikannya — dua kolom rubrik langsung terasa gunanya. Jaga suasana bedah tetap aman: mulai dari yang berhasil, satu saran konkret per karya, dan jangan pernah membedah karya siswa yang sedang down tanpa bicara empat mata dulu."
      },
      {
        p: 11, judul: "Foto Produk Lanjutan", pekan: 11, uts: false, lengkap: true,
        ringkas: "Flat lay, lifestyle shot, variasi angle & storytelling produk → set variasi angle.",
        tujuan: [
          "Siswa dapat membedakan gaya foto produk katalog, flat lay, dan lifestyle beserta kegunaannya.",
          "Siswa dapat menghasilkan satu set foto produk dengan variasi angle yang konsisten gayanya.",
          "Siswa dapat menyusun properti pendukung yang memperkuat cerita produk, bukan mengganggunya."
        ],
        materi: [
          "Tiga gaya besar foto produk: katalog (bersih), flat lay (tata atas), lifestyle (konteks pakai).",
          "Variasi angle: eye level, 45°, top-down, detail makro — dan fungsi masing-masing.",
          "Storytelling produk lewat properti, latar, dan konteks.",
          "Konsistensi seri untuk kebutuhan feed & katalog."
        ],
        modul: [
          {
            judul: "Tiga gaya, tiga tujuan",
            isi: [
              "Foto produk bukan satu jenis — kliennya beda, gayanya beda. Kelas hari ini menambah dua senjata baru di luar foto katalog yang dipakai saat UTS.",
              "Tunjukkan tiga contoh dari satu brand yang sama (skincare/kopi lokal bagus untuk ini): satu foto marketplace, satu flat lay Instagram, satu lifestyle iklan."
            ],
            poin: [
              "KATALOG — produk sendirian, latar bersih, tajam menyeluruh. Tujuannya: informasi. Ini yang kalian buat di UTS.",
              "FLAT LAY — dipotret tegak lurus dari atas (90°), produk + properti ditata seperti komposisi nirmana (P2 kembali dipakai!). Tujuannya: estetika feed.",
              "LIFESTYLE — produk dalam konteks digunakan (kopi di tangan, tas di bahu). Tujuannya: membuat penonton membayangkan memilikinya."
            ]
          },
          {
            judul: "Variasi angle: satu produk, banyak cerita",
            img: { file: "assets/img/ilustrasi/a11-angle-produk.svg", alt: "Tiga angle foto produk: eye level sejajar, 45 derajat sudut belanja, dan top-down untuk flat lay", caption: "Tiga angle utama + detail makro = set lengkap satu produk." },
            poin: [
              "EYE LEVEL (0°) — sejajar produk: gagah, formal, seperti etalase.",
              "45° — sudut 'belanja': paling natural, memperlihatkan muka dan atas produk sekaligus. Default katalog.",
              "TOP-DOWN (90°) — untuk flat lay dan produk pipih (makanan sangat kuat dari sini).",
              "DETAIL / MAKRO — tekstur, label, tetesan: pembangun rasa premium.",
              "Rangkaian lengkap untuk marketplace/feed: 1 hero shot 45° + 1 eye level + 1 detail + 1 flat lay/lifestyle. Itulah 'set variasi angle' tugas hari ini."
            ]
          },
          {
            judul: "Properti & storytelling",
            isi: [
              "Properti (props) adalah kata sifat dalam kalimat foto: biji kopi di sekitar cangkir berkata 'segar digiling', handuk dan daun berkata 'spa & relaksasi'. Tapi kata sifat kebanyakan membuat kalimat berantakan — produk harus tetap subjeknya."
            ],
            poin: [
              "Aturan 70/30: produk mendominasi ±70% perhatian, properti maksimal 30%.",
              "Properti harus SATU dunia dengan produk: sabun alami + batu & daun = nyambung; sabun alami + mainan robot = kacau.",
              "Warna properti diambil dari palet produk (P3 lagi!) atau netral.",
              "Odd rule: jumlah objek ganjil (3 atau 5) hampir selalu lebih enak dilihat daripada genap.",
              "Kalau ragu, kurangi satu properti. Selalu."
            ]
          },
          {
            judul: "Konsistensi seri",
            poin: [
              "Satu set = satu resep: cahaya sama, palet sama, jarak edit sama. Penonton harus tahu lima foto itu bersaudara.",
              "Kunci konsistensi: JANGAN bongkar setup di tengah sesi. Selesaikan semua angle untuk satu setup cahaya dulu.",
              "Edit berbarengan: copy-paste setting (P10) ke seluruh seri, baru sesuaikan kecil per foto.",
              "Tes akhir: susun 5 foto berjajar kecil-kecil — ada satu yang 'bukan keluarga'? Ulangi editnya."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review revisi UTS terbaik. Pemantik: tebak gaya — tampilkan 6 foto produk, siswa klasifikasikan katalog/flat lay/lifestyle." },
          { durasi: 45, segmen: "Teori + demo", detail: "Tiga gaya & empat angle dengan banyak contoh. Demo flat lay live: tata produk + 3 properti di lantai, potret dari atas, tunjukkan efek odd rule & aturan 70/30." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Per kelompok, satu produk pilihan: buat set 5 foto (hero 45°, eye level, detail, flat lay, lifestyle sederhana). Properti dari barang sekitar/bawaan. Setup cahaya boleh jendela + reflektor." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Tampilkan set per kelompok sebagai grid 5 foto: uji 'satu keluarga', kelas memilih hero shot terbaik." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: gaya mengikuti tujuan. Brief set individu." }
        ],
        alat: [
          "Kamera per kelompok + tripod (wajib untuk flat lay: tripod menghadap bawah atau kursi pijakan yang aman)",
          "Produk pilihan + properti (umumkan H-3: siswa bawa produk & props dari rumah)",
          "Latar: karton warna, kain, papan kayu; cahaya jendela + reflektor",
          "Lab untuk edit seri & copy-paste setting"
        ],
        tugas: {
          judul: "Set variasi angle",
          deskripsi: "Set 5 foto satu produk (hero 45°, eye level, detail, flat lay, lifestyle) yang konsisten cahaya dan editnya, disusun dalam satu grid. Tulis 2 kalimat: cerita apa yang dibangun properti pilihanmu.",
          portofolio: true
        },
        catatan: "Umumkan bawa produk+properti beberapa hari sebelumnya dan bawa cadangan sendiri (kopi sachet, buah, alat tulis menarik) untuk yang lupa. Flat lay dari kursi/meja: satu orang pegangi kursi — insiden kamera jatuh paling sering terjadi di sesi top-down."
      },

      {
        p: 12, judul: "Dasar Identitas Visual", pekan: 12, uts: false, lengkap: true,
        ringkas: "Konsep brand, logo sederhana, konsistensi elemen → mini brand kit.",
        tujuan: [
          "Siswa dapat menjelaskan perbedaan brand, branding, dan logo dengan contoh.",
          "Siswa dapat merancang logo sederhana melalui proses riset–sketsa–digitalisasi (bukan langsung komputer).",
          "Siswa dapat menyusun mini brand kit yang konsisten: logo, warna, tipografi."
        ],
        materi: [
          "Brand vs logo: persepsi vs penanda.",
          "Jenis-jenis logo: wordmark, lettermark, pictorial, abstrak, maskot, kombinasi.",
          "Proses perancangan logo: kata kunci → sketsa thumbnail → seleksi → digital → uji.",
          "Mini brand kit dan aturan konsistensi."
        ],
        modul: [
          {
            judul: "Brand bukan logo",
            isi: [
              "Logo adalah tanda tangan; brand adalah reputasi orangnya. Brand = apa yang orang RASAKAN dan INGAT tentang sebuah usaha; logo hanya penanda yang memicu ingatan itu. Karena itu logo bagus tidak menyelamatkan produk buruk — tapi logo buruk bisa membuat produk bagus tidak dilirik.",
              "Contoh dekat: sebutkan warung/jajanan lokal yang kalian percaya — apa yang membuatnya dipercaya? (rasa, pelayanan, kemasan?) Itu brand-nya. Lalu tanyakan: kalau warung itu bikin logo, harus terasa seperti apa?"
            ],
            poin: [
              "BRAND — persepsi di kepala orang. Tidak bisa didesain langsung, hanya bisa dipengaruhi.",
              "BRANDING — semua usaha memengaruhi persepsi itu: nama, logo, warna, kemasan, cara bicara, seragam, playlist tokonya.",
              "IDENTITAS VISUAL — bagian branding yang kelihatan: logo, palet, tipografi, elemen grafis, fotografi.",
              "Cerita nyata untuk kelas: klien F&B guru (Titik Tuju Coffee, JC Cafe) — apa yang diminta klien sebenarnya bukan 'logo', tapi 'supaya kafenya terlihat sesuai harganya'."
            ]
          },
          {
            judul: "Enam jenis logo",
            img: { file: "assets/img/ilustrasi/a12-jenis-logo.svg", alt: "Enam jenis logo dengan contoh: wordmark, lettermark, pictorial, abstrak, maskot, dan kombinasi", caption: "Enam jenis logo — minta siswa mengklasifikasikan logo-logo yang mereka hafal." },
            poin: [
              "WORDMARK — nama lengkap jadi logo (Google, Kompas). Cocok untuk nama pendek & khas.",
              "LETTERMARK — inisial (HBO, BCA). Untuk nama panjang.",
              "PICTORIAL — gambar objek nyata (Apple, Twitter lama). Butuh keberanian: tanpa teks.",
              "ABSTRAK — bentuk non-objek (Pertamina, Nike swoosh). Fleksibel tapi butuh pengulangan agar diingat.",
              "MASKOT — karakter (KFC, Michelin). Ramah, cocok F&B dan anak.",
              "KOMBINASI — simbol + teks (kebanyakan brand Indonesia). Paling aman untuk usaha baru — dan untuk tugas kalian."
            ]
          },
          {
            judul: "Proses merancang logo (jalan yang benar)",
            isi: [
              "Desainer pemula membuka laptop lalu bengong dua jam. Desainer terlatih membuka KERTAS dulu. Proses hari ini memaksa urutan yang benar — dan sketsa jelek diperbolehkan, justru diwajibkan banyak.",
              "Tekankan soal orisinalitas sejak awal: meniru gaya boleh untuk belajar, menjiplak logo orang = pelanggaran, dan di dunia kerja bisa berujung tuntutan hukum."
            ],
            poin: [
              "1. RISET & KATA KUNCI (10 menit) — tulis: nama usaha, produk, audiens, dan 3 kata sifat rasa brand (misal: hangat, lokal, jujur).",
              "2. SKETSA THUMBNAIL (30 menit) — MINIMAL 20 sketsa kecil ukuran perangko di kertas. Kuantitas dulu; ide ke-15 biasanya lebih segar dari ide ke-2.",
              "3. SELEKSI (5 menit) — lingkari 3 terbaik, minta pendapat satu teman.",
              "4. DIGITALISASI (45 menit) — bangun 1 pilihan dengan bentuk dasar & tipografi. Hitam-putih DULU — logo yang baik harus jalan tanpa warna.",
              "5. UJI — kecilkan seukuran kuku: masih terbaca? Balik hitam-putihnya: masih jalan?"
            ]
          },
          {
            judul: "Mini brand kit: aturan main konsistensi",
            isi: [
              "Logo baru setengah pekerjaan — kekuatan identitas datang dari KONSISTENSI. Brand kit adalah 'buku aturan' mini supaya siapa pun yang mendesain untuk brand itu hasilnya tetap satu suara."
            ],
            poin: [
              "Isi mini brand kit tugas ini (1 halaman): logo utama + versi 1 warna, palet (2 warna utama + 2 netral, dengan kode hex), 2 typeface beserta perannya (judul/teks), dan 1 contoh penerapan (kartu nama ATAU post IG).",
              "Aturan minimum yang ditulis: ukuran terkecil logo, area bebas di sekeliling logo, dan satu larangan (misal: jangan direntangkan).",
              "Hubungkan: palet pakai ilmu P3, typeface pakai ilmu P4. Semua saling sambung menuju portofolio."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review set foto P11. Pemantik: tampilkan 8 logo terkenal versi siluet — kelas menebak; lalu tanya kenapa bisa hafal." },
          { durasi: 45, segmen: "Teori + demo", detail: "Brand vs logo, 6 jenis logo, lalu ceritakan SATU studi kasus klien nyata dari brief sampai jadi. Demo sketsa thumbnail cepat di kamera dokumen: 8 sketsa dalam 5 menit." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Proses lengkap untuk usaha fiktif/nyata di sekitar siswa: kata kunci (10') → 20 thumbnail (30') → seleksi (5') → digitalisasi hitam-putih (45'). Guru keliling di fase sketsa — di situ arah ditentukan." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Uji kuku & uji siluet: logo ditampilkan kecil dan besar; teman menebak jenis usahanya tanpa diberi tahu." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Brief penyelesaian brand kit: tambah warna, tipografi, dan 1 penerapan di rumah/pertemuan berikut." }
        ],
        alat: [
          "Kertas HVS + pulpen untuk thumbnail (bukan pensil+penghapus — menghapus itu musuh kuantitas)",
          "Lab komputer + Illustrator/Canva untuk digitalisasi",
          "Kamera dokumen/HP holder untuk demo sketsa",
          "Slide logo terkenal versi siluet untuk pemantik"
        ],
        tugas: {
          judul: "Mini brand kit",
          deskripsi: "Satu halaman brand kit: logo (utama + 1 warna), palet dengan kode hex, 2 typeface + perannya, 1 contoh penerapan, plus 3 aturan minimum. Sertakan foto lembar 20 thumbnail-mu — proses dinilai, bukan cuma hasil.",
          portofolio: true
        },
        catatan: "Wajibkan pulpen saat sketsa — pensil+penghapus membuat siswa memoles satu ide alih-alih mencari dua puluh. Sketsa 20 thumbnail difoto dan dikumpulkan: ini bukti proses sekaligus pembeda dengan logo comotan AI/internet. Kalau ada siswa yang keluarganya punya usaha, dorong pakai usaha itu — brand kit-nya bisa benar-benar dipakai."
      },

      {
        p: 13, judul: "Brief Klien Simulasi", pekan: 13, uts: false, lengkap: true,
        ringkas: "Membaca brief, aplikasi multi-media: feed IG, banner, kemasan → set promosi lengkap.",
        tujuan: [
          "Siswa dapat mengurai sebuah brief klien menjadi daftar keputusan desain (pesan, audiens, deliverable, batasan).",
          "Siswa dapat mengadaptasi satu konsep visual ke minimal tiga format media berbeda secara konsisten.",
          "Siswa dapat mempresentasikan karyanya sebagai jawaban atas brief, bukan sebagai selera pribadi."
        ],
        materi: [
          "Anatomi brief klien dan cara membacanya kritis.",
          "Menggali kebutuhan: pertanyaan klarifikasi sebelum mendesain.",
          "Satu konsep banyak media: adaptasi feed 1:1, story 9:16, banner — hierarki menyesuaikan, identitas tetap.",
          "Mempresentasikan desain dengan bahasa keputusan."
        ],
        modul: [
          {
            judul: "Anatomi brief: peta sebelum jalan",
            isi: [
              "Brief adalah dokumen (atau obrolan WhatsApp panjang) berisi apa yang klien butuhkan. Di dunia nyata brief sering tidak lengkap — justru kemampuan MELENGKAPINYA lewat pertanyaan yang membedakan desainer profesional dari tukang gambar.",
              "Ceritakan satu brief nyata yang pernah diterima (misal aset kampanye Wardah atau konten klinik) — bagaimana bentuk aslinya, apa yang harus ditanyakan dulu sebelum mulai."
            ],
            poin: [
              "Isi brief yang sehat: LATAR (usaha apa, kondisi apa), TUJUAN (mau apa: penjualan? awareness?), AUDIENS (siapa persisnya), PESAN UTAMA (satu kalimat), DELIVERABLE (apa saja, ukuran berapa), TENGGAT & BATASAN (warna wajib, logo wajib, larangan).",
              "Brief tidak jelas? BERTANYA itu profesional, mengira-ngira itu mahal. Contoh pertanyaan: 'Yang dimaksud elegan itu seperti apa — bisa tunjukkan contoh yang Bapak/Ibu suka?'",
              "Kesalahan terbesar desainer muda: mendesain untuk DIRINYA (yang penting keren) bukan untuk AUDIENS brief (yang penting sampai).",
              "Deliverable hari ini: 1 feed IG (1080×1080), 1 story (1080×1920), 1 banner spanduk (proporsi memanjang) — satu kampanye."
            ]
          },
          {
            judul: "Satu konsep, banyak ukuran",
            img: { file: "assets/img/ilustrasi/a13-adaptasi-media.svg", alt: "Satu kampanye diadaptasi ke tiga format: feed persegi, story vertikal dengan area UI terlarang, dan banner memanjang berteks besar", caption: "Adaptasi tiga format: identitas dikunci, susunan menyesuaikan cara dilihatnya." },
            isi: [
              "Kampanye nyata tidak pernah satu ukuran. Tantangannya: tiap format punya cara dilihat yang beda — feed dilihat dekat sambil scroll, story penuh layar 3 detik, spanduk dilihat 10 meter sambil berkendara. Konsepnya SATU, penyusunannya BEDA.",
              "Ini bukan copy-paste lalu ditarik-tarik — itu cara mengenali desainer amatir dari jarak satu kilometer."
            ],
            poin: [
              "Yang HARUS sama di semua format: logo, palet, typeface, gaya foto/elemen — identitasnya (ilmu P12).",
              "Yang BOLEH berubah: ukuran hierarki, jumlah teks, komposisi (ilmu P5).",
              "Feed 1:1 — info cukup lengkap, teks terbaca di layar HP.",
              "Story 9:16 — vertikal, elemen besar, ingat area tertutup UI (atas: nama akun, bawah: reply) — jauhkan teks dari 250px atas-bawah.",
              "Banner/spanduk — teks MINIMAL dan raksasa: nama, satu pesan, satu kontak. Uji 10 meter.",
              "Mulai dari format tersulit (banner) — menyederhanakan itu lebih mudah daripada meramaikan."
            ]
          },
          {
            judul: "Presentasi: bicara keputusan, bukan selera",
            isi: [
              "Klien tidak menilai file, klien menilai penjelasan. Latih format presentasi 2 menit ini — sama seperti yang akan dipakai saat presentasi portofolio P16."
            ],
            poin: [
              "Format 4 kalimat: (1) Brief-nya meminta apa → (2) Konsep saya & kenapa cocok untuk audiensnya → (3) Keputusan kunci (warna/huruf/foto) & alasannya → (4) Bagaimana konsep dijaga konsisten di 3 format.",
              "Haram: 'menurut saya bagus', 'biar keren aja'. Halal: 'warna ini dipilih karena target briefnya…'.",
              "Menerima revisi: klien bilang 'kurang sreg' → tanya spesifiknya, jangan langsung rombak semua."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review brand kit P12. Bagikan brief simulasi tertulis (usaha lokal fiktif lengkap dengan logo & palet dari guru) — baca senyap 5 menit, lalu sesi tanya-jawab 'klien' (guru berperan)." },
          { durasi: 45, segmen: "Teori + demo", detail: "Anatomi brief + studi kasus nyata guru. Demo adaptasi: satu konsep dipindah dari feed ke story ke banner live, tunjukkan apa yang digeser dan apa yang dikunci." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Kerjakan set: banner dulu (30'), lalu feed (30'), lalu story (30'). Guru berkeliling sebagai 'klien yang bisa ditanyai' — jawab hanya jika ditanya, seperti klien sungguhan." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "3–4 siswa presentasi 2 menit format 4 kalimat; kelas berperan sebagai klien dan boleh mengajukan 1 revisi." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: desainer dibayar untuk keputusan, bukan jam menggambar. Brief finalisasi set." }
        ],
        alat: [
          "Brief simulasi tertulis (siapkan H-1: latar usaha, tujuan, audiens, pesan, 3 deliverable, batasan warna/logo)",
          "Aset siap pakai: logo usaha fiktif + 2–3 foto produk (pakai hasil P11 kelas!) supaya fokus ke adaptasi, bukan produksi aset",
          "Lab komputer + template 3 ukuran",
          "Timer untuk ritme 30-30-30"
        ],
        tugas: {
          judul: "Set promosi lengkap",
          deskripsi: "Finalisasi set 3 format (feed, story, banner) untuk brief simulasi + tulisan 4 kalimat format presentasi. Kumpulkan sebagai satu PDF berisi ketiganya berdampingan.",
          portofolio: true
        },
        catatan: "Kualitas pertemuan ini 80% ditentukan kualitas brief simulasinya — tulis serius seperti brief sungguhan, selipkan satu informasi yang SENGAJA tidak jelas supaya siswa terpancing bertanya. Pakai foto produk hasil P11 sebagai aset: siswa senang karyanya dipakai, dan alurnya terasa seperti studio nyata."
      },

      {
        p: 14, judul: "Produksi Portofolio", pekan: 14, uts: false, lengkap: true,
        ringkas: "Kerja mandiri terbimbing, konsultasi per siswa → progres portofolio.",
        tujuan: [
          "Siswa dapat mengaudit seluruh karyanya satu semester dan memilih kandidat portofolio berdasarkan kriteria.",
          "Siswa dapat menyusun minimal dua karya menjadi case study (brief–proses–hasil).",
          "Siswa dapat menetapkan rencana penyelesaian portofolio dengan target yang realistis."
        ],
        materi: [
          "Fungsi portofolio: alat melamar kerja/PKL/kuliah, bukan album kenangan.",
          "Kriteria seleksi karya: kualitas di atas kuantitas.",
          "Struktur case study: judul, brief, proses, hasil.",
          "Kerja mandiri dengan target + konsultasi bergilir."
        ],
        modul: [
          {
            judul: "Portofolio: 6–8 karya yang berbicara",
            isi: [
              "Portofolio adalah bukti kemampuan yang bisa dilihat 3 menit — HRD industri kreatif dan panitia PKL tidak membaca CV panjang, mereka membuka portofolio. Aturan kejamnya: kualitas portofolio dinilai dari karya TERLEMAHNYA, bukan terbaiknya. Satu karya jelek menurunkan kepercayaan pada semuanya.",
              "Target kelas: 6–8 karya terbaik satu semester (boleh lintas Jalur A dan B), minimal 2 disajikan sebagai case study lengkap."
            ],
            poin: [
              "Inventaris dulu: daftar SEMUA output P1–13 (mood board, nirmana, warna, poster tipografi, poster acara, foto manual, foto produk, UTS+revisi, set angle, brand kit, set promosi).",
              "Tiga label untuk tiap karya: LOLOS (kuat, masuk), REVISI (bagus tapi perlu dipoles — jadwalkan), BUANG (tidak usah dipaksakan; membuang itu keputusan desainer juga).",
              "Kriteria LOLOS: teknis bersih + ada keputusan yang bisa diceritakan + kamu tidak malu 2 tahun lagi.",
              "Usahakan variasi: jangan 8 poster semua — tunjukkan rentang (desain, foto, identitas, video dari Jalur B)."
            ]
          },
          {
            judul: "Case study: karya + ceritanya",
            isi: [
              "Karya tanpa cerita hanya gambar; karya dengan cerita adalah bukti cara berpikir. Case study menaikkan nilai karya berkali lipat di mata pembaca portofolio — dan kalian sudah punya bahannya: setiap tugas semester ini menyertakan kalimat keputusan."
            ],
            poin: [
              "Struktur 4 bagian: JUDUL & KONTEKS (apa dan untuk siapa) → BRIEF/MASALAH (1–2 kalimat) → PROSES (sketsa, alternatif, keputusan kunci — foto thumbnail P12 hidup lagi di sini) → HASIL (final + 1 kalimat hasil/pelajaran).",
              "Tulis seperti bercerita ke teman, bukan seperti laporan: 'Kliennya butuh… masalahnya… jadi saya putuskan…'.",
              "2 case study wajib: pilih karya dengan proses paling kaya (biasanya UTS+revisi dan brand kit)."
            ]
          },
          {
            judul: "Aturan main sesi mandiri",
            poin: [
              "Target hari ini WAJIB tertulis sebelum mulai: (1) inventaris selesai, (2) daftar final 6–8 karya, (3) minimal 1 case study jadi.",
              "Konsultasi bergilir 5–7 menit per siswa sesuai urutan daftar — siapkan pertanyaan spesifik, bukan 'ini gimana ya pak?'.",
              "Revisi karya lama boleh, membuat karya BARU tidak — waktunya tidak cukup dan itu gejala menghindari kurasi.",
              "File rapi sekarang juga: satu folder PORTOFOLIO_NAMA, subfolder per karya, nama file jelas."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Tunjukkan 1 contoh portofolio bagus (Behance) dan 1 yang buruk (anonim) — kelas menyebutkan bedanya dalam 3 menit pertama melihat." },
          { durasi: 30, segmen: "Teori + penetapan target", detail: "Materi seleksi & case study, lalu tiap siswa menulis target hari ini dan mulai inventaris." },
          { durasi: 105, segmen: "Kerja mandiri + konsultasi bergilir", detail: "Siswa bekerja (inventaris → seleksi → case study); guru memanggil konsultasi 5–7 menit per siswa membahas daftar karya & rencana revisinya." },
          { durasi: 20, segmen: "Review silang", detail: "Tukar daftar karya dengan teman: teman mencoret satu karya yang menurutnya terlemah + alasan. Keputusan akhir tetap di pemilik." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Cek target tercapai. Brief: revisi karya berlabel REVISI di rumah — minggu depan kurasi final & layout." }
        ],
        alat: [
          "Lab komputer + akses semua file karya semester (ingatkan H-3 kumpulkan file yang tercecer di HP/drive)",
          "Lembar inventaris karya (cetak: kolom karya, label, catatan revisi)",
          "Contoh portofolio bagus & buruk di proyektor",
          "Daftar urutan konsultasi"
        ],
        tugas: {
          judul: "Progres portofolio",
          deskripsi: "Kumpulkan: daftar final 6–8 karya (dengan label), 1 case study jadi, dan folder portofolio yang sudah rapi. Kerjakan revisi karya lemah sebelum pertemuan 15.",
          portofolio: false
        },
        catatan: "Sesi konsultasi adalah inti pertemuan — disiplinkan 5–7 menit per siswa pakai timer supaya semua kebagian. Pertanyaan konsultasi yang paling sering: 'karya saya kurang banyak' → jawabannya selalu: 6 yang kuat mengalahkan 12 yang campur aduk. Siswa dengan karya B (video) dominan tetap didorong memasukkannya: portofolio DKV boleh lintas media."
      },

      {
        p: 15, judul: "Kurasi Portofolio", pekan: 15, uts: false, lengkap: true,
        ringkas: "Seleksi karya, urutan, deskripsi proyek, layout PDF/Behance → portofolio final.",
        tujuan: [
          "Siswa dapat menyusun urutan karya yang bercerita: pembuka terkuat, penutup yang membekas.",
          "Siswa dapat menulis deskripsi proyek 2–4 kalimat dengan formula brief–keputusan–hasil.",
          "Siswa dapat menata portofolio final dalam PDF yang konsisten (dan memahami langkah unggah ke Behance)."
        ],
        materi: [
          "Urutan karya sebagai dramaturgi: posisi menentukan kesan.",
          "Menulis deskripsi proyek yang menjual tanpa berlebihan.",
          "Layout PDF portofolio: cover, tentang saya, halaman karya, kontak.",
          "Menerbitkan ke Behance (opsional tapi didorong)."
        ],
        modul: [
          {
            judul: "Urutan adalah dramaturgi",
            isi: [
              "Pembaca portofolio menilai dalam 30 detik pertama dan mengingat halaman terakhir. Maka hukum urutannya: karya TERKUAT jadi pembuka, terkuat KEDUA jadi penutup, sisanya di tengah dengan variasi ritme (jangan tiga poster berurutan — selingi foto atau brand kit).",
              "Analogi yang nempel di siswa: seperti susunan lagu di konser — buka dengan hit, tutup dengan hit, jangan taruh tiga balada berturut-turut di tengah."
            ],
            poin: [
              "Tes urutan: scroll cepat 10 detik di depan teman — di karya mana matanya berhenti? Kalau berhenti di tengah dan melewatkan pembuka, tukar posisinya.",
              "Karya sejenis dipencar, bukan digerombolkan.",
              "Case study butuh 2–4 halaman sendiri; karya biasa cukup 1 halaman + deskripsi singkat."
            ]
          },
          {
            judul: "Menulis deskripsi yang bekerja",
            isi: [
              "Formula 3 kalimat yang sudah kalian latih sepanjang semester, sekarang resmi dipakai: (1) BRIEF — untuk apa/siapa karya ini; (2) KEPUTUSAN — pilihan desain kunci dan alasannya; (3) HASIL — apa yang dicapai/dipelajari. Dua sampai empat kalimat, titik."
            ],
            poin: [
              "Hindari pembuka mati: 'Ini adalah desain poster yang saya buat…' — pembaca sudah tahu itu poster.",
              "Hindari kata kosong: kreatif, menarik, kekinian, out of the box. Ganti dengan spesifik: 'palet diambil dari warna kemasan produk supaya poster dan produk terasa satu suara'.",
              "Tulis dalam bahasa Indonesia yang rapi; istilah teknis (flat lay, low-key) boleh tetap Inggris.",
              "Deskripsi 'Tentang Saya' 3 kalimat: siapa, fokus/minat, kontak. Bukan biodata lengkap."
            ]
          },
          {
            judul: "Layout PDF final",
            poin: [
              "Struktur: COVER (nama + 1 karya terbaik atau tipografi bersih) → TENTANG SAYA → KARYA 1..n (terkuat depan-belakang) → KONTAK (email, IG, Behance).",
              "Satu sistem grid untuk semua halaman (P5!): margin sama, posisi judul sama, ukuran caption sama — portofolio sendiri adalah bukti kemampuan layout kalian.",
              "Latar netral (putih/abu muda), karya yang jadi bintang — jangan hiasi bingkai norak.",
              "Ekspor: PDF lanskap 1920×1080 atau A4 lanskap, kualitas gambar cukup 150dpi, ukuran file di bawah 10MB (syarat umum lamaran email).",
              "Behance (opsional): 1 proyek = 1 karya/case study, cover image persegi yang kuat, tag berbahasa Inggris (poster design, product photography) supaya ditemukan. Tunjukkan akun guru sebagai contoh hidup."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Bedah cepat urutan 2 portofolio contoh: satu urutan bagus, satu acak — rasakan bedanya sebagai 'pembaca 30 detik'." },
          { durasi: 30, segmen: "Teori + demo", detail: "Dramaturgi urutan, formula deskripsi, demo layout master page: buat template 1 halaman lalu duplikasi." },
          { durasi: 100, segmen: "Praktik terbimbing", detail: "Susun PDF final: urutan → deskripsi tiap karya → layout konsisten → ekspor. Guru keliling memprioritaskan siswa yang minggu lalu targetnya belum tuntas." },
          { durasi: 25, segmen: "Review karya antar siswa", detail: "Uji 30 detik berpasangan: teman melihat PDF 30 detik lalu menyebutkan 2 karya yang paling diingat + 1 deskripsi yang paling jelas." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Brief finalisasi & (opsional) unggah Behance. Minggu depan: presentasi 5 menit per siswa — kirim PDF paling lambat H-1." }
        ],
        alat: [
          "Lab komputer + InDesign/Illustrator/Canva untuk layout",
          "Portofolio contoh (baik & buruk) + akun Behance guru di proyektor",
          "Karya siswa yang sudah direvisi (tagih di awal sesi)",
          "Checklist ekspor (format, ukuran file, nama file) di papan"
        ],
        tugas: {
          judul: "Portofolio final",
          deskripsi: "PDF portofolio final (6–8 karya, 2 case study, deskripsi lengkap, di bawah 10MB) dikumpulkan paling lambat H-1 sebelum pertemuan 16. Opsional bernilai plus: minimal 1 proyek terunggah di Behance.",
          portofolio: true
        },
        catatan: "Ini deliverable terbesar semester — pastikan tidak ada siswa yang baru mulai layout hari ini (cek progres P14 di awal sesi, yang tertinggal dapat prioritas pendampingan). Tunjukkan Behance guru seperlunya saja; fokus tetap PDF — Behance jadi bonus motivasi, bukan beban baru."
      },

      {
        p: 16, judul: "Presentasi & Review Pra-UAS", pekan: 16, uts: false, lengkap: true,
        ringkas: "Presentasi portofolio, feedback, kisi-kisi UAS.",
        tujuan: [
          "Siswa dapat mempresentasikan portofolionya dalam 5 menit dengan struktur konteks–keputusan–hasil.",
          "Siswa dapat memberikan umpan balik terstruktur (3-2-1) kepada karya temannya.",
          "Siswa dapat memetakan materi satu semester sebagai persiapan UAS."
        ],
        materi: [
          "Teknik presentasi karya 5 menit.",
          "Format umpan balik 3-2-1.",
          "Kisi-kisi UAS dan peta materi semester."
        ],
        modul: [
          {
            judul: "Presentasi 5 menit yang tidak membosankan",
            isi: [
              "Hari ini kelas menjadi ruang presentasi studio: setiap siswa mempresentasikan portofolionya seperti desainer di depan calon klien. Lima menit itu pendek — strukturnya harus ketat.",
              "Ingatkan: yang dinilai bukan kelancaran bicara ala pidato, tapi kemampuan menjelaskan KEPUTUSAN. Siswa pendiam dengan penjelasan keputusan yang jernih menang dari siswa lancar yang isinya kosong."
            ],
            poin: [
              "Struktur 5 menit: 0:30 pembuka (siapa saya, minat ke mana) → 3:30 dua karya terbaik (per karya: brief-nya apa → keputusan kuncinya apa → hasilnya bagaimana) → 1:00 penutup (apa yang paling berkembang semester ini, mau ke mana berikutnya).",
              "JANGAN membacakan semua karya satu per satu — pilih 2, sisanya biar dilihat sendiri.",
              "JANGAN meminta maaf di awal ('maaf jelek', 'maaf belum selesai') — itu menurunkan nilai karya sebelum dilihat.",
              "Latihan sekali dengan timer di rumah — 5 menit terasa berbeda saat diucapkan."
            ]
          },
          {
            judul: "Umpan balik 3-2-1",
            isi: [
              "Setiap presentasi ditanggapi satu siswa yang ditunjuk (bergilir, adil) + guru, memakai format 3-2-1 supaya cepat dan tidak menyakiti."
            ],
            poin: [
              "3 — tiga hal yang BERHASIL (spesifik: 'urutan portofolionya kuat, foto produk jadi pembuka yang tepat').",
              "2 — dua SARAN konkret ('deskripsi karya kedua masih generik; coba sebutkan kenapa pilih warna itu').",
              "1 — satu PERTANYAAN untuk presenternya (memancing dia berpikir, bukan menjatuhkan).",
              "Aturan emas dari P10 tetap berlaku: bedah karya, bukan orang."
            ]
          },
          {
            judul: "Kisi-kisi UAS & peta semester",
            isi: [
              "Tutup sesi dengan menarik benang merah satu semester — biarkan siswa melihat sendiri betapa jauh jalannya: dari tidak tahu apa itu DKV sampai punya portofolio."
            ],
            poin: [
              "Peta materi A: unsur & prinsip (P2) → warna (P3) → tipografi (P4) → layout (P5) → kamera & eksposur (P6) → komposisi & lighting (P7) → alur produksi (P8–10) → gaya foto produk (P11) → identitas (P12) → brief & adaptasi media (P13).",
              "Bentuk UAS (sesuaikan ketentuan sekolah): teori pilihan ganda + esai singkat dari peta di atas, dan/atau praktik singkat. Umumkan komposisinya hari ini juga supaya tidak ada yang kaget.",
              "Materi tersedia lengkap di website ini — tunjukkan cara mengakses dari HP untuk belajar mandiri.",
              "Portofolio yang hari ini dipresentasikan adalah komponen nilai akhir terbesar — sisa UAS tinggal konfirmasi pemahaman."
            ]
          }
        ],
        alur: [
          { durasi: 10, segmen: "Pembuka", detail: "Aturan main presentasi & 3-2-1, undi urutan, tampilkan timer besar." },
          { durasi: 140, segmen: "Presentasi portofolio", detail: "±5 menit presentasi + 2–3 menit umpan balik 3-2-1 per siswa (≈18–20 siswa; kelas besar: bagi dua ruang/sesi atau perketat ke 4 menit)." },
          { durasi: 20, segmen: "Kisi-kisi UAS", detail: "Peta materi semester + bentuk soal + cara belajar dari website ini." },
          { durasi: 10, segmen: "Penutup", detail: "Apresiasi perjalanan satu semester; foto kelas dengan karya; info jadwal UAS." }
        ],
        alat: [
          "Proyektor + timer besar yang terlihat presenter",
          "PDF portofolio semua siswa (terkumpul H-1, sudah diurutkan di satu folder — jangan buang waktu menunggu file dikirim)",
          "Daftar undian urutan + rubrik penilaian presentasi (bagian dari rubrik portofolio akhir)",
          "Kisi-kisi UAS tercetak/di-slide"
        ],
        tugas: {
          judul: "Refleksi akhir semester",
          deskripsi: "Tulisan bebas setengah halaman: karya yang paling kamu banggakan dan kenapa, materi yang paling sulit, dan satu target kemampuan untuk semester depan. Dikumpulkan sebelum UAS.",
          portofolio: false
        },
        catatan: "Hitung matang: 20 siswa × 7 menit = 140 menit — mepet. Disiplin timer tanpa kompromi, dan siapkan opsi membagi dua sesi kalau kelas gemuk. Nilai presentasi langsung saat berlangsung dengan rubrik portofolio (kolom presentasi) — jangan tunda. Tutup dengan hangat: semester pertama mereka (dan semester pertama Anda mengajar!) selesai."
      }
    ],

    b: [
      {
        p: 1, judul: "Orientasi Videografi", pekan: 1, uts: false, lengkap: true,
        ringkas: "Ruang lingkup videografi, bedah 1 iklan/film pendek → analisis 1 iklan.",
        tujuan: [
          "Siswa dapat menyebutkan cabang-cabang pekerjaan videografi dan profesi di dalamnya.",
          "Siswa dapat menjelaskan tiga tahap produksi video dan isi masing-masing.",
          "Siswa dapat menganalisis sebuah iklan 30 detik dari sisi pesan, audiens, dan bahasa gambarnya."
        ],
        materi: [
          "Ruang lingkup videografi: dari iklan televisi sampai konten TikTok.",
          "Profesi di balik layar dan alur kerjasamanya.",
          "Tiga tahap produksi: pra-produksi, produksi, pasca-produksi.",
          "Metode menonton aktif: membedah iklan tiga kali tonton."
        ],
        modul: [
          {
            judul: "Dunia videografi hari ini",
            isi: [
              "Video adalah bahasa paling dominan di layar kita sekarang — dan setiap video yang terlihat 'mengalir begitu saja' sebenarnya hasil ratusan keputusan sadar. Semester ini kalian belajar membuat keputusan-keputusan itu.",
              "Kabar baiknya: alat sudah di kantong kalian. HP masa kini cukup untuk belajar semua konsep besar videografi — kamera mahal menyusul belakangan."
            ],
            poin: [
              "Cabang pekerjaan: iklan/TVC, konten media sosial (paling banyak lowongannya sekarang), company profile, dokumenter, film pendek, wedding, broadcast/TV, video musik.",
              "Tiap cabang beda tuntutan: iklan = pesan padat 15–30 detik; dokumenter = kesabaran & riset; konten sosmed = kecepatan & tren.",
              "Durasi bukan ukuran gampang: justru makin pendek makin sulit — setiap detik harus bekerja."
            ]
          },
          {
            judul: "Siapa saja di balik satu video",
            isi: [
              "Video profesional adalah kerja tim. Di proyek kecil (dan di kelas ini) satu orang merangkap banyak peran — tapi kalian harus tahu peran-perannya supaya bisa membagi tugas saat produksi kelompok nanti."
            ],
            poin: [
              "SUTRADARA — pemegang visi: menentukan rasa dan mengarahkan semua departemen.",
              "PENULIS/CREATIVE — ide, premis, naskah.",
              "DOP (Director of Photography) — kepala urusan gambar: kamera, lensa, lighting.",
              "SOUND RECORDIST — merekam suara bersih di lokasi (peran yang paling sering diremehkan pemula — dan paling disesali belakangan).",
              "EDITOR — penyusun cerita di pasca; sering disebut 'penulisan ulang terakhir'.",
              "COLORIST & MOTION DESIGNER — rasa warna dan grafis bergerak (kita sentuh di P11–12).",
              "Di kelas: peran dirotasi — semua orang akan pernah pegang kamera, suara, dan editing."
            ]
          },
          {
            judul: "Tiga tahap produksi",
            img: { file: "assets/img/ilustrasi/b1-tiga-tahap.svg", alt: "Diagram tiga tahap produksi video: pra-produksi, produksi, pasca-produksi dengan isi masing-masing tahap", caption: "Tiga tahap produksi — semester kita mengikuti alur ini: P1–5 pra, P6–9 produksi, P10–12 pasca." },
            isi: [
              "Semua video — dari film Hollywood sampai konten jualan — melewati tiga tahap yang sama. Pepatah industri yang akan sering saya ulang: kegagalan di lokasi syuting hampir selalu adalah kegagalan pra-produksi.",
              "Rencana semester kita mengikuti tiga tahap ini: P1–5 fokus bahasa gambar & pra-produksi, P6–9 produksi, P10–12 pasca, P13–16 proyek akhir lengkap."
            ],
            poin: [
              "PRA-PRODUKSI — ide, premis, naskah, storyboard, shot list, jadwal, lokasi, izin. 70% keberhasilan ditentukan di sini, saat biayanya masih murah.",
              "PRODUKSI — hari syuting: eksekusi rencana. Improvisasi boleh, tapi dari rencana yang ada — bukan pengganti rencana.",
              "PASCA-PRODUKSI — editing, koreksi warna, audio, grafis, ekspor. Editor hebat tidak bisa menambal footage yang tidak pernah direkam."
            ]
          },
          {
            judul: "Aturan main Jalur B",
            isi: [
              "Jalur B banyak kerja kelompok dan alat bersama — aturan mainnya disepakati hari pertama supaya tidak ada drama di tengah semester."
            ],
            poin: [
              "Kelompok dibentuk HARI INI dan permanen sampai proyek akhir — campuran kemampuan & kepemilikan HP diatur guru.",
              "Peran (sutradara, kamera, audio, editor) DIROTASI tiap produksi: semua orang akan pernah pegang semuanya; nilai individu dibedakan lewat lembar peran.",
              "Alat sekolah = tanggung jawab peminjam: cek saat ambil, cek saat kembali, lapor kerusakan segera.",
              "Footage adalah nyawa: tidak ada yang menghapus file apa pun sebelum dua salinan terverifikasi (aturan lengkapnya di P14).",
              "Komponen nilai: proyek akhir terbesar, lalu UTS video, tugas mingguan, dan UAS."
            ]
          },
          {
            judul: "Menonton aktif: bedah tiga kali tonton",
            isi: [
              "Mulai hari ini kalian tidak boleh lagi menonton iklan seperti penonton biasa. Metode bedahnya: tonton tiga kali, tiap kali dengan satu kacamata berbeda. Ini latihan yang sama seperti membedah desain di Jalur A — objeknya saja yang bergerak."
            ],
            poin: [
              "TONTON 1 — sebagai penonton: rasakan saja. Setelahnya jawab: pesannya apa? untuk siapa? perasaan apa yang muncul?",
              "TONTON 2 — sebagai DOP: hitung jumlah shot (tiap ganti gambar = 1 shot), catat ukuran shot yang dominan, dari mana datang cahayanya.",
              "TONTON 3 — sebagai editor & sound: kapan musik naik? ada suara apa saja selain musik? seberapa cepat pergantian gambarnya di bagian klimaks?",
              "Fakta yang selalu mengejutkan siswa: iklan 30 detik umumnya berisi 15–25 shot — keputusan tiap 1–2 detik."
            ]
          }
        ],
        alur: [
          { durasi: 20, segmen: "Pembuka", detail: "Perkenalan jalur: tonton 1 iklan kuat (pilih iklan Indonesia/Thailand yang emosional) TANPA pengantar apa pun, lalu tanya: apa yang kalian rasakan? Dari situ masuk: 'hari ini kita bongkar kenapa bisa begitu'." },
          { durasi: 45, segmen: "Teori + demo", detail: "Ruang lingkup, profesi, tiga tahap produksi. Selipkan pengalaman nyata proyek video guru (konten klinik, F&B) — anatomi timnya siapa saja." },
          { durasi: 25, segmen: "Bedah bersama", detail: "Tonton iklan pembuka 3× dengan tiga kacamata; hitung shot bersama-sama sambil guru pause di tiap pergantian." },
          { durasi: 55, segmen: "Praktik terbimbing", detail: "Per kelompok: pilih 1 iklan dari daftar kurasi guru, bedah dengan lembar analisis (pesan, audiens, jumlah shot, shot dominan, peran musik)." },
          { durasi: 25, segmen: "Presentasi kelompok", detail: "Tiap kelompok 3 menit: putar iklannya, sampaikan temuan. Kelas mencocokkan hitungan shot." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: video = keputusan per detik. Brief tugas analisis individu." }
        ],
        alat: [
          "Proyektor + speaker yang layak (audio penting mulai hari ini)",
          "3–5 iklan kurasi guru (unduh offline, jangan andalkan wifi) — variasi: emosional, lucu, product-demo",
          "Lembar analisis cetak per kelompok",
          "Daftar kelompok (langsung bentuk kelompok tetap untuk produksi ke depan)"
        ],
        tugas: {
          judul: "Analisis satu iklan",
          deskripsi: "Pilih satu iklan (maksimal 60 detik) yang menurutmu kuat. Tulis analisis satu halaman: pesan & target audiens, jumlah shot & ukuran yang dominan, peran musik/suara, dan satu keputusan yang menurutmu paling cerdas. Sertakan tautan iklannya.",
          portofolio: true
        },
        catatan: "Pemilihan iklan pembuka menentukan energi jalur ini semaksimal pemilihan karya di A P1 — pilih yang membuat kelas hening sejenak. Unduh semua video H-1 (wifi sekolah tidak bisa dipercaya, sesuai prinsip website ini juga). Kelompok yang dibentuk hari ini permanen sampai proyek akhir: campur yang punya HP bagus dengan yang tidak."
      },

      {
        p: 2, judul: "Shot Size & Camera Angle", pekan: 2, uts: false, lengkap: true,
        ringkas: "ECU sampai ELS; high/low/eye level/dutch angle → shot challenge pakai HP.",
        tujuan: [
          "Siswa dapat menyebutkan tujuh ukuran shot beserta fungsi emosionalnya.",
          "Siswa dapat membedakan efek psikologis angle kamera (eye level, high, low, dutch).",
          "Siswa dapat memproduksi rangkaian shot berbeda ukuran dan angle dengan HP secara stabil."
        ],
        materi: [
          "Tujuh ukuran shot: ELS, LS, MLS, MS, MCU, CU, ECU.",
          "Camera angle dan psikologinya: eye level, high, low, dutch, bird eye, worm eye.",
          "Merangkai shot menjadi 'kalimat' visual: pola wide–medium–close.",
          "Teknik dasar merekam stabil dengan HP."
        ],
        modul: [
          {
            judul: "Tujuh ukuran shot & fungsinya",
            img: { file: "assets/img/ilustrasi/b2-shot-sizes.svg", alt: "Diagram tujuh ukuran shot dari ELS sampai ECU dengan figur manusia yang dibingkai berbeda-beda", caption: "Tujuh ukuran shot: makin lebar memberi konteks, makin dekat memberi emosi." },
            isi: [
              "Ukuran shot adalah kosakata paling dasar bahasa film — seperti huruf bagi tulisan. Setiap ukuran punya FUNGSI emosional, bukan sekadar variasi biar tidak bosan: makin lebar makin memberi konteks, makin dekat makin memberi emosi.",
              "Cara mengajar yang efektif: minta satu siswa maju, lalu 'bingkai' dia dengan kedua tangan sambil menyebut tiap ukuran — kelas langsung paham tanpa slide."
            ],
            poin: [
              "ELS (Extreme Long Shot) — manusia kecil di lingkungan luas: menetapkan lokasi (establishing), kesan sendirian/megah.",
              "LS (Long Shot) — tubuh utuh kepala sampai kaki: aksi fisik, bahasa tubuh penuh.",
              "MLS (Medium Long Shot) — lutut ke atas: berjalan & berinteraksi, masih ada lingkungan.",
              "MS (Medium Shot) — pinggang ke atas: shot percakapan standar, netral.",
              "MCU (Medium Close-Up) — dada ke atas: wawancara & dialog serius, mulai intim.",
              "CU (Close-Up) — wajah penuh: emosi jadi pusat, penonton dipaksa peduli.",
              "ECU (Extreme Close-Up) — mata, tetes keringat, jari menekan tombol: ketegangan/detail krusial.",
              "Untuk produk (nyambung ke Jalur A): ECU = tekstur & label, CU–MS = hero shot, LS = konteks pemakaian."
            ]
          },
          {
            judul: "Angle: posisi kamera adalah opini",
            isi: [
              "Ukuran shot menentukan SEBERAPA DEKAT kita dengan subjek; angle menentukan BAGAIMANA KITA MEMANDANGNYA. Kamera tidak pernah netral — tingginya saja sudah berpendapat tentang subjeknya.",
              "Demo cepat: foto siswa yang sama dari bawah lalu dari atas, tampilkan berdampingan — orangnya sama, kesannya bertolak belakang."
            ],
            poin: [
              "EYE LEVEL — sejajar mata: setara, jujur, netral. Default wawancara.",
              "HIGH ANGLE — dari atas: subjek tampak kecil, lemah, terpojok.",
              "LOW ANGLE — dari bawah: subjek tampak kuat, dominan, mengancam. (Iklan hero produk sering diam-diam low angle.)",
              "DUTCH ANGLE — horizon miring: dunia sedang tidak beres; hemat pemakaiannya.",
              "BIRD EYE — tepat dari atas: pola, koreografi, keterasingan (flat lay-nya video).",
              "WORM EYE — tepat dari bawah: dramatis ekstrem, arsitektur, pohon."
            ]
          },
          {
            judul: "Merangkai shot jadi kalimat",
            isi: [
              "Shot tunggal = kata; rangkaian shot = kalimat. Pola klasik yang tak pernah gagal: WIDE dulu (di mana kita?), MEDIUM (siapa melakukan apa?), lalu CLOSE (apa yang dia rasakan?). Penonton tersesat kalau kalian lompat ke close-up tanpa pernah memberi konteks.",
              "Ini persis hierarki visual di Jalur A P5 — versi bergerak: apa yang dibaca dulu, apa yang menyusul."
            ],
            poin: [
              "Latihan analisis 5 menit: putar ulang adegan pembuka film/iklan, sebutkan urutan ukurannya bersama-sama.",
              "Aturan variasi: dua shot bersebelahan sebaiknya beda minimal 2 tingkat ukuran (MS → CU boleh; MS → MS terasa 'loncat aneh' / jump cut).",
              "Satu adegan sederhana (orang minum kopi) minimal butuh 3 shot: LS suasana, MS aksi menuang, CU/ECU uap & seruput."
            ]
          },
          {
            judul: "Teknik HP: stabil dulu, gaya belakangan",
            poin: [
              "WAJIB lanskap (horizontal) untuk latihan kelas — kecuali brief memang vertikal (story/TikTok).",
              "Dua tangan, siku menempel badan, bernapas pelan — badan kalian adalah tripod termurah.",
              "Kunci fokus & eksposur (tap-tahan di layar) supaya gambar tidak 'napas' berubah terang.",
              "Bersihkan lensa dengan kaus — 50% video buram siswa obatnya cuma ini.",
              "Jangan zoom digital: melangkahlah mendekat (zoom digital = kualitas hancur)."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review 2–3 analisis iklan terbaik dari tugas P1. Pemantik: satu adegan film terkenal — hitung mundur ukuran shotnya bersama." },
          { durasi: 45, segmen: "Teori + demo", detail: "Tujuh ukuran (peragakan dengan siswa sebagai model) + enam angle (demo foto langsung high vs low). Tips stabil HP." },
          { durasi: 90, segmen: "Praktik terbimbing: shot challenge", detail: "Per kelompok dengan HP: 10 shot dari daftar (7 ukuran + 3 angle pilihan) untuk SATU subjek/kegiatan di area sekolah, masing-masing 5 detik, stabil, lanskap. Kembali 30 menit sebelum akhir sesi praktik untuk transfer file." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Putar hasil 2–3 kelompok di proyektor tanpa label — kelas menebak ukuran & angle tiap shot. Yang tidak tertebak = shotnya belum jelas." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: ukuran = kedekatan, angle = opini. Brief penyempurnaan shot challenge." }
        ],
        alat: [
          "HP siswa (minimal 1 per kelompok) + penyimpanan kosong",
          "Daftar 10 shot challenge dicetak per kelompok",
          "Kabel/drive transfer file ke komputer kelas (siapkan alurnya, ini sering makan waktu)",
          "Klip film/iklan untuk latihan hitung ukuran"
        ],
        tugas: {
          judul: "Shot challenge",
          deskripsi: "Lengkapi 10 shot (7 ukuran + 3 angle) untuk satu subjek, tiap klip 5 detik stabil, diberi label ukurannya. Susun jadi satu video urut ELS→ECU (pakai aplikasi edit HP apa pun, tanpa efek).",
          portofolio: true
        },
        catatan: "Tantangan tersembunyi pertemuan ini adalah manajemen file — tetapkan alur transfer (kabel/drive) sejak awal dan tagih file SEBELUM review, bukan setelah bel. Kelompok cenderung merekam subjek diam; dorong subjek BERKEGIATAN (main basket, menyapu, menggambar) supaya shot-nya hidup."
      },

      {
        p: 3, judul: "Camera Movement & Continuity", pekan: 3, uts: false, lengkap: true,
        ringkas: "Pan, tilt, tracking, dolly; 180° rule, continuity editing → latihan gerak kamera.",
        tujuan: [
          "Siswa dapat memperagakan gerakan kamera dasar (pan, tilt, follow, dolly) beserta motivasinya.",
          "Siswa dapat menjelaskan aturan 180 derajat dan menerapkannya pada adegan dua orang.",
          "Siswa dapat mengidentifikasi pelanggaran continuity pada sebuah adegan."
        ],
        materi: [
          "Gerakan kamera dasar dan prinsip 'gerakan harus termotivasi'.",
          "Aturan 180 derajat (garis imajiner) pada adegan dialog.",
          "Continuity: match action, eyeline, arah layar, konsistensi properti.",
          "Teknik handheld stabil dan 'slider' improvisasi."
        ],
        modul: [
          {
            judul: "Gerakan kamera & motivasinya",
            img: { file: "assets/img/ilustrasi/b3-gerakan-kamera.svg", alt: "Diagram enam gerakan kamera: pan, tilt, tracking, dolly in-out, handheld, dan peringatan hindari zoom", caption: "Enam gerakan dasar — peragakan satu per satu dengan HP di tangan sebelum praktik." },
            isi: [
              "Aturan nomor satu gerakan kamera: harus ADA ALASANNYA. Kamera bergerak untuk mengikuti subjek, mengungkap informasi baru, atau membangun rasa — bukan karena bosan diam. Penonton tidak sadar gerakan yang termotivasi, tapi langsung terganggu oleh gerakan yang iseng.",
              "Bandingkan dua klip: satu diam tapi komposisinya kuat, satu bergerak terus tanpa arah — tanya kelas mana yang lebih 'profesional'. Jawaban mereka akan mengejutkan diri mereka sendiri."
            ],
            poin: [
              "PAN — kepala menoleh kiri/kanan (poros tetap): mengikuti subjek, memperlihatkan ruang.",
              "TILT — kepala mendongak/menunduk: mengungkap ketinggian, memperkenalkan tokoh dari sepatu ke wajah.",
              "TRACKING/FOLLOW — kamera ikut berjalan bersama subjek: penonton jadi 'teman seperjalanan'.",
              "DOLLY IN — kamera MENDEKAT (bukan zoom): perlahan masuk ke momen penting; DOLLY OUT — menjauh: melepaskan, mengungkap konteks.",
              "ZOOM ≠ DOLLY: zoom mengubah kaca pembesar, dolly memindahkan penonton. Rasakan bedanya di demo. Hindari zoom kecuali gaya yang disengaja.",
              "HANDHELD — goyangan alami: energi, dokumenter, kegelisahan. Pilihan rasa, bukan kecelakaan."
            ]
          },
          {
            judul: "Aturan 180 derajat",
            img: { file: "assets/img/ilustrasi/b3-aturan-180.svg", alt: "Diagram aturan 180 derajat dari atas: dua tokoh dengan garis imajiner, zona aman kamera di satu sisi dan zona terlarang di sisi lain", caption: "Aturan 180°: semua posisi kamera tinggal di satu sisi garis imajiner." },
            isi: [
              "Bayangkan dua orang bercakap: tarik garis imajiner di antara mereka. Selama adegan itu, kamera harus tinggal di SATU SISI garis. Kalau kamera melompat sisi, arah pandang tiba-tiba terbalik — A yang tadinya menghadap kanan mendadak menghadap kiri, dan otak penonton tersandung: 'mereka pindah posisi?'",
              "Peragakan dengan dua siswa dan satu HP: rekam dari sisi yang benar, lalu SENGAJA lompat garis — putar hasilnya, kelas akan langsung merasakan janggalnya tanpa bisa menjelaskan kenapa. Itulah gunanya aturan ini."
            ],
            poin: [
              "Praktisnya: tetapkan sisi kamera SEBELUM merekam adegan dialog; tandai dengan lakban di lantai kalau perlu.",
              "Cara menyeberang garis secara legal: (1) kamera bergerak menyeberang DALAM satu shot (penonton ikut pindah), (2) selipkan shot netral tepat di atas garis, (3) subjeknya sendiri yang berpindah.",
              "Aturan yang sama berlaku untuk arah gerakan: subjek berjalan ke kanan di shot 1 harus tetap ke kanan di shot 2 (screen direction), atau penonton mengira dia balik arah."
            ]
          },
          {
            judul: "Continuity: dunia yang konsisten",
            isi: [
              "Continuity = kesinambungan antar shot supaya penonton percaya semuanya terjadi dalam satu dunia yang sama. Film besar punya petugas khusus (script supervisor) hanya untuk menjaga ini — level ketelitiannya sampai posisi gelas dan kancing baju.",
              "Tunjukkan 1–2 kompilasi 'continuity error' film terkenal (gelas penuh-kosong-penuh) — kelas terhibur sekaligus paham."
            ],
            poin: [
              "MATCH ON ACTION — potong DI TENGAH gerakan (tangan meraih pintu → dari sisi lain pintu terbuka): sambungan jadi tak terasa.",
              "EYELINE MATCH — tokoh melihat ke kiri-bawah → shot berikutnya benda yang dilihat memang 'berada' di situ.",
              "PROPERTI & KOSTUM — posisi barang, level minuman, jaket dipakai/tidak: konsisten antar take.",
              "Kebiasaan profesional sejak sekarang: sebelum pindah setup, FOTO posisi terakhir adegan dengan HP — referensi continuity termurah sedunia."
            ]
          },
          {
            judul: "Teknik gerak tanpa alat mahal",
            poin: [
              "Handheld stabil: dua tangan + siku dikunci ke badan, lutut sedikit menekuk, jalan 'ninja' (tumit-jari, lutut jadi peredam).",
              "Pan/tilt mulus: putar dari PINGGANG bukan tangan; mulai diam 1 detik → gerak → akhiri diam 1 detik (editor membutuhkan 'handle' itu).",
              "Dolly improvisasi: kursi beroda didorong teman, papan di atas lantai licin, atau langkah ninja pelan.",
              "Kecepatan gerak: lebih lambat dari yang terasa pas — di layar semua gerakan tampak 2× lebih cepat."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review shot challenge P2. Pemantik: klip 'lompat garis' yang sengaja dibuat salah — apa yang aneh?" },
          { durasi: 45, segmen: "Teori + demo", detail: "Gerakan & motivasi (demo langsung tiap gerakan dengan HP tersambung proyektor), aturan 180° dengan dua siswa + lakban garis di lantai, continuity error reel." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Dua pos bergilir per kelompok: POS A — rekam 4 gerakan (pan mengikuti, tilt perkenalan, follow, dolly-in improvisasi), masing-masing dengan motivasi yang bisa disebutkan. POS B — adegan dialog 2 orang, 3 shot (MS master + 2 MCU) TANPA melanggar 180°, plus 1 match on action sederhana (membuka pintu)." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Putar hasil pos B beberapa kelompok: kelas memeriksa arah pandang konsisten & sambungan action-nya." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: gerakan butuh alasan, dunia butuh konsisten. Minggu depan: cerita — alasan di balik semua ini." }
        ],
        alat: [
          "HP per kelompok + lakban kertas (garis 180° di lantai)",
          "Kursi beroda / papan luncur untuk dolly improvisasi",
          "Kompilasi continuity error (unduh H-1)",
          "Lembar pos A & B tercetak"
        ],
        tugas: {
          judul: "Paket gerak & continuity",
          deskripsi: "Kumpulkan: 4 klip gerakan (masing-masing sebutkan motivasinya dalam 1 kalimat) + adegan dialog 3 shot yang patuh 180° + 1 match on action. Gabungkan urut dalam satu video.",
          portofolio: true
        },
        catatan: "Lakban di lantai bukan lelucon — garis fisik membuat konsep 180° langsung masuk akal bagi siswa visual. Match on action pintu adalah latihan continuity paling murah dan paling memuaskan hasilnya; pastikan mereka merekam aksi PENUH dari dua sisi (aksi diulang utuh, bukan disambung asal)."
      },

      {
        p: 4, judul: "Storytelling", pekan: 4, uts: false, lengkap: true,
        ringkas: "Struktur 3 babak, premis, konflik, pesan dalam 30 detik → konsep cerita 30 detik.",
        tujuan: [
          "Siswa dapat menyusun premis satu kalimat dengan formula tokoh–tujuan–halangan.",
          "Siswa dapat memecah cerita 30 detik ke dalam struktur tiga babak.",
          "Siswa dapat merancang cerita yang menyampaikan pesan secara visual, bukan lewat dialog panjang."
        ],
        materi: [
          "Struktur tiga babak dan proporsinya dalam durasi pendek.",
          "Premis: formula satu kalimat yang menyelamatkan seluruh produksi.",
          "Konflik dan taruhan (stake): kenapa penonton harus peduli.",
          "Show, don't tell: bercerita dengan gambar."
        ],
        modul: [
          {
            judul: "Struktur tiga babak (dalam 30 detik!)",
            img: { file: "assets/img/ilustrasi/b4-tiga-babak.svg", alt: "Diagram struktur tiga babak pada timeline iklan 30 detik: setup 8 detik, konfrontasi 15 detik, resolusi 7 detik, plus formula premis", caption: "Tiga babak dalam 30 detik — putar satu iklan dengan stopwatch dan buktikan polanya." },
            isi: [
              "Hampir semua cerita yang memuaskan — film 3 jam sampai iklan 30 detik — memakai kerangka yang sama: AWAL yang memperkenalkan, TENGAH yang mempersulit, AKHIR yang menyelesaikan. Bukan rumus kaku, tapi pola cara otak manusia menikmati cerita.",
              "Di iklan 30 detik proporsinya kira-kira: 5–8 detik setup (kenalan + masalah muncul), 15 detik konfrontasi (perjuangan/komplikasi), 7–10 detik resolusi + pesan/logo. Putar satu iklan dan hitung stopwatch bersama — polanya hampir selalu ketemu."
            ],
            poin: [
              "BABAK 1 · SETUP — siapa tokohnya, apa yang dia inginkan, dunia normalnya seperti apa. Penonton harus 'menempel' ke tokoh di 5 detik pertama.",
              "BABAK 2 · KONFRONTASI — halangan muncul dan memburuk. Ini bagian terpanjang dan alasan penonton bertahan.",
              "BABAK 3 · RESOLUSI — halangan terjawab (sering: oleh produk, di iklan), dunia baru yang lebih baik, pesan mendarat.",
              "Kesalahan pemula: babak 1 kepanjangan (kenalan bertele-tele) sehingga klimaks tidak kebagian waktu."
            ]
          },
          {
            judul: "Premis: satu kalimat penyelamat",
            isi: [
              "Sebelum menulis naskah, tulis SATU kalimat ini: (TOKOH) ingin (TUJUAN) tapi (HALANGAN). Kalau kalimat ini belum menarik, naskah sepanjang apa pun tidak akan menolongnya — dan kalian baru rugi satu kalimat, bukan satu produksi.",
              "Contoh: 'Siswa yang selalu telat ingin sekali saja jadi yang pertama di kelas, tapi seisi semesta seperti menahannya pagi itu.' — dari satu kalimat ini kalian sudah bisa membayangkan shot-shotnya. Itu tanda premis yang bekerja."
            ],
            poin: [
              "Uji premis: bacakan ke teman — dia penasaran akhirannya? Lolos. Dia bilang 'terus?' — ulangi.",
              "Tokoh harus PUNYA KEINGINAN yang jelas; 'anak sekolah menjalani harinya' bukan cerita, itu CCTV.",
              "Halangan harus terlihat DI GAMBAR: kesiangan, hujan, sepatu putus — bukan 'dia merasa gundah'.",
              "Untuk UTS nanti premisnya bebas (cerita/iklan/PSA) — mulai simpan ide dari sekarang."
            ]
          },
          {
            judul: "Konflik & taruhan",
            isi: [
              "Konflik adalah mesin cerita: tanpa halangan, keinginan langsung tercapai dan tidak ada yang perlu ditonton. Taruhan (stake) adalah jawaban atas 'memangnya kenapa kalau gagal?' — makin jelas akibat gagal, makin penonton peduli.",
              "Taruhan tidak harus dramatis ala film aksi: telat upacara di depan gebetan adalah taruhan yang sangat besar bagi anak SMK — dan sangat bagus untuk film 30 detik."
            ],
            poin: [
              "Skala konflik yang masuk akal untuk 30 detik: SATU tokoh, SATU keinginan, SATU halangan. Lebih dari itu tidak muat.",
              "Halangan terbaik untuk pemula: fisik & terlihat (benda, cuaca, waktu, jarak) — mudah difilmkan.",
              "Eskalasi sederhana: halangan yang sama memburuk 2–3 kali lebih kuat daripada tiga halangan berbeda."
            ]
          },
          {
            judul: "Show, don't tell",
            isi: [
              "Prinsip emas film: TUNJUKKAN, jangan ceritakan. 'Dia kesiangan' versi tell = tokoh berkata 'aduh aku kesiangan!'; versi show = ECU jam weker 06:45, CU mata terbelalak, LS lari sambil gigit roti. Penonton yang MENYIMPULKAN sendiri akan lebih menempel ceritanya.",
              "Ini alasan urutan materi kita: kalian sudah punya kosakata shot (P2) dan gerakan (P3) — sekarang kosakata itu dipakai untuk BERCERITA."
            ],
            poin: [
              "Latihan inti hari ini: sampaikan emosi TANPA dialog — tiap kelompok dapat 1 kartu emosi (grogi, lega, kecewa, bangga), rancang 3 shot yang menyampaikannya.",
              "Dialog di film pendek pemula: makin sedikit makin selamat (audio dialog bersih itu sulit — kalian akan buktikan di P7).",
              "Pesan iklan pun sebaiknya show: jangan tulis 'rasanya enak', tunjukkan mata terpejam saat gigitan pertama."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review paket gerak P3. Pemantik: putar iklan 30 detik, hitung babak dengan stopwatch bersama-sama." },
          { durasi: 45, segmen: "Teori + demo", detail: "Tiga babak, premis, konflik, show don't tell. Demo tulis premis live dari usulan kelas: perbaiki bersama dari 'CCTV' jadi cerita." },
          { durasi: 30, segmen: "Latihan kartu emosi", detail: "Per kelompok: 1 kartu emosi → rancang & rekam kasar 3 shot tanpa dialog → kelompok lain menebak emosinya. Tebakan benar = show berhasil." },
          { durasi: 60, segmen: "Praktik terbimbing: konsep 30 detik", detail: "Individu/berpasangan: tulis premis 1 kalimat (uji ke teman) → pecah jadi 3 babak (1–2 kalimat per babak) → daftar 6–10 shot kasar. Guru keliling menajamkan premis." },
          { durasi: 20, segmen: "Review konsep", detail: "3–4 premis dibacakan; kelas menjawab dua pertanyaan: penasaran? kebayang gambarnya?" },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Brief: matangkan konsep — minggu depan konsep ini digambar jadi storyboard." }
        ],
        alat: [
          "Stopwatch/timer + iklan contoh (unduh H-1)",
          "Kartu emosi (siapkan 8–10 kartu)",
          "Lembar kerja konsep: premis / 3 babak / daftar shot",
          "HP per kelompok untuk latihan kartu emosi"
        ],
        tugas: {
          judul: "Konsep cerita 30 detik",
          deskripsi: "Finalisasi lembar konsep: premis satu kalimat, tiga babak (1–2 kalimat per babak), daftar 6–10 shot, dan pesan/perasaan yang ingin ditinggalkan ke penonton. Konsep ini akan menjadi storyboard di P5 dan bisa jadi bahan UTS-mu.",
          portofolio: true
        },
        catatan: "Jaga premis siswa tetap KECIL — musuh terbesar pertemuan ini adalah ide kolosal (perang, horor dengan efek, balapan) yang mustahil dieksekusi. Mantra untuk diulang: satu tokoh, satu keinginan, satu halangan, area sekolah. Latihan kartu emosi biasanya jadi momen paling seru jalur B — beri waktu lebih kalau kelas menyala, potong dari sesi konsep."
      },
      {
        p: 5, judul: "Storyboard & Shot List", pekan: 5, uts: false, lengkap: true,
        ringkas: "Menggambar storyboard, menyusun shot list & jadwal → storyboard siap syuting.",
        tujuan: [
          "Siswa dapat menggambar storyboard yang memuat informasi teknis (ukuran shot, arah gerak, catatan audio) meski dengan gambar sederhana.",
          "Siswa dapat menyusun shot list yang terurut berdasarkan efisiensi syuting, bukan urutan cerita.",
          "Siswa dapat membuat jadwal produksi sederhana dengan waktu cadangan."
        ],
        materi: [
          "Storyboard: fungsi dan elemen wajib tiap frame.",
          "Stick figure boleh: informasi mengalahkan keindahan gambar.",
          "Shot list: tabel kerja hari syuting.",
          "Jadwal produksi dan prinsip buffer."
        ],
        modul: [
          {
            judul: "Storyboard: film di atas kertas",
            img: { file: "assets/img/ilustrasi/b5-frame-storyboard.svg", alt: "Contoh satu frame storyboard lengkap: nomor shot, ukuran shot MLS, stick figure, panah arah gerak subjek dan kamera, serta catatan audio", caption: "Anatomi satu frame storyboard — gambar stick figure sah, lima informasinya yang wajib." },
            isi: [
              "Storyboard adalah film versi termurah — kalian 'syuting' seluruh cerita dengan pensil sebelum mengeluarkan kamera. Salah komposisi di kertas harganya satu hapusan; salah di lokasi harganya satu jam kelas.",
              "Kabar baik untuk yang merasa tidak bisa menggambar: storyboard profesional banyak yang berupa stick figure. Yang dinilai INFORMASINYA, bukan gambarnya — sutradara Hollywood pun banyak yang gambarnya lebih buruk dari anak SD."
            ],
            poin: [
              "Elemen wajib tiap frame: (1) kotak gambar sesuai rasio 16:9, (2) ukuran shot (tulis: MS/CU/dst — kosakata P2), (3) panah arah gerak subjek & panah ganda untuk gerak kamera (P3), (4) catatan audio di bawah kotak (dialog/musik/SFX), (5) nomor shot.",
              "Satu frame = satu shot. Cerita 30 detik ≈ 8–15 frame.",
              "Gambar yang penting terbaca: mana tokoh, mana latar, seberapa besar tokoh di frame (itulah ukuran shotnya).",
              "Trik cepat: foto adegan diperagakan teman, lalu jiplak tipis — sah dan cepat."
            ]
          },
          {
            judul: "Shot list: urutan kerja, bukan urutan cerita",
            isi: [
              "Rahasia produksi yang mengejutkan pemula: film TIDAK disyuting urut cerita. Semua shot di lokasi yang sama diambil sekaligus (walau di cerita terpisah), karena pindah lokasi & setup ulang itu pemakan waktu terbesar. Storyboard memuat urutan CERITA; shot list memuat urutan KERJA.",
              "Editor (kalian sendiri, di P8) yang akan menyusunnya kembali sesuai cerita."
            ],
            poin: [
              "Kolom shot list: No. shot · Ukuran · Angle · Gerakan · Lokasi · Isi singkat · Kebutuhan (properti/pemeran) · Ceklis selesai.",
              "Kelompokkan per LOKASI, lalu per SETUP cahaya/arah kamera dalam lokasi itu.",
              "Ceklis di lokasi itu sakral: shot yang terlewat = adegan bolong yang baru ketahuan saat editing (dan pemeran sudah pulang).",
              "Tambahkan selalu: 1 establishing tiap lokasi + cadangan cutaway (detail tangan, benda) — penyelamat editing nomor satu."
            ]
          },
          {
            judul: "Jadwal produksi & buffer",
            poin: [
              "Format sederhana: jam → kegiatan → shot yang ditarget → siapa yang dibutuhkan.",
              "Hukum pemula: semua molor 2× dari perkiraan. Jadwalkan hanya 70% waktu; 30% sisanya buffer.",
              "Urutkan shot SULIT di awal (energi & cahaya masih bagus), shot mudah di akhir.",
              "Untuk syuting luar: cek arah matahari — jam 10–14 cahaya paling keras (ingat kualitas cahaya di A P7 — ilmunya sama)."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review konsep P4 yang sudah dimatangkan. Tunjukkan storyboard film terkenal vs hasilnya berdampingan — termasuk yang gambarnya jelek." },
          { durasi: 40, segmen: "Teori + demo", detail: "Elemen frame storyboard + demo menggambar 3 frame pertama dari satu konsep siswa di papan/kamera dokumen: jelek tapi informatif." },
          { durasi: 95, segmen: "Praktik terbimbing", detail: "Kerjakan berurutan: storyboard 8–15 frame dari konsep sendiri (60') → shot list dikelompokkan per lokasi (20') → jadwal dengan buffer (15'). Guru keliling memeriksa: tiap frame ada ukuran shot & panahnya?" },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Tukar storyboard: teman 'membaca' filmnya frame demi frame TANPA penjelasan pemilik. Bagian yang tidak terbaca = frame yang harus diperjelas." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: rencana murah, syuting mahal. Simpan dokumen ini — dipakai langsung saat UTS P9." }
        ],
        alat: [
          "Template storyboard cetak (6 frame 16:9 per halaman, kolom catatan)",
          "Template shot list & jadwal (cetak/spreadsheet)",
          "Contoh storyboard film terkenal (termasuk yang stick figure)",
          "Kamera dokumen untuk demo"
        ],
        tugas: {
          judul: "Paket pra-produksi siap syuting",
          deskripsi: "Finalisasi tiga dokumen: storyboard lengkap (tiap frame ada ukuran shot, panah gerak, catatan audio), shot list terkelompok per lokasi, dan jadwal dengan buffer. Paket ini adalah 'tiket masuk' sesi UTS P9 — tanpa ini tidak boleh pinjam kamera.",
          portofolio: true
        },
        catatan: "Kalimat 'tiket masuk UTS' itu serius — umumkan sejak hari ini supaya dokumen dikerjakan sungguh-sungguh, dan kalian terbebas dari kelompok yang datang ke UTS tanpa rencana. Uji 'baca storyboard orang lain' adalah filter terbaik: kalau teman salah membaca, sutradara aslinya yang harus memperjelas, bukan pembacanya yang salah."
      },

      {
        p: 6, judul: "Kamera Video", pekan: 6, uts: false, lengkap: true,
        ringkas: "Frame rate, shutter angle, picture profile, white balance → setting kamera sekolah.",
        tujuan: [
          "Siswa dapat menjelaskan fungsi frame rate dan memilihnya sesuai kebutuhan (normal vs slow motion).",
          "Siswa dapat menerapkan aturan shutter 180° dan white balance manual pada kamera.",
          "Siswa dapat menyiapkan kamera sekolah dengan 'resep setting kelas' secara mandiri."
        ],
        materi: [
          "Frame rate: 24/25/30/50/60 fps dan artinya.",
          "Aturan shutter 180°: asal-usul motion blur yang enak dilihat.",
          "White balance manual dan suhu warna (Kelvin).",
          "Picture profile, resolusi, dan resep setting baku kelas."
        ],
        modul: [
          {
            judul: "Frame rate: berapa gambar per detik",
            isi: [
              "Video adalah foto yang diputar cepat — frame rate menentukan berapa foto per detik. Ini bukan sekadar angka teknis: frame rate adalah RASA. 24–25fps terasa 'sinema', 50–60fps terasa 'nyata seperti siaran bola'. Sekali paham ini, kalian tidak bisa lagi menonton TV tanpa menyadarinya.",
              "Indonesia memakai standar PAL: kelipatan 25. Maka resep kelas kita: 25fps untuk normal, 50fps untuk slow motion."
            ],
            poin: [
              "24/25 fps — standar film & iklan: motion blur alami, rasa sinema. Default kelas.",
              "30 fps — standar konten online Amerika; di sini pakai 25 saja agar konsisten.",
              "50/60 fps — dua kegunaan: (1) terasa sangat halus/nyata (olahraga), (2) DIPERLAMBAT 2× di timeline 25fps = slow motion mulus.",
              "Slow motion yang benar: rekam 50fps → taruh di timeline 25fps → perlambat 50%. Merekam 25fps lalu diperlambat = patah-patah.",
              "JANGAN campur frame rate asal-asalan dalam satu proyek — tentukan sebelum syuting (masuk shot list!)."
            ]
          },
          {
            judul: "Aturan shutter 180°",
            isi: [
              "Warisan kamera film analog yang masih dipakai sampai sekarang: shutter speed = 1 ÷ (2 × frame rate). Untuk 25fps → 1/50. Angka ini menghasilkan motion blur yang 'pas' di mata manusia — gerakan halus tapi tidak berbayang.",
              "Demo yang membekas: rekam orang melambaikan tangan di 1/50 vs 1/500 vs 1/25 — putar berdampingan. 1/500 terasa patah seperti robot (efek Saving Private Ryan — kadang disengaja!), 1/25 berbayang seperti mimpi."
            ],
            poin: [
              "Resep: 25fps → shutter 1/50. 50fps → shutter 1/100. Hafalkan dua ini saja.",
              "Konsekuensi siang terang: shutter dikunci 1/50 = cahaya masuk banyak → turunkan dengan aperture kecil (f/8–f/11) atau filter ND ('kacamata hitam' lensa). ISO tetap serendah mungkin.",
              "Ini beda terbesar foto vs video: di foto shutter bebas dipakai mengatur eksposur; di video shutter DIKUNCI, eksposur diatur lewat aperture, ISO, dan ND.",
              "Segitiga eksposur dari A P6 tetap berlaku penuh — hanya satu sisinya yang dibekukan."
            ]
          },
          {
            judul: "White balance: jangan auto",
            img: { file: "assets/img/ilustrasi/b6-suhu-warna.svg", alt: "Skala suhu warna Kelvin dari 3200K bohlam hangat sampai 6500K mendung dingin", caption: "Skala Kelvin — hafalkan dua angka: 3200 (bohlam) dan 5600 (matahari siang)." },
            isi: [
              "Mata manusia otomatis menganggap kertas putih tetap putih di bawah lampu kuning maupun langit mendung — kamera tidak. White balance memberi tahu kamera 'yang ini lho putih'. Di foto, WB auto masih termaafkan (bisa dikoreksi); di video, WB auto BERBAHAYA: warnanya bisa bergeser DI TENGAH shot saat kamera 'berubah pikiran'.",
              "Suhu warna diukur dalam Kelvin — angka kecil = cahaya hangat/oranye, angka besar = dingin/biru."
            ],
            poin: [
              "Patokan Kelvin: lampu bohlam/tungsten ±3200K · lampu neon ±4000K · matahari siang ±5600K · mendung/teduh ±6500K+.",
              "Praktisnya di kamera: pilih preset sesuai sumber cahaya dominan, atau custom WB dengan kertas putih.",
              "Aturan kelas: WB DIKUNCI sebelum merekam, dicek ulang tiap pindah lokasi. Masuk checklist syuting.",
              "Salah WB satu adegan = kerja ekstra grading di P11; salah WB berubah-ubah dalam satu shot = hampir tak tertolong."
            ]
          },
          {
            judul: "Resep setting baku kelas",
            isi: [
              "Supaya semua footage kelas konsisten dan bisa digabung, semua produksi memakai resep yang sama. Tempel resep ini di tas kamera."
            ],
            poin: [
              "RESOLUSI: 1080p (Full HD) — cukup tajam, hemat memori & komputer lab kuat mengeditnya. 4K hanya kalau diminta khusus.",
              "FRAME RATE: 25fps (normal) / 50fps (khusus rencana slow motion).",
              "SHUTTER: 1/50 (di 25fps) / 1/100 (di 50fps).",
              "WB: manual sesuai lokasi. ISO: serendah mungkin. Aperture: sesuai kebutuhan DOF & eksposur.",
              "PICTURE PROFILE: standard/natural. Profile 'flat/log' menyimpan lebih banyak informasi warna untuk grading — tapi butuh grading WAJIB; kita coba sedikit di P11, bukan sekarang.",
              "AUDIO: level manual, jangan auto (dijelaskan tuntas minggu depan).",
              "Checklist 10 detik sebelum tiap take: resolusi-fps ✓ shutter ✓ WB ✓ fokus ✓ level audio ✓ REC benar-benar menyala ✓ (kesalahan paling legendaris: 'ternyata tidak ke-record')."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review paket pra-produksi P5. Pemantik: dua klip orang yang sama — 25fps vs 60fps — mana yang terasa 'film'? Kenapa?" },
          { durasi: 45, segmen: "Teori + demo", detail: "Frame rate & demo slow motion benar vs salah; demo shutter 1/50 vs 1/500 vs 1/25; demo WB: rekam kertas putih di preset berbeda. Semua live ke proyektor." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Rotasi kelompok dengan kamera sekolah: (1) set resep baku dari kondisi kamera acak (guru sengaja mengacak setting dulu!), (2) rekam 3 klip: indoor, outdoor, dan 1 slow motion 50fps, (3) catat setting tiap klip." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Putar klip antar kelompok: cek konsistensi warna antar kelompok (harusnya mirip — kan resepnya sama), tebak mana yang WB-nya meleset." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Bagikan kartu resep setting. Minggu depan: suara & cahaya — dua hal yang membedakan video amatir dan profesional." }
        ],
        alat: [
          "Kamera sekolah (semua unit, baterai penuh) + kartu memori",
          "Kartu 'resep setting kelas' dicetak kecil per kelompok (laminasi kalau bisa)",
          "Filter ND kalau tersedia (kalau tidak: demo konsepnya saja)",
          "Kertas putih untuk custom WB",
          "HDMI ke proyektor untuk demo live"
        ],
        tugas: {
          judul: "Setting kamera mandiri",
          deskripsi: "Kumpulkan 3 klip (indoor, outdoor, slow motion) yang direkam dengan resep baku, beserta catatan setting lengkap tiap klip. Nilai utama pada kebenaran setting & konsistensi, bukan isi gambarnya.",
          portofolio: false
        },
        catatan: "Mengacak setting kamera sebelum praktik itu kuncinya — kemampuan MENGEMBALIKAN kamera ke resep baku dari kondisi kacau adalah skill sesungguhnya (dan simulasi terbaik menerima kamera bekas kelas lain). Kartu resep laminasi akan jadi benda paling berjasa semester ini, percayalah."
      },

      {
        p: 7, judul: "Audio & Lighting Video", pekan: 7, uts: false, lengkap: true,
        ringkas: "Mic dasar, room tone, lighting wawancara → setup wawancara.",
        tujuan: [
          "Siswa dapat menjelaskan kenapa kualitas audio lebih menentukan daripada kualitas gambar, dan menempatkan mikrofon dengan benar.",
          "Siswa dapat merekam room tone dan menjelaskan fungsinya di editing.",
          "Siswa dapat menyusun lighting wawancara sederhana memakai prinsip three-point."
        ],
        materi: [
          "Hukum audio: penonton memaafkan gambar buruk, tidak memaafkan suara buruk.",
          "Jenis mikrofon dan penempatannya; HP sebagai perekam cadangan.",
          "Room tone dan kebersihan lokasi dari noise.",
          "Lighting wawancara: three-point versi video + jendela sebagai key gratis."
        ],
        modul: [
          {
            judul: "Hukum pertama audio",
            isi: [
              "Eksperimen yang sudah terbukti berkali-kali: penonton BERTAHAN menonton video dengan gambar goyang asal suaranya jernih, tapi MENUTUP video bergambar indah yang suaranya kemresek dalam 5 detik. Otak kita mentoleransi mata, tapi tidak telinga.",
              "Demo pembuka yang ampuh: putar klip yang sama dua versi — gambar bagus+audio buruk vs gambar biasa+audio bersih. Voting kelas. Kasusnya selalu selesai di situ."
            ],
            poin: [
              "Aturan emas: DEKATKAN MIC KE MULUT. Jarak ideal mic apa pun: 15–30cm dari sumber suara. Mic kamera yang berjarak 3 meter = suara ruangan, bukan suara orang.",
              "Selalu monitor dengan earphone/headphone saat merekam — telinga di lokasi sering 'menyensor' noise yang nanti terdengar jelas di editan.",
              "Rekam cadangan: HP kedua di saku dada pembicara (mode perekam suara) = 'lavalier' gratis yang menyelamatkan banyak produksi kelas."
            ]
          },
          {
            judul: "Jenis mikrofon & penempatan",
            img: { file: "assets/img/ilustrasi/b7-jenis-mic.svg", alt: "Tiga cara merekam suara: lavalier dijepit di dada 15-20cm dari mulut, shotgun ditodong dari atas frame, dan HP perekam di saku dada", caption: "Tiga senjata audio kelas — semuanya menaati aturan yang sama: dekatkan ke sumber suara." },
            poin: [
              "MIC BAWAAN KAMERA — darurat saja: menangkap segala arah termasuk tangan kalian di body kamera.",
              "LAVALIER (clip-on) — dijepit di dada 15–20cm dari mulut, kabel disembunyikan di balik baju: raja wawancara.",
              "SHOTGUN — terarah, dipasang di kamera atau ditodongkan dari atas frame (boom): untuk adegan yang mic-nya tidak boleh terlihat.",
              "HP + aplikasi perekam — sangat layak: taruh sedekat mungkin di luar frame, sinkronkan dengan tepukan tangan (clap) saat editing.",
              "Tepuk tangan di awal take bukan gaya-gayaan: itu 'clapperboard' — satu suara tajam untuk menyinkronkan audio & video di P8."
            ]
          },
          {
            judul: "Room tone & berburu noise",
            isi: [
              "Room tone adalah 'suara diam' sebuah ruangan — dengung AC, desis lampu, jalan di kejauhan. Tiap ruangan berbeda. Editor membutuhkan 30 detik room tone untuk menambal jeda antar potongan dialog; tanpa itu, tiap sambungan terdengar 'blep' karena keheningannya beda.",
              "Kebiasaan profesional: sebelum bubar dari lokasi, teriakkan 'ROOM TONE!' — semua diam mematung 30 detik, kamera tetap merekam. Kelas akan tertawa saat pertama; editor kalian akan berterima kasih selamanya."
            ],
            poin: [
              "Sebelum take: matikan kipas angin & AC bila memungkinkan, jauhi kulkas/dispenser, tutup jendela ke arah jalan.",
              "Noise yang paling sering lolos di sekolah: bel, pengumuman TOA, kelas sebelah olahraga. Cek jadwal sebelum memilih jam syuting dialog.",
              "Room tone WAJIB masuk shot list setiap lokasi (tambahkan sekarang juga di dokumen P5 kalian)."
            ]
          },
          {
            judul: "Lighting wawancara: three-point versi video",
            img: { file: "assets/img/ilustrasi/p7-three-point-lighting.svg", alt: "Diagram three-point lighting dilihat dari atas: key light 45 derajat, fill di sisi lawan, rim dari belakang", caption: "Resep yang sama dengan Jalur A P7 — jendela bisa menggantikan key, styrofoam menggantikan fill." },
            isi: [
              "Kabar baik: kalian sudah belajar ini di Jalur A P7 — resep three-point (key, fill, rim) berlaku persis sama untuk video. Bedanya: subjeknya bernapas dan lampunya menyala terus (jadi kenyamanan subjek ikut jadi urusan lighting).",
              "Rahasia gratis terbesar: JENDELA adalah softbox raksasa. Wawancara menghadap jendela (bukan membelakangi!) + reflektor styrofoam = lighting yang mengalahkan lampu murah."
            ],
            poin: [
              "Setup baku wawancara: subjek serong 30–45° dari kamera · key (jendela/lampu+softbox) 45° di sisi wajah yang menghadap kamera · fill reflektor di sisi lawan · rim kecil dari belakang bila ada lampu ketiga.",
              "DOSA BESAR: subjek membelakangi jendela = wajah gelap siluet (kamera kalah melawan backlight). Ini kesalahan nomor satu video pemula sedunia.",
              "Latar: beri jarak subjek–dinding minimal 1 meter (dinding dapat 'napas', rim light terasa) dan singkirkan benda 'tumbuh dari kepala' (tiang bendera, gagang pintu).",
              "Cek kulit di monitor: pucat kebiruan? WB-nya, bukan lampunya (ilmu minggu lalu)."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review klip setting P6. Demo voting: gambar bagus+audio buruk vs sebaliknya." },
          { durasi: 45, segmen: "Teori + demo", detail: "Jenis mic + demo jarak (rekam suara sama dari 20cm vs 2m, putar bedanya); room tone; bangun setup wawancara live dari nol dengan satu siswa jadi subjek." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Per kelompok: setup wawancara lengkap (lighting jendela/lampu + mic/HP dekat + kamera resep baku), rekam wawancara 60 detik antar anggota ('kenapa kamu pilih jurusan DKV?') + 30 detik room tone. Rotasi peran: subjek, kamera, audio, lighting." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Putar 2–3 hasil dengan MATA TERPEJAM dulu (nilai audionya), baru mata terbuka (nilai lighting & framing)." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: dekatkan mic, hadapkan wajah ke cahaya. Dua kalimat itu 80% kualitas video kalian naik." }
        ],
        alat: [
          "Kamera + mic yang tersedia (lavalier/shotgun; kalau tidak ada: HP + aplikasi perekam)",
          "Earphone/headphone untuk monitoring (siswa bawa sendiri, umumkan H-3)",
          "Lampu studio mini + reflektor/styrofoam (pinjam dari setup Jalur A)",
          "Ruang dengan jendela yang layak + kursi wawancara",
          "Daftar pertanyaan wawancara cadangan"
        ],
        tugas: {
          judul: "Setup wawancara",
          deskripsi: "Kumpulkan wawancara 60 detik (framing MCU, audio dari mic dekat, lighting menghadap cahaya) + file room tone 30 detik + foto behind-the-scene setup kalian. Footage ini dipakai untuk latihan editing P8 dan motion graphic P12 — jangan hilang!",
          portofolio: true
        },
        catatan: "Review mata-terpejam itu ritual penting — sekali kelas merasakan menilai audio tanpa gambar, standar mereka naik permanen. Footage wawancara hari ini sengaja didaur ulang di P8 (editing) dan P12 (lower third), jadi pastikan semua kelompok benar-benar menyimpannya di folder kelas."
      },

      {
        p: 8, judul: "Editing Dasar Premiere", pekan: 8, uts: false, lengkap: true,
        ringkas: "Timeline, cut, trim, ripple/roll, ekspor → rough cut.",
        tujuan: [
          "Siswa dapat menjalankan alur kerja editing yang rapi: folder, import, seleksi, susun, ekspor.",
          "Siswa dapat menggunakan alat potong dasar (razor, trim, ripple) di Premiere Pro.",
          "Siswa dapat mengekspor video H.264 dengan setting yang benar."
        ],
        materi: [
          "Alur kerja editing dan disiplin folder.",
          "Antarmuka Premiere: project, source, timeline, program monitor.",
          "Memotong: razor, trim, ripple delete; menyinkronkan audio tepukan.",
          "Ekspor H.264 dan pengecekan hasil."
        ],
        modul: [
          {
            judul: "Alur kerja & disiplin folder",
            img: { file: "assets/img/ilustrasi/b8-alur-editing.svg", alt: "Diagram tujuh langkah alur editing dari siapkan folder sampai ekspor, beserta struktur folder proyek", caption: "Tujuh langkah editing + struktur folder — tempel di dinding lab kalau perlu." },
            isi: [
              "Editing yang kacau selalu dimulai dari folder yang kacau. File bernama VID_20260815_093412.mp4 tersebar di desktop adalah resep kehilangan take terbaik. Hari pertama editing = hari pertama disiplin arsip — kebiasaan yang membedakan editor yang dipercaya klien.",
              "Alur bakunya urut dan tidak boleh diloncati: SIAPKAN FOLDER → IMPORT → TONTON & SELEKSI → SUSUN KASAR → RAPIKAN → AUDIO → EKSPOR."
            ],
            poin: [
              "Struktur folder proyek (buat SEBELUM membuka Premiere): NAMA-PROYEK/ berisi 01-FOOTAGE, 02-AUDIO, 03-GRAFIS, 04-PROJECT, 05-EXPORT.",
              "Copy footage dari kartu ke folder DULU — jangan pernah mengedit langsung dari kartu memori/flashdisk (lambat & riskan).",
              "Seleksi sebelum menyusun: tonton semua, tandai take bagus (di Premiere: label warna / di kertas: catat timecode). 10 menit seleksi menghemat 1 jam bolak-balik.",
              "Ctrl+S itu refleks, bukan keputusan. Premiere punya auto-save, tapi jangan pernah mengandalkannya."
            ]
          },
          {
            judul: "Antarmuka & bahasa timeline",
            poin: [
              "Empat panel utama: PROJECT (gudang file) · SOURCE (preview bahan mentah) · TIMELINE (meja kerja) · PROGRAM (hasil jadi).",
              "Timeline: track V (video, bertumpuk = yang atas menutupi) dan track A (audio).",
              "Cara tercepat menyusun: di Source monitor tandai In (I) & Out (O) pada bagian bagus → seret ke timeline. Bukan seret file utuh lalu potong-potong.",
              "Zoom timeline (+/-) dan spasi untuk play — dua tombol yang akan paling aus."
            ]
          },
          {
            judul: "Memotong: dari razor sampai ripple",
            isi: [
              "Kata 'cut' di film datang dari gunting fisik era seluloid — di Premiere guntingnya bernama Razor (C). Tapi editor cepat justru jarang pakai razor: mereka menarik ujung klip (trim) dan membiarkan ripple merapatkan sisanya.",
              "Latihan inti hari ini memakai footage wawancara P7: potong bagian 'ehm', jeda, dan salah bicara — wawancara 60 detik menjadi 30 detik yang lancar. Inilah 90% pekerjaan editor sesungguhnya."
            ],
            poin: [
              "RAZOR (C) — belah klip di titik klik; kembali ke Selection (V) untuk memindah/menghapus.",
              "TRIM — tarik ujung klip untuk memanjang/memendekkan tanpa membelah.",
              "RIPPLE DELETE — hapus klip/celah dan otomatis rapatkan sisanya (klik kanan celah → Ripple Delete). Sahabat sejati.",
              "RIPPLE vs ROLL edit: ripple menggeser durasi total, roll menggeser titik sambung dua klip tanpa mengubah total. Cukup kenali dulu, mahirnya nanti di P10.",
              "Sinkronkan audio HP: cari 'gunung' tepukan di waveform video & audio, sejajarkan, matikan audio kamera. (Itulah gunanya clap P7.)",
              "Shortcut wajib minggu ini: Spasi (play) · JKL (mundur/stop/maju) · C (razor) · V (selection) · Ctrl+K (potong di playhead) · Ctrl+S (nyawa)."
            ]
          },
          {
            judul: "Ekspor: pekerjaan belum selesai sebelum diputar ulang",
            poin: [
              "Resep ekspor kelas: format H.264 · preset 'Match Source – High Bitrate' atau YouTube 1080p · nama file NAMA_KELAS_PROYEK.mp4 · simpan di folder 05-EXPORT.",
              "SELALU tonton file hasil ekspor sampai habis sebelum mengumpulkan — error render, audio hilang, atau hitam di akhir hanya ketahuan dengan menonton.",
              "Ukuran wajar video 1080p: ±100–200MB per menit. 5MB = pasti salah setting; 2GB untuk 30 detik = juga salah.",
              "File project (.prproj) ≠ file video (.mp4). Yang dikumpulkan .mp4; yang di-backup dua-duanya."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review setup wawancara P7. Pemantik: tunjukkan timeline proyek nyata guru yang rapi — 'beginilah meja kerja editor'." },
          { durasi: 45, segmen: "Teori + demo", detail: "Buat folder → import footage wawancara P7 → seleksi → potong 'ehm' pertama → ripple delete → ekspor. Satu alur utuh didemokan live 30 menit, siswa menonton dulu tanpa menyentuh mouse." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Tiap siswa (atau berpasangan sesuai jumlah komputer) mengedit wawancara kelompoknya: struktur folder, sinkron audio tepukan, potong jadi 30 detik terbaik, ekspor benar. Guru keliling; masalah klasik: file 'offline' karena folder dipindah — biarkan terjadi lalu jelaskan kenapa." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Putar beberapa hasil: nilai kelancaran potongan (masih terasa 'blep'? itu urusan room tone & P10) dan kebenaran ekspor." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum alur 7 langkah. Pengumuman penting: minggu depan UTS — bawa paket pra-produksi P5, produk konsep P4. Jelaskan garis besar ketentuan." }
        ],
        alat: [
          "Lab komputer + Premiere Pro (cek lisensi & versi seragam H-1)",
          "Footage wawancara P7 sudah tersalin ke tiap komputer SEBELUM kelas (jangan buang 30 menit untuk transfer)",
          "Kartu shortcut Premiere dicetak",
          "Headphone per komputer (audio editing tanpa headphone = mengganggu sekelas)"
        ],
        tugas: {
          judul: "Rough cut wawancara",
          deskripsi: "Kumpulkan hasil ekspor wawancara 30 detik (H.264, nama file benar) + screenshot struktur folder proyekmu. Siapkan juga paket pra-produksi P5 untuk UTS minggu depan.",
          portofolio: true
        },
        catatan: "Salin footage ke semua komputer sebelum kelas dimulai — pelajaran dari banyak guru: transfer file massal di jam pelajaran menghabiskan setengah sesi. Biarkan satu-dua kasus 'media offline' terjadi alami lalu bedah bersama: itu pelajaran arsip terbaik. Umumkan ketentuan UTS hari ini juga supaya kelompok sempat mematangkan rencana."
      },

      {
        p: 9, judul: "UTS: Video Pendek 30 Detik", pekan: 9, uts: true, lengkap: true,
        ringkas: "Ujian praktik — konsep sampai ekspor → video 30 detik.",
        tujuan: [
          "Menilai kemampuan siswa mengeksekusi rencana produksi menjadi video utuh dalam batas waktu.",
          "Menilai penguasaan teknis: setting kamera, shot & komposisi, audio, dan editing dasar.",
          "Menilai kemampuan bercerita: struktur, pesan, dan keputusan visual."
        ],
        materi: [
          "Ujian praktik — tidak ada materi baru.",
          "Video 30 detik (toleransi 25–40 detik) dari konsep P4 & paket pra-produksi P5.",
          "Penilaian memakai rubrik dua kolom: Teknis Produksi (50) + Cerita & Penyuntingan (50) — lihat halaman Rubrik."
        ],
        modul: [
          {
            judul: "Ketentuan ujian (bacakan di awal sesi)",
            poin: [
              "Berkelompok sesuai kelompok tetap (nilai individu tetap dibedakan lewat peran & kontribusi — isi lembar peran).",
              "TIKET MASUK: paket pra-produksi P5 (storyboard, shot list, jadwal). Tanpa dokumen = tidak boleh mengambil kamera.",
              "Durasi video: 30 detik (toleransi 25–40). Lokasi: area sekolah saja.",
              "Deliverable: 1 file .mp4 H.264 1080p25 + paket pra-produksi + lembar peran anggota.",
              "Boleh kamera sekolah atau HP — dinilai sama; yang dinilai keputusannya, bukan alatnya.",
              "Format nama file: KELOMPOK_KELAS_UTSVIDEO.mp4."
            ]
          },
          {
            judul: "Pembagian waktu yang disarankan",
            poin: [
              "0:00–0:10 — briefing & pengambilan alat (tunjukkan tiket masuk).",
              "0:10–0:30 — persiapan: cek resep setting kamera, kumpulkan pemeran & properti.",
              "0:30–1:30 — SYUTING (60 menit, patuhi shot list, ceklis tiap shot, jangan lupa room tone!).",
              "1:30–2:45 — EDITING (75 menit: folder → sinkron → susun → rapikan → audio).",
              "2:45–3:00 — ekspor, TONTON ULANG hasil ekspor, kumpul.",
              "Peringatan dari pengalaman gladi Jalur A: kelompok yang syuting molor melewati 90 menit hampir pasti tidak selesai edit. Sutradara = penjaga waktu."
            ]
          },
          {
            judul: "Untuk guru: persiapan & penilaian",
            poin: [
              "H-1: cek semua kamera (baterai, kartu kosong, setting netral), pastikan Premiere jalan di semua komputer, siapkan lembar peran & daftar pinjam alat.",
              "Saat ujian: berkeliling menilai aspek proses (kepatuhan shot list, pembagian peran, K3LH alat) — jangan membantu teknis.",
              "Rubrik dua kolom di halaman Rubrik; nilai segera setelah menonton semua film selagi segar.",
              "Simpan semua file UTS di satu folder kelas — dipakai untuk bedah & revisi P10–11."
            ]
          }
        ],
        alur: [
          { durasi: 10, segmen: "Briefing & alat", detail: "Bacakan ketentuan, cek tiket masuk (paket pra-produksi), serah terima alat." },
          { durasi: 20, segmen: "Persiapan", detail: "Set kamera sesuai resep, kumpulkan pemeran/properti, jalan ke lokasi." },
          { durasi: 60, segmen: "Produksi", detail: "Syuting sesuai shot list. Guru berkeliling menilai proses tanpa intervensi teknis." },
          { durasi: 75, segmen: "Pasca-produksi", detail: "Editing di lab: folder, sinkron, susun, audio, sampai picture lock sederhana." },
          { durasi: 15, segmen: "Ekspor & pengumpulan", detail: "Ekspor H.264, tonton ulang hasil ekspor, kumpul + lembar peran. Apresiasi singkat — screening seru menyusul P16." }
        ],
        alat: [
          "Kamera sekolah + HP siswa; tripod, mic/HP perekam, reflektor",
          "Lembar peran anggota & daftar pinjam alat",
          "Lab komputer siap Premiere (semua unit dites H-1)",
          "Timer besar & jadwal tahap di papan",
          "Rubrik tercetak untuk penilaian proses"
        ],
        tugas: {
          judul: "Deliverable UTS",
          deskripsi: "Video 30 detik final (.mp4) + paket pra-produksi + lembar peran. Video ini akan dibedah dan direvisi di P10–11 — simpan seluruh footage mentah dan file project di folder kelompok.",
          portofolio: true
        },
        catatan: "Kelompok selalu kelebihan waktu di syuting dan kekurangan di editing — umumkan 'jam pulang syuting' dan tegakkan tanpa ampun. Lembar peran penting untuk keadilan nilai individu (siapa sutradara/kamera/audio/editor); rotasi sejak P7 membuat semua peran punya pemiliknya. Footage mentah JANGAN dihapus siapa pun sampai semester selesai."
      },

      {
        p: 10, judul: "Editing Lanjutan", pekan: 10, uts: false, lengkap: true,
        ringkas: "J-cut & L-cut, ritme, pacing, transisi bermakna → revisi cut.",
        tujuan: [
          "Siswa dapat menerapkan J-cut dan L-cut untuk sambungan yang mengalir alami.",
          "Siswa dapat menganalisis dan memperbaiki pacing sebuah cut (kapan cepat, kapan lambat).",
          "Siswa dapat memilih transisi berdasarkan makna, bukan dekorasi."
        ],
        materi: [
          "Bedah hasil UTS dengan metode empat langkah (dipinjam dari Jalur A P10).",
          "J-cut & L-cut: rahasia percakapan yang mengalir.",
          "Pacing: ritme potongan sebagai alat emosi.",
          "Transisi dan maknanya: cut, dissolve, match cut, wipe."
        ],
        modul: [
          {
            judul: "Bedah UTS: menonton dengan empat langkah",
            isi: [
              "Sesi dibuka dengan menonton semua film UTS — dan membedah 3–4 di antaranya memakai metode yang sama dengan Jalur A: DESKRIPSI (apa yang terjadi di layar) → ANALISIS (bagaimana shot & potongannya bekerja) → INTERPRETASI (apa yang terasa) → PENILAIAN (apa yang berhasil + satu perbaikan konkret).",
              "Fokus bedah minggu ini khusus EDITING: di detik mana perhatianmu lepas? Sambungan mana yang terasa kasar? Itu daftar kerja revisi hari ini."
            ],
            poin: [
              "Aturan bedah tetap: karya yang dibedah, bukan orangnya; selalu tutup dengan saran konkret.",
              "Tiap kelompok mencatat minimal 3 catatan revisi untuk filmnya sendiri selama sesi bedah."
            ]
          },
          {
            judul: "J-cut & L-cut: sambungan tak terlihat",
            img: { file: "assets/img/ilustrasi/b10-jl-cut.svg", alt: "Diagram timeline J-cut dan L-cut: pada J-cut audio klip B mulai sebelum videonya, pada L-cut audio klip A masih berjalan di atas video B", caption: "Bentuk huruf J dan L di timeline — audio dan video sengaja tidak dipotong di titik yang sama." },
            isi: [
              "Rahasia kecil yang langsung membuat editan terasa profesional: JANGAN potong audio dan video di titik yang sama. Di percakapan nyata, kita menoleh ke lawan bicara SEBELUM ia selesai — editan yang baik meniru cara kita mendengar.",
              "Namanya dari bentuknya di timeline: huruf J = audio klip berikutnya datang duluan; huruf L = audio klip lama masih mengekor di gambar baru."
            ],
            poin: [
              "J-CUT — suara scene berikutnya terdengar dulu, baru gambarnya menyusul (suara bel masuk terdengar → baru cut ke gerbang sekolah). Penonton 'ditarik' maju dengan halus.",
              "L-CUT — gambar sudah pindah (reaksi wajah pendengar), suara pembicara sebelumnya masih berjalan. Standar wajib adegan dialog.",
              "Caranya di Premiere: klik kanan klip → Unlink audio-video → trim audionya saja melewati titik potong video.",
              "Latihan: buka rough cut wawancara P8, tambahkan 2 J-cut & 2 L-cut — rasakan sendiri bedanya sebelum dan sesudah."
            ]
          },
          {
            judul: "Pacing: editan yang bernapas",
            isi: [
              "Pacing = pola panjang-pendek potongan, dan ia adalah alat emosi paling kuat editor: potongan pendek beruntun = tegang, cepat, panik; potongan panjang = tenang, berat, khidmat. Trailer film adalah kursus pacing 2 menit — putar satu dan hitung: potongannya makin pendek menuju klimaks, lalu HENING sebelum judul.",
              "Kesalahan pacing pemula ada dua kubu: semua shot kepanjangan (penonton bosan) atau semua terpotong seragam 2 detik (seperti metronom, melelahkan). Yang benar: BERVARIASI mengikuti emosi cerita."
            ],
            poin: [
              "Uji pacing: tonton cut kalian sambil jujur mencatat di detik ke berapa mata ingin melihat HP — di situlah potongan harus dipercepat atau shot dibuang.",
              "CUT ON ACTION (dari P3 dulu): memotong di tengah gerakan menyamarkan sambungan — lebih mulus daripada memotong saat diam.",
              "Ritme musik: potongan yang jatuh di ketukan terasa 'enak' — tapi jangan SEMUA di ketukan (itu metronom lagi). Sesekali melawan ketukan justru menonjolkan momen.",
              "Keheningan adalah alat: satu jeda hening sebelum momen penting membuat momen itu dua kali lebih keras."
            ]
          },
          {
            judul: "Transisi: makna, bukan dekorasi",
            isi: [
              "Aturan yang menyelamatkan kalian dari selera buruk seumur hidup: transisi bawaan yang berputar-bergulung-berkilau itu BUKAN tanda canggih — justru sebaliknya. Editor profesional 95% memakai cut biasa. Transisi lain hanya dipakai kalau MAKNANYA dibutuhkan.",
              "Kamusnya singkat:"
            ],
            poin: [
              "CUT — default; 'dan kemudian'. Tanpa makna tambahan, karena itu paling sering benar.",
              "DISSOLVE (saling larut) — 'waktu berlalu' atau 'ingatan'. Dipakai sadar, bukan untuk menambal sambungan kasar.",
              "MATCH CUT — dua gambar serupa bentuk/gerak disambung: menghubungkan dua ide (bola bundar → bulan). Transisi paling elegan, rencanakan dari syuting.",
              "WIPE/geser — gaya retro/komedik yang sangat terasa (Star Wars); tahu kapan TIDAK memakainya.",
              "FADE TO BLACK — 'selesai' / ganti babak besar. Satu video pendek cukup satu, di akhir.",
              "Tantangan revisi hari ini: perbaiki film UTS TANPA menambah satu pun transisi selain cut — kalau sambungan kasar, perbaiki pilihan shot/potongannya, bukan ditambal dissolve."
            ]
          }
        ],
        alur: [
          { durasi: 20, segmen: "Pembuka: screening UTS", detail: "Tonton semua film UTS berurutan tanpa komentar — apresiasi dulu, analisis kemudian." },
          { durasi: 40, segmen: "Bedah + teori", detail: "Bedah 3–4 film (fokus editing) dengan 4 langkah; selipkan materi J/L-cut, pacing, transisi lewat contoh dari film-film UTS sendiri + 1 trailer untuk pacing." },
          { durasi: 90, segmen: "Praktik terbimbing: revisi cut", detail: "Tiap kelompok merevisi film UTS-nya: terapkan minimal 2 J/L-cut, perbaiki pacing berdasar catatan bedah, hilangkan transisi dekoratif. Latihan pemanasan 15 menit di rough cut wawancara P8 bagi yang butuh." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Putar sebelum-sesudah 2–3 kelompok berdampingan; kelas menyebutkan apa yang berubah dan efeknya." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: sambungan terbaik adalah yang tak terasa. Minggu depan: warna & suara — polesan terakhir." }
        ],
        alat: [
          "Lab komputer + Premiere; semua file project & footage UTS tersedia",
          "Proyektor + speaker layak untuk screening",
          "1 trailer film untuk demo pacing (unduh H-1)",
          "Lembar catatan revisi per kelompok"
        ],
        tugas: {
          judul: "Revisi cut UTS",
          deskripsi: "Kumpulkan film UTS versi revisi (dengan J/L-cut dan pacing diperbaiki, tanpa transisi dekoratif) + daftar 3 perubahan yang dilakukan dan alasannya. Versi ini lanjut ke grading P11.",
          portofolio: true
        },
        catatan: "Screening pembuka adalah momen kebanggaan pertama jalur B — jaga sakral: lampu dimatikan, tanpa komentar sampai selesai semua. Tantangan 'revisi tanpa transisi' selalu memancing protes lalu menghasilkan pemahaman terdalam; pegang teguh. Kelompok yang film UTS-nya gagal total (file rusak dsb.) revisi memakai footage wawancara P7–8."
      },
      {
        p: 11, judul: "Color Grading & Audio Mixing", pekan: 11, uts: false, lengkap: true,
        ringkas: "Lumetri dasar, LUT, level audio, musik & SFX → final look.",
        tujuan: [
          "Siswa dapat membedakan color correction dan color grading serta melakukan keduanya berurutan di Lumetri.",
          "Siswa dapat menyeimbangkan level dialog, musik, dan efek suara dalam satu mix.",
          "Siswa dapat menghasilkan 'final look' yang konsisten untuk seluruh video."
        ],
        materi: [
          "Correction dulu, grading kemudian: dua pekerjaan berbeda.",
          "Panel Lumetri: basic correction dan creative.",
          "LUT: apa itu, cara pakai, dan takarannya.",
          "Audio mixing: hierarki level, ducking, dan fade."
        ],
        modul: [
          {
            judul: "Correction vs grading: dokter dulu, penata rias kemudian",
            isi: [
              "Dua istilah yang sering dicampur padahal urutannya wajib: CORRECTION = menyembuhkan (white balance meleset, terlalu gelap, shot A tidak nyambung warnanya dengan shot B). GRADING = merias (memberi mood: hangat nostalgia, dingin mencekam, kontras enerjik). Merias wajah yang belum dicuci hasilnya selalu aneh — grading di atas footage yang belum dikoreksi juga.",
              "Ingat pelajaran WB di P6? Kelompok yang WB-nya benar sejak syuting akan merasakan correction-nya 2 menit; yang auto-WB akan membayar utangnya hari ini."
            ],
            poin: [
              "Urutan kerja per klip: (1) WB — geser temperature sampai putih benar-benar putih; (2) Exposure — kulit wajah cukup terang; (3) Contrast; (4) SAMAKAN antar shot satu adegan (paling penting & paling sering dilupakan: adegan sama harus terasa satu waktu).",
              "Alat bantu mata: Lumetri Scopes → Waveform. Grafik menumpuk di bawah = under, menabrak atas = over. Mata bisa lelah & tertipu monitor; scope tidak.",
              "Patokan kulit: kulit manusia yang sehat di waveform duduk di kisaran 50–70. Kulit kebiruan/kehijauan = WB masih salah.",
              "Correction selesai baru boleh menyentuh tab Creative."
            ]
          },
          {
            judul: "Grading & LUT: memberi rasa",
            isi: [
              "LUT (Look-Up Table) = preset warna instan, seperti filter Instagram versi profesional. Godaannya besar, jebakannya juga: LUT dibuat untuk footage orang lain — dipasang mentah-mentah di footage kalian hasilnya sering kulit oranye atau bayangan hijau.",
              "Aturan kelas: LUT boleh, asal (1) correction beres dulu, (2) intensitas DITURUNKAN (mulai dari 30–50%), (3) SATU look untuk SATU video — ganti-ganti look tiap shot itu tanda panik, bukan gaya."
            ],
            poin: [
              "Grading manual sederhana tanpa LUT: geser sedikit shadow ke biru/teal + highlight ke hangat = 'look sinematik' klasik. Sedikit saja — kalau kelihatan, kebanyakan.",
              "Cek konsistensi: play seluruh video dengan mata menyipit — ada satu shot yang 'melompat' warnanya? Itu PR-nya.",
              "Referensi look: ambil screenshot film/iklan yang disukai, sandingkan dengan footage kalian saat grading — mata butuh pembanding.",
              "Tautan ke Jalur A: ini psikologi warna P3 versi bergerak. Look hangat = nyaman & nostalgia; dingin = tegang & modern. Pilih berdasarkan CERITA, bukan tren."
            ]
          },
          {
            judul: "Audio mixing: hierarki suara",
            img: { file: "assets/img/ilustrasi/b11-level-audio.svg", alt: "Diagram level audio dalam dB: dialog -6 sampai -12, musik -20 sampai -25 saat ada dialog, SFX sebagai bumbu, zona 0 dB terlarang", caption: "Patokan level kelas — dialog raja, musik pelayan, 0 dB tabu." },
            isi: [
              "Mixing = menata siapa yang bicara paling keras di telinga penonton. Hierarkinya hampir selalu: DIALOG raja (harus selalu terdengar), MUSIK pelayan emosi (terasa, tapi tidak menenggelamkan dialog), SFX bumbu realitas (langkah, pintu, notifikasi — pelan tapi menghidupkan).",
              "Cek meteran audio di Premiere: angka satuannya dB, 0 paling atas adalah tabu (pecah/distorsi)."
            ],
            poin: [
              "Patokan level kelas (peak): DIALOG sekitar -6 sampai -12 dB · MUSIK saat ada dialog -20 sampai -25 dB · MUSIK saat sendirian boleh naik -10 sampai -15 dB · JANGAN PERNAH menyentuh 0 dB (lampu meteran merah = ulang).",
              "DUCKING — musik otomatis/manual merunduk saat dialog masuk, naik lagi saat dialog selesai. Manual dengan keyframe volume cukup untuk kelas.",
              "FADE in/out audio di tiap awal-akhir musik (Constant Power di Premiere) — musik yang berhenti mendadak seperti pintu dibanting.",
              "Room tone P7 dipakai HARI INI: tambal celah 'hening mati' antar potongan dialog dengan room tone supaya sambungan tak terdengar.",
              "Uji akhir: dengarkan lewat earphone murah DAN speaker HP — penonton kalian di situ, bukan di studio."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review revisi cut P10. Pemantik: satu shot sebelum-sesudah grading + satu klip mixing buruk (musik menenggelamkan dialog) — kelas diagnosis." },
          { durasi: 45, segmen: "Teori + demo", detail: "Correction live dengan scopes di satu shot UTS (pilih yang WB-nya meleset — ada pahlawan tanpa tanda jasa di tiap kelas), lalu grading + LUT takaran benar, lalu mixing: level, ducking manual, fade, tambal room tone." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Kelompok menggarap film UTS revisinya: correction semua shot (samakan antar shot!) → satu look konsisten → mix audio dengan patokan level → ekspor 'final cut'." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Putar 2–3 final cut: uji mata-menyipit untuk warna, uji earphone murah untuk audio." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: sembuhkan dulu, rias kemudian; dialog adalah raja. Minggu depan: teks bergerak di atas video ini." }
        ],
        alat: [
          "Lab komputer + Premiere (Lumetri & Scopes), headphone per unit",
          "2–3 LUT gratis yang sudah diunduh & diuji guru",
          "Musik & SFX bebas lisensi (siapkan folder: YouTube Audio Library dsb. — unduh H-1)",
          "Earphone murah 1–2 buah untuk 'uji penonton'",
          "File room tone tiap kelompok (dari P7)"
        ],
        tugas: {
          judul: "Final look film UTS",
          deskripsi: "Kumpulkan final cut film UTS: warna terkoreksi & konsisten, satu look yang bisa dijelaskan alasannya (1 kalimat), audio ter-mix sesuai patokan level. Sertakan 1 screenshot before-after grading shot terbaikmu.",
          portofolio: true
        },
        catatan: "Musik bebas lisensi wajib disiapkan guru — kalau dibiarkan, siswa memakai lagu top 40 dan videonya kena mute saat diunggah (pelajaran hak cipta gratis, tapi menyakitkan). Ducking manual dengan keyframe memang lebih lama dari fitur otomatis, tapi mengajarkan KONSEPNYA — otomatisasi menyusul sendiri."
      },

      {
        p: 12, judul: "Motion Graphic Dasar", pekan: 12, uts: false, lengkap: true,
        ringkas: "Teks kinetik, lower third, animasi sederhana → title sequence.",
        tujuan: [
          "Siswa dapat menganimasikan teks dengan keyframe (position, scale, opacity) dan easing.",
          "Siswa dapat membuat lower third yang terbaca dan berada di safe area.",
          "Siswa dapat merancang title sequence pendek yang sesuai nada videonya."
        ],
        materi: [
          "Prinsip animasi untuk motion graphic: timing, easing, less is more.",
          "Keyframe di Premiere (Essential Graphics / Effect Controls).",
          "Lower third: anatomi dan aturannya.",
          "Title sequence: gerbang masuk sebuah video."
        ],
        modul: [
          {
            judul: "Motion graphic: desain yang bergerak",
            isi: [
              "Motion graphic = ilmu Jalur A yang diberi waktu: tipografi (P4) + layout (P5) + warna (P3), lalu ditambah dimensi baru — KAPAN muncul, BAGAIMANA bergerak, KAPAN pergi. Semua aturan lama tetap berlaku: maksimal 2 typeface, hierarki jelas, warna bermakna.",
              "Dua prinsip animasi yang mengangkat level pemula seketika: EASING dan LESS IS MORE."
            ],
            poin: [
              "EASING — benda nyata tidak bergerak dengan kecepatan konstan: ia berangkat pelan, melaju, lalu mengerem. Keyframe tanpa easing terasa 'robot presentasi'; klik kanan keyframe → Ease In/Ease Out, dan animasi langsung terasa mahal.",
              "TIMING — patokan durasi teks di layar: cukup untuk dibaca DUA KALI dengan santai. Kurang dari itu penonton kesal; lebih dari 5 detik teks diam mulai basi.",
              "LESS IS MORE — satu gerakan halus (naik 20px + fade) mengalahkan teks yang berputar-meledak-berkilau. Kalau gerakannya lebih menarik daripada isinya, gerakannya salah.",
              "ANTICIPATION ringan — mundur sedikit sebelum maju membuat gerakan terasa hidup (opsional, untuk yang cepat)."
            ]
          },
          {
            judul: "Keyframe: mesin waktu animasi",
            isi: [
              "Keyframe = 'di detik ini, properti bernilai ini'. Dua keyframe = satu gerakan; Premiere mengisi antaranya (in-between). Semua animasi digital — dari lower third sampai film Pixar — pada dasarnya keyframe.",
              "Di Premiere, jalur cepatnya: buat teks dengan Type tool → buka Effect Controls → klik ikon stopwatch di Position/Scale/Opacity → geser playhead → ubah nilai. Dua keyframe jadi."
            ],
            poin: [
              "Tiga properti yang menyelesaikan 90% kebutuhan: POSITION (masuk/keluar layar), OPACITY (fade), SCALE (tumbuh/menyusut — pakai halus, 95→100%, bukan 0→100%).",
              "Resep 'fade up' klasik untuk teks apa pun: Opacity 0→100 + Position naik 20–30px, durasi 15–20 frame, ease out. Hafalkan, pakai selamanya.",
              "Teks keluar juga dianimasikan (kebalikannya, lebih cepat) — teks yang hilang mendadak seperti tamu pergi tanpa pamit.",
              "Simpan sebagai Motion Graphics Template (ikon + di Essential Graphics) supaya bisa dipakai ulang — beginilah studio bekerja."
            ]
          },
          {
            judul: "Lower third: anatomi & aturan",
            isi: [
              "Lower third = identitas yang muncul di sepertiga bawah layar (nama + jabatan narasumber). Kalian melihatnya ratusan kali di berita & YouTube tanpa sadar — sekarang giliran membuatnya, untuk footage wawancara P7 kalian sendiri."
            ],
            poin: [
              "Anatomi: BARIS 1 nama (lebih besar/bold) · BARIS 2 jabatan/keterangan (lebih kecil, boleh warna sekunder) · latar belakang opsional (bidang/garis) untuk keterbacaan di footage ramai.",
              "SAFE AREA: jangan menempel tepi layar — Premiere punya guide (Safe Margins); patokan praktis: minimal 5% dari tepi.",
              "Durasi tampil: 4–6 detik, muncul saat orangnya mulai bicara, cukup SEKALI di kemunculan pertama.",
              "Kontras dulu baru gaya: teks putih + bidang gelap semi transparan selalu menang melawan teks tipis langsung di atas footage.",
              "Tipografi lower third = CV kalian sebagai desainer: 2 detik di layar, tapi penonton langsung tahu ini rapi atau asal."
            ]
          },
          {
            judul: "Title sequence: gerbang video",
            isi: [
              "Title sequence adalah 5–10 detik pembuka yang menetapkan NADA — sebelum cerita dimulai, penonton sudah diberi tahu ini video serius, hangat, atau jenaka, lewat pilihan huruf, warna, musik, dan gerakan. Tunjukkan 2–3 opening favorit (film/serial/YouTube) dan bedah: kenapa terasa begitu?",
              "Tugas hari ini menggabungkan semuanya: title sequence untuk film UTS kalian yang sudah digrading di P11."
            ],
            poin: [
              "Struktur minimal: judul film + (opsional) nama kelompok, masuk → tahan cukup dibaca 2× → keluar. Total 5–10 detik.",
              "Nada wajib nyambung: film komedi dengan title horor = janji palsu ke penonton.",
              "Musik/SFX pada title menajamkan momen masuknya teks (ketukan = teks muncul — ilmu pacing P10).",
              "Godaan yang harus ditolak: memakai semua efek yang baru dipelajari sekaligus. Satu ide gerakan, dieksekusi bersih."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Pembuka", detail: "Review final look P11. Pemantik: 2 title sequence beda nada + 1 lower third berita — bedah cepat kenapa bekerja." },
          { durasi: 45, segmen: "Teori + demo", detail: "Keyframe live: resep fade-up dari nol, easing sebelum-sesudah, lalu bangun satu lower third lengkap di footage wawancara P7 + simpan sebagai template." },
          { durasi: 90, segmen: "Praktik terbimbing", detail: "Dua deliverable: (1) lower third untuk wawancara P7 kelompoknya (pakai template sendiri), (2) title sequence 5–10 detik untuk film UTS. Yang cepat: animasikan juga credit penutup." },
          { durasi: 20, segmen: "Review karya antar siswa", detail: "Putar title + lower third antar kelompok: uji baca-dua-kali, uji safe area, uji kesesuaian nada." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Rangkum: animasi terbaik tidak terasa dianimasikan. Minggu depan: pra-produksi proyek akhir — bawa ide!" }
        ],
        alat: [
          "Lab komputer + Premiere (Essential Graphics); headphone",
          "Footage wawancara P7 & film UTS ter-grading P11 di tiap komputer",
          "2–3 contoh title sequence & lower third (unduh H-1)",
          "Kartu resep 'fade up' dicetak (tambahkan ke kartu shortcut P8)"
        ],
        tugas: {
          judul: "Title sequence + lower third",
          deskripsi: "Kumpulkan: (1) wawancara P7 dengan lower third final, (2) film UTS dengan title sequence terpasang. Keduanya ekspor H.264. Tulis 1 kalimat: nada apa yang dibangun title-mu dan lewat pilihan apa.",
          portofolio: true
        },
        catatan: "Premiere cukup untuk semua materi ini — jangan pindah ke After Effects kecuali ada siswa yang sudah jauh di depan (beri dia tantangan AE pribadi). Template lower third yang dibuat hari ini akan dipakai lagi di proyek akhir: tekankan penyimpanan yang benar. Pertemuan ini favorit siswa yang kuat di desain grafis — momen bagus menaikkan percaya diri mereka di jalur video."
      },

      {
        p: 13, judul: "Pra-produksi Proyek Akhir", pekan: 13, uts: false, lengkap: true,
        ringkas: "Pitching konsep, proposal, storyboard, jadwal produksi → proposal + storyboard.",
        tujuan: [
          "Siswa dapat mempresentasikan (pitching) konsep proyek akhir secara meyakinkan dalam 3 menit.",
          "Siswa dapat menyusun proposal produksi lengkap: premis, treatment singkat, storyboard, shot list, jadwal, pembagian peran.",
          "Siswa dapat merencanakan produksi yang realistis terhadap waktu, alat, dan lokasi yang tersedia."
        ],
        materi: [
          "Proyek akhir: video 60 detik, genre pilihan.",
          "Pitching: menjual ide dalam 3 menit.",
          "Proposal produksi dan komponennya.",
          "Realisme produksi: musuh terbesar proyek akhir adalah ambisi."
        ],
        modul: [
          {
            judul: "Proyek akhir: aturan mainnya",
            isi: [
              "Inilah karya utama jalur B — video 60 detik yang menggabungkan SEMUA: cerita (P4), pra-produksi (P5), kamera (P6), audio & lighting (P7), editing (P8, P10), grading & mixing (P11), dan motion graphic (P12). Dikerjakan kelompok tetap, disyuting P14, diselesaikan P15, ditayangkan P16.",
              "Durasi dua kali UTS bukan berarti dua kali lebih mudah — 60 detik menuntut cerita yang lebih utuh. Pilihan genrenya dibuat lebar supaya tiap kelompok bermain di kekuatannya."
            ],
            poin: [
              "Pilihan genre: IKLAN produk/usaha lokal nyata (paling disarankan — bisa masuk portofolio klien!), PSA/kampanye layanan (anti-bullying, hemat energi), PROFIL kegiatan/ekskul sekolah, atau FILM MIKRO fiksi.",
              "Deliverable akhir: video 60 detik (toleransi 50–75) + title & credit + lower third bila ada narasumber + poster filmnya (SATU frame terbaik + ilmu Jalur A — jembatan dua jalur!).",
              "Batasan produksi: lokasi area sekolah/rumah anggota, pemeran dari lingkup sekolah, alat yang ada. Kreativitas justru lahir dari batasan.",
              "Nilai proyek akhir = komponen terbesar nilai jalur B semester ini."
            ]
          },
          {
            judul: "Pitching 3 menit",
            isi: [
              "Pitching = menjual ide sebelum ide itu dibuat — keterampilan yang dipakai seumur hidup di industri kreatif (ke klien, ke produser, ke atasan). Formatnya ketat 3 menit, dan kelas + guru berperan sebagai 'produser' yang memutuskan: lanjut, revisi, atau ganti ide.",
              "Sama seperti presentasi Jalur A P13: yang dijual KEPUTUSAN dan ALASAN, bukan semangat kosong."
            ],
            poin: [
              "Struktur 3 menit: (0:30) premis satu kalimat + genre → (1:00) jalan cerita 3 babak / alur konten → (0:45) referensi visual & nada (tunjukkan 1–2 contoh) → (0:45) kenapa realistis: lokasi, pemeran, alat, pembagian peran.",
              "Produser boleh bertanya 2 menit setelahnya — pertanyaan wajib guru: 'apa bagian paling sulit dieksekusi, dan rencana B-nya?'",
              "Tanda ide harus dipangkas: butuh lokasi di luar jangkauan, pemeran banyak, adegan malam, efek yang belum pernah dilatih. Mantra P4 masih berlaku: satu tokoh, satu keinginan, satu halangan — sekarang boleh dua.",
              "Ide yang lolos pitching dikunci — ganti ide setelah ini = mengulang pitching di luar jam."
            ]
          },
          {
            judul: "Proposal produksi: kontrak kelompok",
            isi: [
              "Setelah lolos pitching, ide dituangkan jadi proposal — bukan formalitas, tapi kontrak kerja kelompok: siapa mengerjakan apa, kapan, dengan alat apa. Di P14 dokumen inilah yang dipegang guru saat menagih progres.",
              "Isinya sebagian besar sudah kalian kuasai dari P5 — sekarang versi lebih seriusnya."
            ],
            poin: [
              "Isi proposal (4–6 halaman): (1) judul & premis, (2) treatment — cerita dalam 1 paragraf per babak, (3) storyboard lengkap, (4) shot list terkelompok per lokasi, (5) jadwal syuting P14 per jam dengan buffer 30%, (6) pembagian peran INTI per anggota (sutradara/DOP/audio/editor — merangkap boleh, kosong tidak), (7) daftar kebutuhan: alat, properti, pemeran, izin.",
              "Peran dibagi berdasarkan hasil rotasi P6–P12: siapa kuat di mana sudah kelihatan.",
              "Izin lokasi & orang: kalau syuting di kantin ya bilang ke pemilik kantin — etika produksi dimulai dari sini.",
              "Checklist tiket masuk P14 (sama seperti UTS): proposal lengkap = boleh ambil alat."
            ]
          }
        ],
        alur: [
          { durasi: 10, segmen: "Pembuka", detail: "Aturan proyek akhir, deliverable, dan jadwal 4 pekan ke depan di papan." },
          { durasi: 60, segmen: "Pitching", detail: "Per kelompok 3 menit + 2 menit tanya produser. Keputusan langsung: lanjut / revisi kecil / temui guru setelah kelas." },
          { durasi: 85, segmen: "Praktik terbimbing: proposal", detail: "Kelompok menyusun proposal lengkap; yang revisi memperbaiki dulu konsepnya. Guru keliling per kelompok memeriksa realisme jadwal & pembagian peran." },
          { durasi: 15, segmen: "Review silang", detail: "Tukar proposal antar kelompok: cari satu titik rawan di rencana orang lain ('kalau hujan bagaimana?') — lebih mudah melihat lubang di rencana tetangga." },
          { durasi: 10, segmen: "Penutup + brief tugas", detail: "Kunci ide. Brief: finalisasi proposal + amankan izin & properti sebelum P14. Ingatkan cek cuaca untuk syuting luar." }
        ],
        alat: [
          "Template proposal (cetak/digital) — kembangkan dari template P5",
          "Proyektor untuk pitching + timer 3 menit yang tegas",
          "Kalender pekan P14–16 di papan",
          "Daftar alat sekolah yang bisa dipinjam + formulir pinjam"
        ],
        tugas: {
          judul: "Proposal + storyboard final",
          deskripsi: "Proposal produksi lengkap (7 komponen) dikumpulkan paling lambat H-2 sebelum P14 supaya guru sempat memberi catatan. Amankan juga izin lokasi, properti, dan kepastian pemeran. Proposal = tiket pengambilan alat.",
          portofolio: true
        },
        catatan: "Peran 'produser galak tapi adil' saat pitching itu setengah keberhasilan proyek akhir — ide yang terlalu ambisius harus dipangkas HARI INI, bukan ditangisi di P15. Genre iklan usaha lokal nyata layak didorong keras: hasilnya bisa benar-benar dipakai pemilik usaha, dan siswa merasakan alur klien sungguhan seperti cerita-cerita di halaman Profil."
      },

      {
        p: 14, judul: "Produksi", pekan: 14, uts: false, lengkap: true,
        ringkas: "Syuting terbimbing → footage mentah.",
        tujuan: [
          "Siswa dapat mengeksekusi rencana produksi secara disiplin: shot list diceklis, jadwal dipatuhi.",
          "Siswa dapat menjalankan perannya (sutradara/DOP/audio) secara bertanggung jawab dalam kerja tim.",
          "Siswa dapat mengelola file produksi dengan aman: backup sebelum kartu dihapus."
        ],
        materi: [
          "Hari syuting: dari checklist pagi sampai backup sore.",
          "Disiplin take dan pencatatan.",
          "Manajemen file di lapangan.",
          "Keselamatan kerja produksi (K3LH versi lapangan)."
        ],
        modul: [
          {
            judul: "Checklist hari syuting",
            isi: [
              "Hari syuting adalah ujian pra-produksi. Kelompok yang proposalnya matang akan merasa hari ini 'tinggal menjalankan'; yang proposalnya asal akan merasakan kekacauan — dan itu pelajaran yang juga berharga. Guru hari ini berkeliling sebagai supervisor produksi, bukan pemadam kebakaran.",
              "Mulai dari ritual pagi: buka checklist SEBELUM meninggalkan kelas."
            ],
            poin: [
              "ALAT: baterai penuh + cadangan? kartu kosong? tripod? mic/HP perekam + earphone? reflektor? kartu resep setting?",
              "DOKUMEN: shot list tercetak (yang diceklis), storyboard, jadwal, kontak pemeran.",
              "ORANG: semua pemeran konfirmasi? kostum & properti sesuai catatan continuity?",
              "LOKASI: izin beres? sumber listrik kalau perlu? rencana B kalau lokasi terpakai/hujan?",
              "Set kamera SEKALI di awal dengan resep baku (1080p25, 1/50, WB lokasi) — lalu cek ulang tiap pindah lokasi."
            ]
          },
          {
            judul: "Disiplin take & pencatatan",
            isi: [
              "Rahasia lokasi yang efisien: RITME YANG SAMA di setiap take. Kelompok yang takenya berantakan (kadang aba-aba, kadang tidak) akan tersesat di editing — 40 klip tanpa tahu mana yang bagus.",
              "Ritual take yang dilatih hari ini dipakai di industri sungguhan, hanya lebih sederhana."
            ],
            poin: [
              "Urutan aba-aba sutradara: 'Siap semua?' → 'Kamera?' (DOP: 'Rolling!') → 'Audio?' ('Rolling!') → TEPUK/slate di depan lensa (sebut: 'Shot 5 take 2!') → 'Action!' → adegan → tunggu 2 detik → 'Cut!'",
              "Dua detik ekstra sebelum 'action' dan sesudah adegan = handle untuk editor (ingat keluhan kalian sendiri saat mengedit UTS).",
              "Pencatat (boleh dirangkap): ceklis shot di shot list + beri tanda bintang pada take yang sutradara suka. Lima detik mencatat = satu jam seleksi terselamatkan.",
              "Satu take bagus yang disengaja > sepuluh take asal 'nanti pilih di editan'.",
              "Foto continuity tiap akhir setup (posisi properti & kostum) — kebiasaan dari P3."
            ]
          },
          {
            judul: "Manajemen file: hukum dua salinan",
            isi: [
              "Kisah horor produksi nomor satu bukan kamera rusak — tapi 'kartunya kehapus'. Hari ini berlaku HUKUM DUA SALINAN: footage belum boleh dihapus dari kartu sebelum berada di DUA tempat lain (komputer lab + flashdisk/drive kelompok).",
              "Backup adalah bagian dari jam produksi, bukan pekerjaan rumah — 20 menit terakhir sesi ini memang dijadwalkan untuk itu."
            ],
            poin: [
              "Struktur folder langsung benar sejak hari ini: PROYEK-AKHIR/01-FOOTAGE/LOKASI-A, /LOKASI-B, /AUDIO, dst. (struktur P8).",
              "Verifikasi backup = BUKA beberapa file di komputer, bukan sekadar melihat nama filenya ada.",
              "Baru setelah dua salinan terverifikasi, kartu boleh diformat untuk kelompok berikutnya.",
              "K3LH lapangan: kamera selalu ber-strap, tripod dikunci, kabel tidak melintang jalan, dilarang merekam sambil berjalan mundur tanpa pemandu — dan panas-panasan pakai topi, ini Indonesia."
            ]
          }
        ],
        alur: [
          { durasi: 15, segmen: "Briefing & checklist", detail: "Tiap kelompok membacakan checklist-nya; serah terima alat dengan tiket proposal; sepakati 'jam pulang' syuting dan titik kumpul." },
          { durasi: 130, segmen: "Produksi terbimbing", detail: "Syuting sesuai jadwal masing-masing. Guru berkeliling antar lokasi memantau: kepatuhan shot list, ritual take, K3LH, dan menegakkan jam. Kelompok yang selesai lebih cepat: ambil cutaway & establishing tambahan (tidak pernah rugi)." },
          { durasi: 25, segmen: "Backup & log", detail: "Semua kembali: dua salinan terverifikasi, ceklis shot list difoto, alat dikembalikan & dicek." },
          { durasi: 10, segmen: "Penutup", detail: "Lapor kilat per kelompok: berapa % shot list tercapai, apa masalah terbesar. Brief P15: langsung mulai assembly begitu masuk lab." }
        ],
        alat: [
          "Semua alat produksi (kamera, tripod, mic, reflektor) + formulir pinjam",
          "Shot list & proposal tercetak per kelompok",
          "Komputer lab + flashdisk/drive kelompok untuk backup (siapkan slot waktu transfer)",
          "Nomor kontak guru untuk kelompok yang syuting terpisah lokasi",
          "P3K ringan & air minum — produksi itu kerja fisik"
        ],
        tugas: {
          judul: "Footage lengkap + log",
          deskripsi: "Deliverable hari ini: footage lengkap sesuai shot list (dua salinan terverifikasi), shot list terceklis (difoto), foto continuity, dan file room tone tiap lokasi. Kekurangan shot dicatat & dijadwalkan pickup mandiri sebelum P15.",
          portofolio: false
        },
        catatan: "Tugas guru tersulit hari ini adalah TIDAK ikut campur — biarkan sutradara memimpin walau kalian gatal melihat framing miring; catat saja untuk bedah P16. Yang wajib ditindak langsung hanya dua: pelanggaran K3LH dan kelompok yang macet total (>20 menit tanpa satu take). 'Jam pulang' syuting tidak bisa ditawar: editing P15 tidak punya ruang molor."
      },

      {
        p: 15, judul: "Pasca-produksi", pekan: 15, uts: false, lengkap: true,
        ringkas: "Editing, grading, mixing, ekspor → video 60 detik.",
        tujuan: [
          "Siswa dapat menyelesaikan editing melalui tahapan assembly → rough → fine → picture lock.",
          "Siswa dapat menerapkan seluruh rantai finishing: grading, mixing, title, lower third, credit.",
          "Siswa dapat mengekspor master final beserta arsip proyek yang rapi."
        ],
        materi: [
          "Empat tahap editing dan disiplin 'lock'.",
          "Kill your darlings: memotong demi cerita.",
          "Finishing: rantai lengkap dari grading sampai poster.",
          "Ekspor master & arsip."
        ],
        modul: [
          {
            judul: "Empat tahap menuju picture lock",
            isi: [
              "Editing proyek sungguhan tidak dikerjakan sekali jadi — ia melewati empat tahap, dan tiap tahap punya pertanyaannya sendiri. Melompat tahap (misalnya menggrading sebelum ceritanya terkunci) = kerja dua kali saat ada shot yang akhirnya dibuang.",
              "Hari ini empat tahap itu dipadatkan dalam satu sesi — ketat tapi bisa, KALAU footage P14 lengkap dan terorganisir (sekarang terasa kan gunanya disiplin kemarin)."
            ],
            poin: [
              "ASSEMBLY — susun semua shot urut cerita, kasar, panjang tidak masalah. Pertanyaannya: 'ceritanya utuh?'",
              "ROUGH CUT — buang yang lemah, rapikan urutan, durasi mendekati target. 'Ceritanya jalan?'",
              "FINE CUT — J/L-cut, pacing, cut on action (semua ilmu P10). 'Tiap detik bekerja?'",
              "PICTURE LOCK — gambar KUNCI, tidak ada potongan berubah lagi. Baru setelah ini: warna, audio, grafis.",
              "Deklarasikan lock dengan sadar (tulis di kertas kelompok: 'LOCKED jam 14:05') — komitmen kecil yang menyelamatkan dari revisi abadi."
            ]
          },
          {
            judul: "Kill your darlings",
            isi: [
              "Frasa terkenal di dunia kreatif: bunuh kesayanganmu. Shot yang paling susah payah diambil — dolly improvisasi tiga kali take, menunggu cahaya 20 menit — sering kali justru TIDAK melayani cerita. Editor yang baik memotongnya tanpa ampun; editor pemula mempertahankannya dan ceritanya melambat.",
              "Ujian 60 detik itu kejam: setiap shot harus menjawab 'apa fungsimu bagi cerita?' — bukan 'seberapa susah kamu diambil?'"
            ],
            poin: [
              "Trik praktis: minta anggota yang TIDAK ikut syuting shot itu (atau kelompok tetangga) menonton rough cut — mereka menilai fungsi, bukan kenangan.",
              "Shot kesayangan yang dipotong tidak mati: simpan di sequence 'DELETED' — siapa tahu berguna, dan hati lebih rela.",
              "Kalau durasi lewat 75 detik, mulai memotong dari: (1) awal yang lambat (mulai lebih dekat ke masalah), (2) shot yang informasinya sudah diwakili shot lain."
            ]
          },
          {
            judul: "Rantai finishing (urutannya penting)",
            poin: [
              "Setelah LOCK, jalankan berurutan: (1) CORRECTION per shot + samakan antar shot → (2) GRADING satu look (P11) → (3) AUDIO: level, ducking, room tone, musik bebas lisensi, fade (P11) → (4) TITLE + LOWER THIRD + CREDIT dengan template P12 → (5) tonton FULL sekali dengan earphone murah → (6) EKSPOR master.",
              "Credit penutup: semua anggota + peran, pemeran, musik (judul & sumber lisensi), terima kasih lokasi. Menghargai kerja orang = budaya produksi yang baik.",
              "Ekspor master: H.264 1080p25 'Match Source High Bitrate', nama KELOMPOK_KELAS_PROYEKAKHIR.mp4 — lalu TONTON FILE HASIL EKSPORNYA sampai detik terakhir.",
              "Arsip: file project + footage + musik dalam satu folder rapi di drive kelas. Portofolio kalian (dan adik kelas yang belajar) akan berterima kasih.",
              "Bonus wajib-ringan: POSTER film dari satu frame terbaik + judul (30 menit ilmu Jalur A) — dipakai untuk publikasi screening P16."
            ]
          }
        ],
        alur: [
          { durasi: 10, segmen: "Pembuka", detail: "Papan target hari ini per jam: assembly selesai jam X, lock jam Y, master jam Z. Kelompok menulis targetnya sendiri di papan — akuntabilitas publik." },
          { durasi: 80, segmen: "Editing: assembly → fine cut", detail: "Kelompok bekerja; guru keliling dengan dua pertanyaan tetap: 'ceritanya utuh?' dan 'shot ini fungsinya apa?'. Paksa deklarasi LOCK maksimal di menit 80." },
          { durasi: 20, segmen: "Review tengah", detail: "Screening kilat rough/fine cut antar dua kelompok berpasangan: penonton segar menandai bagian bosan (uji lirik-HP dari P10)." },
          { durasi: 60, segmen: "Finishing", detail: "Rantai finishing berurutan: warna → audio → grafis → tonton penuh → ekspor master + mulai poster bila sempat." },
          { durasi: 10, segmen: "Penutup", detail: "Cek master masuk folder kelas + arsip. Brief P16: screening! Poster dikumpulkan H-1, undang guru lain kalau berani." }
        ],
        alat: [
          "Lab komputer full sesi + headphone; Premiere dites semua unit",
          "Footage & backup P14 sudah di komputer masing-masing SEBELUM kelas",
          "Folder musik & SFX bebas lisensi (dari P11)",
          "Template lower third & title kelompok (dari P12)",
          "Papan target waktu + spidol"
        ],
        tugas: {
          judul: "Video 60 detik final + poster",
          deskripsi: "Master final .mp4 dikumpulkan hari ini juga (bukan PR — melatih disiplin deadline industri). Poster film (A4/1080×1350) menyusul maksimal H-1 sebelum screening. Keduanya karya inti portofolio jalur B.",
          portofolio: true
        },
        catatan: "Deadline 'master hari ini' harus dipegang — perpanjangan hanya untuk kendala teknis nyata (komputer mati), bukan 'masih kurang sreg' (itu justru pelajarannya: selesai mengalahkan sempurna). Kelompok yang footage-nya bermasalah parah sudah ketahuan dari log P14 — dampingi mereka sejak menit pertama, bukan saat menit ke-100."
      },

      {
        p: 16, judul: "Screening & Review Pra-UAS", pekan: 16, uts: false, lengkap: true,
        ringkas: "Pemutaran karya kelas, feedback, kisi-kisi UAS.",
        tujuan: [
          "Siswa dapat mengapresiasi dan mengevaluasi karya secara terstruktur dalam forum screening.",
          "Siswa dapat merefleksikan perkembangan kemampuannya sepanjang satu semester.",
          "Siswa dapat memetakan materi jalur B sebagai persiapan UAS."
        ],
        materi: [
          "Screening: menonton sebagai forum apresiasi.",
          "Umpan balik 3-2-1 versi film.",
          "Kisi-kisi UAS dan peta materi semester."
        ],
        modul: [
          {
            judul: "Format screening",
            isi: [
              "Hari ini kelas menjadi bioskop — dan itu harus TERASA: lampu dimati, poster karya terpampang, HP disimpan, tidak ada komentar sampai film selesai. Karya yang ditonton dengan hormat mengajarkan siswa menghormati karya — miliknya dan milik orang lain.",
              "Urutan main: putar poster 5 detik → film diputar UTUH → tepuk tangan (wajib, budaya apresiasi) → kelompok maju 2 menit cerita produksi → umpan balik."
            ],
            poin: [
              "Urutan pemutaran diundi H-1 supaya tidak ada drama 'kenapa kami terakhir'.",
              "Tiap kelompok bicara 2 menit setelah filmnya: satu keputusan yang paling dibanggakan + satu hal yang akan dilakukan berbeda. (Format konteks-keputusan-hasil, sama dengan presentasi Jalur A.)",
              "Kalau memungkinkan: undang kepala jurusan/guru lain/kelas lain — penonton eksternal menaikkan level acara dari tugas menjadi peristiwa.",
              "Dokumentasikan: foto acara + arsip semua film = amunisi pameran sekolah & bahan ajar angkatan berikutnya."
            ]
          },
          {
            judul: "Umpan balik 3-2-1 versi film",
            isi: [
              "Setelah tiap film + cerita kelompok, satu kelompok penanggap yang ditunjuk (bergilir) memberi umpan balik format 3-2-1 — sama seperti Jalur A, dengan kacamata film."
            ],
            poin: [
              "3 hal yang BERHASIL — wajib spesifik & pakai kosakata semester ini: 'J-cut di detik 20 bikin transisi kantin mulus', bukan 'bagus deh'.",
              "2 SARAN konkret — hal yang bisa diperbaiki di karya BERIKUTNYA (bukan menghakimi yang sudah lewat).",
              "1 PERTANYAAN produksi — 'kenapa memilih low angle di adegan itu?' Jawaban kelompok sering jadi pelajaran terbaik forum.",
              "Guru menutup tiap film dengan satu catatan teknis + satu apresiasi proses (dari pengamatan P14 yang dicatat diam-diam)."
            ]
          },
          {
            judul: "Kisi-kisi UAS & peta semester",
            isi: [
              "Tutup dengan menarik garis dari P1 ke P16: enam belas minggu lalu kalian penonton biasa; hari ini kalian menonton film buatan sendiri dengan mata pembuat film. Peta materi ini sekaligus kisi-kisi UAS."
            ],
            poin: [
              "Peta materi B: 3 tahap produksi & profesi (P1) → shot size & angle (P2) → gerakan & 180° & continuity (P3) → 3 babak & premis (P4) → storyboard & shot list (P5) → frame rate, shutter 1/50, WB (P6) → mic & room tone & lighting wawancara (P7) → alur edit & ekspor (P8) → J/L-cut, pacing, transisi (P10) → correction vs grading & level audio (P11) → keyframe, easing, lower third (P12) → alur proyek pra-produksi-pasca (P13–15).",
              "Bentuk UAS (sesuaikan sekolah): teori dari peta di atas + analisis klip pendek (diputar saat ujian, siswa membedah shot/editing-nya — seperti P1, kini dengan kosakata lengkap).",
              "Semua materi bisa dibuka di website ini dari HP — tunjukkan sekali lagi caranya.",
              "Nilai jalur B: proyek akhir terbesar, lalu UTS, tugas mingguan, dan UAS sebagai konfirmasi."
            ]
          }
        ],
        alur: [
          { durasi: 10, segmen: "Pembuka", detail: "Set suasana bioskop: poster terpasang, urutan undian diumumkan, aturan apresiasi dibacakan." },
          { durasi: 120, segmen: "Screening + umpan balik", detail: "Per kelompok ±20 menit: film utuh → tepuk tangan → 2 menit cerita produksi → 3-2-1 dari kelompok penanggap → catatan guru. (5–6 kelompok pas; lebih dari itu persingkat sesi cerita.)" },
          { durasi: 30, segmen: "Refleksi & kisi-kisi", detail: "Peta materi semester di layar; refleksi lisan cepat keliling: satu kata untuk semester ini + satu skill yang paling terasa berkembang. Kisi-kisi & bentuk UAS diumumkan." },
          { durasi: 20, segmen: "Penutup semester", detail: "Apresiasi penghargaan ringan (best editing, best sound, best poster — voting kelas), foto bersama karya, info jadwal UAS." }
        ],
        alat: [
          "Proyektor + speaker TERBAIK yang bisa dipinjam sekolah (hari ini bukan hari mengalah soal audio)",
          "Semua film final + poster dalam satu folder urut undian (siapkan H-1, jangan menunggu kelompok kirim file pagi itu)",
          "Ruang yang bisa digelapkan; kursi ditata menghadap layar",
          "Kertas voting penghargaan + kisi-kisi UAS tercetak",
          "Kamera untuk dokumentasi acara"
        ],
        tugas: {
          judul: "Refleksi akhir semester jalur B",
          deskripsi: "Tulisan setengah halaman: peran yang paling kamu nikmati di produksi (dan kenapa), satu keputusan di proyek akhir yang kamu banggakan, dan satu kemampuan video yang ingin kamu dalami semester depan. Dikumpulkan sebelum UAS.",
          portofolio: false
        },
        catatan: "Kualitas speaker menentukan kualitas acara — film dengan mixing yang mereka kerjakan susah payah di P11 layak didengar semestinya. Penghargaan voting ringan itu murah tapi diingat bertahun-tahun; kategorinya sengaja teknis (editing, sound, poster) supaya yang menang bukan cuma film terlucu. Arsipkan semua film + poster: angkatan pertama Anda adalah patokan angkatan berikutnya."
      }
    ]
  },

  /* ------------------------------------------------------------
     RUBRIK — tiap aspek punya 4 deskriptor, urut:
     Belum Berkembang / Mulai Berkembang /
     Berkembang Sesuai Harapan / Sangat Berkembang
     ------------------------------------------------------------ */
  rubrik: [
    {
      judul: "UTS Jalur A — Foto Produk + Desain Promosi",
      ketentuan: [
        "Guru menyediakan 4–5 jenis produk seragam (botol, kemasan kotak, sachet, benda kecil reflektif); produk DIUNDI, tidak dibawa siswa — supaya tingkat kesulitan setara dan penilaian adil.",
        "Alur: foto produk di studio mini → pilih & edit → desain poster promosi. Durasi 180 menit, individu.",
        "Dinilai dua kolom TERPISAH (50 + 50) — siswa yang fotonya kuat tapi desainnya lemah harus terbaca jelas letak masalahnya."
      ],
      kolom: [
        {
          nama: "Kolom 1 — Teknis Fotografi", total: 50,
          aspek: [
            {
              nama: "Eksposur tepat (tidak clipping)", bobot: 15,
              tingkat: [
                "Foto jelas over/under; clipping luas di area penting; detail produk hilang.",
                "Eksposur kurang tepat; masih ada clipping di bagian produk, namun subjek masih terbaca.",
                "Eksposur tepat; tidak ada clipping berarti pada produk; histogram terkendali.",
                "Eksposur presisi dan disengaja; detail penuh di highlight dan shadow; terlihat kontrol sadar atas segitiga eksposur."
              ]
            },
            {
              nama: "Pencahayaan (arah, kualitas, kontrol refleksi)", bobot: 15,
              tingkat: [
                "Cahaya datar atau salah arah; bayangan/refleksi liar mengganggu dan tidak disadari.",
                "Arah cahaya mulai terarah, namun kualitasnya belum mendukung produk; refleksi belum terkontrol.",
                "Arah dan kualitas cahaya mendukung bentuk produk; refleksi terkontrol rapi.",
                "Pencahayaan membentuk dimensi dan karakter produk secara sadar (key–fill terbaca); refleksi justru dimanfaatkan sebagai elemen desain."
              ]
            },
            {
              nama: "Komposisi & angle", bobot: 10,
              tingkat: [
                "Produk asal diletakkan; latar mengganggu; angle tidak dipertimbangkan.",
                "Komposisi dasar ada (produk di tengah frame yang bersih) namun angle belum memperkuat karakter produk.",
                "Komposisi rapi dan seimbang; angle dipilih sesuai karakter produk.",
                "Komposisi dan angle menonjolkan produk dengan sudut pandang yang tidak generik namun tetap fungsional."
              ]
            },
            {
              nama: "Ketajaman & fokus pada titik yang tepat", bobot: 10,
              tingkat: [
                "Foto blur (goyang/salah fokus); bagian penting produk tidak tajam.",
                "Fokus mengenai produk namun kurang tajam (shake halus atau DOF terlalu tipis tanpa alasan).",
                "Fokus tepat pada bagian terpenting produk (label/muka produk) dan tajam.",
                "Ketajaman presisi dengan DOF yang dipilih sadar untuk mengarahkan mata; kualitas teknis siap pakai komersial."
              ]
            }
          ]
        },
        {
          nama: "Kolom 2 — Desain Promosi", total: 50,
          aspek: [
            {
              nama: "Hierarki visual & keterbacaan", bobot: 15,
              tingkat: [
                "Semua elemen bersaing; tidak jelas harus membaca dari mana; teks kunci tak terbaca dari jarak.",
                "Ada upaya hierarki (judul lebih besar) namun urutan baca masih membingungkan di beberapa bagian.",
                "Urutan baca jelas (judul → info kunci → detail); poster lolos uji baca 3 detik.",
                "Hierarki menuntun mata dengan mulus dan disengaja; poster efektif sekaligus enak dilihat lama."
              ]
            },
            {
              nama: "Tipografi (pemilihan & penerapan)", bobot: 15,
              tingkat: [
                "Lebih dari 2 typeface atau pilihan huruf yang merusak keterbacaan; spasi acak.",
                "Pemilihan huruf cukup namun penerapannya belum rapi (ukuran, jarak baris, atau lebar baris bermasalah).",
                "Maksimal 2 typeface dengan peran jelas (judul vs isi); penerapan rapi dan terbaca.",
                "Pairing memperkuat karakter produk; detail mikro (spasi, alignment teks) digarap teliti."
              ]
            },
            {
              nama: "Warna & keselarasan dengan produk", bobot: 10,
              tingkat: [
                "Warna poster bertabrakan dengan foto produk; tidak ada skema yang bisa dikenali.",
                "Palet dasar ada namun belum selaras dengan warna produk atau mengurangi keterbacaan.",
                "Palet selaras dengan produk (skema harmoni terbaca) dan mendukung keterbacaan.",
                "Warna memperkuat identitas dan mood produk dengan skema yang jelas dan berani namun terkontrol."
              ]
            },
            {
              nama: "Kesesuaian pesan dengan target audiens", bobot: 10,
              tingkat: [
                "Pesan tidak jelas; tidak terbaca untuk siapa poster ini dibuat.",
                "Pesan ada namun generik ('diskon', 'beli sekarang') tanpa kaitan dengan audiens tertentu.",
                "Satu pesan utama yang jelas dan sesuai dengan audiens yang dituju.",
                "Pesan tajam dengan pendekatan kreatif yang relevan; pilihan visual dan bahasa jelas ditujukan pada audiens spesifik."
              ]
            }
          ]
        }
      ]
    },

    {
      judul: "UTS Jalur B — Video Pendek 30 Detik",
      ketentuan: [
        "Berkelompok (kelompok tetap); nilai individu dibedakan lewat lembar peran anggota.",
        "Tiket masuk: paket pra-produksi P5 (storyboard, shot list, jadwal). Durasi video 30 detik (toleransi 25–40).",
        "Alur: persiapan → syuting di area sekolah → editing → ekspor, total 180 menit.",
        "Dinilai dua kolom TERPISAH (50 + 50): kelompok yang teknisnya kuat tapi ceritanya lemah harus terbaca jelas, begitu pula sebaliknya."
      ],
      kolom: [
        {
          nama: "Kolom 1 — Teknis Produksi", total: 50,
          aspek: [
            {
              nama: "Kamera: eksposur, fokus, white balance", bobot: 15,
              tingkat: [
                "Banyak shot over/under, blur, atau warna berubah-ubah (WB auto); setting tidak sesuai resep kelas.",
                "Sebagian besar shot layak namun ada beberapa yang eksposur/fokus/WB-nya meleset dan mengganggu.",
                "Seluruh shot terekspos dan terfokus baik; WB konsisten; resep setting kelas (1080p25, 1/50) dipatuhi.",
                "Kualitas gambar konsisten dan disengaja; eksposur & DOF dipakai sebagai keputusan kreatif, bukan kebetulan."
              ]
            },
            {
              nama: "Variasi shot & komposisi", bobot: 15,
              tingkat: [
                "Hampir semua shot dari satu ukuran/angle yang sama; komposisi asal arah kamera.",
                "Ada variasi ukuran shot namun belum fungsional (variasi demi variasi); komposisi dasar saja.",
                "Variasi ukuran & angle melayani cerita (wide untuk konteks, close untuk emosi); komposisi rapi.",
                "Bahasa kamera matang: ukuran, angle, dan komposisi tiap shot terasa dipilih sadar untuk efek tertentu."
              ]
            },
            {
              nama: "Audio", bobot: 10,
              tingkat: [
                "Audio kemresek/hilang/jauh; dialog sulit dipahami; noise dominan.",
                "Dialog terdengar namun kualitas tidak rata antar shot; noise masih mengganggu di beberapa bagian.",
                "Dialog/suara utama jernih (mic dekat sumber); level cukup rata; tanpa noise yang mengganggu.",
                "Audio digarap sadar: level rapi, room tone/atmosfer dipakai, suara mendukung suasana cerita."
              ]
            },
            {
              nama: "Stabilitas & continuity", bobot: 10,
              tingkat: [
                "Kamera goyang tak disengaja hampir di semua shot; arah pandang/posisi properti melompat-lompat antar shot.",
                "Sebagian shot stabil; ada 1–2 pelanggaran continuity atau garis 180° yang terasa.",
                "Shot stabil (atau handheld yang disengaja); continuity terjaga; aturan 180° dipatuhi.",
                "Gerakan kamera termotivasi dan halus; continuity rapi termasuk match on action yang mulus."
              ]
            }
          ]
        },
        {
          nama: "Kolom 2 — Cerita & Penyuntingan", total: 50,
          aspek: [
            {
              nama: "Struktur cerita & pesan", bobot: 15,
              tingkat: [
                "Rangkaian gambar tanpa alur yang bisa diikuti; pesan tidak tertangkap penonton.",
                "Ada ide cerita namun babak tidak seimbang (pembukaan bertele-tele/akhir mendadak); pesan samar.",
                "Tiga babak terasa: setup, konflik, resolusi; pesan tunggal tertangkap penonton dalam sekali tonton.",
                "Cerita utuh dan efisien; premis kuat dieksekusi konsisten; pesan membekas tanpa perlu dijelaskan."
              ]
            },
            {
              nama: "Editing: cutting & pacing", bobot: 15,
              tingkat: [
                "Potongan kasar (jump cut tak disengaja, klip kepanjangan); urutan membingungkan.",
                "Potongan berfungsi namun ritmenya datar/seragam; beberapa sambungan masih terasa 'kasar'.",
                "Potongan bersih dan mengalir; pacing bervariasi mengikuti cerita; sambungan tidak menarik perhatian.",
                "Editing menjadi kekuatan: ritme dimainkan sadar (cepat-lambat-jeda), cut on action/J-L cut dipakai efektif."
              ]
            },
            {
              nama: "Durasi & kelengkapan teknis", bobot: 10,
              tingkat: [
                "Durasi jauh dari ketentuan; ekspor salah format/rusak; file tidak sesuai penamaan.",
                "Durasi dalam toleransi namun ada kekurangan teknis (audio-video tidak sinkron di bagian tertentu, ekspor kurang tepat).",
                "Durasi 25–40 detik; ekspor H.264 benar; file lengkap dan penamaan sesuai; paket pra-produksi terlampir.",
                "Semua ketentuan terpenuhi presisi; deliverable rapi seperti serahan profesional (termasuk kelengkapan dokumen)."
              ]
            },
            {
              nama: "Kreativitas & kesatuan gagasan", bobot: 10,
              tingkat: [
                "Meniru referensi mentah-mentah atau gagasan tidak terbaca sama sekali.",
                "Ada percikan ide menarik namun belum menyatu dengan keseluruhan video.",
                "Gagasan segar yang dieksekusi konsisten dari awal sampai akhir.",
                "Ide yang tak terduga namun tepat sasaran; batasan (waktu, lokasi, alat) justru dipakai jadi kekuatan."
              ]
            }
          ]
        }
      ]
    },

    {
      judul: "Portofolio Akhir — Dua Jalur",
      ketentuan: [
        "Individu: 6–8 karya terbaik satu semester (boleh lintas Jalur A dan B), minimal 2 disajikan sebagai case study (brief–proses–hasil).",
        "Bentuk: PDF final (maksimal 10MB) + presentasi 5 menit di pertemuan 16 Jalur A.",
        "Dinilai dua kolom TERPISAH (50 + 50): kualitas karya dan kualitas kurasi-presentasinya."
      ],
      kolom: [
        {
          nama: "Kolom 1 — Kualitas Karya", total: 50,
          aspek: [
            {
              nama: "Kualitas teknis karya", bobot: 15,
              tingkat: [
                "Sebagian besar karya memuat masalah teknis dasar (blur, pecah, eksposur salah, ekspor salah).",
                "Karya kunci sudah bersih secara teknis namun masih ada karya lemah yang ikut dimasukkan.",
                "Seluruh karya bersih secara teknis — tidak ada karya yang menurunkan standar keseluruhan.",
                "Standar teknis tinggi dan merata; beberapa karya menunjukkan penguasaan teknis di atas tuntutan kelas."
              ]
            },
            {
              nama: "Penerapan prinsip desain & bahasa visual", bobot: 15,
              tingkat: [
                "Prinsip yang dipelajari (hierarki, warna, tipografi, komposisi, bahasa kamera) belum terlihat diterapkan.",
                "Prinsip diterapkan di sebagian karya namun belum konsisten.",
                "Prinsip diterapkan secara konsisten dan bisa dijelaskan siswa saat ditanya.",
                "Prinsip dipakai sebagai alat berekspresi — karya menunjukkan keputusan visual yang matang dan khas."
              ]
            },
            {
              nama: "Rentang & konsistensi antar karya", bobot: 10,
              tingkat: [
                "Karya satu jenis semua atau kualitasnya naik-turun tajam.",
                "Ada upaya variasi media namun kesenjangan kualitas antar karya masih terasa.",
                "Rentang media terlihat (desain, foto, dan/atau video) dengan kualitas yang merata.",
                "Rentang luas dengan benang merah gaya personal yang mulai terbentuk."
              ]
            },
            {
              nama: "Kelengkapan output semester", bobot: 10,
              tingkat: [
                "Banyak tugas mingguan tidak terkumpul; portofolio ditambal karya dadakan.",
                "Sebagian besar output mingguan ada namun beberapa dikerjakan seadanya.",
                "Output mingguan lengkap dan menjadi bahan seleksi portofolio yang sehat.",
                "Output lengkap dan beberapa di antaranya dikembangkan melampaui tuntutan tugas."
              ]
            }
          ]
        },
        {
          nama: "Kolom 2 — Kurasi & Presentasi", total: 50,
          aspek: [
            {
              nama: "Seleksi & urutan karya", bobot: 15,
              tingkat: [
                "Semua karya dimasukkan tanpa seleksi; urutan acak.",
                "Ada seleksi namun masih menyertakan karya lemah; urutan belum bercerita.",
                "6–8 karya terseleksi ketat; pembuka kuat, penutup membekas, ritme variatif.",
                "Kurasi setara portofolio profesional muda: setiap karya punya alasan ada, urutannya terasa dirancang."
              ]
            },
            {
              nama: "Deskripsi proyek & case study", bobot: 15,
              tingkat: [
                "Tanpa deskripsi, atau hanya judul karya; case study tidak ada.",
                "Deskripsi ada namun generik ('poster yang saya buat…'); case study belum menceritakan proses.",
                "Deskripsi memakai formula brief–keputusan–hasil; 2 case study menceritakan proses dengan jelas.",
                "Tulisan hidup dan spesifik; case study memperlihatkan cara berpikir desain, lengkap dengan proses (sketsa/alternatif)."
              ]
            },
            {
              nama: "Layout & identitas portofolio", bobot: 10,
              tingkat: [
                "Layout tidak konsisten antar halaman; portofolio sendiri melanggar prinsip yang dipelajari.",
                "Layout cukup rapi namun sistemnya belum konsisten (margin/tipografi berubah-ubah).",
                "Satu sistem grid & tipografi konsisten; karya jadi bintang; file sesuai ketentuan (<10MB).",
                "Portofolio itu sendiri menjadi bukti kemampuan layout — bersih, konsisten, dengan sentuhan personal yang terkendali."
              ]
            },
            {
              nama: "Presentasi lisan", bobot: 10,
              tingkat: [
                "Tidak siap; hanya membaca layar; tidak bisa menjelaskan keputusan karyanya.",
                "Presentasi berjalan namun banyak 'menurut saya bagus' tanpa alasan; melebihi waktu.",
                "Struktur 5 menit dipatuhi; keputusan 2 karya utama dijelaskan dengan alasan yang jelas.",
                "Presentasi meyakinkan dan reflektif: mampu menjawab pertanyaan, mengakui kelemahan, dan menjelaskan arah perkembangannya."
              ]
            }
          ]
        }
      ]
    }
  ]
};
