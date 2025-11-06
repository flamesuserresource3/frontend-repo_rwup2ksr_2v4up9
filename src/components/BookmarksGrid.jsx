import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const normalizeFavicon = (url) => {
  try {
    const u = new URL(url);
    return `${u.origin}/favicon.ico`;
  } catch {
    return '/favicon.ico';
  }
};

const BookmarkCard = ({ item }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group relative rounded-2xl border border-slate-200 bg-white p-4 hover:shadow-lg transition overflow-hidden"
    >
      <div className="flex items-start gap-3">
        <img
          src={normalizeFavicon(item.url)}
          alt={item.name}
          className="w-10 h-10 rounded-lg border border-slate-200 object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/favicon.ico';
          }}
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-slate-800 truncate">{item.name}</h4>
          <p className="text-sm text-slate-500 truncate">{item.url}</p>
          {item.tags?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="inline-flex px-2.5 h-7 items-center rounded-full bg-slate-100 text-slate-700 text-xs">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition">
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full rotate-12">
            <defs>
              <path id="curve" d="M10,90 A40,40 0 1,1 90,10" />
            </defs>
            <text fill="#0ea5e9" fontSize="10" letterSpacing="2">
              <textPath href="#curve">CHECK NOW • CHECK NOW •</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <ArrowUpRight className="w-6 h-6 text-sky-500" />
          </div>
        </div>
      </div>
    </a>
  );
};

const BookmarksGrid = ({ items, query }) => {
  const filtered = items.filter((b) => {
    const q = query.toLowerCase();
    return (
      b.name.toLowerCase().includes(q) ||
      b.url.toLowerCase().includes(q) ||
      (b.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {filtered.map((item) => (
        <BookmarkCard key={item.url + item.name} item={item} />
      ))}
    </div>
  );
};

export default BookmarksGrid;
