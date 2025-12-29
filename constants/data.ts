
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
  { value: '30+', label: 'Video Pembelajaran' },
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
      // Folder untuk PBJ Level 1
      {
        id: 'pbjp-l1-videos',
        title: 'Video Pembelajaran PBJ Level 1',
        isFolder: true,
        subTopics: [
          {
            id: 'v-2',
            title: 'Panduan E-Learning PPBJ Level 1',
            directResource: {
              format: 'Video',
              driveId: '1ZyKwVinAxuK5-eGE6ifWzfmN-GeK-L4v'
            }
          },
          {
            id: 'v-pbjp-1',
            title: 'Materi 1 Pengantar Manajemen Rantai Pasok',
            directResource: {
              format: 'Video',
              driveId: '1LoBfezqd12By9YuEDRs-yNTVxn7U2suo' 
            }
          },
          {
            id: 'v-pbjp-2',
            title: 'Materi 2 Pengantar Pengadaan Barang dan Jasa Pemerintah PART 1',
            directResource: {
              format: 'Video',
              driveId: '1r5gh9LuFdDv0Xca8b92CxDpC4lr61t_-' 
            }
          },
          {
            id: 'v-pbjp-3',
            title: 'Materi 2 Pengantar Pengadaan Barang dan Jasa Pemerintah PART 2',
            directResource: {
              format: 'Video',
              driveId: '13XDSB7Fcclw8RzFmXv47dq-_EL15hLGi' 
            }
          },
          {
            id: 'v-pbjp-4',
            title: 'Materi 2 Pengantar Pengadaan Barang dan Jasa Pemerintah PART 3',
            directResource: {
              format: 'Video',
              driveId: '1eMBy4MV_RUurr2e4BFkobPcrehjPrOhN' 
            }
          },
          {
            id: 'v-pbjp-5',
            title: 'Materi 2 Pengantar Pengadaan Barang dan Jasa Pemerintah PART 4',
            directResource: {
              format: 'Video',
              driveId: '12McZXwEC9HYpm13pUtxLkTvVj8n0cXEt' 
            }
          },
          {
            id: 'v-pbjp-6',
            title: 'Materi 3 Perencanaan Pengadaan Barang dan Jasa Pemerintah PART 1',
            directResource: {
              format: 'Video',
              driveId: '1pA9w2h_apgjeiQqPIsCCr6DixF3zYAYo' 
            }
          },
          {
            id: 'v-pbjp-7',
            title: 'Materi 3 Perencanaan Pengadaan Barang dan Jasa Pemerintah PART 2',
            directResource: {
              format: 'Video',
              driveId: '1W_g2WDwX07TGhnAcQdByZ235XX0zV120' 
            }
          },
          {
            id: 'v-pbjp-8',
            title: 'Materi 3 Perencanaan Pengadaan Barang dan Jasa Pemerintah PART 3',
            directResource: {
              format: 'Video',
              driveId: '1BeguLDbkQcfVRNJSJk6ZXGtOPiX4NWR6' 
            }
          },
          {
            id: 'v-pbjp-9',
            title: 'Materi 4 Pemilihan Penyedia Barang dan Jasa Pemerintah PART 1',
            directResource: {
              format: 'Video',
              driveId: '1QT867GM-WhvPBy-HrMbWYrK0uL6Wq7ZO' 
            }
          },
          {
            id: 'v-pbjp-10',
            title: 'Materi 4 Pemilihan Penyedia Barang dan Jasa Pemerintah PART 2',
            directResource: {
              format: 'Video',
              driveId: '1PL4DrtuvIF7TWjx9gjB5GMdiUj2DzTIK' 
            }
          },
          {
            id: 'v-pbjp-11',
            title: 'Materi 4 Pemilihan Penyedia Barang dan Jasa Pemerintah PART 3',
            directResource: {
              format: 'Video',
              driveId: '1DfRoIK824HZCyFF7OoSKqeyGeh1nTWge' 
            }
          },
          {
            id: 'v-pbjp-12',
            title: 'Materi 5 Pengelolaan Kontrak Pengadaan Barang dan Jasa Pemerintah PART 1',
            directResource: {
              format: 'Video',
              driveId: '1OHhF1fEPuROPyUTiHPAVTBzmNatWgtZq' 
            }
          },
          {
            id: 'v-pbjp-13',
            title: 'Materi 5 Pengelolaan Kontrak Pengadaan Barang dan Jasa Pemerintah PART 2',
            directResource: {
              format: 'Video',
              driveId: '1O3BHP04IgCcLrovgpTtILVTUf_jUqczQ' 
            }
          },
          {
            id: 'v-pbjp-14',
            title: 'Materi 6 Pengelolaan Pengadaan Barang dan Jasa Pemerintah Secara Swakelola PART 1',
            directResource: {
              format: 'Video',
              driveId: '10xiGjnwygLKCUB8NPNoqCGWM-M8CHEAe' 
            }
          },
          {
            id: 'v-pbjp-15',
            title: 'Materi 6 Pengelolaan Pengadaan Barang dan Jasa Pemerintah Secara Swakelola PART 2',
            directResource: {
              format: 'Video',
              driveId: '1qus_yORi-iVcducx8L2lQibyJwoH9BMt' 
            }
          },   
          
        ]
      },
      // Folder untuk PPK Tipe C
      {
        id: 'ppk-c-videos',
        title: 'Video Pembelajaran PPK Tipe C',
        isFolder: true,
        subTopics: [
          {
            id: 'v-3',
            title: 'Panduan E-Learning PPK Tipe C',
            directResource: {
              format: 'Video',
              driveId: '1X_2_WXhkavcX28yIep3-wOO4XXngyiSX'
            }
          },
          {
            id: 'v-ppk-c-1',
            title: 'Materi 1 Jenis Kompetensi Melakukan Perencanaan Pengadaan Barang dan Jasa Pemerintah Level 2 PART 1',
            directResource: {
              format: 'Video',
              driveId: '1C9_W_yWVIa8ZM2LxNkOfHsU0AdnOx1Sj' 
            }
          },
                    {
            id: 'v-ppk-c-2',
            title: 'Materi 1 Jenis Kompetensi Melakukan Perencanaan Pengadaan Barang dan Jasa Pemerintah Level 2 PART 2',
            directResource: {
              format: 'Video',
              driveId: '1EOQX3mpmHd-oZ_e5xpr-5TsWA2iW0JKS' 
            }
          },
          {
            id: 'v-ppk-c-3',
            title: 'Materi 1 Jenis Kompetensi Melakukan Perencanaan Pengadaan Barang dan Jasa Pemerintah Level 2 PART 3',
            directResource: {
              format: 'Video',
              driveId: '15e1jrLOF6trtKtrk2jKEgxb9BrhJwvkf' 
            }
          },
          {
            id: 'v-ppk-c-4',
            title: 'Materi 2 Jenis Kompetensi Mengelola Kontrak Pengadaan Barang dan Jasa Pemerintah Level 2 PART 1',
            directResource: {
              format: 'Video',
              driveId: '1lLXWHYOrXbgn3IZzq5OIZsOqjbpvMbh1' 
            }
          },
          {
            id: 'v-ppk-c-5',
            title: 'Materi 2 Jenis Kompetensi Mengelola Kontrak Pengadaan Barang dan Jasa Pemerintah Level 2 PART 2',
            directResource: {
              format: 'Video',
              driveId: '12NXjyL66qUdCmUsKYqD2UsyMKc443l4i' 
            }
          },
          {
            id: 'v-ppk-c-6',
            title: 'Materi 2 Jenis Kompetensi Mengelola Kontrak Pengadaan Barang dan Jasa Pemerintah Level 2 PART 3',
            directResource: {
              format: 'Video',
              driveId: '1JYdE9tlhhBsg_1kc4jc0BhknffWsNRBx' 
            }
          },
          {
            id: 'v-ppk-c-7',
            title: 'Materi 2 Jenis Kompetensi Mengelola Kontrak Pengadaan Barang dan Jasa Pemerintah Level 2 PART 4',
            directResource: {
              format: 'Video',
              driveId: '14kXx5th1R5lmhBJWWZGQpS40QzCzFbV-' 
            }
          },
          {
            id: 'v-ppk-c-8',
            title: 'Materi 3 Jenis Kompetisi Mengelola Kontrak Pengadaan Barang dan Jasa Pemerintah Level 2 part 1',
            directResource: {
              format: 'Video',
              driveId: '1c_bKFwgfLrXmFmUjGuTbbH5Pddxu8WNz' 
            }
          },
          {
            id: 'v-ppk-c-9',
            title: 'Materi 3 Jenis Kompetisi Mengelola Kontrak Pengadaan Barang dan Jasa Pemerintah Level 2 part 2',
            directResource: {
              format: 'Video',
              driveId: '1FtOLh4IqrEx4g9mbLZKHJe4UgJnDPjl0' 
            }
          },
          {
            id: 'v-ppk-c-10',
            title: 'Materi 3 Jenis Kompetisi Mengelola Kontrak Pengadaan Barang dan Jasa Pemerintah Level 2 part 3',
            directResource: {
              format: 'Video',
              driveId: '16G0N2s4-AwaVEWJH3fEuLOhZsyxHjGnd' 
            }
          },
          {
            id: 'v-ppk-c-11',
            title: 'Materi 3 Jenis Kompetisi Mengelola Kontrak Pengadaan Barang dan Jasa Pemerintah Level 2 part 4',
            directResource: {
              format: 'Video',
              driveId: '151IwPP6XhQfgcVIGrXOf5T4LrOLJJVnE' 
            }
          },
          {
            id: 'v-ppk-c-12',
            title: 'Materi 3 Jenis Kompetisi Mengelola Kontrak Pengadaan Barang dan Jasa Pemerintah Level 2 part 5',
            directResource: {
              format: 'Video',
              driveId: '18tWngnnHfZ5gwJdA2oIvZJbiK-Pqk7bf' 
            }
          }

        ]
      },
      // Folder untuk PPK Tipe B
      {
        id: 'ppk-b-videos',
        title: 'Video Pembelajaran PPK Tipe B',
        isFolder: true,
        subTopics: [
          {
            id: 'v-1',
            title: 'Panduan E-Learning PPK Tipe B',
            directResource: {
              format: 'Video',
              driveId: '1FpLHYgBaCb0MNxKMQsHntYgNwUwET0pY'
            }
          },
          {
            id: 'v-ppk-b-1',
            title: 'Materi 1 JK Melakukan Perencanaan PBJP Level 3 PART 1',
            directResource: {
              format: 'Video',
              driveId: '1FVSrf7S7eo_rVB9xQOfaBGm_qP4l3pNr'
            }
          },
          {
            id: 'v-ppk-b-2',
            title: 'Materi 1 JK Melakukan Perencanaan PBJP Level 3 PART 2',
            directResource: {
              format: 'Video',
              driveId: '1n8PAA2VsYEt6fVziTk1qXJQVyObl7_Q3'
            }
          },
          {
            id: 'v-ppk-b-3',
            title: 'Materi 1 JK Melakukan Perencanaan PBJP Level 3 PART 3',
            directResource: {
              format: 'Video',
              driveId: '1Z54NBKaYp364IC7MqskPobSfoU2UWB1n'
            }
          },
          {
            id: 'v-ppk-b-4',
            title: 'Materi 2 JK Melakukan Perencanaan PBJP Level 3 PART 1',
            directResource: {
              format: 'Video',
              driveId: '1GSCp5XqlxeGVyq-H3prgXVtSJZ0EmZI2'
            }
          },
          {
            id: 'v-ppk-b-5',
            title: 'Materi 2 JK Melakukan Perencanaan PBJP Level 3 PART 2',
            directResource: {
              format: 'Video',
              driveId: '1EI69kRu_wPTj1wt7ttuRUOHrX_nKwlhP'
            }
          },
          {
            id: 'v-ppk-b-6',
            title: 'Materi 2 JK Melakukan Perencanaan PBJP Level 3 PART 3',
            directResource: {
              format: 'Video',
              driveId: '1QargPnq7oxyo2r1aXoCDH6RTxL18H6u1'
            }
          },
          {
            id: 'v-ppk-b-7',
            title: 'Materi 3 JK Melakukan Perencanaan PBJP Level 3 PART 1',
            directResource: {
              format: 'Video',
              driveId: '1OYp6IBe7SP6l8rQ2s3W6epolTKaMNu5J'
            }
          },
          {
            id: 'v-ppk-b-8',
            title: 'Materi 3 JK Melakukan Perencanaan PBJP Level 3 PART 2',
            directResource: {
              format: 'Video',
              driveId: '1A8a6BTQ1vhzGaI9IyqYKFfxsbLXCp-b9'
            }
          }
        ]
      }
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
