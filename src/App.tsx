
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WebDesign from './pages/WebDesign';
import GraphicDesign from './pages/GraphicDesign';
import DigitalMarketing from './pages/DigitalMarketing';
import Photography from './pages/Photography';
import VideoAnimation from './pages/VideoAnimation';
import AppPortfolio from './pages/AppPortfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="graphic-design" element={<GraphicDesign />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="photography" element={<Photography />} />
          <Route path="video-animation" element={<VideoAnimation />} />
          <Route path="app" element={<AppPortfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
