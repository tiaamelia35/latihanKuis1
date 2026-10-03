// Mini Project - Pertemuan 6-7: Menghubungkan Semua Layer

const express = require("express");

const app = express();

const PORT = 3000;

// Import semua route
const mahasiswaRoutes = require("./routes/mahasiswaRoutes");
const fakultasRoutes = require("./routes/fakultasRoutes");
const prodiRoutes = require("./routes/prodiRoutes");
const dosenRoutes = require("./routes/dosenRoutes");

// Agar server dapat membaca request dalam format JSON
app.use(express.json());

// Menghubungkan setiap route dengan prefix masing-masing
app.use("/mahasiswa", mahasiswaRoutes);
app.use("/fakultas", fakultasRoutes);
app.use("/prodi", prodiRoutes);
app.use("/dosen", dosenRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});