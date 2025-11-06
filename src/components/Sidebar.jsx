import React from 'react';
import { FolderPlus, FolderOpen, PlusCircle, Search, Grid, LogIn } from 'lucide-react';

const Sidebar = ({ open, onOpenAdd, onCreateFolder, folders, onSelectFolder, activeFolder }) => {
  return (
    <aside
      className="transition-[width] duration-300 ease-in-out border-r border-slate-200 bg-white h-full"
      style={{ width: open ? 280 : 76 }}
    >
      <div className="h-16 flex items-center px-4 border-b border-slate-200">
        <span className="font-semibold text-slate-700">Menu</span>
      </div>
      <nav className="p-3 space-y-2">
        <button
          onClick={onOpenAdd}
          className="w-full flex items-center gap-3 px-3 h-11 rounded-lg hover:bg-slate-50 text-slate-700"
        >
          <PlusCircle className="w-5 h-5 text-blue-600" />
          {open && <span>Add Bookmark</span>}
        </button>
        <button
          className="w-full flex items-center gap-3 px-3 h-11 rounded-lg hover:bg-slate-50 text-slate-700"
        >
          <Search className="w-5 h-5 text-violet-600" />
          {open && <span>Search</span>}
        </button>
        <button
          onClick={onCreateFolder}
          className="w-full flex items-center gap-3 px-3 h-11 rounded-lg hover:bg-slate-50 text-slate-700"
        >
          <FolderPlus className="w-5 h-5 text-emerald-600" />
          {open && <span>Create New Folder</span>}
        </button>
        <div className="pt-2">
          <div className="flex items-center gap-2 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
            <Grid className="w-3.5 h-3.5" />
            {open && <span>Folders</span>}
          </div>
          <div className="mt-2 space-y-1">
            {folders.length === 0 && (
              <div className="px-3 text-slate-400 text-sm">{open ? 'No folders yet' : ''}</div>
            )}
            {folders.map((f) => (
              <button
                key={f}
                onClick={() => onSelectFolder(f)}
                className={`w-full flex items-center gap-3 px-3 h-10 rounded-lg hover:bg-slate-50 ${
                  activeFolder === f ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
                }`}
              >
                <FolderOpen className="w-5 h-5" />
                {open && <span className="truncate">{f}</span>}
              </button>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t border-slate-200">
          <button className="w-full flex items-center gap-3 px-3 h-11 rounded-lg hover:bg-slate-50 text-slate-700">
            <LogIn className="w-5 h-5" />
            {open && <span>Login with Google</span>}
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
