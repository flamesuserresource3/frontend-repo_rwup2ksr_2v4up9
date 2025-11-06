import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AddBookmarkModal from './components/AddBookmarkModal';
import BookmarksGrid from './components/BookmarksGrid';
import Hero from './components/Hero';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState('');
  const [folders, setFolders] = useState(['All']);
  const [activeFolder, setActiveFolder] = useState('All');

  const [bookmarks, setBookmarks] = useState([]);

  const handleSaveBookmark = (data) => {
    const enriched = { ...data, folder: activeFolder, createdAt: Date.now() };
    setBookmarks((prev) => [enriched, ...prev]);
  };

  const createFolder = () => {
    const name = prompt('New folder name');
    if (!name) return;
    if (!folders.includes(name)) setFolders((prev) => [...prev, name]);
  };

  const visible = useMemo(() => {
    return bookmarks.filter((b) => (activeFolder === 'All' ? true : b.folder === activeFolder));
  }, [bookmarks, activeFolder]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <Header
        onToggleSidebar={() => setSidebarOpen((s) => !s)}
        onOpenAdd={() => setShowAdd(true)}
        search={search}
        setSearch={setSearch}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 grid grid-cols-[auto,1fr] gap-6">
        <Sidebar
          open={sidebarOpen}
          onOpenAdd={() => setShowAdd(true)}
          onCreateFolder={createFolder}
          folders={folders}
          onSelectFolder={setActiveFolder}
          activeFolder={activeFolder}
        />

        <main className="min-h-[70vh] pb-16">
          {bookmarks.length === 0 ? (
            <Hero />
          ) : (
            <div className="space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Bookmarks</h2>
                  <p className="text-slate-600">Organized list of your saved websites</p>
                </div>
                <div>
                  <button onClick={() => setShowAdd(true)} className="h-10 px-4 rounded-xl bg-slate-900 text-white">Add</button>
                </div>
              </div>
              <BookmarksGrid items={visible} query={search} />
            </div>
          )}
        </main>
      </div>

      <AddBookmarkModal
        open={showAdd}
        onClose={() => setShowAdd(false)}
        onSave={handleSaveBookmark}
        categories={[]}
      />
    </div>
  );
}

export default App;
