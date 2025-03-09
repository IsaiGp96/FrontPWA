import './App.css'
import Home from './components/Home'
import useHeaderGif from './hooks/useHeaderGift';
import mainBanner from './hooks/mainBanner';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const headerGif = useHeaderGif();
  const banner = mainBanner();

  return (
    <div className="relative w-full h-screen">
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
      <div className="relative">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={banner}>
            <Route index element={<Home/>}/>
            <Route path='wiki' element={'#'}/>
            <Route path='estadisticas' element={'#'}/>
            <Route path='acerca' element={'#'}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
