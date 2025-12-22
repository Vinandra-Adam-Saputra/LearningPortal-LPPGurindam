
import { BookOpen, GraduationCap, FileText, Home, Gavel, PlayCircle } from 'lucide-react';
import { Category, NavLink, Stat } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '/', icon: Home },
  { label: 'Materi Pembelajaran', href: '/pbjp-l1', icon: BookOpen },
  { label: 'Kontak', href: '#kontak', icon: Gavel },
];

export const STATS: Stat[] = [
  { value: '12+', label: 'Modul Pembelajaran' },
  { value: '50+', label: 'Dokumen Pendukung' },
  { value: '3', label: 'Video E-Learning' },
  { value: '1000+', label: 'Peserta Terdaftar' },
];


const generatePages = (folderPath: string, count: number, fileName: string = 'Slide', ext: string = 'JPG') => {
  const normalizedExt = ext.toUpperCase();
  return Array.from({ length: count }, (_, i) => `${folderPath}/${fileName}${i + 1}.${normalizedExt}`);
};

export const MAIN_CATEGORIES: Category[] = [
  {
    id: 'pbjp-l1',
    title: 'PBJP Level 1',
    description: 'Pengadaan Barang/Jasa Pemerintah Tingkat Dasar',
    icon: BookOpen,
    gradient: 'from-blue-600 to-blue-700',
    topics: [
      { 
        id: 'l1-m1', 
        title: 'Materi 1: Pengantar Manajemen Rantai Pasok', 
        resources: [
          { 
            format: 'Modul', 
            // Sesuai contoh Anda: public/Materi 1.../Modul 1.../Slide1.JPG
            pages: generatePages('/PBJP LEVEL 1/Materi 1 Pengantar Manajemen Rantai Pasok/Modul 1 Pengantar Manajamen Rantai Pasok', 42),
            updatedAt: 'Feb 2025' 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP LEVEL 1/Materi 1 Pengantar Manajemen Rantai Pasok/Slide 1 Pengantar Manajamen Rantai Pasok', 32) 
          },
          { 
            format: 'Mind Map', 
            pages: generatePages('/PBJP LEVEL 1/Materi 1 Pengantar Manajemen Rantai Pasok/Mind Map 1 Manajemen Rantai Pasok', 5) 
          },
          { 
            format: 'Suplemen', 
            pages: generatePages('/PBJP LEVEL 1/Materi 1 Pengantar Manajemen Rantai Pasok/Suplemen 1', 1) 
          }
        ]
      },
      { 
        id: 'l1-m2', 
        title: 'Materi 2: Pengantar Pengadaan Barang Jasa Pemerintah', 
        resources: [
          { 
            format: 'Modul', 
            pages: generatePages('/PBJP LEVEL 1/Materi 2 Pengantar Pengadaan Barang Jasa Pemerintah/Modul 2 Pengantar Pengadaan Barang Jasa Pemerintah', 81) 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP LEVEL 1/Materi 2 Pengantar Pengadaan Barang Jasa Pemerintah/Slide 2 Pengantar Pengadaan Barang Jasa Pemerintah', 64) 
          },
          { 
            format: 'Mind Map', 
            pages: generatePages('/PBJP LEVEL 1/Materi 2 Pengantar Pengadaan Barang Jasa Pemerintah/Mind Map 2 Pengantar PBJP', 48) 
          },
          { 
            format: 'Suplemen', 
            pages: generatePages('/PBJP LEVEL 1/Materi 2 Pengantar Pengadaan Barang Jasa Pemerintah/Suplemen Modul 2 Pengantar Pengadaan Barang Jasa Pemerintah', 25) 
          }
        ]
      },
      { 
        id: 'l1-m3', 
        title: 'Materi 3: JK Melakukan Perencanaan PBJP Level 1', 
        resources: [
          { 
            format: 'Modul', 
            pages: generatePages('/PBJP LEVEL 1/Materi 3 JK Melakukan Perencanaan PBJP Level 1/Modul 3 JK Melakukan Perencanaan PBJP Level 1', 73) 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP LEVEL 1/Materi 3 JK Melakukan Perencanaan PBJP Level 1/Slide 3 JK Melakukan Perencanaan PBJP Level 1', 61) 
          },
          { 
            format: 'Mind Map', 
            pages: generatePages('/PBJP LEVEL 1/Materi 3 JK Melakukan Perencanaan PBJP Level 1/Mind Map 3 JK Melakukan Perencanaan PBJP Level 1', 48) 
          },
          { 
            format: 'Suplemen', 
            pages: generatePages('/PBJP LEVEL 1/Materi 3 JK Melakukan Perencanaan PBJP Level 1/Suplemen Modul 3 JK Melakukan Perencanaan PBJP Level 1', 16) 
          },
        ]
      },
      { 
        id: 'l1-m4', 
        title: 'Materi 4 JK Melakukan Pemilihan Penyedia PBJP Level 1', 
        resources: [
          { 
            format: 'Modul', 
            pages: generatePages('/PBJP LEVEL 1/Materi 4 JK Melakukan Pemilihan Penyedia PBJP Level 1/Modul 4 JK Melakukan Pemilihan Penyedia PBJP Level 1', 84) 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP LEVEL 1/Materi 4 JK Melakukan Pemilihan Penyedia PBJP Level 1/Slide 4 JK Melakukan Pemilihan Penyedia PBJP Level 1', 52) 
          },
          { 
            format: 'Mind Map', 
            pages: generatePages('/PBJP LEVEL 1/Materi 4 JK Melakukan Pemilihan Penyedia PBJP Level 1/Mind Map 4 JK Melakukan Pemilihan Penyedia PBJP Level 1', 24) 
          },
          { 
            format: 'Suplemen', 
            pages: generatePages('/PBJP LEVEL 1/Materi 4 JK Melakukan Pemilihan Penyedia PBJP Level 1/Suplemen Modul 4 JK Melakukan Pemilihan Penyedia PBJP Level 1', 24) 
          },
        ]
      },
      { 
        id: 'l1-m5', 
        title: 'Materi 5 JK Mengelola Kontrak PBJP Level 1', 
        resources: [
          { 
            format: 'Modul', 
            pages: generatePages('/PBJP LEVEL 1/Materi 5 JK Mengelola Kontrak PBJP Level 1/Modul 5 JK Mengelola Kontrak PBJP Level 1', 61) 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP LEVEL 1/Materi 5 JK Mengelola Kontrak PBJP Level 1/Slide 5 JK Mengelola Kontrak PBJP Level 1', 47) 
          },
          { 
            format: 'Mind Map', 
            pages: generatePages('/PBJP LEVEL 1/Materi 5 JK Mengelola Kontrak PBJP Level 1/Mind Map 5 JK Mengelola Kontrak PBJP Level 1', 6) 
          },
          { 
            format: 'Suplemen', 
            pages: generatePages('/PBJP LEVEL 1/Materi 5 JK Mengelola Kontrak PBJP Level 1/Suplemen Modul 5 JK Mengelola Kontrak PBJP Level 1', 15) 
          },
        ]
      },
      { 
        id: 'l1-m6', 
        title: 'Materi 6 JK Mengelola PBJP secara Swakelola Level 1', 
        resources: [
          { 
            format: 'Modul', 
            pages: generatePages('/PBJP LEVEL 1/Materi 6 JK Mengelola PBJP secara Swakelola Level 1/Modul 6 JK Mengelola PBJP secara Swakelola Level 1', 65) 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP LEVEL 1/Materi 6 JK Mengelola PBJP secara Swakelola Level 1/Slide 6 JK Mengelola PBJP secara Swakelola Level 1', 43) 
          },
          { 
            format: 'Mind Map', 
            pages: generatePages('/PBJP LEVEL 1/Materi 6 JK Mengelola PBJP secara Swakelola Level 1/Mind Map 6 JK Mengelola PBJP Secara Swakelola Level 1', 9) 
          },
          { 
            format: 'Suplemen', 
            pages: generatePages('/PBJP LEVEL 1/Materi 6 JK Mengelola PBJP secara Swakelola Level 1/Suplemen Modul 6 JK Mengelola PBJP secara Swakelola Level 1', 17) 
          },
        ]
      },
                  { 
        id: 'l1-m5', 
        title: 'Materi 5 JK Mengelola Kontrak PBJP Level 1', 
        resources: [
          { 
            format: 'Modul', 
            pages: generatePages('/PBJP LEVEL 1/Materi 5 JK Mengelola Kontrak PBJP Level 1/Modul 5 JK Mengelola Kontrak PBJP Level 1', 61) 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP LEVEL 1/Materi 5 JK Mengelola Kontrak PBJP Level 1/Slide 5 JK Mengelola Kontrak PBJP Level 1', 47) 
          },
          { 
            format: 'Mind Map', 
            pages: generatePages('/PBJP LEVEL 1/Materi 5 JK Mengelola Kontrak PBJP Level 1/Mind Map 5 JK Mengelola Kontrak PBJP Level 1', 6) 
          },
          { 
            format: 'Suplemen', 
            pages: generatePages('/PBJP LEVEL 1/Materi 5 JK Mengelola Kontrak PBJP Level 1/Suplemen Modul 5 JK Mengelola Kontrak PBJP Level 1', 15) 
          },
        ]
      },
      { 
        id: 'l1-m7', 
        title: 'Materi Tambahan (Pengembangan Kurikulum)', 
        resources: [
          { 
            format: 'Anti Korupsi dalam Pelaksanaan PBJP', 
            pages: generatePages('/PBJP LEVEL 1/Materi Tambahan (Pengembangan Kurikulum)/Anti Korupsi dalam Pelaksanaan PBJP', 16) 
          },
          { 
            format: 'Materi Anti Narkoba', 
            pages: generatePages('/PBJP LEVEL 1/Materi Tambahan (Pengembangan Kurikulum)/Materi Anti Narkoba', 16) 
          },
        ]
      },
    ]
  },
  {
    id: 'ppk-b',
    title: 'PPK Tipe B',
    description: 'Pelatihan Kompetensi Pejabat Pembuat Komitmen Tipe B',
    icon: GraduationCap,
    gradient: 'from-emerald-600 to-teal-700',
    topics: [
      { 
        id: 'b-m1', 
        title: 'Materi 1: Perencanaan PBJP Level 3', 
        resources: [
          { 
            format: 'Modul', 
            pages: generatePages('/PBJP Untuk PPK TIPE B/Materi 1 JK Melakukan Perencanaan PBJP Level 3/Modul 1 JK Melakukan Perencanaan PBJP Level 3', 279) 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP Untuk PPK TIPE B/Materi 1 JK Melakukan Perencanaan PBJP Level 3/Slide 1 JK Melakukan Perencanaan PBJP Level 3', 67) 
          }
        ] 
      },
      { 
        id: 'b-m2', 
        title: 'Materi 2: Mengelola Kontrak PBJP Level 3', 
        resources: [
          { 
            format: 'Modul', 
            pages: generatePages('/PBJP Untuk PPK TIPE B/Materi 2 JK Mengelola Kontrak PBJP Level 3/Modul 2 JK Mengelola Kontrak PBJ Level 3', 246) 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP Untuk PPK TIPE B/Materi 2 JK Mengelola Kontrak PBJP Level 3/Slide 2 JK Mengelola Kontrak PBJ Level 3', 72) 
          }
        ] 
      },
      { 
        id: 'b-m3', 
        title: 'Materi 3: Mengelola PBJP secara Swakelola Level 3', 
        resources: [
          { 
            format: 'Modul', 
            pages: generatePages('/PBJP Untuk PPK TIPE B/Materi 3 JK Mengelola PBJP secara Swakelola Level 3/Modul 3 JK Mengelola PBJP secara Swakelola Level 3', 144) 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP Untuk PPK TIPE B/Materi 3 JK Mengelola PBJP secara Swakelola Level 3/Slide 3 JK Mengelola PBJP secara Swakelola Level 3', 50) 
          }
        ] 
      }
    ]
  },
  {
    id: 'ppk-c',
    title: 'PPK Tipe C',
    description: 'Pelatihan Kompetensi Pejabat Pembuat Komitmen Tipe C',
    icon: FileText,
    gradient: 'from-violet-600 to-purple-700',
    topics: [
      { 
        id: 'c-m1', 
        title: 'Materi 1: Perencanaan PBJP Level 2', 
        resources: [
          { 
            format: 'Modul', 
            pages: generatePages('/PBJP Untuk PPK TIPE C/Materi 1 JK Melakukan Perencanaan PBJP Level 2/Modul 1 JK Melakukan Perencanaan PBJP Level 2', 174) 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP Untuk PPK TIPE C/Materi 1 JK Melakukan Perencanaan PBJP Level 2/Slide 1 JK Melakukan Perencanaan PBJP Level 2', 34) 
          },
          { 
            format: 'Suplemen', 
            pages: generatePages('/PBJP Untuk PPK TIPE C/Materi 1 JK Melakukan Perencanaan PBJP Level 2/Suplemen Modul 1 JK Perencanaan PBJP Level 2', 13) 
          }
        ] 
      },
      { 
        id: 'c-m2', 
        title: 'Materi 2: Mengelola Kontrak PBJP Level 2', 
        resources: [
          { 
            format: 'Modul', 
            pages: generatePages('/PBJP Untuk PPK TIPE C/Materi 2 JK Mengelola Kontrak PBJP Level 2/Modul 2 JK Mengelola Kontrak PBJP Level 2', 175) 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP Untuk PPK TIPE C/Materi 2 JK Mengelola Kontrak PBJP Level 2/Slide 2 JK Mengelola Kontrak PBJ level 2', 63) 
          },
          { 
            format: 'Suplemen', 
            pages: generatePages('/PBJP Untuk PPK TIPE C/Materi 2 JK Mengelola Kontrak PBJP Level 2/Suplemen Modul 2 Mengelola Kontrak PBJP Level 2', 10) 
          }
        ] 
      },
      { 
        id: 'c-m3', 
        title: 'Materi 3: Mengelola PBJP secara Swakelola Level 2', 
        resources: [
          { 
            format: 'Modul', 
            pages: generatePages('/PBJP Untuk PPK TIPE C/Materi 3 JK Mengelola PBJP secara Swakelola Level 2/Modul 3 JK Mengelola PBJP secara Swakelola Level 2', 95) 
          },
          { 
            format: 'Slide', 
            pages: generatePages('/PBJP Untuk PPK TIPE C/Materi 3 JK Mengelola PBJP secara Swakelola Level 2/Slide 3 JK Mengelola PBJP secara Swakelola Level 2', 61) 
          },
          { 
            format: 'Suplemen', 
            pages: generatePages('/PBJP Untuk PPK TIPE C/Materi 3 JK Mengelola PBJP secara Swakelola Level 2/Suplemen Modul 3 JK Mengelola PBJP secara Swakelola Level 2', 18) 
          }
        ] 
      }
    ]
  },
  {
    id: 'perpres',
    title: 'Peraturan Presiden',
    description: 'Kumpulan regulasi resmi PBJP',
    icon: Gavel,
    gradient: 'from-amber-600 to-orange-700',
    topics: [
      { 
        id: 'p-46-2025', 
        title: 'Konsolidasi Perpres No. 46 Tahun 2025', 
        directResource: { 
          format: 'Direct', 
          pages: generatePages('/PERATURAN PRESIDEN/Konsolidasi Peraturan Presiden Nomor 46 Tahun 2025', 84) 
        } 
      },
      { 
        id: 'p-12-2021', 
        title: 'Peraturan Presiden No. 12 Tahun 2021', 
        directResource: { 
          format: 'Direct', 
          pages: generatePages('/PERATURAN PRESIDEN/Peraturan Presiden Nomor 12 Tahun 2021', 48) 
        } 
      },
      { 
        id: 'p-16-2018', 
        title: 'Peraturan Presiden No. 16 Tahun 2018', 
        directResource: { 
          format: 'Direct', 
          pages: generatePages('/PERATURAN PRESIDEN/Peraturan Presiden Nomor 16 Tahun 2018', 48) 
        }
      }
    ]
  },
  {
    id: 'video-elearning',
    title: 'Video E-Learning',
    description: 'Panduan video interaktif e-learning',
    icon: PlayCircle,
    gradient: 'from-rose-600 to-red-700',
    topics: [
      { id: 'v-1', title: 'Panduan E-Learning PPK Tipe B', directResource: { format: 'Video', videoUrl: '/Video/PANDUAN ELEARNING PPK TIPE B/PEMBELAJARAN ELEARNING PPK TIPE B.mp4' } },
      { id: 'v-2', title: 'Panduan E-Learning PPK Tipe C', directResource: { format: 'Video', videoUrl: '/Video/PANDUAN ELEARNING PPK TIPE C/PEMBELAJARAN ELEARNING PPK TIPE C.mp4' } },
      { id: 'v-3', title: 'Pembelajaran E-Learning PBJ LEVEL 1', directResource: { format: 'Video', videoUrl: '/Video/PEMBELAJARAN ELEARNING PBJ LEVEL1/Pembelajaran elearning PBJ Level1.mp4' } }
    ]
  }
];

export const LATEST_MATERIALS = [
  {
    id: '1',
    title: 'Modul Perencanaan PBJP Level 1',
    category: 'PBJP Level 1',
    type: 'PDF',
    size: '2.5MB',
    updatedAt: '12 Feb 2025',
    viewUrl: '#',
    downloadUrl: '#'
  }
];

export const CONTACT_INFO = {
  whatsapp: 'https://wa.me/+6281276860382',
  phone: '+62 812-7686-0382',
  email: 'info@lppgurindam.com',
  address: 'Tanjungpinang, Kepulauan Riau, Indonesia'
};
