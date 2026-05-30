// ===============================
// PILIH JENJANG
// ===============================

function pilihJenjang(jenjang) {
  localStorage.setItem("jenjang", jenjang);

  window.location.href = "pages/detail.html";
}

// ===============================
// TAMPILKAN KELAS
// ===============================

function tampilJenjang() {
  const jenjang = localStorage.getItem("jenjang");

  const title = document.getElementById("title");

  const container = document.getElementById("container");

  if (!container || !title) return;

  container.innerHTML = "";

  let data = [];

  if (jenjang === "sd") {
    title.innerHTML = "Pilih Kelas SD";

    data = ["Kelas 1", "Kelas 2", "Kelas 3", "Kelas 4", "Kelas 5", "Kelas 6"];
  } else if (jenjang === "smp") {
    title.innerHTML = "Pilih Kelas SMP";

    data = ["Kelas 7", "Kelas 8", "Kelas 9"];
  } else if (jenjang === "sma") {
    title.innerHTML = "Pilih Kelas SMA";

    data = ["Kelas 10", "Kelas 11", "Kelas 12"];
  } else if (jenjang === "smk") {
    title.innerHTML = "Pilih Kelas SMK";

    data = ["Kelas 10", "Kelas 11", "Kelas 12"];
  }

  data.forEach((item) => {
    container.innerHTML += `

      <div class="card">

        <h2>${item}</h2>

        <button onclick="pilihKelas('${item}')">
          Pilih
        </button>

      </div>

    `;
  });
}

// ===============================
// PILIH KELAS
// ===============================

function pilihKelas(kelas) {
  localStorage.setItem("kelas", kelas);

  const jenjang = localStorage.getItem("jenjang");

  if (jenjang === "smk") {
    window.location.href = "jurusan.html";
  } else {
    window.location.href = "mapel.html";
  }
}

// ===============================
// TAMPILKAN JURUSAN
// ===============================

function tampilJurusan() {
  const container = document.getElementById("jurusanContainer");

  if (!container) return;

  container.innerHTML = "";

  const jurusan = [
    "RPL",
    "TKJ",
    "DKV",
    "Multimedia",
    "TBSM",
    "TKRO",
    "Akuntansi",
    "Perhotelan",
    "Tata Boga",
    "Teknik Mesin",
    "Teknik Listrik",
  ];

  jurusan.forEach((item) => {
    container.innerHTML += `

      <div class="card">

        <h2>${item}</h2>

        <button onclick="pilihJurusan('${item}')">
          Masuk
        </button>

      </div>

    `;
  });
}

// ===============================
// PILIH JURUSAN
// ===============================

function pilihJurusan(jurusan) {
  localStorage.setItem("jurusan", jurusan);

  window.location.href = "mapel.html";
}

// ===============================
// TAMPILKAN MAPEL
// ===============================

function tampilMapel() {
  const container = document.getElementById("mapelContainer");

  const title = document.getElementById("mapelTitle");

  if (!container || !title) return;

  container.innerHTML = "";

  const jenjang = localStorage.getItem("jenjang");

  const jurusan = localStorage.getItem("jurusan");

  let mapel = [];

  // ===========================
  // SD
  // ===========================

  if (jenjang === "sd") {
    title.innerHTML = "Mata Pelajaran SD";

    mapel = [
      "Matematika",
      "Bahasa Indonesia",
      "Bahasa Inggris",
      "IPA",
      "IPS",
      "PPKn",
      "Agama",
      "PJOK",
      "Seni Budaya",
      "Tematik",
      "Bahasa Sunda",
    ];
  }

  // ===========================
  // SMP
  // ===========================
  else if (jenjang === "smp") {
    title.innerHTML = "Mata Pelajaran SMP";

    mapel = [
      "Matematika",
      "Bahasa Indonesia",
      "Bahasa Inggris",
      "IPA",
      "IPS",
      "Informatika",
      "PPKn",
      "Agama",
      "PJOK",
      "Bahasa Sunda",
    ];
  }

  // ===========================
  // SMA
  // ===========================
  else if (jenjang === "sma") {
    title.innerHTML = "Mata Pelajaran SMA";

    mapel = [
      "Matematika",
      "Fisika",
      "Kimia",
      "Biologi",
      "Ekonomi",
      "Geografi",
      "Sosiologi",
      "Sejarah",
      "Bahasa Inggris",
    ];
  }

  // ===========================
  // SMK
  // ===========================
  else if (jenjang === "smk") {
    title.innerHTML = "Mapel " + jurusan;

    if (jurusan === "RPL") {
      mapel = [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Python",
        "Database",
        "Laravel",
        "React",
      ];
    } else if (jurusan === "TKJ") {
      mapel = ["MikroTik", "Linux", "Cisco", "Jaringan Dasar", "Server"];
    } else if (jurusan === "DKV") {
      mapel = ["Photoshop", "Illustrator", "CorelDraw", "Figma", "Branding"];
    } else if (jurusan === "TBSM") {
      mapel = ["Mesin Motor", "Tune Up", "Kelistrikan", "Injeksi"];
    } else if (jurusan === "TKRO") {
      mapel = ["Engine", "EFI", "Sistem Rem", "Kelistrikan Mobil"];
    }
  }

  mapel.forEach((item) => {
    container.innerHTML += `

      <div class="card">

        <h2>${item}</h2>

        <button onclick="mulaiBelajar('${item}')">
          Belajar
        </button>

      </div>

    `;
  });
}

// ===============================
// MULAI BELAJAR
// ===============================

function mulaiBelajar(mapel) {
  localStorage.setItem("mapel", mapel);
  localStorage.removeItem("quizAktif"); // TAMBAHKAN INI
  window.location.href = "materi.html";
}

// ===============================
// TAMPILKAN MATERI
// ===============================

// ===============================
// TAMPILKAN MATERI
// ===============================

function tampilMateri() {
  const mapel = localStorage.getItem("mapel");
  const judul = document.getElementById("judulMateri");
  const isi = document.getElementById("isiMateri");

  if (!judul || !isi) return;

  judul.innerHTML = mapel;

  let semuaSoal = JSON.parse(localStorage.getItem("soal")) || [];

  // Cari data materi
  const dataMateri = semuaSoal.find((item) => item.mapel === mapel);

  // Tampilkan Materi (Kalau kosong, kasih teks pemberitahuan)
  if (!dataMateri || !dataMateri.materi) {
    isi.innerHTML = `<p>Materi belum tersedia.</p>`;
  } else {
    isi.innerHTML = `<p>${dataMateri.materi}</p>`;
  }

  // TAMBAHKAN TOMBOL INI DI LUAR IF/ELSE
  // Biar tombol "Mulai Quiz" tetep muncul walau materi kosong
  isi.innerHTML += `
    <br>
    <button onclick="mulaiQuiz()">Mulai Quiz</button>
  `;
}

// ===============================
// MULAI QUIZ
// ===============================

function mulaiQuiz() {
  window.location.href = "quiz.html";
}

// ===============================
// TAMPILKAN QUIZ
// ===============================

function tampilQuiz() {
  const mapel = localStorage.getItem("mapel");

  const title = document.getElementById("quizTitle");

  const container = document.getElementById("quizContainer");

  if (!title || !container) return;

  title.innerHTML = "Quiz " + mapel;

  let semuaSoal = JSON.parse(localStorage.getItem("soal")) || [];

  const kelas = localStorage.getItem("kelas");

  semuaSoal = semuaSoal.filter((item) => {
    return item.mapel === mapel && item.kelas === kelas;
  });

  if (!localStorage.getItem("quizAktif")) {
    semuaSoal = semuaSoal.sort(() => {
      return 0.5 - Math.random();
    });

    const jumlah = parseInt(semuaSoal[0]?.jumlah) || 10;

    semuaSoal = semuaSoal.slice(0, jumlah);

    localStorage.setItem("quizAktif", JSON.stringify(semuaSoal));
  }

  semuaSoal = JSON.parse(localStorage.getItem("quizAktif")) || [];

  const jumlah = parseInt(semuaSoal[0]?.jumlah) || 10;

  semuaSoal = semuaSoal.slice(0, jumlah);

  localStorage.setItem("quizAktif", JSON.stringify(semuaSoal));

  if (semuaSoal.length === 0) {
    container.innerHTML = "<h2>Soal belum tersedia</h2>";
    return;
  }

  let html = "";

  semuaSoal.forEach((item, index) => {
    // ====================
    // PILIHAN GANDA
    // ====================

    if (item.tipe === "pg") {
      html += `

        <div class="quiz-box">

          <h2>
            ${index + 1}. ${item.pertanyaan}
          </h2>

          <label>
            <input type="radio" name="q${index}" value="${item.opsiA}">
            ${item.opsiA}
          </label>

          <label>
            <input type="radio" name="q${index}" value="${item.opsiB}">
            ${item.opsiB}
          </label>

          <label>
            <input type="radio" name="q${index}" value="${item.opsiC}">
            ${item.opsiC}
          </label>

          <label>
            <input type="radio" name="q${index}" value="${item.opsiD}">
            ${item.opsiD}
          </label>

        </div>

      `;
    }

    // ====================
    // ESSAY
    // ====================
    else {
      html += `

        <div class="quiz-box">

          <h2>
            ${index + 1}. ${item.pertanyaan}
          </h2>

          <input
            type="text"
            name="q${index}"
            placeholder="jawaban kamu"
          >

        </div>

      `;
    }
  });

  container.innerHTML = html;
}

// ===============================
// CEK JAWABAN
// ===============================

function cekJawaban() {
  const nama = document.getElementById("nama").value;

  if (nama.trim() === "") {
    alert("isi nama dulu");
    return;
  }

  let soal = JSON.parse(localStorage.getItem("quizAktif")) || [];

  let skor = 0;

  soal.forEach((item, index) => {
    let jawabanUser = "";

    // ====================
    // PG
    // ====================

    if (item.tipe === "pg") {
      const selected = document.querySelector(
        `input[name="q${index}"]:checked`,
      );

      if (selected) {
        jawabanUser = selected.value.toLowerCase().trim();
      }
    }

    // ====================
    // ESSAY
    // ====================
    else {
      const input = document.querySelector(`input[name="q${index}"]`);

      if (input) {
        jawabanUser = input.value.toLowerCase().trim();
      }
    }

    const jawabanBenar = item.jawaban.toLowerCase().trim();

    if (jawabanUser === jawabanBenar) {
      skor += 100 / soal.length;
    }
  });

  skor = Math.round(skor);

  const sekarang = new Date();
  const waktuStr = sekarang.toLocaleString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const hasil = {
    nama: nama,
    mapel: localStorage.getItem("mapel"),
    nilai: skor,
    waktu: waktuStr,
  };

  let semuaHasil = JSON.parse(localStorage.getItem("hasilQuiz")) || [];

  semuaHasil.push(hasil);

  localStorage.setItem("hasilQuiz", JSON.stringify(semuaHasil));

  localStorage.removeItem("quizAktif");

  alert(`
Nama: ${nama}
Nilai: ${skor}
  `);
}

// ===============================
// DARK MODE
// ===============================

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// ===============================
// LOGOUT
// ===============================

function logout() {
  localStorage.clear();

  window.location.href = "../index.html";
}

// ===============================
// SAPA USER
// ===============================

function tampilNama() {
  const nama = localStorage.getItem("nama");

  const user = document.getElementById("username");

  if (user && nama) {
    user.innerHTML = "Halo, " + nama + " 👋";
  }
}

// ===============================
// LOGIN ADMIN
// ===============================

const ADMIN_EMAIL = "roflin2008@gmail.com";

const ADMIN_PASSWORD = "admin123";

function loginAdmin() {
  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    document.getElementById("loginBox").style.display = "none";

    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("akses ditolak");
  }
}

// ===============================
// DATA MAPEL ADMIN
// ===============================

const dataMapel = {
  sd: [
    "Matematika",
    "Bahasa Indonesia",
    "Bahasa Inggris",
    "IPA",
    "IPS",
    "PPKn",
    "Agama",
    "PJOK",
    "Seni Budaya",
    "Tematik",
  ],

  smp: [
    "Matematika",
    "Bahasa Indonesia",
    "Bahasa Inggris",
    "IPA",
    "IPS",
    "Informatika",
    "PPKn",
    "Agama",
    "PJOK",
  ],

  sma: [
    "Matematika",
    "Fisika",
    "Kimia",
    "Biologi",
    "Ekonomi",
    "Geografi",
    "Sosiologi",
    "Sejarah",
    "Bahasa Inggris",
  ],

  smk: {
    RPL: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Python",
      "Database",
      "Laravel",
      "React",
    ],

    TKJ: ["MikroTik", "Linux", "Cisco", "Jaringan Dasar", "Server"],

    DKV: ["Photoshop", "Illustrator", "CorelDraw", "Figma", "Branding"],

    TBSM: ["Mesin Motor", "Tune Up", "Kelistrikan", "Injeksi"],

    TKRO: ["Engine", "EFI", "Sistem Rem", "Kelistrikan Mobil"],
  },
};

// ===============================
// ELEMENT ADMIN
// ===============================

const jenjang = document.getElementById("jenjang");

const kelas = document.getElementById("kelas");

const jurusan = document.getElementById("jurusan");

const mapelSelect = document.getElementById("mapel");

const jurusanBox = document.getElementById("jurusanBox");

// ===============================
// EVENT JENJANG
// ===============================

if (jenjang) {
  jenjang.addEventListener("change", function () {
    mapelSelect.innerHTML = "";

    if (this.value === "sd") {
      kelas.innerHTML = `
        <option value="">Pilih Kelas</option>
        <option>Kelas 1</option>
        <option>Kelas 2</option>
        <option>Kelas 3</option>
        <option>Kelas 4</option>
        <option>Kelas 5</option>
        <option>Kelas 6</option>
      `;
    } else if (this.value === "smp") {
      kelas.innerHTML = `
        <option value="">Pilih Kelas</option>
        <option>Kelas 7</option>
        <option>Kelas 8</option>
        <option>Kelas 9</option>
      `;
    } else {
      kelas.innerHTML = `
        <option value="">Pilih Kelas</option>
        <option>Kelas 10</option>
        <option>Kelas 11</option>
        <option>Kelas 12</option>
      `;
    }

    if (this.value === "smk") {
      jurusanBox.style.display = "block";
    } else {
      jurusanBox.style.display = "none";

      tampilkanMapelAdmin(dataMapel[this.value]);
    }
  });
}

// ===============================
// EVENT JURUSAN
// ===============================

if (jurusan) {
  jurusan.addEventListener("change", function () {
    tampilkanMapelAdmin(dataMapel.smk[this.value]);
  });
}

// ===============================
// TAMPILKAN MAPEL ADMIN
// ===============================

function tampilkanMapelAdmin(data) {
  if (!mapelSelect || !data) return;

  mapelSelect.innerHTML = "<option value=''>Pilih Mapel</option>";

  data.forEach((item) => {
    mapelSelect.innerHTML += `
      <option value="${item}">
        ${item}
      </option>
    `;
  });
}

// ===============================
// TAMBAH SOAL
// ===============================

function tambahSoal() {
  const tipe = document.getElementById("tipeSoal").value;

  const data = {
    jenjang: jenjang.value,
    kelas: kelas.value,
    jurusan: jurusan.value,
    mapel: mapelSelect.value,
    jumlah: document.getElementById("jumlahSoal").value,

    tipe: tipe,

    pertanyaan: document.getElementById("pertanyaan").value,

    opsiA: document.getElementById("opsiA").value,
    opsiB: document.getElementById("opsiB").value,
    opsiC: document.getElementById("opsiC").value,
    opsiD: document.getElementById("opsiD").value,

    jawaban: document.getElementById("jawaban").value,

    materi: document.getElementById("materi").value,
  };

  if (!data.mapel || !data.pertanyaan || !data.jawaban) {
    alert("isi dulu semua");
    return;
  }

  let soal = JSON.parse(localStorage.getItem("soal")) || [];

  soal.push(data);

  localStorage.setItem("soal", JSON.stringify(soal));

  tampilkanSoal();

  alert("soal berhasil ditambah");

  document.getElementById("pertanyaan").value = "";
  document.getElementById("jawaban").value = "";
  document.getElementById("opsiA").value = "";
  document.getElementById("opsiB").value = "";
  document.getElementById("opsiC").value = "";
  document.getElementById("opsiD").value = "";
}

// ===============================
// TAMPILKAN SOAL
// ===============================

function tampilkanSoal() {
  const listSoal = document.getElementById("listSoal");

  if (!listSoal) return;

  let soal = JSON.parse(localStorage.getItem("soal")) || [];

  listSoal.innerHTML = "";

  if (soal.length === 0) {
    listSoal.innerHTML = "<h3>Belum ada soal</h3>";

    return;
  }

  soal.forEach((item, index) => {
    listSoal.innerHTML += `

      <div class="card">

        <h3>${item.mapel}</h3>

        <p>${item.jenjang}</p>

        <p>${item.jurusan || "-"}</p>

        <p>${item.pertanyaan}</p>

        <small>
          Jawaban:
          ${item.jawaban}
        </small>

        <br><br>

        <button onclick="hapusSoal(${index})">
          Hapus
        </button>

      </div>

    `;
  });
}

// ===============================
// HAPUS SOAL
// ===============================

function hapusSoal(index) {
  let soal = JSON.parse(localStorage.getItem("soal")) || [];

  soal.splice(index, 1);

  localStorage.setItem("soal", JSON.stringify(soal));

  tampilkanSoal();

  alert("soal dihapus");
}

// ===============================
// AUTO LOAD
// ===============================

tampilkanSoal();

function tampilHasilQuiz() {
  const listHasil = document.getElementById("listHasil");

  if (!listHasil) return;

  let hasil = JSON.parse(localStorage.getItem("hasilQuiz")) || [];

  if (hasil.length === 0) {
    listHasil.innerHTML = "<p>Belum ada hasil quiz</p>";

    return;
  }

  listHasil.innerHTML = "";

  hasil.forEach((item) => {
    listHasil.innerHTML += `

      <div class="card">

        <h3>${item.nama}</h3>

        <p>Mapel: ${item.mapel}</p>

        <p>Nilai: ${item.nilai}</p>

        <p><small>Waktu: ${item.waktu || "Tidak ada data"}</small></p>

      </div>

    `;
  });
}

tampilHasilQuiz();

function tampilLeaderboard() {
  const list = document.getElementById("listLeaderboard");
  if (!list) return;

  let hasil = JSON.parse(localStorage.getItem("hasilQuiz")) || [];

  // Mengurutkan berdasarkan nilai tertinggi
  hasil.sort((a, b) => b.nilai - a.nilai);

  if (hasil.length === 0) {
    list.innerHTML = "<p>Belum ada data quiz.</p>";
    return;
  }

  let html = `<table><tr><th>Nama</th><th>Mapel</th><th>Nilai</th><th>Waktu</th></tr>`;
  hasil.forEach((item) => {
    html += `<tr><td>${item.nama}</td><td>${item.mapel}</td><td>${item.nilai}</td><td>${item.waktu || "-"}</td></tr>`;
  });
  html += `</table>`;

  list.innerHTML = html;
}
// Tambahkan baris ini di paling bawah script.js agar leaderboard langsung tampil
tampilLeaderboard();

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// TAMBAHKAN INI DI ADMIN PANEL
function exportSoal() {
  const dataSoal = localStorage.getItem("soal");
  const blob = new Blob([dataSoal], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "backup_soal.json";
  a.click();
}

// TAMBAHKAN INI DI BAGIAN LAIN (MISAL DI ADMIN PANEL)
function importSoal(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    localStorage.setItem("soal", e.target.result);
    alert("Soal berhasil di-sync ke perangkat ini!");
    location.reload();
  };
  reader.readAsText(file);
}
