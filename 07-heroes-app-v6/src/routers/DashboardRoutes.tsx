import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { DcPage } from '../components/dc/DcPage';
import { MarvelPage } from '../components/marvel/MarvelPage';
import { SearchPage } from '../components/search/SearchPage';
import { HeroPage } from '../heroes/HeroPage';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />
          <Route path="/hero/:heroId" element={<HeroPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<MarvelPage />} />
        </Routes>
      </div>
    </>
  );
};
