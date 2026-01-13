// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PixelTree,
  PixelController,
  PixelJoystick,
  PixelHeart,
  PixelCoin,
  PixelBrick
} from "./PixelAssets";

function LoadingScreen() {
  const [sedangMemuat, setSedangMemuat] = useState(true);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalBar = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 25);

    const timerSelesai = setTimeout(() => {
      setSedangMemuat(false);
    }, 3000);

    return () => {
      clearTimeout(timerSelesai);
      clearInterval(intervalBar);
    };
  }, []);

  const gayaLatar =
    "relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-400 to-sky-300";

  const animGoyang = {
    rotate: [-2, 2, -2],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };
  const animPutarKoin = {
    scaleX: [1, 0, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
  };
  const animDenyut = {
    scale: [1, 1.1, 1],
    transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "brightness(0)" }}
      transition={{ duration: 0.8 }}
      className="h-full w-full"
    >
      <div className={gayaLatar}>
        <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.3)]" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]" />

        <div className="absolute top-4 md:top-6 left-4 md:left-6 flex gap-1 md:gap-2 z-20 opacity-50 pointer-events-none">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={animDenyut}
              transition={{ delay: i * 0.2 }}
            >
              <PixelHeart className="w-6 h-6 md:w-10 md:h-10 drop-shadow-md" />
            </motion.div>
          ))}
        </div>

        <div className="absolute top-4 md:top-6 right-4 md:right-6 flex gap-1 md:gap-2 z-20 opacity-50 items-center pointer-events-none">
          <span className="press-start text-yellow-400 text-[10px] md:text-sm mr-1 md:mr-2 text-shadow">
            x 99
          </span>
          <motion.div animate={animPutarKoin}>
            <PixelCoin className="w-6 h-6 md:w-10 md:h-10 drop-shadow-md" />
          </motion.div>
        </div>

        <motion.div
          animate={{ x: [-5, 5, -5], y: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute left-4 top-1/4 md:top-1/3 w-12 md:w-24 opacity-30 z-10 pointer-events-none"
        >
          <PixelController className="w-full h-auto" />
        </motion.div>

        <motion.div
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 md:w-20 opacity-30 z-10 pointer-events-none"
        >
          <PixelJoystick className="w-full h-auto" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-24 md:bottom-32 left-6 md:left-10 w-8 h-8 md:w-12 md:h-12 opacity-40 z-0 pointer-events-none"
        >
          <PixelBrick className="w-full h-full" />
        </motion.div>

        <motion.div
          variants={animGoyang}
          animate={{ rotate: [-2, 2, -2] }}
          className="absolute -bottom-4 left-0 w-24 md:w-48 z-20 pointer-events-none"
        >
          <PixelTree className="w-full h-auto drop-shadow-lg" />
        </motion.div>

        <motion.div
          variants={animGoyang}
          animate={{ rotate: [-2, 2, -2] }}
          className="absolute -bottom-4 right-0 w-32 md:w-56 z-20 scale-x-[-1] pointer-events-none"
        >
          <PixelTree className="w-full h-auto drop-shadow-lg" />
        </motion.div>

        <AnimatePresence mode="wait">
          {sedangMemuat ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="relative z-50 flex flex-col items-center justify-center h-full px-6 md:px-10"
            >
              <span className="text-blue-900 press-start text-[8px] md:text-sm mb-4 md:mb-6 tracking-widest animate-bounce text-center">
                Loading Sayang ...
              </span>
              <div className="w-full max-w-[200px] md:max-w-md h-6 md:h-8 bg-black/20 border-2 md:border-4 border-blue-900 p-0.5 md:p-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-red-500 shadow-[inset_-2px_0_0_#991b1b] md:shadow-[inset_-4px_0_0_#991b1b]"
                />
              </div>
              <span className="mt-2 text-blue-900 press-start text-[6px] md:text-[8px] self-end mr-1">
                {progress}%
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative z-50 flex flex-col items-center justify-center h-full px-4 text-center md:text-left"
            >
              <div className="relative flex flex-col items-center md:items-start max-w-full">
                <div className="absolute -inset-10 bg-white/20 blur-[60px] md:blur-[80px] rounded-full pointer-events-none" />
                <h1 className="relative press-start leading-[0.85] flex flex-col uppercase italic">
                  <motion.span
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black drop-shadow-[4px_4px_0_#000] md:drop-shadow-[8px_8px_0_#000]"
                  >
                    Album
                  </motion.span>
                  <motion.span
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-red-600 text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black self-center md:self-end -mt-2 md:-mt-10 drop-shadow-[4px_4px_0_#000] md:drop-shadow-[8px_8px_0_#000]"
                  >
                    Kita
                  </motion.span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-blue-900/70 self-center md:self-end mt-6 md:mt-12 text-[8px] md:text-sm font-bold press-start uppercase"
                >
                  World 1-1: Kenangan Kita
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="self-center md:self-end mt-6 md:mt-8 relative z-[60]"
                >
                  <motion.button
                    onClick={() => {
                      if (window.bgMusic) window.bgMusic.play();
                      navigate("/home");
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="press-start cursor-pointer inline-block bg-yellow-400 text-blue-900 text-[8px] md:text-xs px-4 md:px-6 py-2 md:py-3 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-yellow-700 shadow-lg active:translate-y-[2px]"
                  >
                    {" "}
                    [ START GAME ]{" "}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
