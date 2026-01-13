// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { motion } from "framer-motion";
import Navbar from "./Navbar";

function Story() {
  return (
    <div className="relative min-h-screen bg-[#87CEEB] font-['Press_Start_2P'] pt-24 md:pt-32 pb-10 px-4 md:px-6 overflow-x-hidden">
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
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-32 left-[40%] text-xl md:text-2xl"
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
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-[95%] md:max-w-3xl mx-auto border-2 md:border-4 border-blue-900/30 p-5 md:p-8 bg-white/40 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-xl"
      >
        <h1 className="text-blue-900 text-base md:text-lg mb-6 md:mb-8 tracking-widest text-center md:text-left">
          [Story Singkat]
        </h1>
        <div className="space-y-6 md:space-y-8 text-[9px] md:text-[11px] leading-relaxed">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <span className="text-blue-700 whitespace-nowrap">Story 1</span>
            <p className="text-blue-900 font-bold">
              : Pertama kita ketemu dari kita SMA di SMA YLPI tercinta wkwk.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <span className="text-blue-700 whitespace-nowrap">Story 2</span>
            <p className="text-blue-900 font-bold">
              : kemudian diSMA sana kita mengalami banyak banget kenangan, kita
              happy happy bareng, susah bareng, intinya di SMA ini yang paling
              banyak kita habisin waktu bersama terus, karena setiap hari kita
              ketemu, pas makan pun kita suap suapan wkwk.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <span className="text-blue-700 whitespace-nowrap">Story 3</span>
            <p className="text-blue-900 font-bold">
              : nah setelah itu kita putusin buat kuliah di kampus ya sama,
              yaitu di UNRI dan UIN, tapi rezeki kita diterima di UIN suska
              tercinta kita itu wkwk, ya bersyukur jugaa karna diantara banyak
              orang, kita berdua yang lulus, aku senang banget kita sekampus
              jadi kita ada waktu untuk berdua lagi.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <span className="text-blue-700 whitespace-nowrap">Story 4</span>
            <p className="text-blue-900 font-bold">
              : dikampus ini kita juga banyak kenangan dari mulai kita pulang
              bareng, liat aku main voly,kita foto bareng di tempat aku main
              volly, terus pas kita pulang bareng dari kampus, kita sering beli
              eskrim, karna aku tau cayang suka banget namanya eskrim wkwk,
              walaupun gengsi teruss, comel nyaa, aku jugaa sering antar jemput
              cantik walaupun ngga sesering itu sih hehe
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 italic text-red-600 animate-pulse">
            <span className="whitespace-nowrap">[PRESENT]:</span>
            <p className="font-bold">
              Dan untuk sekarang kita udah bareng terus hampir 5 tahun mungkin
              udah 5 tahun, aku senang banget udah bisa sama cayang sampai saat
              ini, kita udah lewatin banyak banget masalah di hubungan kita,
              tapi kita bisa lalui semuanya karna kita saling percaya dan saling
              mengerti satu sama lain, aku harap kita bisa terus bareng sampai
              tua nanti, aminnnn &lt;3
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-12 w-full h-1 bg-blue-900/20 animate-pulse" />
      </motion.div>
    </div>
  );
}
export default Story;
