
import React from 'react';
import { GraduationCap, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants/data';

const Footer: React.FC = () => {
  return (
    <footer id="kontak" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">LPP Gurindam</h3>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Portal Pembelajaran PBJP</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Portal pembelajaran resmi untuk materi Pengadaan Barang Jasa Pemerintah (PBJP) dengan modul terlengkap, terstruktur, dan tersertifikasi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-slate-800 pb-2">Materi Pembelajaran</h4>
            <ul className="space-y-3">
              <ul className="space-y-3">
              <li><a href="#/pbjp-l1" className="text-slate-400 hover:text-white transition-colors text-sm">PBJP Level 1</a></li>
              <li><a href="#/ppk-b" className="text-slate-400 hover:text-white transition-colors text-sm">PPK TIPE B</a></li>
              <li><a href="#/ppk-c" className="text-slate-400 hover:text-white transition-colors text-sm">PPK TIPE C</a></li>
            </ul>
              {NAV_LINKS.filter(l => l.label !== 'Beranda').map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">{link.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Placeholder */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-slate-800 pb-2">Sumber Daya</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">FAQ Pelatihan</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Jadwal Ujian PBJP</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Info Sertifikasi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-slate-800 pb-2">Kontak Kami</h4>
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 hover:text-white transition-colors text-sm">{CONTACT_INFO.email}</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href={CONTACT_INFO.whatsapp} className="text-slate-400 hover:text-white transition-colors text-sm">{CONTACT_INFO.phone}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-slate-500 text-sm font-medium">
              &copy; {new Date().getFullYear()} LPP Gurindam. Semua hak dilindungi undang-undang.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest">Kebijakan Privasi</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest">Syarat & Ketentuan</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest">Peta Situs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
