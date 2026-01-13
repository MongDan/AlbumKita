// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { motion } from "framer-motion";
import Navbar from "./Navbar";

function Moments() {
  const momentsData = [
    {
      id: 1,
      stage: "STAGE_01: MASA SMA",
      img: "./image/SMA.jpeg",
      desc: "Masih ingat dulu rambutku dicukur botak sama bapak wkwk, dan cayang malah suka style rambut aku yang botak macam ini, sampai keingat sampai sekarang HAHAHA",
      color: "#3b82f6"
    },
    {
      id: 2,
      stage: "STAGE_02: Ulang Tahun Spesial",
      img: "./image/Foto ultah 2.jpeg",
      desc: "ini waktu ulang tahun aku, aku senanggg banget pas dikasih kejutan, karena pas itu kan aku gatau kalau tiba tiba kesini, dan cayang yang atur semuanya biar ulang tahun aku terasa spesial, apalagi ada kado yang bungkusnya ada muka aku wkwkwk, makasih ya sayanggg ",
      color: "#ef4444"
    },
    {
      id: 3,
      stage: "STAGE_03: KEMALAYSIA",
      img: "./image/Foto malay.jpeg",
      desc: "ini sih moment salah satu yang palingg berkesan dihidup aku, karena untuk pertama kali nya kita pergi ke luar negeri bareng keluarga aku, pas kita dimalaysia, aku ingat semuanya dari kitaa naik kereta api, kita kemall nyaa, kita ketempat patung budha yang banyak orang india nya wkwk, senanggg bangett pas kita kemalaysia, masih banyak foto nyaa, cuman nanti aku letak di gallery aja ya cayang, aku harap kita bisa kesini lagi, mwuah.",
      color: "#facc15"
    },
    {
      id: 4,
      stage: "STAGE_04: KESUMBAR",
      img: "./image/Sumbar.jpeg",
      desc: "ini foto pas kita kesumbar, aku ingat banget, yang mana rencananya balik hari, malah jadi nginep wkwk, lucu banget, tapi karena ini kita bisa habiskan waktu bersama dan pertama kali nya kita pergi ke sumbar bareng bareng, aku ingat bangett, dari kita yang nginep di tempat saudara cayang, sampai kita berenang ditempat wisata, lupa namanya hehe, intinyaa aku senangg bangett bisa kesumbar bareng cayang, makasih yaa sayang udah ajak aku kesumbar, mwuah.",
      color: "#10b981"
    },
    {
      id: 5,
      stage: "STAGE_05: BAJU COUPLE",
      img: "./image/couple.jpeg",
      desc: "nah difoto ini, untuk pertama kali nya kita ngerencanain buat beli baju couplean, dan akhirnya jadi beli baju couplean, senengg bangett rasanya pas kita jalan jalan pake baju couplean, apalagi pas kita foto ditempat parkir, yang dimana di fotoin sama abang karyawan disana wkwk, lucu bangett liatnya, dimana kita nonton film di xchange, lupa film apa, tapi yang terpenting, disaat itu benar benar happy karena kita couplean, terima kasih yaa cantik, love youu.",
      color: "#8b5cf6"
    },
    {
      id: 6,
      stage: "STAGE_06: Makan Ramen",
      img: "./image/ramen.jpeg",
      desc: "nah, ini foto pas kita makan ramen, karena dulu kita biasanya habis nonton , kita langsung pergi ketempat ramen, aku ingat pertama kali ketempat ramen, aku pesan ramen soyou, yang dimana rasanya kayak bawang wkwk, jadi ngga kemakan sama sekali, semenjak itu langsung beli yang spicy atau beli ayam katsu, lama lama jadi kecanduan makan ramen disana bareng cayang, terimaa kasih yaa cantik udah ajak aku kemana mana untuk makan ramen atau makan apapun, tanpa cayang aku gatau ada makanan selain ayam gorengg wkwkw. mwuahh",
      color: "#161E54"
    },
    {
      id: 7,
      stage: "STAGE_07: NGE-GYM",
      img: "./image/GYM.jpeg",
      desc: "Ini foto pertama kita, karena kan malu malu buat foto mirror di gym, difoto ini aku senangg banget karena kita punyaa foto nge-gym bareng, kita selalu gym bareng, mau malam atau pun sore, aku senang kita jadi couple yang sehat bareng, kadang cayang sering aku marahin karna baju nya ketat, cuman itu aku lakuin karena aku sayang sama cantik ya hehe, maapin aku ya cantik ya kalau sering marah karna pakaian itu ya cantik akuu, aku harap kita bisa ngegym bareng selamanya ya cantik aku , sayangg banget mwuah.",
      color: "#F16D34"
    },
    {
      id: 8,
      stage: "STAGE_08: PHOTOBOTH",
      img: "./image/Photoboth2.jpeg",
      desc: "ini foto kita pas lagi coba coba photoboth di mall ciputra, aku ingat ini yang kedua kali nya kita photoboth, tapi di moment ini, aku ingat banget, yang awal nya kita takut jelek hasilnya, ternyata baguss bangett wkwk, aku senang banget pas liat hasilnya, apalagi kita bisa simpan foto ini sebagai kenangan kita berdua, dan aku jugaa senang bangett kita bisa ambil banyak gambar di photoboth ini, kita habis nonton langsung kita simpan kenangan kita di hari itu lewat photoboth, terimaa kasih yaa cantik , i love youu.",
      color: "#FF0087"
    },
    {
      id: 9,
      stage: "STAGE_09: BUKBER",
      img: "./image/bukber.jpeg",
      desc: "Ini moment dibulan ramadhan kita pergi bukber bareng sekelas, tapi yang paling penting itu, moment kita pergi berdua bukber bareng, cayang disitu jugaa cantikk banget, cantik nyaa kebangetan, aku senang banget karna kita bisa buat banyak kenangan maupun ketika kita dibulan ramadhan, aku harap kita bisa terusn begini sampai kapan pun, dan pergi bukber barengg ya cantik aku, mwuahh.",
      color: "#F56564"
    },
    {
      id: 10,
      stage: "STAGE_10: MALAYSIA LAGI",
      img: "./image/malaysia 2.jpeg",
      desc: "nah ini ni, foto yang palingggg berkesan di malaysiaa, yang dimana ini foto kita ambil ditempat patung buddha, kita cepat cepat ambil foto nya karna ada banyak burung yang lagi ngumpul disitu wkwk, lucu banget pokoknyaa, difoto itu kelihatan banget ekspresi kita yangg senangg banget karena bisa ambil foto yang bagus wkwk, aku harap kita bisa kesini lagi ya cantik, secepat mungkin aku harap kita bisa pergi bareng lagi, kapan pun, kita buat kenangan yang lebih banyak lagii, i love youu.",
      color: "#FF0087"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#87CEEB] font-['Press_Start_2P'] pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 overflow-x-hidden">
      <Navbar />

      {/* --- DEKORASI LATAR BELAKANG --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 left-[5%] text-3xl md:text-5xl opacity-30"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: [30, -30, 30] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-40 right-[10%] text-5xl md:text-7xl opacity-40"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], scaleX: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-24 left-[20%] text-xl md:text-2xl"
        >
          🪙
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute top-16 right-[30%] text-lg md:text-xl text-yellow-300"
        >
          ⭐
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <h1 className="text-blue-900 text-lg md:text-xl mb-12 md:mb-16 italic tracking-tighter underline text-center md:text-left drop-shadow-sm">
          MOMENT KITA CANTIK
        </h1>

        <div className="space-y-20 md:space-y-32">
          {momentsData.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-10 items-center group`}
            >
              {/* FRAME FOTO - DIPERBAIKI AGAR TIDAK TERPOTONG */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="w-full md:w-1/2 relative"
              >
                <div
                  className="absolute inset-0 blur-md opacity-70"
                  style={{ backgroundColor: moment.color }}
                />
                <div
                  className="relative bg-white p-2 md:p-3 border-[3px] md:border-[4px] border-black rounded-xl overflow-hidden shadow-xl z-10"
                  style={{ boxShadow: `6px 6px 0 ${moment.color}` }}
                >
                  <div className="bg-gray-100 overflow-hidden flex items-center justify-center h-64 md:h-80 rounded-lg border-2 border-black relative">
                    <img
                      src={moment.img}
                      alt={moment.stage}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-30">
                      <span className="text-3xl md:text-4xl animate-pulse">
                        ❤️
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "text-left" : "md:text-right"
                }`}
              >
                <span
                  style={{ color: moment.color }}
                  className="text-[8px] md:text-[10px] block mb-3 md:mb-4 italic drop-shadow-[1px_1px_0_rgba(0,0,0,0.1)]"
                >
                  {moment.stage}
                </span>
                <div className="bg-white/40 backdrop-blur-sm p-4 md:p-6 border-2 border-dashed border-blue-900/20 rounded-xl">
                  <p className="text-blue-900 text-[10px] md:text-[12px] leading-loose font-bold">
                    "{moment.desc}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 md:mt-32 text-center"
        >
          <p className="text-blue-900/40 text-[6px] md:text-[8px] animate-pulse font-bold">
            --- END OF LOG ---
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Moments;
