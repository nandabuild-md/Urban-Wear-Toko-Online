import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import React from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative h-screen flex flex-col md:flex-row overflow-hidden pt-14 bg-surface-container-lowest">
      <motion.div
        style={{ opacity }}
        className="w-full md:w-[45%] flex flex-col justify-center px-8 md:px-16 z-10"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary-fixed font-headline font-bold tracking-[0.3em] text-xs mb-4"
        >
          KOLEKSI SS 2026
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white font-headline font-extrabold text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase mb-8"
        >
          TENTUKAN <br /> <span className="text-primary-fixed">ATURANMU</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/60 font-light max-w-md leading-relaxed mb-10"
        >
          Energi mentah Jakarta bertemu dengan keanggunan high-fashion. Streetwear tanpa kompromi untuk mereka yang bergerak di bawah bayang-bayang.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex space-x-4"
        >
          <a href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20dengan%20website%20%22Urban%20Wear%22%20atau%20saya%20tertarik%20membuat%20template%20seperti%20demo4.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer" className="bg-primary-fixed text-on-primary-fixed px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-all inline-block">
            Belanja Sekarang
          </a>
        </motion.div>
      </motion.div>

      <div className="w-full md:w-[60%] h-full relative overflow-hidden">
        <motion.div style={{ y, height: '120%' }} className="absolute inset-0 -top-[10%]">
          <img
            className="w-full h-full object-cover"
            alt="Gritty urban street photography"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgKBkTZaXT7-pfxJ62kqQooQv51C7n-ubwmB2MxZ4eew9sDD5thIc7M5ACS3FlDpMxNiTsqdnvbd9C9SMLOEXinU-FGtc9ANSPmKzi9vIJe3l-7UumJ7_cpV8tTLArQ9XG5M__u_oL3npXPFCdHSU2glg-SU98QaU4_1CCHi74TssSQZrPpuqxSjQOrhiFR297Yi1NI8ljPoZtXlTSDnbaJWIkaw1xJexiaXFeHteQ_ShRNYVnFR2nZeyGC-C31xhI3V-P7gd8mnhc"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent"></div>
      </div>
    </section>
  );
}
