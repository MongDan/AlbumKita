// Navbar.tsx
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const menuItems = [
    { name: "Start", path: "/home" },
    { name: "Moments", path: "/moments" },
    { name: "Gallery", path: "/gallery" },
    { name: "Story", path: "/story" },
    { name: "Message", path: "/message" }
  ];

  return (
    // Bagian nav ditambahkan flex-wrap agar tidak meluber di HP kecil
    <nav className="fixed top-0 w-full z-[100] px-2 md:px-6 py-3 md:py-4 flex flex-wrap justify-between items-center font-['Press_Start_2P'] gap-y-3">
      {/* LOGO */}
      <Link
        to="/"
        className="text-white text-[7px] md:text-[10px] border-2 border-white p-1.5 md:p-2 bg-black/50 backdrop-blur-sm whitespace-nowrap"
      >
        ALBUM KITA
      </Link>

      {/* MENU - Perbaikan: 'hidden sm:flex' diganti agar selalu muncul atau scrollable */}
      <div className="flex items-center gap-1 bg-black/60 backdrop-blur-xl px-2 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 order-3 sm:order-none w-full sm:w-auto overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 min-w-max">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-[5px] md:text-[8px] px-2 md:px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                location.pathname === item.path
                  ? "bg-red-500 text-white"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* ICON KANAN */}
      <div className="flex gap-2 md:gap-4 text-white text-base md:text-lg">
        <motion.span whileHover={{ y: -2 }} className="cursor-default">
          ❤️
        </motion.span>
        <motion.span whileHover={{ y: -2 }} className="cursor-default">
          📸
        </motion.span>
      </div>
    </nav>
  );
};

export default Navbar;
