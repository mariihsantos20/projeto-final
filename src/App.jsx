import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ProductListingPage = lazy(() => import('./pages/ProductListingPage.jsx'));
const ProductViewPage = lazy(() => import('./pages/ProductViewPage.jsx'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="text-center mt-10">Carregando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/produto/:id" element={<ProductViewPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;