import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx';
import CamperDetailsPage from '../pages/CamperDetailsPage/CamperDetailsPage.jsx';
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CamperDetailsPage />} />
        <Route path="favourites" element={<FavouritesPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;