import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Image from '@/components/Image';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('admin@cice.news');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const from = (location.state as any)?.from?.pathname || '/admin';

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await login(email, password);
      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setError(result.error || 'Authentication failed');
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setEmail('admin@cice.news');
    setPassword('admin123');
    setLoading(true);
    const result = await login('admin@cice.news', 'admin123');
    if (result.success) {
      navigate(from, { replace: true });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header / Logo */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center z-10">
        <Link to="/en" className="inline-block mb-3">
          <div className="relative h-16 w-56 mx-auto">
            <Image
              src="/cice-news-logo.webp"
              alt="CICE News"
              fill
              className="object-contain filter drop-shadow-md brightness-110"
            />
          </div>
        </Link>
        <h2 className="text-2xl font-bold font-serif-heading text-white tracking-tight">
          CICE News Admin Panel
        </h2>
        <p className="mt-1 text-xs text-slate-400">
          Secure editorial and administrative portal
        </p>
      </div>

      {/* Login Card */}
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md z-10 px-4">
        <div className="bg-slate-800/90 backdrop-blur-md py-8 px-6 sm:px-8 shadow-2xl rounded-xl border border-slate-700/80">
          {error && (
            <div className="mb-5 p-3.5 bg-red-950/50 border border-red-800/80 text-red-200 rounded-lg text-xs flex items-center gap-2.5 animate-slide-up">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Email Address
              </label>
              <div className="relative rounded-lg shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@cice.news"
                  className="block w-full pl-9 pr-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-xs placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium text-slate-300">
                  Password
                </label>
                <span className="text-[11px] text-amber-400/90 font-mono">default: admin123</span>
              </div>
              <div className="relative rounded-lg shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-9 pr-10 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-white text-xs placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 cursor-pointer"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center text-xs text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-3.5 h-3.5 rounded border-slate-700 bg-slate-900 text-amber-500 focus:ring-amber-500"
                />
                <span className="ml-2">Remember this session</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 border border-transparent rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors cursor-pointer shadow-md disabled:opacity-50"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Login Option */}
          <div className="mt-5 pt-5 border-t border-slate-700/80 text-center">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full py-2 px-3 bg-slate-700/60 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg transition-colors border border-slate-600/70 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>1-Click Demo Login</span>
            </button>
            <p className="text-[11px] text-slate-400 mt-2">
              Prefills administrator credentials and grants immediate access
            </p>
          </div>
        </div>

        {/* Back to public site */}
        <div className="mt-4 text-center">
          <Link
            to="/en"
            className="text-xs text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
          >
            <span>← Return to Public Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
