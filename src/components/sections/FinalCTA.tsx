import { motion } from 'motion/react';

export function FinalCTA() {
  return (
    <section className="bg-surface-container-lowest py-48 px-6 text-center overflow-hidden">
      <motion.h2 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white font-headline font-extrabold text-7xl md:text-[12rem] leading-[0.8] tracking-tighter uppercase mb-12"
      >
        PESAN <br/> SEKARANG
      </motion.h2>
      <motion.a 
        href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20dengan%20website%20%22Urban%20Wear%22%20atau%20saya%20tertarik%20membuat%20template%20seperti%20demo4.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary-fixed text-on-primary-fixed px-16 py-6 font-headline font-extrabold text-2xl uppercase tracking-widest hover:bg-white transition-colors inline-block text-center"
      >
        Pesan via WhatsApp
      </motion.a>
    </section>
  );
}
