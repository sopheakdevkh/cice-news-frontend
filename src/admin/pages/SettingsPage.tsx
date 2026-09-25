import React, { useState } from 'react';
import { resetArticlesToDefaults } from '@/lib/dataStore';
import { Settings, Save, RotateCcw, CheckCircle, ShieldAlert } from 'lucide-react';

export default function SettingsPage() {
  const [siteName, setSiteName] = useState('CICE News (Cambodia International Communication Echo)');
  const [tagline, setTagline] = useState('A Media Platform for a More Connected Cambodia');
  const [contactEmail, setContactEmail] = useState('editorial@cice.news');
  const [saved, setSaved] = useState(false);
  const [resetMessage, setResetMessage] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleResetData = () => {
    if (
      window.confirm(
        'Warning: This will reset all stories and modifications back to original initial mock data. Continue?'
      )
    ) {
      resetArticlesToDefaults();
      setResetMessage(true);
      setTimeout(() => setResetMessage(false), 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-slate-900">
          Portal & Newsroom Settings
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Configure site metadata, general contact information, and repository maintenance.
        </p>
      </div>

      {saved && (
        <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-semibold flex items-center gap-2 animate-slide-up">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Settings have been updated successfully!</span>
        </div>
      )}

      {resetMessage && (
        <div className="p-3.5 bg-blue-50 border border-blue-200 text-blue-800 rounded-lg text-xs font-semibold flex items-center gap-2 animate-slide-up">
          <CheckCircle className="w-4 h-4 text-blue-600" />
          <span>Articles database has been reset to original factory mock data.</span>
        </div>
      )}

      {/* General Settings */}
      <form onSubmit={handleSave} className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-2xs space-y-4">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
          General Site Configuration
        </h3>

        <div>
          <label className="block text-[11px] font-semibold text-slate-700 mb-1">
            Site Title & Network Name
          </label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800"
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-700 mb-1">
            Official Portal Tagline
          </label>
          <input
            type="text"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800"
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-700 mb-1">
            Editorial Contact Email
          </label>
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>
        </div>
      </form>

      {/* Danger Zone: Data Reset */}
      <div className="bg-red-50/60 p-6 rounded-xl border border-red-200 space-y-3">
        <div className="flex items-center gap-2 text-red-900">
          <ShieldAlert className="w-5 h-5 text-red-600" />
          <h3 className="text-xs font-bold uppercase tracking-wider">
            Repository Maintenance & Factory Reset
          </h3>
        </div>
        <p className="text-xs text-red-700 leading-relaxed">
          Restore original seed stories and default mock dataset. Use this if you want to undo any test articles and return the repository to its clean initial state.
        </p>
        <button
          type="button"
          onClick={handleResetData}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-xs transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset All Mock Data to Default</span>
        </button>
      </div>
    </div>
  );
}
