import { Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Navigation from './components/layouts/Navigation';
import Footer from './components/layouts/Footer';
import Layout from './components/Layout';
import Public from './pages/Public';
import About from './pages/About';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <div className="App min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="about" element={<About />} />
          <Route path="notfound" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
