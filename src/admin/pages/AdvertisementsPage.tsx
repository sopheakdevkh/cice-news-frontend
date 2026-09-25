import React, { useState } from 'react';
import BannerAd from '@/components/BannerAd';
import { Megaphone, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AdSlot {
  id: string;
  name: string;
  location: string;
  variant: 'leaderboard' | 'sidebar' | 'promo' | 'ad-city' | 'ad-partner' | 'ad-globe';
  dimensions: string;
  active: boolean;
}

export default function AdvertisementsPage() {
  const [adSlots, setAdSlots] = useState<AdSlot[]>([
    {
      id: 'slot-1',
      name: 'Top Leaderboard Banner',
      location: 'Homepage Header / Top of Feed',
      variant: 'leaderboard',
      dimensions: 'Responsive (728x90 / fluid)',
      active: true,
    },
    {
      id: 'slot-2',
      name: 'Mid-Feed Leaderboard',
      location: 'Homepage Between Hero and Category Showcase',
      variant: 'leaderboard',
      dimensions: 'Responsive (728x90 / fluid)',
      active: true,
    },
    {
      id: 'slot-3',
      name: 'Sidebar Ad: City Skyline',
      location: 'Category & Article Right Sidebar (Top)',
      variant: 'ad-city',
      dimensions: '300x150',
      active: true,
    },
    {
      id: 'slot-4',
      name: 'Sidebar Ad: Business Partner',
      location: 'Category & Article Right Sidebar (Middle)',
      variant: 'ad-partner',
      dimensions: '300x150',
      active: true,
    },
    {
      id: 'slot-5',
      name: 'Sidebar Ad: Global Connectivity',
      location: 'Category & Article Right Sidebar (Bottom)',
      variant: 'ad-globe',
      dimensions: '300x150',
      active: true,
    },
    {
      id: 'slot-6',
      name: 'Full-Width Promo Banner',
      location: 'Chinese Portal Mid-Page',
      variant: 'promo',
      dimensions: 'Full width hero band',
      active: true,
    },
  ]);

  const toggleSlot = (id: string) => {
    setAdSlots(
      adSlots.map((slot) =>
        slot.id === id ? { ...slot, active: !slot.active } : slot
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-slate-900">
          Advertisement Slots Management
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Control active sponsored banner placements and advertising real estate across all pages.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {adSlots.map((slot) => (
          <div
            key={slot.id}
            className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900">{slot.name}</h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                    {slot.dimensions}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{slot.location}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleSlot(slot.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    slot.active
                      ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {slot.active ? '● Slot Active' : '○ Slot Paused'}
                </button>
              </div>
            </div>

            {/* Visual Live Preview of Banner */}
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/70">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                Live Banner Preview
              </span>
              <div className={slot.active ? 'opacity-100' : 'opacity-40 grayscale'}>
                <BannerAd variant={slot.variant} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
