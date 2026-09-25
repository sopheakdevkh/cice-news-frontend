import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#0C195A] mb-4">
        404
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[#0C195A] hover:bg-[#08103c] text-white px-6 py-2.5 text-xs font-semibold tracking-wider transition-colors"
      >
        GO BACK HOME
      </Link>
    </div>
  );
}
