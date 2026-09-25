import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import ArticlePage from '@/pages/ArticlePage';
import SearchPage from '@/pages/SearchPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ScrollToTop from '@/components/ScrollToTop';

// Admin Imports
import AdminProtectedRoute from '@/admin/components/AdminProtectedRoute';
import AdminLayout from '@/admin/components/AdminLayout';
import LoginPage from '@/admin/pages/LoginPage';
import DashboardPage from '@/admin/pages/DashboardPage';
import ArticlesPage from '@/admin/pages/ArticlesPage';
import ArticleEditPage from '@/admin/pages/ArticleEditPage';
import CategoriesPage from '@/admin/pages/CategoriesPage';
import AdvertisementsPage from '@/admin/pages/AdvertisementsPage';
import SettingsPage from '@/admin/pages/SettingsPage';

export default function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        {/* Root redirect to default public language */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Public Localized routes: /:lang */}
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:slug" element={<CategoryPage />} />
          <Route path="article/:slug" element={<ArticlePage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>

        {/* Admin Authentication Gate */}
        <Route path="/admin/login" element={<LoginPage />} />

        {/* Protected Admin Management Portal */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="articles/new" element={<ArticleEditPage />} />
          <Route path="articles/edit/:id" element={<ArticleEditPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="advertisements" element={<AdvertisementsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
}
