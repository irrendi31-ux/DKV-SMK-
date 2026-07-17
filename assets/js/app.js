/* ============================================================
   AJAR DKV 2026 — app.js (v2, gaya dashboard)
   Router hash. Semua render dari objek KURIKULUM.
   Rute:
     #/            → beranda (sapaan, pekan ini, peta semester)
     #/jalur-a     → daftar pertemuan Jalur A (#/jalur-b idem)
     #/jalur-a/p3  → detail pertemuan (materi ajar, alur, tugas)
     #/rubrik      → rubrik penilaian
     #/profil      → profil & showcase karya
   ============================================================ */

(function () {
  "use strict";

  var app = document.getElementById("app");
  var K = KURIKULUM;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function getPertemuan(jalurId, p) {
    var list = K.pertemuan[jalurId] || [];
    for (var i = 0; i < list.length; i++) if (list[i].p === p) return list[i];
    return null;
  }
  function chipJalur(jalurId) {
    var j = K.jalur[jalurId];
    return '<span class="chip ' + jalurId + '">' + esc(j.kode + " · " + j.nama) + "</span>";
  }

  /* ---------- centang "sudah diajarkan" (tersimpan di browser) ---------- */
  function getTaught() {
    try { return JSON.parse(localStorage.getItem("dkvTaught") || "[]"); }
    catch (e) { return []; }
  }
  function isTaught(jalurId, p) { return getTaught().indexOf(jalurId + "-" + p) !== -1; }
  window.DKV = {
    toggleTaught: function (jalurId, p) {
      var key = jalurId + "-" + p;
      var list = getTaught();
      var i = list.indexOf(key);
      if (i === -1) list.push(key); else list.splice(i, 1);
      try { localStorage.setItem("dkvTaught", JSON.stringify(list)); } catch (e) {}
      route();
    }
  };

  /* ---------- kartu user di sidebar ---------- */
  (function () {
    var el = document.getElementById("sideUser");
    if (el) el.innerHTML =
      '<img src="' + esc(K.profil.foto) + '" alt="Foto profil ' + esc(K.profil.nama) + '">' +
      "<span><strong>" + esc(K.profil.nama) + "</strong><span>Pengajar DKV</span></span>";
  })();

  /* ---------- beranda ---------- */
  function renderBeranda() {
    var now = K.config.pekanBerjalan;

    function weekCard(jalurId) {
      var pt = null;
      K.pertemuan[jalurId].forEach(function (x) { if (x.pekan === now) pt = x; });
      if (!pt) return "";
      return '<a class="week-card" href="#/jalur-' + jalurId + "/p" + pt.p + '">' +
        '<div class="kicker" style="display:flex;gap:8px;align-items:center">' + chipJalur(jalurId) +
        (pt.uts ? '<span class="chip uts">UTS</span>' : "") + "</div>" +
        '<h3><span class="mono muted">Pertemuan ' + pt.p + "</span> — " + esc(pt.judul) + "</h3>" +
        "<p>" + esc(pt.ringkas) + "</p></a>";
    }

    function mapRow(jalurId) {
      var pips = K.pertemuan[jalurId].map(function (pt) {
        var cls = "pip";
        if (pt.uts) cls += " uts";
        else if (pt.lengkap) cls += " done-" + jalurId;
        if (pt.pekan === now) cls += " now";
        if (isTaught(jalurId, pt.p)) cls += " taught";
        return '<a class="' + cls + '" href="#/jalur-' + jalurId + "/p" + pt.p + '" title="Pertemuan ' + pt.p + " — " + esc(pt.judul) + '">' + pt.p + "</a>";
      }).join("");
      return '<div class="map-row ' + jalurId + '"><span class="row-label">' +
        esc(K.jalur[jalurId].kode + " · " + K.jalur[jalurId].nama) + "</span>" + pips + "</div>";
    }

    app.innerHTML =
      '<div class="view-enter">' +
      '<header class="page-head">' +
      '<h1 class="page">Selamat datang, <em>Rendi Irawan</em></h1>' +
      '<p class="page-sub">' + esc(K.config.tahunAjaran) + " · 8 JP per minggu dalam dua jalur paralel</p>" +
      '<div class="stats">' +
      '<div class="stat"><div class="n">' + now + "<span class=\"muted\" style=\"font-size:1rem\">/" + K.config.totalPekan + '</span></div><div class="l">Pekan berjalan</div></div>' +
      '<div class="stat"><div class="n">' + K.config.pekanUTS + '</div><div class="l">Pekan UTS</div></div>' +
      '<div class="stat"><div class="n">' + getTaught().length + "<span class=\"muted\" style=\"font-size:1rem\">/" + (K.pertemuan.a.length + K.pertemuan.b.length) + '</span></div><div class="l">Sudah diajarkan</div></div>' +
      "</div></header>" +

      '<section class="week-grid">' + weekCard("a") + weekCard("b") + "</section>" +

      '<section class="card" style="margin-top:18px">' +
      "<h2>Peta semester</h2>" +
      '<div class="h-sub">Klik nomor untuk membuka pertemuan · 16 pekan · dua jalur berjalan paralel</div>' +
      mapRow("a") + mapRow("b") +
      '<div class="map-legend">' +
      '<span class="la"><i></i>Jalur A siap diajarkan</span>' +
      '<span class="lb"><i></i>Jalur B siap diajarkan</span>' +
      '<span class="lu"><i></i>UTS</span>' +
      '<span class="ln"><i></i>Pekan ini</span>' +
      "</div></section></div>";

    document.title = "DKV SMK — Beranda";
  }

  /* ---------- daftar pertemuan per jalur ---------- */
  function renderJalur(jalurId) {
    var j = K.jalur[jalurId];
    var rows = K.pertemuan[jalurId].map(function (pt) {
      return '<a class="list-row' + (pt.uts ? " uts" : "") + '" href="#/jalur-' + jalurId + "/p" + pt.p + '">' +
        '<span class="no">' + pt.p + "</span>" +
        '<span class="t"><strong>' + esc(pt.judul) + "</strong><span>" + esc(pt.ringkas) + "</span></span>" +
        '<span class="meta">' +
        (isTaught(jalurId, pt.p) ? '<span class="chip done">✓ Sudah diajarkan</span>' : "") +
        (pt.uts ? '<span class="chip uts">UTS</span>' : "") +
        (pt.lengkap ? '<span class="chip ' + jalurId + '">Siap</span>' : '<span class="chip plain">Kerangka</span>') +
        '<span class="chip plain mono">Pekan ' + pt.pekan + "</span>" +
        "</span></a>";
    }).join("");

    app.innerHTML =
      '<div class="view-enter jalur-' + jalurId + '">' +
      '<header class="page-head">' +
      '<h1 class="page">' + esc(j.kode) + " · <em>" + esc(j.nama) + "</em></h1>" +
      '<p class="page-sub">' + esc(j.hari + " · " + j.jp) + " · 16 pertemuan</p></header>" +
      '<section class="card">' + rows + "</section></div>";

    document.title = "Jalur " + j.kode + " — DKV SMK";
    window.scrollTo(0, 0);
  }

  /* ---------- detail pertemuan ---------- */
  function renderDetail(jalurId, p) {
    var j = K.jalur[jalurId];
    var pt = getPertemuan(jalurId, p);
    if (!j || !pt) return renderNotFound();

    var crumb = '<div class="crumb"><a href="#/">Beranda</a> / <a href="#/jalur-' + jalurId + '">Jalur ' + esc(j.kode) + "</a> / Pertemuan " + pt.p + "</div>";

    var hero =
      '<section class="card"><div class="detail-hero"><div>' +
      '<div class="kicker">' + chipJalur(jalurId) +
      (pt.uts ? '<span class="chip uts">UTS</span>' : "") +
      '<span class="chip plain mono">Pekan ' + pt.pekan + "</span>" +
      '<span class="chip plain">' + esc(j.hari + " · " + j.jp) + "</span></div>" +
      '<h1 class="page"><span class="mono muted" style="font-size:0.55em;display:block;margin-bottom:2px">Pertemuan ' + pt.p + "</span> <em>" + esc(pt.judul) + "</em></h1>" +
      '<p class="page-sub">' + esc(pt.ringkas) + "</p>" +
      "</div>" +
      '<div class="hero-actions">' +
      '<button class="btn taught-btn' + (isTaught(jalurId, p) ? " on" : "") + '" onclick="DKV.toggleTaught(\'' + jalurId + "'," + p + ')">' +
      (isTaught(jalurId, p) ? "✓ Sudah diajarkan" : "Tandai sudah diajarkan") + "</button>" +
      '<button class="btn" onclick="window.print()">Cetak lembar pegangan</button>' +
      "</div>" +
      "</div></section>";

    var body = "";
    if (pt.lengkap) {
      var tujuan = pt.tujuan.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
      var alat = pt.alat.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");

      var modul = (pt.modul || []).map(function (m, i) {
        var isi = (m.isi || []).map(function (par) { return "<p>" + esc(par) + "</p>"; }).join("");
        var poin = m.poin ? "<ul>" + m.poin.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "";
        var img = m.img ? '<figure class="modul-img"><img src="' + esc(m.img.file) + '" alt="' + esc(m.img.alt) + '" loading="lazy">' +
          (m.img.caption ? "<figcaption>" + esc(m.img.caption) + "</figcaption>" : "") + "</figure>" : "";
        var no = i + 1 < 10 ? "0" + (i + 1) : "" + (i + 1);
        return '<section class="modul-sec">' +
          '<span class="modul-no">Materi ' + no + "</span>" +
          "<h3>" + esc(m.judul) + "</h3>" + isi + img + poin + "</section>";
      }).join("");

      var total = 0;
      var alur = pt.alur.map(function (s) {
        total += s.durasi;
        return '<li><div class="durasi">' + s.durasi + "&prime;<small>menit</small></div>" +
          '<div class="seg"><strong>' + esc(s.segmen) + "</strong><span>" + esc(s.detail) + "</span></div></li>";
      }).join("");

      body =
        '<section class="card"><h2>Tujuan pembelajaran</h2><div class="h-sub">Yang harus bisa dilakukan siswa setelah pertemuan ini</div><ul class="sec-list">' + tujuan + "</ul></section>" +
        '<section class="card"><h2>Materi ajar</h2><div class="h-sub">Bahan presentasi yang siap disampaikan di kelas</div>' + (modul || '<div class="stub-note">Materi ajar belum diisi.</div>') + "</section>" +
        '<section class="card"><h2>Alur 180 menit</h2><ol class="alur">' + alur + "</ol>" +
        '<div class="alur-total">Total ' + total + " menit / 4 JP</div></section>" +
        '<section class="card"><h2>Alat &amp; bahan</h2><ul class="sec-list">' + alat + "</ul></section>" +
        '<section class="card"><h2>Tugas / output portofolio</h2><div class="tugas-box">' +
        (pt.tugas.portofolio ? '<span class="chip ' + jalurId + '" style="margin-bottom:8px">Masuk portofolio</span><br>' : "") +
        "<strong>" + esc(pt.tugas.judul) + "</strong><p>" + esc(pt.tugas.deskripsi) + "</p></div></section>" +
        '<section class="card"><h2>Catatan saya</h2><p class="catatan">' + esc(pt.catatan) + "</p></section>";
    } else {
      body =
        '<section class="card"><h2>Detail belum diisi</h2>' +
        '<div class="stub-note">Pertemuan ini baru kerangka. Lengkapi objeknya di <code>data/kurikulum.js</code> ' +
        "mengikuti format Jalur A P1–P4 (lihat README) — halaman ini akan terisi otomatis.</div></section>";
    }

    var list = K.pertemuan[jalurId];
    var idx = list.indexOf(pt);
    var prev = idx > 0 ? list[idx - 1] : null;
    var next = idx < list.length - 1 ? list[idx + 1] : null;
    var nav = '<div class="detail-nav">' +
      (prev ? '<a href="#/jalur-' + jalurId + "/p" + prev.p + '">&larr; Pertemuan ' + prev.p + " · " + esc(prev.judul) + "</a>" : "<span></span>") +
      (next ? '<a href="#/jalur-' + jalurId + "/p" + next.p + '">Pertemuan ' + next.p + " · " + esc(next.judul) + " &rarr;</a>" : "<span></span>") +
      "</div>";

    app.innerHTML = '<div class="view-enter stack tone-' + jalurId + '">' + crumb + hero + body + nav + "</div>";
    document.title = "Pertemuan " + pt.p + " " + pt.judul + " — DKV SMK";
    window.scrollTo(0, 0);
  }

  /* ---------- rubrik ---------- */
  function renderRubrik() {
    var inner;
    if (!K.rubrik || K.rubrik.length === 0) {
      inner = '<section class="card"><h2>Rubrik penilaian</h2>' +
        '<div class="stub-note">Rubrik UTS Jalur A, UTS Jalur B, dan portofolio akhir akan diisi ' +
        "setelah arah P1–P4 disetujui. Strukturnya sudah disiapkan di <code>data/kurikulum.js</code>.</div></section>";
    } else {
      inner = K.rubrik.map(function (r) {
        var ketentuan = r.ketentuan ? '<section class="card"><h2>Ketentuan</h2><ul class="sec-list">' +
          r.ketentuan.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></section>" : "";
        var kolom = r.kolom.map(function (k) {
          var aspek = k.aspek.map(function (a) {
            var tingkat = a.tingkat.map(function (t, i) {
              var nama = ["Belum Berkembang", "Mulai Berkembang", "Berkembang Sesuai Harapan", "Sangat Berkembang"][i];
              return "<li><strong>" + esc(nama) + ":</strong> " + esc(t) + "</li>";
            }).join("");
            return '<details class="acc"><summary>' + esc(a.nama) +
              '<span class="chip plain mono" style="margin-left:10px">bobot ' + a.bobot + "</span></summary>" +
              '<div class="acc-body"><ul>' + tingkat + "</ul></div></details>";
          }).join("");
          return '<section class="card"><h2>' + esc(k.nama) + "</h2><div class=\"h-sub\">Total " + k.total + " poin</div>" + aspek + "</section>";
        }).join("");
        return '<header class="page-head" style="margin-top:8px"><h1 class="page"><em>' + esc(r.judul) + "</em></h1></header>" + ketentuan + kolom;
      }).join("");
    }
    app.innerHTML = '<div class="view-enter stack">' +
      '<header class="page-head"><h1 class="page">Rubrik <em>penilaian</em></h1>' +
      '<p class="page-sub">UTS Jalur A, UTS Jalur B, dan portofolio akhir</p></header>' + inner + "</div>";
    document.title = "Rubrik — DKV SMK";
    window.scrollTo(0, 0);
  }

  /* ---------- profil ---------- */
  function renderProfil() {
    var pr = K.profil;
    var tautan = pr.tautan.map(function (t, i) {
      return '<a class="btn' + (i > 0 ? " ghost" : "") + '" href="' + esc(t.url) + '" target="_blank" rel="noopener noreferrer">' + esc(t.label) + " ↗</a>";
    }).join("");
    var pengalaman = pr.pengalaman.map(function (x) {
      return "<li><strong>" + esc(x.klien) + "</strong> — <span>" + esc(x.kerja) + "</span></li>";
    }).join("");
    var featured = pr.showcase[pr.showcase.length - 1];
    var showcase = pr.showcase.map(function (s) {
      return '<figure><img src="' + esc(s.file) + '" alt="' + esc(s.alt) + '" loading="lazy">' +
        "<figcaption>" + esc(s.caption) + "</figcaption></figure>";
    }).join("");
    var contohFoto = (pr.contohFoto || []).map(function (s) {
      return '<figure><img src="' + esc(s.file) + '" alt="' + esc(s.alt) + '" loading="lazy">' +
        "<figcaption>" + esc(s.caption) + "</figcaption></figure>";
    }).join("");

    app.innerHTML =
      '<div class="view-enter stack">' +
      '<section class="card">' +
      '<div class="profil-hero"><div>' +
      '<img class="ava" src="' + esc(pr.foto) + '" alt="Foto profil ' + esc(pr.nama) + '">' +
      "<h1>" + esc(pr.nama) + "</h1>" +
      '<p class="peran">' + esc(pr.peran) + "</p>" +
      '<div class="profil-links">' + tautan + "</div>" +
      '<p class="profil-intro">' + esc(pr.intro) + "</p>" +
      ((pr.software && pr.software.length) ?
        '<div class="sw-chips">' + pr.software.map(function (s) {
          return '<span class="chip plain">' + esc(s) + "</span>";
        }).join("") + "</div>" : "") +
      "</div>" +
      '<div class="featured"><img src="' + esc(featured.file) + '" alt="' + esc(featured.alt) + '"></div>' +
      "</div>" +
      '<div class="profil-tabs"><span class="on">Karya</span><span class="loc">Kediri, Indonesia</span></div>' +
      '<div class="showcase-grid">' + showcase + "</div>" +
      "</section>" +

      '<section class="card"><h2>Contoh hasil pembelajaran fotografi</h2>' +
      '<div class="h-sub">Karya seperti inilah yang akan mampu dibuat siswa di paruh kedua semester</div>' +
      '<div class="showcase-grid foto-grid">' + contohFoto + "</div></section>" +

      '<section class="card"><h2>Pekerjaan klien</h2><div class="h-sub">Contoh nyata yang akan sering muncul di kelas</div>' +
      '<ul class="peng-list">' + pengalaman + "</ul></section></div>";

    document.title = "Profil — DKV SMK";
    window.scrollTo(0, 0);
  }

  function renderNotFound() {
    app.innerHTML = '<div class="view-enter"><header class="page-head">' +
      '<h1 class="page">Halaman <em>tidak ditemukan</em></h1>' +
      '<p class="page-sub"><a href="#/">Kembali ke beranda</a></p></header></div>';
  }

  /* ---------- router ---------- */
  function route() {
    var hash = location.hash.replace(/^#/, "") || "/";
    var mDetail = hash.match(/^\/jalur-([ab])\/p(\d+)$/);
    var mJalur = hash.match(/^\/jalur-([ab])$/);

    // sidebar aktif: detail pertemuan menyalakan menu jalurnya
    var activeRoute = mDetail ? "/jalur-" + mDetail[1] : hash;
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-route") === activeRoute);
    });

    if (hash === "/" || hash === "") return renderBeranda();
    if (mJalur) return renderJalur(mJalur[1]);
    if (mDetail) return renderDetail(mDetail[1], parseInt(mDetail[2], 10));
    if (hash === "/rubrik") return renderRubrik();
    if (hash === "/profil") return renderProfil();
    renderNotFound();
  }

  window.addEventListener("hashchange", route);
  route();
})();
