import React, { useEffect, useState } from 'react';

const empty = { name: '', url: '', description: '', tags: [] };

const AddBookmarkModal = ({ open, onClose, onSave, categories }) => {
  const [form, setForm] = useState(empty);
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    if (open) {
      setForm(empty);
      setTagInput('');
    }
  }, [open]);

  if (!open) return null;

  const addTag = () => {
    const t = tagInput.trim();
    if (!t) return;
    if (!form.tags.includes(t)) setForm({ ...form, tags: [...form.tags, t] });
    setTagInput('');
  };

  const removeTag = (t) => setForm({ ...form, tags: form.tags.filter((x) => x !== t) });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.url) return;
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold">Add Bookmark</h3>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Website Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full h-11 px-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              placeholder="e.g. Flames"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Website URL</label>
            <input
              type="url"
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              className="w-full h-11 px-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              placeholder="https://example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full min-h-[88px] p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              placeholder="Optional notes about this site"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tag / Category</label>
            <div className="flex gap-2">
              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addTag();
                  }
                }}
                className="flex-1 h-11 px-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                placeholder="Add a tag and press Enter"
              />
              <button type="button" onClick={addTag} className="h-11 px-4 rounded-xl bg-slate-900 text-white">
                Add
              </button>
            </div>
            {form.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {form.tags.map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 px-3 h-8 rounded-full bg-blue-50 text-blue-700 text-sm">
                    {t}
                    <button type="button" onClick={() => removeTag(t)} className="text-blue-700/70 hover:text-blue-900">×</button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="h-11 px-4 rounded-xl border border-slate-200">Cancel</button>
            <button type="submit" className="h-11 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookmarkModal;
