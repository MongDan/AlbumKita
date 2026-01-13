// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LoadingScreen from "./Page/LoadingScreenPage/LoadingScreen";
import HomeScreen from "./Page/HomeScreen/HomeScreen";
import Moments from "./Page/HomeScreen/Navbar/Moments";
import Gallery from "./Page/HomeScreen/Navbar/Gallery";
import Story from "./Page/HomeScreen/Navbar/Story";
import Message from "./Page/HomeScreen/Navbar/Message";

// OBJEK AUDIO GLOBAL
// Mengarahkan ke file lokal di folder public/Lagu/Lagu.mp3
const bgMusic = new Audio("/Lagu/Lagu.mp3");

// FITUR AUTO-RESTART: Lagu akan otomatis terulang saat habis
bgMusic.loop = true;

// Set volume (0.0 sampai 1.0)
bgMusic.volume = 0.5;

// Simpan ke window agar bisa diakses di seluruh aplikasi
window.bgMusic = bgMusic;

// Fungsi untuk mengaktifkan audio (Syarat browser agar tidak diblokir)
const aktivasiMusik = () => {
  if (window.bgMusic) {
    window.bgMusic.play().catch(() => {
      console.log("Menunggu interaksi pengguna untuk memutar musik...");
    });
    // Hapus listener setelah musik berhasil dijalankan sekali
    window.removeEventListener("click", aktivasiMusik);
  }
};

// Menjalankan fungsi aktivasi saat pengguna mengeklik apa saja di layar
window.addEventListener("click", aktivasiMusik);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoadingScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/moments" element={<Moments />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/story" element={<Story />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  </BrowserRouter>
);
