import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-[#050505] w-full px-8 py-16 flex flex-col md:flex-row justify-between items-start">
      <div className="mb-12 md:mb-0">
        <div className="text-4xl font-black text-white mb-2 font-headline font-extrabold">URBANWEAR</div>
        <p className="font-body font-medium italic text-white/50 max-w-xs text-sm">
          detak jantung beton jakarta diterjemahkan ke dalam kain. tanpa kompromi.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="flex flex-col gap-4">
          <span className="font-body text-[10px] uppercase tracking-[0.1em] text-white/50">Ikuti Kami</span>
          <a className="text-white/50 hover:text-primary-fixed transition-colors font-headline font-bold text-xl uppercase" href="#">Instagram</a>
          <a className="text-white/50 hover:text-primary-fixed transition-colors font-headline font-bold text-xl uppercase" href="#">TikTok</a>
          <a className="text-white/50 hover:text-primary-fixed transition-colors font-headline font-bold text-xl uppercase" href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20dengan%20website%20%22Urban%20Wear%22%20atau%20saya%20tertarik%20membuat%20template%20seperti%20demo4.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-body text-[10px] uppercase tracking-[0.1em] text-white/50">Informasi</span>
          <a className="text-white/50 hover:text-primary-fixed transition-colors font-body text-sm" href="#">Kebijakan Privasi</a>
          <a className="text-white/50 hover:text-primary-fixed transition-colors font-body text-sm" href="#">Info Pengiriman</a>
          <a className="text-white/50 hover:text-primary-fixed transition-colors font-body text-sm" href="#">Panduan Ukuran</a>
        </div>
      </div>
      <div className="mt-12 md:mt-0 flex flex-col items-end">
        <span className="font-body text-[10px] uppercase tracking-[0.1em] text-white/50 mb-2">© 2026 URBANWEAR</span>
        <span className="font-body text-[10px] uppercase tracking-[0.1em] text-white/50 mb-1">Dibuat di Indonesia</span>
        <span className="font-body text-[10px] text-white/30">Website oleh <a href="https://astmay.space" target="_blank" rel="noopener" className="text-white/40 hover:text-white transition-colors underline">Astrina Maysaroh</a></span>
      </div>
    </footer>
  );
}
