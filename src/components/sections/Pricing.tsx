import { motion } from 'motion/react';
import { useState } from 'react';
import { pricingTiers } from '../../data';
import { CheckCircle2 } from 'lucide-react';

export function Pricing() {
  const [revenue, setRevenue] = useState(50000000);
  const [marketplaceFee, setMarketplaceFee] = useState(17.2);

  // Calculate wasted money
  const wastedMoney = (revenue * marketplaceFee) / 100;
  // Assuming independent website payment gateway fee is around 1.5%
  const independentFee = (revenue * 1.5) / 100;
  const savings = wastedMoney - independentFee;

  return (
    <section id="harga" className="bg-surface-container-lowest py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white font-headline font-extrabold text-5xl md:text-6xl uppercase tracking-tighter">Scale Your Brand</h2>
        </motion.div>

        {/* Storytelling Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20 space-y-6 text-white/80 text-lg leading-relaxed"
        >
          <p>
            Bayangkan ini: Brand Anda mulai dikenal. Orderan masuk setiap hari. Notifikasi <em>ka-ching</em> terus berbunyi dari aplikasi marketplace di HP Anda. Anda merasa di puncak dunia.
          </p>
          <p>
            Tapi saat Anda mengecek saldo akhir bulan... ke mana perginya semua profit itu? Anda bekerja keras membangun brand, memikirkan desain berhari-hari, mengurus produksi yang melelahkan, tapi platform marketplace memotong margin Anda tanpa ampun.
          </p>
          <p>
            Faktanya, di tahun 2026, potongan marketplace bisa mencapai <strong>lebih dari 20%</strong>. Biaya admin dasar (hingga 10.2%), Gratis Ongkir XTRA (~5%), Promo XTRA (~2%), biaya layanan pre-order (3%), belum lagi biaya penanganan Rp1.250 per transaksi. Jika Anda menjual produk seharga Rp500.000, hampir Rp100.000 lenyap begitu saja untuk biaya platform. Anda pada dasarnya bekerja untuk mereka.
          </p>
          <p className="text-primary-fixed font-bold text-xl font-headline uppercase tracking-wide pt-4">
            Sudah saatnya Anda mengambil alih kendali. Berhenti menyewa di tanah orang lain.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto mb-20"
        >
          <table className="w-full text-left border-collapse bg-surface-container-low shadow-2xl">
            <thead>
              <tr className="border-b-2 border-white">
                <th className="py-6 px-6 font-headline font-bold uppercase tracking-widest text-white text-lg">Fitur Platform</th>
                <th className="py-6 px-6 font-headline font-bold uppercase tracking-widest text-white/50 text-lg">Marketplace (S/T)</th>
                <th className="py-6 px-8 font-headline font-bold uppercase tracking-widest text-on-primary-fixed bg-primary-fixed text-lg">UrbanWear Project</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base font-bold">
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="py-5 px-6 text-white/90">Potongan Penjualan</td>
                <td className="py-5 px-6 text-white/40">Hingga 20%+</td>
                <td className="py-5 px-8 bg-white/5 text-primary-fixed">Hanya ~1.5% (Payment Gateway)</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="py-5 px-6 text-white/90">Akses Data Pelanggan</td>
                <td className="py-5 px-6 text-white/40">Dibatasi / Disembunyikan</td>
                <td className="py-5 px-8 bg-white/5 text-primary-fixed">100% Milik Anda</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="py-5 px-6 text-white/90">Kontrol Branding</td>
                <td className="py-5 px-6 text-white/40">Template Kaku</td>
                <td className="py-5 px-8 bg-white/5 text-primary-fixed">Kustom Editorial Bebas</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Savings Calculator (PAS Framework) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface-container-high p-8 md:p-12 mb-20 flex flex-col lg:flex-row gap-12 items-center border border-white/10 shadow-2xl"
        >
          <div className="flex-1 w-full">
            <h3 className="font-headline font-bold text-3xl uppercase tracking-tight mb-4 text-white">Kalkulator Kerugian</h3>
            <p className="text-white/60 mb-8 text-sm">
              <strong className="text-red-400">PROBLEM:</strong> Hitung berapa banyak uang Anda yang dirampas oleh marketplace setiap bulannya.
            </p>
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold">Rata-rata Penjualan Bulanan (Rp)</label>
                <input
                  className="w-full bg-surface-container-lowest border-2 border-white/10 focus:border-red-500 outline-none px-4 py-3 text-2xl font-bold text-white transition-all"
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold">Estimasi Potongan Marketplace (%)</label>
                <div className="relative">
                  <select
                    className="w-full bg-surface-container-lowest border-2 border-white/10 focus:border-red-500 outline-none px-4 py-3 text-xl font-bold text-white appearance-none cursor-pointer"
                    value={marketplaceFee}
                    onChange={(e) => setMarketplaceFee(Number(e.target.value))}
                  >
                    <option className="bg-surface" value="10.2">10.2% (Hanya Admin)</option>
                    <option className="bg-surface" value="15.2">15.2% (Admin + Gratis Ongkir)</option>
                    <option className="bg-surface" value="17.2">17.2% (Admin + Gratis Ongkir + Promo)</option>
                    <option className="bg-surface" value="20.2">20.2% (Kategori Mall/Star+ Maksimal)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full text-center bg-red-950/20 p-8 md:p-10 border-2 border-red-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
            <span className="block text-xs uppercase tracking-widest text-red-400 mb-2 font-bold">AGITATE: Uang Anda yang Terbuang Sia-sia</span>
            <div className="text-4xl md:text-5xl font-headline font-black text-white mb-6 tracking-tighter">
              Rp {wastedMoney.toLocaleString('id-ID')}
            </div>

            <div className="w-full h-px bg-white/10 my-6"></div>

            <span className="block text-xs uppercase tracking-widest text-primary-fixed mb-2 font-bold">SOLVE: Yang Bisa Anda Hemat dengan Website Sendiri</span>
            <div className="text-4xl md:text-5xl font-headline font-black text-primary-fixed mb-4 tracking-tighter">
              Rp {savings.toLocaleString('id-ID')}
            </div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mt-4">
              *Asumsi biaya payment gateway independen hanya 1.5%. Bayangkan apa yang bisa Anda lakukan dengan uang sebanyak ini setiap bulannya.
            </p>
          </div>
        </motion.div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`p-8 border-2 flex flex-col h-full relative transition-all ${tier.isPopular
                  ? 'border-primary-fixed bg-surface-container-low shadow-[0_0_40px_rgba(193,244,0,0.1)]'
                  : 'border-white/10 bg-surface-container-low hover:border-white/30'
                }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-fixed text-on-primary-fixed text-[10px] font-black px-6 py-1.5 uppercase tracking-widest">
                  Paling Populer
                </div>
              )}
              <h4 className="font-headline font-bold text-2xl uppercase mb-2 text-white">{tier.name}</h4>
              <span className="text-4xl font-black mb-8 text-white">
                {tier.price}
              </span>
              <ul className={`space-y-4 mb-12 flex-1 text-sm ${tier.isPopular ? 'font-bold' : 'font-medium'}`}>
                {tier.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center gap-3 ${tier.isPopular ? 'text-white' : 'text-white/80'}`}>
                    <CheckCircle2 className="text-primary-fixed w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20membuat%20website%20toko%20online%20seperti%20Urban%20Wear%20di%20demo4.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer"
                className={`w-full py-4 font-bold uppercase tracking-widest text-xs transition-all block text-center ${tier.isPopular
                    ? 'bg-primary-fixed text-on-primary-fixed hover:bg-white shadow-lg'
                    : 'border-2 border-white text-white hover:bg-white hover:text-black'
                  }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
