
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative pt-32 pb-24 gradient-bg overflow-hidden border-b border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5 pointer-events-none"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight animate-fade-in">
            Portal Pembelajaran
            <span className="text-gradient block mt-3">PBJP LPP Gurindam</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Akses materi pembelajaran terlengkap untuk Pengadaan Barang Jasa Pemerintah (PBJP) dengan modul terstruktur, video interaktif, dan dokumen pendukung.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a href="#/pbjp-l1" className="btn-primary text-lg px-10 py-4 inline-flex items-center space-x-2 group shadow-lg shadow-primary-200">
              <span>Mulai Belajar</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a href="#/video-elearning" className="btn-secondary text-lg px-10 py-4 inline-flex items-center space-x-2 group">
              <Play className="w-5 h-5 text-primary-600 fill-primary-600 group-hover:scale-110 transition-transform" />
              <span>Tonton Video</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
