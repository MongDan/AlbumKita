// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { motion } from "framer-motion";
import Navbar from "./Navbar/Navbar";
import { PixelHeart } from "../LoadingScreenPage/PixelAssets";

function HomeScreen() {
  const sideNav = [
    { label: "BEGINNING", id: "start" },
    { label: "CHAPTER_1", id: "chapter1" },
    { label: "CHAPTER_2", id: "chapter2" },
    { label: "GALLERY", id: "gallery" },
    { label: "END_GAME", id: "stories" }
  ];

  const galleryData = [
    { id: 1, src: "./image/DULU.jpeg", label: "FOTO DIRUMAH BILA" },
    { id: 2, src: "./image/Mall.jpeg", label: "DI MALL MALAY" },
    { id: 3, src: "./image/Padang.jpeg", label: "DI PADANG" },
    { id: 4, src: "./image/Photoboth.jpeg", label: "PHOTOBOTH KITAA" },
    { id: 5, src: "./image/SMA.jpeg", label: "PAS SMA " },
    { id: 6, src: "./image/ULTAH.jpeg", label: "HARI ULANG TAHUN AKU" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="relative min-h-screen bg-[#87CEEB] overflow-x-hidden font-['Press_Start_2P']">
      <Navbar />

      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-[5%] text-3xl md:text-5xl opacity-40"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-40 right-[15%] text-4xl md:text-6xl opacity-30"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[60%] left-[10%] text-2xl md:text-4xl opacity-20"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: [30, -30, 30] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-[5%] text-5xl md:text-7xl opacity-40"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-32 left-[40%] text-xl md:text-2xl"
        >
          🪙
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-[50%] right-[25%] text-xl md:text-2xl"
        >
          🪙
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute top-10 right-[40%] text-lg md:text-xl text-yellow-300"
        >
          ⭐
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-40 left-[20%] text-lg md:text-xl text-yellow-300"
        >
          ⭐
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full flex justify-around opacity-40 text-2xl md:text-4xl">
          <span>🌳</span>
          <span>🌻</span>
          <span>🌳</span>
          <span>🌷</span>
          <span>🌳</span>
          <span>🌻</span>
        </div>
      </div>

      <aside className="fixed left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:block bg-black/10 backdrop-blur-sm p-3 md:p-4 rounded-r-2xl border-l-4 border-white/50">
        <div className="flex flex-col gap-4 md:gap-6 relative">
          <div className="absolute left-[4px] top-2 bottom-2 w-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          {sideNav.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              className="flex items-center gap-3 md:gap-4 group cursor-pointer"
            >
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-white rotate-45 group-hover:bg-red-500 transition-colors shadow-[0_0_5px_white]" />
              <span className="press-start text-[6px] md:text-[8px] text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] group-hover:text-red-500 transition-all tracking-wider">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </aside>

      <section
        id="start"
        className="relative min-h-screen flex flex-col items-center justify-center pt-16 md:pt-20 z-10 px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-[110px] italic tracking-tighter leading-none drop-shadow-[6px_6px_0_rgba(239,68,68,0.5)] md:drop-shadow-[10px_10px_0_rgba(239,68,68,0.5)] animate-pulse">
            ALBUM
            <br />
            KITA
          </motion.h1>
          <p className="mt-6 md:mt-8 text-blue-900 press-start text-[8px] md:text-[10px] tracking-[0.1em] animate-pulse">
            WORLD 1-1: KENANGAN KITA
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="mt-8 md:mt-12 flex gap-4 md:gap-8 items-end"
        >
          <div className="flex flex-col items-center gap-2 relative group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-white p-1 border-2 border-black shadow-[3px_3px_0_#3b82f6] md:shadow-[4px_4px_0_#3b82f6] transition-transform group-hover:-translate-y-1 animate-bounce">
              <img
                src="./image/Player1.jpeg"
                alt="Player 1"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="press-start text-[6px] md:text-[7px] text-blue-900 bg-white px-1 border-b-2 border-blue-900">
              PLAYER 1
            </span>
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mb-4 md:mb-8"
          >
            <PixelHeart className="w-8 h-8 md:w-14 md:h-14" />
          </motion.div>
          <div className="flex flex-col items-center gap-2 relative group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-white p-1 border-2 border-black shadow-[3px_3px_0_#ef4444] md:shadow-[4px_4px_0_#ef4444] transition-transform group-hover:-translate-y-1 animate-bounce">
              <img
                src="./image/Player2.jpeg"
                alt="Player 2"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="press-start text-[6px] md:text-[7px] text-red-500 bg-white px-1 border-b-2 border-red-500">
              PLAYER 2
            </span>
          </div>
        </motion.div>
      </section>

      <section
        id="gallery"
        className="relative min-h-screen p-6 md:p-10 lg:p-24 z-10"
      >
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl mb-4 italic underline decoration-red-500 drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)] animate-pulse">
            MEMORY_DUMP
          </h2>
          <p className="text-blue-900 text-[8px] mb-8 md:mb-12 uppercase tracking-widest font-bold">
            Moment-Moment Kita Bersama
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-2 md:p-3 shadow-[6px_6px_0_#ef4444] md:shadow-[8px_8px_0_#ef4444] border-2 border-black"
              >
                <div className="aspect-square bg-emerald-100 mb-3 md:mb-4 overflow-hidden relative group">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover shadow-inner"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[8px] text-white">MWUAH</span>
                  </div>
                </div>
                <div className="text-black text-[8px] md:text-[9px] leading-relaxed">
                  <p className="font-bold uppercase">{item.label}</p>
                  <p className="text-blue-500 mt-1 font-bold">
                    LVL: FINAL_BOSS
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="stories"
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center p-6 md:p-10 z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl border-4 border-dashed border-blue-900/30 bg-white/40 backdrop-blur-md p-6 md:p-10 rounded-3xl"
        >
          <h3 className="text-blue-900 mb-4 md:mb-6 text-lg md:text-xl drop-shadow-sm">
            [ LOG_UPDATE ]
          </h3>
          <p className="text-blue-900 text-[9px] md:text-[11px] leading-loose font-bold">
            {" "}
            "Gak kerasa ya, kita udah lewatin banyak stage. <br /> Dari yang
            cupu sampai sekarang jadi pro di hati masing-masing. Terima kasih
            sudah jadi player 2 yang paling hebat dalam hidupku. <br /> Aku
            harap kita bisa terus nge-game bareng, level demi level, sampai
            akhir cerita kita nanti yaa cantik aku..."{" "}
          </p>
          <div className="mt-6 md:mt-8 text-red-500 text-2xl md:text-3xl animate-bounce">
            {" "}
            ❤️❤️❤️{" "}
          </div>
        </motion.div>
      </section>

      <div className="h-20 md:h-24 flex flex-col justify-center items-center opacity-40 z-10">
        <div className="flex gap-2 md:gap-4 mb-2">🏁🏁🏁</div>
        <p className="text-[6px] md:text-[8px] text-blue-900 tracking-[0.5em]">
          --- FINISH LINE ---
        </p>
      </div>
    </div>
  );
}

export default HomeScreen;
