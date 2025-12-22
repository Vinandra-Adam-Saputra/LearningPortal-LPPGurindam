
import React from 'react';
import { FileText, Video, Eye, Download, ArrowRight } from 'lucide-react';
import { LATEST_MATERIALS } from '../constants/data';

const MaterialList: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Materi Terbaru</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Akses materi pembelajaran terbaru yang telah diperbarui secara berkala oleh tim ahli kami.</p>
          </div>
          <a href="/materi" className="btn-secondary px-6 py-2.5 inline-flex items-center space-x-2 text-sm">
            <span>Lihat Semua Materi</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_MATERIALS.map((item) => (
            <div key={item.id} className="card group hover:shadow-xl transition-all duration-300 flex flex-col h-full border-gray-200/50">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                    {item.type === 'MP4' ? (
                      <Video className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                    ) : (
                      <FileText className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mt-1">{item.category}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md uppercase tracking-widest">{item.type}</span>
              </div>

              <div className="mt-auto">
                <div className="flex items-center justify-between text-xs font-medium text-gray-400 mb-6 px-1">
                  <div className="flex items-center space-x-1">
                    <span>Ukuran:</span>
                    <span className="text-gray-600">{item.size}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-600">{item.updatedAt}</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={item.viewUrl}
                    className="flex-1 btn-secondary text-sm py-3 inline-flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Lihat</span>
                  </a>
                  <a 
                    href={item.downloadUrl}
                    className="flex-1 btn-primary text-sm py-3 inline-flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialList;
