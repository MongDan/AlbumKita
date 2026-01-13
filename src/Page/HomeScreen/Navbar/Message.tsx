// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { motion } from "framer-motion";
import Navbar from "./Navbar";

function Message() {
  return (
    <div className="relative min-h-screen bg-[#87CEEB] font-['Press_Start_2P'] flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden">
      <Navbar />

      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-[5%] text-4xl md:text-5xl opacity-40"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-40 right-[15%] text-5xl md:text-6xl opacity-30"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-[60%] right-[10%] text-xl md:text-2xl"
        >
          🪙
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute top-10 left-[40%] text-lg md:text-xl text-yellow-300"
        >
          ⭐
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center w-full px-2"
      >
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl mb-6 md:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] md:drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
          {" "}
          GAME CLEAR!{" "}
        </h1>
        <div className="bg-white/40 backdrop-blur-md p-6 md:p-8 border-2 border-dashed border-blue-900/30 max-w-[95%] md:max-w-lg mx-auto rounded-2xl md:rounded-3xl">
          <p className="text-blue-900 text-[8px] md:text-[10px] leading-loose mb-4 md:mb-6 font-bold">
            {" "}
            "Terima kasih sudah menjadi rekan tim terbaik di setiap level
            kehidupan. Aku gak butuh Player 3, karena Player 2 saja sudah cukup
            selamanya, pasti agak bingung ya karna bahasa gaming banget wkwk,
            intinya kita ngga mau ada orang ke 3 yang ganggu hubungan kita, dan
            aku harap kita selalu bersama untuk selamanya, kita akan lewati
            semua hal yang kemungkinan kedepannya akan banyak kita hadapi, dan
            aku harap kita bisa buat lebih banyak kenangan selama-lamanyaa."{" "}
          </p>
          <p className="text-red-500 text-[10px] md:text-[12px] animate-bounce font-bold">
            {" "}
            ❤️❤️❤️ Terima kasih pacar aku yang paling cantik sedunia ini ❤️❤️❤️{" "}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
export default Message;
