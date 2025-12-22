
import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Stats from './components/Stats';
import { MAIN_CATEGORIES, CONTACT_INFO } from './constants/data';
import { Category, TopicItem, ResourceData, ContentFormat } from './types';
import { 
  ChevronRight, 
  ArrowLeft, 
  ChevronLeft, 
  Book, 
  Layout, 
  FilePlus, 
  Download, 
  FolderOpen,
  Play,
  PlayCircle,
  Map,
  FileText
} from 'lucide-react';

const App: React.FC = () => {
  // Navigation State
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeFolder, setActiveFolder] = useState<TopicItem | null>(null);
  const [activeTopic, setActiveTopic] = useState<TopicItem | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceData | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // --- ROUTING LOGIC ---
  
  // Fungsi untuk mengupdate URL Hash berdasarkan state saat ini
  const updateUrl = (cat: Category | null, folder: TopicItem | null, topic: TopicItem | null, res: ResourceData | null) => {
    let hash = '';
    if (cat) {
      hash = `/${cat.id}`;
      if (topic && folder) {
        // Folder structure: category/folder/topic/format
        hash += `/${folder.id}/${topic.id}`;
        if (res) hash += `/${res.format}`;
      } else if (topic && !folder) {
        // Direct topic structure: category/topic/format
        hash += `/${topic.id}`;
        if (res) hash += `/${res.format}`;
      } else if (folder) {
        // Just category and folder selected
        hash += `/${folder.id}`;
      }
    }
    window.location.hash = hash;
  };

  // Sync state dari URL saat pertama kali load atau saat URL berubah (back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (!hash) {
        setActiveCategory(null);
        setActiveFolder(null);
        setActiveTopic(null);
        setSelectedResource(null);
        setSlideIndex(0); // Reset slide index when clearing selection
        return;
      }

      const parts = hash.split('/');
      const catId = parts[0];
      const folderId = parts[1];
      const topicId = parts[2];
      const format = parts[3];

      const cat = MAIN_CATEGORIES.find(c => c.id === catId);
      if (cat) {
        setActiveCategory(cat);

        // Check if the second part (folderId) corresponds to a folder in the category
        const folder = cat.topics.find(t => t.isFolder && t.id === folderId);

        if (folder) {
          // Handle folder structure: category/folder/topic/format
          setActiveFolder(folder);

          if (topicId) {
            const topic = folder.subTopics?.find(st => st.id === topicId);
            if (topic) {
              setActiveTopic(topic);

              if (format) {
                // Look for resource with matching format
                const resource = topic.resources?.find(r => r.format === format) || topic.directResource;
                if (resource) {
                  setSelectedResource(resource);
                  setSlideIndex(0); // Reset to first slide when selecting a resource
                }
              }
            }
          }
        } else {
          // Handle direct topic structure: category/topic/format
          const topic = cat.topics.find(t => !t.isFolder && t.id === folderId);
          if (topic) {
            setActiveTopic(topic);

            if (topicId) { // In this case, topicId is actually the format
              const resource = topic.resources?.find(r => r.format === topicId) || topic.directResource;
              if (resource) {
                setSelectedResource(resource);
                setSlideIndex(0); // Reset to first slide when selecting a resource
              }
            }
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run once on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // --- ACTIONS ---

  const handleCategoryClick = (cat: Category) => {
    updateUrl(cat, null, null, null);
  };

  const handleTopicClick = (topic: TopicItem) => {
    if (topic.isFolder) {
      updateUrl(activeCategory, topic, null, null);
    } else if (topic.directResource) {
      updateUrl(activeCategory, activeFolder, topic, topic.directResource);
    } else {
      // If topic has resources, navigate to resource selection view
      updateUrl(activeCategory, activeFolder, topic, null);
    }
  };

  const selectFormat = (res: ResourceData) => {
    updateUrl(activeCategory, activeFolder, activeTopic, res);
    setSelectedResource(res);
    setSlideIndex(0); // Reset to first slide when selecting a new format
  };

  const goBack = () => {
    if (selectedResource) {
      if (activeFolder) {
        // If we're in a folder, go back to topic selection
        updateUrl(activeCategory, activeFolder, activeTopic, null);
      } else {
        // If we're in a direct topic, go back to topic selection
        updateUrl(activeCategory, null, activeTopic, null);
      }
      setSelectedResource(null);
      setSlideIndex(0);
    } else if (activeTopic) {
      if (activeFolder) {
        // If we're in a topic inside a folder, go back to folder
        updateUrl(activeCategory, activeFolder, null, null);
      } else {
        // If we're in a direct topic, go back to category
        updateUrl(activeCategory, null, null, null);
      }
      setActiveTopic(null);
    } else if (activeFolder) {
      // If we're in a folder, go back to category
      updateUrl(activeCategory, null, null, null);
      setActiveFolder(null);
    } else if (activeCategory) {
      // If we're in a category, go back to home
      updateUrl(null, null, null, null);
      setActiveCategory(null);
    }
  };

  // Helper determine topics
  const displayTopics = useMemo(() => {
    if (activeFolder) return activeFolder.subTopics || [];
    if (activeCategory) return activeCategory.topics || [];
    return [];
  }, [activeCategory, activeFolder]);

  const totalPages = useMemo(() => {
    if (!selectedResource) return 0;
    return selectedResource.pages?.length || 0;
  }, [selectedResource]);

  const getFormatIcon = (format: ContentFormat) => {
    switch(format) {
      case 'Modul': return <Book className="w-6 h-6" />;
      case 'Slide': return <Layout className="w-6 h-6" />;
      case 'Mind Map': return <Map className="w-6 h-6" />;
      case 'Suplemen': return <FilePlus className="w-6 h-6" />;
      case 'Video': return <Play className="w-6 h-6" />;
      default: return <FileText className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      
      <main className="flex-1 mt-16">
        {!activeCategory && (
          <>
            <Hero />
            <Stats />
          </>
        )}

        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          {/* Breadcrumbs */}
          {activeCategory && (
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <button onClick={() => updateUrl(null, null, null, null)} className="hover:text-primary-600 transition-colors">Beranda</button>
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <button onClick={() => updateUrl(activeCategory, null, null, null)} className={`hover:text-primary-600 ${!activeFolder && !activeTopic && !selectedResource ? 'font-bold text-primary-600' : ''}`}>
                {activeCategory.title}
              </button>
              {activeFolder && (
                <>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                  <button onClick={() => updateUrl(activeCategory, activeFolder, null, null)} className={`hover:text-primary-600 ${!activeTopic && !selectedResource ? 'font-bold text-primary-600' : ''}`}>
                    {activeFolder.title}
                  </button>
                </>
              )}
              {activeTopic && (
                <>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                  <button onClick={() => updateUrl(activeCategory, activeFolder, activeTopic, null)} className={`font-bold text-primary-600 truncate max-w-[200px] ${!selectedResource ? 'font-bold text-primary-600' : ''}`}>
                    {activeTopic.title}
                  </button>
                </>
              )}
            </nav>
          )}

          {/* VIEW 1: Main Grid */}
          {!activeCategory && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Portal Pembelajaran Utama</h2>
                <p className="text-lg text-gray-600">Pilih kategori materi untuk memulai perjalanan belajar Anda</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {MAIN_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat)}
                    className="group bg-white rounded-3xl border border-gray-100 p-6 text-left hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cat.gradient} opacity-5 -translate-y-8 translate-x-8 rounded-full`}></div>
                    <div className={`w-14 h-14 bg-gradient-to-br ${cat.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <cat.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">{cat.title}</h3>
                    <p className="text-sm text-gray-500 mb-6 line-clamp-2">{cat.description}</p>
                    <div className="flex items-center text-primary-600 text-sm font-bold">
                      <span>Lihat Materi</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 2: Topic Selection */}
          {activeCategory && !activeTopic && !selectedResource && (
            <div className="animate-fade-in">
              <div className="flex items-center space-x-4 mb-10">
                <button onClick={goBack} className="p-3 hover:bg-white rounded-2xl border border-transparent hover:border-gray-200 transition-all shadow-sm">
                  <ArrowLeft className="w-6 h-6 text-gray-600" />
                </button>
                <h2 className="text-3xl font-bold text-gray-900">{activeFolder ? activeFolder.title : activeCategory.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleTopicClick(topic)}
                    className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary-400 hover:shadow-xl transition-all group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${topic.isFolder ? 'bg-amber-50 text-amber-600' : 'bg-primary-50 text-primary-600'} group-hover:scale-110 transition-transform`}>
                        {topic.isFolder ? <FolderOpen className="w-6 h-6" /> : (activeCategory.id === 'video-elearning' ? <Play className="w-6 h-6" /> : <FileText className="w-6 h-6" />)}
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900 leading-snug">{topic.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{topic.isFolder ? 'Folder Materi' : 'Materi Terstruktur'}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary-500 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 3: Format Selection */}
          {activeTopic && !selectedResource && !activeTopic.isFolder && (
            <div className="animate-fade-in">
              <div className="flex items-center space-x-4 mb-10">
                <button onClick={goBack} className="p-3 hover:bg-white rounded-2xl border border-gray-200 transition-all shadow-sm">
                  <ArrowLeft className="w-6 h-6 text-gray-600" />
                </button>
                <div>
                   <h2 className="text-2xl font-bold text-gray-900">{activeTopic.title}</h2>
                   <p className="text-gray-500 text-sm">Pilih format materi yang ingin Anda akses</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {activeTopic.resources?.map((res, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectFormat(res)}
                    className="bg-white p-8 rounded-3xl border border-gray-100 text-left hover:border-primary-500 hover:shadow-2xl transition-all group"
                  >
                    <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                      {getFormatIcon(res.format)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{res.format}</h3>
                    <p className="text-sm text-gray-500 mb-4">Akses {res.format.toLowerCase()} untuk pemahaman materi lebih mendalam.</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 4: Viewer */}
          {selectedResource && (
            <div className="animate-fade-in max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <button onClick={goBack} className="p-3 hover:bg-white rounded-2xl border border-gray-200 shadow-sm transition-all">
                    <ArrowLeft className="w-6 h-6 text-gray-600" />
                  </button>
                  <h2 className="text-xl font-bold text-gray-900">
                    {activeTopic?.title} - {selectedResource.format !== 'Direct' && selectedResource.format !== 'Video' ? selectedResource.format : ''}
                  </h2>
                </div>
              </div>

              {selectedResource.format === 'Video' ? (
                <div className="bg-black rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video border-8 border-slate-900">
                  <video controls className="w-full h-full" src={selectedResource.videoUrl}>
                    Browser Anda tidak mendukung video.
                  </video>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl border-8 border-slate-900 group">
                    {selectedResource.pages && (
                      <>
                        <img 
                          src={selectedResource.pages[slideIndex]} 
                          alt="Slide Content"
                          className="w-full h-full object-contain select-none"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center p-6">
                          <button 
                            disabled={slideIndex === 0}
                            onClick={() => setSlideIndex(prev => Math.max(0, prev - 1))}
                            className="p-4 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full transition-all disabled:opacity-0 shadow-lg"
                          >
                            <ChevronLeft className="w-8 h-8" />
                          </button>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center p-6">
                          <button 
                            disabled={slideIndex === totalPages - 1}
                            onClick={() => setSlideIndex(prev => Math.min(totalPages - 1, prev + 1))}
                            className="p-4 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full transition-all disabled:opacity-0 shadow-lg"
                          >
                            <ChevronRight className="w-8 h-8" />
                          </button>
                        </div>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                           <div className="bg-black/50 backdrop-blur-md px-4 py-1 rounded-full text-white text-xs font-bold">
                              {slideIndex + 1} / {totalPages}
                           </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-white rounded-3xl border border-gray-100 shadow-sm gap-4">
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{slideIndex + 1}</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase">Halaman</div>
                      </div>
                      <div className="h-10 w-px bg-gray-100"></div>
                      <div className="text-sm">
                        <div className="text-gray-400 font-medium italic">Navigasi Halaman</div>
                        <div className="font-bold text-gray-900">Total {totalPages} Slides</div>
                      </div>
                    </div>
                    <button className="w-full sm:w-auto btn-primary px-8 py-4 flex items-center justify-center space-x-3 shadow-xl shadow-primary-100">
                      <Download className="w-5 h-5" />
                      <span>Download File {selectedResource.format}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

  
      </main>

      <Footer />
    </div>
  );
};

export default App;
