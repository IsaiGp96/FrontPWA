import './App.css'
import Home from './components/Home'
import Acercade from './components/Acercade';
import useHeaderGif from './hooks/useHeaderGift';
import mainBanner from './hooks/mainBanner';
import { Routes, Route } from 'react-router-dom';
import Wiki from './components/Wiki';
import Estadisticas from './components/Estadisticas';

function App() {
  const headerGif = useHeaderGif();
  const banner = mainBanner();

  return (
    <div className="w-full h-full">
      {/* Fondo global con la imagen GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${headerGif})`,
          opacity: 0.5,
          transform: "rotate(180deg)",
        }}
      ></div>
      {/* Contenido principal */}
      <div className="w-full relative">
        {banner}
        <Routes>
          <Route index element={<Home />} />
          <Route path='/wiki' element={<Wiki />} />
          <Route path='/estadisticas' element={<Estadisticas />} />
          <Route path='/acerca' element={<Acercade />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
