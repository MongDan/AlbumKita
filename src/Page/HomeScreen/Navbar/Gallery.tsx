// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { motion } from "framer-motion";
import Navbar from "./Navbar";

function Gallery() {
  const images = [
    { url: "./image/bioskop.jpeg", label: "BIOSKOP" },
    { url: "./image/bukber.jpeg", label: "BUKBER" },
    { url: "./image/couple.jpeg", label: "COUPLE" },
    { url: "./image/DULU.jpeg", label: "DULU" },
    { url: "./image/Foto malay.jpeg", label: "FOTO MALAY" },
    { url: "./image/Foto ultah 2.jpeg", label: "FOTO ULTAH 2" },
    { url: "./image/GYM.jpeg", label: "GYM" },
    { url: "./image/jalan.jpeg", label: "JALAN" },
    { url: "./image/malaysia 2.jpeg", label: "MALAYSIA 2" },
    { url: "./image/malaysia 3.jpeg", label: "MALAYSIA 3" },
    { url: "./image/malaysia 5.jpeg", label: "MALAYSIA 5" },
    { url: "./image/malaysia 6.jpeg", label: "MALAYSIA 6" },
    { url: "./image/malaysia 7.jpeg", label: "MALAYSIA 7" },
    { url: "./image/malaysia 8.jpeg", label: "MALAYSIA 8" },
    { url: "./image/malaysia 9.jpeg", label: "MALAYSIA 9" },
    { url: "./image/malaysia 10.jpeg", label: "MALAYSIA 10" },
    { url: "./image/malaysia 11.jpeg", label: "MALAYSIA 11" },
    { url: "./image/malaysia 12.jpeg", label: "MALAYSIA 12" },
    { url: "./image/Mall.jpeg", label: "MALL" },
    { url: "./image/Padang.jpeg", label: "PADANG" },
    { url: "./image/Photoboth.jpeg", label: "PHOTOBOTH" },
    { url: "./image/Photoboth2.jpeg", label: "PHOTOBOTH 2" },
    { url: "./image/Player1.jpeg", label: "PLAYER 1" },
    { url: "./image/Player2.jpeg", label: "PLAYER 2" },
    { url: "./image/ramen.jpeg", label: "RAMEN" },
    { url: "./image/SMA.jpeg", label: "PAS SMA" },
    { url: "./image/Sumbar.jpeg", label: "SUMBAR" },
    { url: "./image/ULTAH.jpeg", label: "HARI ULANG TAHUN" }
  ];

  const optimizedTransition = { type: "spring", stiffness: 70, damping: 20 };

  return (
    <div className="relative min-h-screen bg-[#87CEEB] font-['Press_Start_2P'] pt-24 md:pt-32 pb-10 px-4 md:px-6 overflow-x-hidden">
      <Navbar />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          style={{ willChange: "transform" }}
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-[5%] text-3xl md:text-5xl opacity-30"
        >
          ☁️
        </motion.div>
        <motion.div
          style={{ willChange: "transform" }}
          animate={{ x: [30, -30, 30] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-[10%] text-5xl md:text-7xl opacity-40"
        >
          ☁️
        </motion.div>
        <motion.div
          style={{ willChange: "transform" }}
          animate={{ y: [0, -10, 0], scaleX: [1, 0, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-24 left-[20%] text-xl md:text-2xl"
        >
          🪙
        </motion.div>
        <motion.div
          style={{ willChange: "transform" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-16 right-[30%] text-lg md:text-xl text-yellow-300"
        >
          ⭐
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <h2 className="text-blue-900 text-xl md:text-2xl mb-4 underline drop-shadow-sm text-center md:text-left">
          GALLERY KITA YANG TERINDAH
        </h2>
        <p className="text-blue-800 text-[6px] md:text-[8px] mb-8 md:mb-10 font-bold uppercase tracking-widest text-center md:text-left">
          TOTAL_COLLECTIBLES: {images.length} | STATUS: ALL UNLOCKED!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ delay: i * 0.03, ...optimizedTransition }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "8px 8px 0 #fbbf24"
              }}
              className="relative bg-white p-2 border-[3px] md:border-[4px] border-black shadow-[6px_6px_0_#3b82f6] md:shadow-[8px_8px_0_#3b82f6] cursor-pointer group overflow-hidden rounded-lg"
            >
              <div className="absolute -top-1 -left-1 md:-top-2 md:-left-2 bg-yellow-400 text-blue-900 text-[5px] md:text-[7px] px-1.5 md:px-2 py-0.5 md:py-1 border-2 border-black z-20 transform -rotate-12 shadow-sm font-bold">
                RARE!
              </div>
              <div className="aspect-[4/5] overflow-hidden bg-gray-200 border-2 border-black relative rounded-md">
                <img
                  src={img.url}
                  alt={img.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl">❤️</span>
                </div>
              </div>
              <div className="mt-2 md:mt-3 bg-blue-100 p-1.5 md:p-2 border-2 border-black text-center rounded-sm">
                <p className="text-blue-900 text-[7px] md:text-[8px] font-bold uppercase truncate">
                  {img.label}
                </p>
                <div className="flex justify-center mt-1 text-[6px] md:text-[7px] text-blue-700 font-bold">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
export default Gallery;
