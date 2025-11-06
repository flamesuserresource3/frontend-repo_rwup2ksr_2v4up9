import React from 'react';
import { Menu, Plus, Search, User } from 'lucide-react';

const Header = ({ onToggleSidebar, onOpenAdd, search, setSearch }) => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 active:scale-95 transition"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-inner" />
            <span>Markease</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search bookmarks…"
              className="w-full pl-9 pr-3 h-10 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 bg-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAdd}
            className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:from-blue-500 hover:to-indigo-500 active:scale-95 transition"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Bookmark</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center">
            <User className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
